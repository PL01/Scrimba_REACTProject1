import React from "react"
import ReactDOM  from "react-dom"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const challenge = (
    <div id="root">
        <h1>Call The Ghostbusters</h1>
        <h4>Written and Illustrated by</h4>
        <h3>Pablo Lara</h3>
        <ul>
            <li>Arc 1: Ready To Believe!</li>
            <li>Arc 2: Neighborhood Shenangians!</li>
            <li>Arc 3: Mysteries & Histories</li>
        </ul>
    </div>
)

console.log(challenge)

ReactDOM.render(challenge, document.getElementById("root"))
// document.getElementById("root").append(challenge)
// This gives us [object Object], a string representation of a JavaScript object