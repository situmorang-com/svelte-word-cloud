<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    import cloud from 'd3-cloud';
    import { writable } from 'svelte/store';
    import { initializeApp } from 'firebase/app';
    import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

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
    let inputWord = "";
    let inputSize = 40;
    let svg;
    let wordPositions = new Map();
    let width, height;

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Function to add a word to Firestore
    async function addWord() {
        if (inputWord.trim() === "") return;

        const newWord = {
            text: inputWord.toLowerCase(),
            size: parseInt(inputSize),
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100
        };

        try {
            await addDoc(wordsCollection, newWord);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        inputWord = "";
        inputSize = 40;
    }

    onMount(() => {
        width = window.innerWidth;
        height = window.innerHeight;

        svg = d3.select("#wordcloud").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        // Listen for real-time updates from Firestore
        onSnapshot(wordsCollection, (snapshot) => {
            const wordArray = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                wordArray.push({ ...data, id: doc.id });
            });

            // Debugging: Check if data is retrieved
            console.log("Retrieved words from Firestore: ", wordArray);
            words.set(wordArray);
        });

        words.subscribe((currentWords) => {
            if (currentWords.length > 0) {
                console.log("Current words in store: ", currentWords);
                draw(currentWords);
            }
        });
    });

    function draw(wordData) {
        console.log("Drawing words: ", wordData);
        
        const wordsWithPositions = wordData.map(d => {
            const remembered = wordPositions.get(d.text);
            return {
                ...d,
                x: remembered ? remembered.x : d.x || 0,
                y: remembered ? remembered.y : d.y || 0
            };
        });

        const layout = cloud()
            .size([width, height])
            .words(wordsWithPositions)
            .padding(15)
            .rotate(0)
            .font("Impact")
            .fontSize(d => d.size)
            .on("end", drawWords);

        layout.start();

        function drawWords(words) {
            words.forEach(word => {
                wordPositions.set(word.text, { x: word.x, y: word.y });
            });

            const textSelection = svg.selectAll("text")
                .data(words, d => d.text);

            textSelection.exit().remove();

            const newWords = textSelection.enter()
                .append("text")
                .style("font-size", "0px")
                .style("fill", d => colorScale(d.text))
                .attr("text-anchor", "middle")
                .style("font-family", "Impact")
                .attr("transform", d => {
                    const pos = wordPositions.get(d.text);
                    return `translate(${pos.x}, ${pos.y})`;
                })
                .text(d => d.text);

            // Update all elements with smoother transitions
            textSelection.merge(newWords)
                .transition()
                .duration(750)
                .style("font-size", d => `${d.size}px`)
                .attr("transform", d => {
                    const pos = wordPositions.get(d.text);
                    return `translate(${pos.x}, ${pos.y})`;
                })
                .style("fill", d => colorScale(d.text));
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addWord();
        }
    }
</script>

<style>
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

<div class="form-container">
    <input type="text" bind:value={inputWord} placeholder="Enter word" on:keypress={handleKeyPress} />
    <input type="number" bind:value={inputSize} min="10" max="200" on:keypress={handleKeyPress} />
    <button on:click={addWord}>Add Word</button>
</div>

<div id="wordcloud"></div>
