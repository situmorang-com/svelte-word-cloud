<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    import cloud from 'd3-cloud';
    import { writable } from 'svelte/store';
  
    let words = writable([]); 
    let inputWord = "";
    let inputSize = 40;
    let svg, layout;
    let wordPositions = new Map();
    let width, height;
    let newWordSet = new Set(); // Track new words for animation
    let updatedWordSet = new Set(); // Track updated words for animation
    
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  
    function addWord() {
      words.update((existingWords) => {
        let wordIndex = existingWords.findIndex((w) => w.text === inputWord.toLowerCase());
        if (wordIndex !== -1) {
          existingWords[wordIndex].size += parseInt(inputSize);
          updatedWordSet.add(inputWord.toLowerCase()); // Mark as updated
        } else {
          existingWords.push({ 
            text: inputWord.toLowerCase(), 
            size: parseInt(inputSize),
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100
          });
          newWordSet.add(inputWord.toLowerCase()); // Mark as new
        }
        return existingWords;
      });
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
  
      words.subscribe((currentWords) => {
        if (currentWords.length > 0) {
          draw(currentWords);
        }
      });
    });
  
    function checkOverlap(bbox1, bbox2) {
      const padding = 10;
      return !(
        bbox1.right + padding < bbox2.left ||
        bbox1.left - padding > bbox2.right ||
        bbox1.bottom + padding < bbox2.top ||
        bbox1.top - padding > bbox2.bottom
      );
    }
  
    function keepInBounds(pos, wordWidth, wordHeight) {
      const halfWidth = wordWidth / 2;
      const halfHeight = wordHeight / 2;
      const margin = 20;
      
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
      const wordsWithPositions = wordData.map(d => {
        const remembered = wordPositions.get(d.text);
        return {
          ...d,
          x: remembered ? remembered.x : d.x || 0,
          y: remembered ? remembered.y : d.y || 0
        };
      });
  
      const boundingBoxes = new Map();
      wordData.forEach(word => {
        const tempText = svg.append("text")
          .style("font-size", `${word.size}px`)
          .style("font-family", "Impact")
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
        const maxIterations = 100;
  
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
              const otherPos = wordPositions.get(otherWord.text) || { x: otherWord.x, y: otherWord.y };
              const otherBBox = boundingBoxes.get(otherWord.text);
              
              const otherBounds = {
                left: otherPos.x - otherBBox.width / 2,
                right: otherPos.x + otherBBox.width / 2,
                top: otherPos.y - otherBBox.height / 2,
                bottom: otherPos.y + otherBBox.height / 2
              };
  
              if (checkOverlap(currentBounds, otherBounds)) {
                const pushX = pos.x - otherPos.x;
                const pushY = pos.y - otherPos.y;
                
                const pushDistance = 5;
                if (pushX === 0 && pushY === 0) {
                  pos.x += (Math.random() - 0.5) * pushDistance;
                  pos.y += (Math.random() - 0.5) * pushDistance;
                } else {
                  const distance = Math.sqrt(pushX * pushX + pushY * pushY);
                  const normalizedX = pushX / distance;
                  const normalizedY = pushY / distance;
                  
                  const force = Math.max(word.size, otherWord.size) / 2;
                  pos.x += normalizedX * force;
                  pos.y += normalizedY * force;
                }
  
                pos = keepInBounds(pos, bbox.width, bbox.height);
                moved = true;
              }
            }
          }
        }
  
        wordPositions.set(word.text, pos);
      }
  
      // Render words with animations
      const textSelection = svg.selectAll("text")
        .data(wordData, d => d.text);
  
      textSelection.exit().remove();
  
      // Add new words with entrance animation
      const newWords = textSelection.enter()
        .append("text")
        .style("font-size", d => `${d.size}px`)
        .style("fill", d => colorScale(d.text))
        .style("font-family", "Impact")
        .attr("text-anchor", "middle")
        .text(d => d.text)
        .attr("transform", d => {
          const pos = wordPositions.get(d.text);
          return `translate(${pos.x}, ${pos.y}) scale(0)`;
        })
        .style("opacity", 0);
  
      // Update all words with different animations for new vs updated words
      const allWords = textSelection.merge(newWords);
      
      allWords.each(function(d) {
        const element = d3.select(this);
        const pos = wordPositions.get(d.text);
        
        if (newWordSet.has(d.text)) {
          // New word animation: fade in and scale up
          element.transition()
            .duration(1000)
            .style("opacity", 1)
            .attr("transform", `translate(${pos.x}, ${pos.y}) scale(1)`)
            .style("font-size", `${d.size}px`)
            .on("end", () => {
              newWordSet.delete(d.text);
            });
        } else if (updatedWordSet.has(d.text)) {
          // Updated word animation: pulse effect
          const currentTransform = `translate(${pos.x}, ${pos.y})`;
          element.transition()
            .duration(200)
            .attr("transform", `${currentTransform} scale(1.2)`)
            .transition()
            .duration(200)
            .attr("transform", `${currentTransform} scale(0.9)`)
            .transition()
            .duration(200)
            .attr("transform", `${currentTransform} scale(1)`)
            .style("font-size", `${d.size}px`)
            .on("end", () => {
              updatedWordSet.delete(d.text);
            });
        } else {
          // Regular position update
          element.transition()
            .duration(750)
            .attr("transform", `translate(${pos.x}, ${pos.y})`)
            .style("font-size", `${d.size}px`);
        }
      });
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