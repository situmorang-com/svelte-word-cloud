<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import cloud from 'd3-cloud';
	import { writable } from 'svelte/store';
	import { initializeApp } from 'firebase/app';
	import {
		getFirestore,
		collection,
		addDoc,
		onSnapshot,
		updateDoc,
		doc,
		deleteDoc,
		getDocs
	} from 'firebase/firestore';
	import badWordsData from './badwords.json';

	// Firebase configuration from environment variables
	const firebaseConfig = {
		apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
		authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
		projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId: import.meta.env.VITE_FIREBASE_APP_ID
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const wordsCollection = collection(db, 'words');

	let words = writable([]);
	let inputWord = '';
	let inputSize = 30;
	let svg;
	let wordPositions = new Map();
	let width, height;
	let newWordSet = new Set(); // Track new words for animation
	let clearTimeoutId;

	const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

	function handleMouseDown() {
		clearTimeoutId = setTimeout(() => {
			clearWords();
		}, 3000);
	}

	function handleMouseUp() {
		clearTimeout(clearTimeoutId);
	}

	async function clearWords() {
		try {
			const snapshot = await getDocs(wordsCollection);
			snapshot.forEach(async (doc) => {
				await deleteDoc(doc.ref);
			});
			words.set([]);
			wordPositions.clear();
			draw([]); // Ensure the DOM is updated by passing an empty array
		} catch (e) {
			console.error('Error clearing words: ', e);
		}
	}

	// Function to add a word to Firestore
	async function addWord() {
		if (inputWord.trim() === '' || inputWord.length > 30) return;
		// Convert word to lowercase to maintain consistency
		const wordText = inputWord.toLowerCase();
		if (badWordsData.badWords.includes(wordText)) {
			// Play a warning sound
			const audio = new Audio('/sounds/sorry-words-not-allowed.mp3'); // Replace with actual path to the sound file
			audio.play();
			inputWord = '';
			return;
		}

		let existingWordId = null;
		let existingWordSize = 0;

		// Check if the word already exists in the store
		words.update((currentWords) => {
			const wordIndex = currentWords.findIndex((w) => w.text === wordText);
			if (wordIndex !== -1) {
				// Word exists, accumulate size
				existingWordId = currentWords[wordIndex].id;
				existingWordSize = Math.min(currentWords[wordIndex].size + parseInt(inputSize), 150); // Cap size at 150px
				currentWords[wordIndex].size = existingWordSize;
			} else {
				// Word does not exist, add it to the store
				const newWord = {
					text: wordText,
					size: Math.min(parseInt(inputSize), 150), // Cap size at 150px
					x: (Math.random() - 0.5) * 100,
					y: (Math.random() - 0.5) * 100
				};
				currentWords.push(newWord);
			}
			return currentWords;
		});

		if (existingWordId) {
			// Update the existing word in Firestore
			try {
				await updateDoc(doc(db, 'words', existingWordId), {
					size: existingWordSize
				});
			} catch (e) {
				console.error('Error updating document: ', e);
			}
		} else {
			// Add a new word to Firestore
			const newWord = {
				text: wordText,
				size: Math.min(parseInt(inputSize), 150), // Cap size at 150px
				x: (Math.random() - 0.5) * 100,
				y: (Math.random() - 0.5) * 100
			};

			try {
				await addDoc(wordsCollection, newWord);
			} catch (e) {
				console.error('Error adding document: ', e);
			}
		}

		inputWord = '';
		inputSize = parseInt(inputSize);
	}

	onMount(() => {
		width = window.innerWidth;
		height = window.innerHeight;

		svg = d3
			.select('#wordcloud')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${width / 2}, ${height / 2})`);

		// Listen for real-time updates from Firestore
		onSnapshot(wordsCollection, (snapshot) => {
			const wordArray = [];
			snapshot.forEach((doc) => {
				const data = doc.data();
				wordArray.push({ ...data, id: doc.id });
			});

			// Set word positions to ensure they are displayed properly
			wordArray.forEach((word) => {
				if (!wordPositions.has(word.text)) {
					wordPositions.set(word.text, { x: word.x, y: word.y });
				}
			});

			words.set(wordArray);
			draw(wordArray); // Ensure the DOM is updated properly after clearing
		});

		// Add resize event listener
		const handleResize = () => {
			// Update dimensions
			width = window.innerWidth;
			height = window.innerHeight;

			// Update SVG dimensions
			svg
				.attr('width', width)
				.attr('height', height)
				.attr('transform', `translate(${width / 2}, ${height / 2})`);

			// Recalculate word positions
			const currentWords = [];
			words.subscribe((data) => currentWords.push(...data))();

			// Clear word positions and recalculate
			wordPositions.clear();
			const recalculatedWords = currentWords.map((word) => {
				return {
					...word,
					x: Math.random() * (width - 100) - width / 2, // Adjust random placement to stay within width
					y: Math.random() * (height - 100) - height / 2 // Adjust random placement to stay within height
				};
			});

			// Update the store and redraw
			words.set(recalculatedWords);
			draw(recalculatedWords);
		};

		window.addEventListener('resize', handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};

		words.subscribe((currentWords) => {
			if (currentWords.length > 0) {
				draw(currentWords);
			}
		});
	});

	function checkOverlap(bbox1, bbox2) {
		const padding = 10;
		return !(
			bbox1.right + padding <= bbox2.left ||
			bbox1.left - padding >= bbox2.right ||
			bbox1.bottom + padding <= bbox2.top ||
			bbox1.top - padding >= bbox2.bottom
		);
	}

	function keepInBounds(pos, wordWidth, wordHeight) {
		const halfWidth = wordWidth / 2;
		const halfHeight = wordHeight / 2;
		const margin = 10;

		// Ensure words stay within the bounds of the browser
		const maxX = width / 2 - halfWidth - margin;
		const minX = -width / 2 + halfWidth + margin;
		const maxY = height / 2 - halfHeight - margin;
		const minY = -height / 2 + halfHeight + margin;

		return {
			x: Math.min(Math.max(pos.x, minX), maxX),
			y: Math.min(Math.max(pos.y, minY), maxY)
		};
	}

	function draw(wordData) {
		const wordsWithPositions = wordData.map((d) => {
			const remembered = wordPositions.get(d.text);
			return {
				...d,
				x: remembered ? remembered.x : (Math.random() - 0.5) * width,
				y: remembered ? remembered.y : (Math.random() - 0.5) * height
			};
		});

		const boundingBoxes = new Map();
		wordData.forEach((word) => {
			const tempText = svg
				.append('text')
				.style('font-size', `${word.size}px`)
				.style('font-family', 'Impact')
				.text(word.text);
			const bbox = tempText.node().getBBox();
			tempText.remove();
			boundingBoxes.set(word.text, bbox);
		});

		// Resolve overlaps
		for (let i = 0; i < wordData.length; i++) {
			const word = wordData[i];
			const bbox = boundingBoxes.get(word.text);
			let pos = wordPositions.get(word.text) || { x: word.x, y: word.y };
			let moved = true;
			let iterations = 0;
			const maxIterations = 50;

			while (moved && iterations < maxIterations) {
				moved = false;
				iterations++;

				const currentBounds = {
					left: pos.x - bbox.width / 2,
					right: pos.x + bbox.width / 2,
					top: pos.y - bbox.height / 2,
					bottom: pos.y + bbox.height / 2
				};

				for (let j = 0; j < wordData.length; j++) {
					if (i !== j) {
						const otherWord = wordData[j];
						const otherPos = wordPositions.get(otherWord.text) || {
							x: otherWord.x,
							y: otherWord.y
						};
						const otherBBox = boundingBoxes.get(otherWord.text);

						const otherBounds = {
							left: otherPos.x - otherBBox.width / 2,
							right: otherPos.x + otherBBox.width / 2,
							top: otherPos.y - otherBBox.height / 2,
							bottom: otherPos.y + otherBBox.height / 2
						};

						if (checkOverlap(currentBounds, otherBounds)) {
							const pushDistance = 15; // Push words apart
							const dx = pos.x - otherPos.x || Math.random() - 0.5;
							const dy = pos.y - otherPos.y || Math.random() - 0.5;
							const distance = Math.sqrt(dx * dx + dy * dy) || 1;

							const moveX = (dx / distance) * pushDistance;
							const moveY = (dy / distance) * pushDistance;

							pos.x += moveX;
							pos.y += moveY;

							pos = keepInBounds(pos, bbox.width, bbox.height);
							moved = true;
						}
					}
				}
			}

			wordPositions.set(word.text, pos);
		}

		// Render words with animations
		const textSelection = svg.selectAll('text').data(wordData, (d) => d.text);

		textSelection.exit().remove();

		// Add new words with entrance animation
		const newWords = textSelection
			.enter()
			.append('text')
			.style('font-size', (d) => `${d.size}px`)
			.style('fill', (d) => colorScale(d.text))
			.style('font-family', 'Impact')
			.attr('text-anchor', 'middle')
			.attr('transform', (d) => {
				const pos = wordPositions.get(d.text);
				return `translate(${pos.x}, ${pos.y})`;
			})
			.text((d) => d.text)
			.on('end', function (d) {
				// Pulsate effect after positioning
				d3.select(this)
					.transition()
					.duration(500) // Pulsate out
					.attr('transform', (d) => {
						const pos = wordPositions.get(d.text);
						return `translate(${pos.x}, ${pos.y}) scale(1.2)`;
					})
					.transition()
					.duration(500) // Pulsate back
					.attr('transform', (d) => {
						const pos = wordPositions.get(d.text);
						return `translate(${pos.x}, ${pos.y}) scale(1)`;
					});
			});

		// Update all elements with smoother transitions
		textSelection
			.merge(newWords)
			.transition()
			.duration(750)
			.style('font-size', (d) => `${d.size}px`)
			.attr('transform', (d) => {
				const pos = wordPositions.get(d.text);
				return `translate(${pos.x}, ${pos.y})`;
			})
			.style('fill', (d) => colorScale(d.text));
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			addWord();
		}
	}
</script>

<div class="form-container">
	<input
		type="text"
		bind:value={inputWord}
		placeholder="Enter word"
		on:keypress={handleKeyPress}
		maxlength="30"
		style="border: 1px solid #d3d3d3; background: rgba(255, 255, 255, 0.5); border-radius: 5px;"
	/>
	<!-- <input type="number" bind:value={inputSize} min="10" max="200" on:keypress={handleKeyPress} /> -->
	<button
		on:click={addWord}
		on:mousedown={handleMouseDown}
		on:mouseup={handleMouseUp}
		style="background: rgba(0, 0, 0, 0.5); color: white;  border-radius: 5px; padding: 5px 10px; cursor: pointer;"
		>Add</button
	>
</div>

<div id="wordcloud"></div>

<style>
	@keyframes blink-blue {
		0% {
			border-color: lightblue;
			box-shadow: 0 0 8px lightblue; /* Add a glowing effect */
		}
		50% {
			border-color: darkblue;
			box-shadow: 0 0 16px darkblue; /* Increase glow intensity */
		}
		100% {
			border-color: lightblue;
			box-shadow: 0 0 8px lightblue; /* Return to the original glow */
		}
	}

	input:focus {
		outline: none; /* Remove default focus outline */
		border: 3px solid lightblue; /* Make the border thicker */
		animation: blink-blue 3s infinite; /* Shorten animation duration */
	}
	#wordcloud {
		border: 1px solid #ccc;
		width: 100vw;
		height: 100vh;
	}

	.form-container {
		position: absolute;
		top: 10px;
		left: 10px;
		background: rgba(255, 255, 255, 0.8);
		padding: 10px;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
</style>
