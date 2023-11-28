import React, { useState } from "react";

function App() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value); //this function will take the value wrtitten in text bar and set as in setInput function 
    };

    const handleList = () => {
        if (input) {
            setList([...list, input]);
            setInput("");
        }
    }


    return (
        <div className="App">
            <input type="text" placeholder="Paste your link" onChange={handleInputChange} value={input} />
            <button onClick={handleList}>
                Click Here!
            </button>
            <ol>
                {list.map((input, index) => (
                    <li key={index} >

                        {input}

                    </li>
                ))}
            </ol>

        </div>
    );
}

export default App;




























