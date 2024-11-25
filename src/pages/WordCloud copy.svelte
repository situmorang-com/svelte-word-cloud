<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import cloud from "d3-cloud";

    let words = [
        { word: "running", size: 10 },
        { word: "surfing", size: 20 },
        { word: "climbing", size: 50 },
        { word: "kiting", size: 30 },
        { word: "sailing", size: 20 },
        { word: "snowboarding", size: 60 },
    ];

    let inputWord = "";
    let inputSize = 20;
    let svg, layout;

    // Define a color scale for words
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    onMount(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        svg = d3.select("#wordcloud").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        layout = cloud()
            .size([width, height])
            .words(words.map(d => ({ text: d.word, size: d.size })))
            .padding(5)
            .rotate(0) // All words are horizontal
            .fontSize(d => d.size)
            .on("end", draw);

        layout.start();
    });

    function draw(wordData) {
        const textSelection = svg.selectAll("text")
            .data(wordData, d => d.text); // Use word text as a key for transitions

        // Remove old elements
        textSelection.exit().remove();

        // Add new elements
        const newWords = textSelection.enter()
            .append("text")
            .style("font-size", d => `${d.size}px`)
            .style("fill", (d, i) => colorScale(i)) // Assign random color
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", "translate(0,0)") // Start at center for new words
            .text(d => d.text);

        // Transition for new words
        newWords.transition()
            .duration(1000)
            .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`);

        // Update existing words with smooth transitions
        textSelection.transition()
            .duration(1000)
            .style("font-size", d => `${d.size}px`)
            .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`);

        // Add the size in the top-right corner of each word
        newWords.append("tspan")
            .attr("x", 20) // Offset to the right
            .attr("dy", "-1.2em") // Offset upward
            .style("font-size", "12px")
            .style("fill", "gray")
            .text(d => `(${d.size})`);

        textSelection.select("tspan")
            .text(d => `(${d.size})`); // Update size for existing words
    }

    function addWord() {
        if (inputWord.trim() && inputSize > 0) {
            const lowerCaseWord = inputWord.trim().toLowerCase();
            const existingWord = words.find(w => w.word === lowerCaseWord);

            if (existingWord) {
                existingWord.size += inputSize; // Increment size if word exists
            } else {
                words.push({ word: lowerCaseWord, size: inputSize }); // Add new word
            }

            layout.words(words.map(d => ({ text: d.word, size: d.size }))); // Update the layout
            layout.start();

            inputWord = "";
            inputSize = 20; // Reset form inputs
        }
    }
</script>

<div id="wordcloud" style="width: 100vw; height: 100vh; border: 1px solid black; position: relative;"></div>

<div style="position: absolute; top: 10px; left: 10px; background: rgba(255, 255, 255, 0.8); padding: 10px; border-radius: 5px;">
    <form on:submit|preventDefault={addWord}>
        <label>
            Word:
            <input type="text" bind:value={inputWord} placeholder="Enter a word" />
        </label>
        <label>
            Size:
            <input type="number" bind:value={inputSize} min="1" placeholder="Enter size" />
        </label>
        <button type="submit">Add Word</button>
    </form>
</div>

<style>
    body {
        margin: 0;
        overflow: hidden; /* Prevent scrollbars */
    }

    #wordcloud {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
</style>
