// Assuming you have an existing Svelte project set up, install D3.js using npm
// npm install d3-cloud d3

<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import cloud from 'd3-cloud';
  import { writable } from 'svelte/store';

  let words = writable([]); // Store to hold words dynamically
  let inputWord = "";
  let inputSize = 40;
  let svg, layout;

  // Define a color scale for words
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // Use a categorical color scale for more color variety

  // Add word to the store
  function addWord() {
    words.update((existingWords) => {
      let wordIndex = existingWords.findIndex((w) => w.text === inputWord.toLowerCase());
      if (wordIndex !== -1) {
        existingWords[wordIndex].size += parseInt(inputSize);
      } else {
        existingWords.push({ text: inputWord.toLowerCase(), size: parseInt(inputSize) });
      }
      return existingWords;
    });
    inputWord = "";
    inputSize = 40;
  }

  onMount(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg = d3.select("#wordcloud").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

    words.subscribe((currentWords) => {
      draw(currentWords);
    });
  });

  function draw(wordData) {
    const layout = cloud()
      .size([window.innerWidth, window.innerHeight])
      .words(wordData.map(d => ({ text: d.text, size: d.size })))
      .padding(10)
      .rotate(0)
      .font("Impact")
      .fontSize(d => d.size)
      .on("end", drawWords);

    layout.start();

    function drawWords(words) {
      const textSelection = svg.selectAll("text")
        .data(words, d => d.text);

      // Remove old elements
      textSelection.exit().remove();

      // Add new elements
      const newWords = textSelection.enter()
        .append("text")
        .style("font-size", d => `${d.size}px`)
        .style("fill", d => colorScale(d.text))
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", d => `translate(${d.x}, ${d.y})`)
        .text(d => d.text);

      // Update existing words with smooth transitions
      textSelection.transition()
        .duration(1000)
        .style("font-size", d => `${d.size}px`)
        .attr("transform", function(d) {
          // Adjust position slightly if overlapping
          let x = d.x;
          let y = d.y;
          const overlap = svg.selectAll("text").filter(function(existing) {
            const bbox1 = this.getBBox();
            const bbox2 = d3.select(this).node().getBBox();
            return existing.text !== d.text &&
                   !(bbox1.x + bbox1.width < bbox2.x ||
                     bbox1.x > bbox2.x + bbox2.width ||
                     bbox1.y + bbox1.height < bbox2.y ||
                     bbox1.y > bbox2.y + bbox2.height);
          });
          if (overlap.size() > 0) {
            x += 10; // Slightly shift position to prevent overlap
            y += 10;
          }
          return `translate(${x}, ${y})`;
        })
        .style("fill", d => colorScale(d.text));
    }
  }

  // Handle Enter key press to add word
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
