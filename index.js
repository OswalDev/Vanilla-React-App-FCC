import React from "react";

const page = (

    <div>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
        <h1 className="title">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
);

ReactDOM.render(
 page,
 document.getElementById("root").append(JSON.stringify(page))
 ); 