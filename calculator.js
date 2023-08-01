
const KeysDigit = () => {
    const digits = [];
    const digitID = ['one','two','three','four','five','six','seven','eight','nine']

    for (let i = 1; i <10; i++) {
        digits.push(
                <button id={digitID[i-1]}>{i}</button>
         )
    }
    return digits;
}

const App = () => {
    return (
        <div id="calculator">
            <div id="display">
                <span>(0)</span> 0
            </div>

            <div id="operators">
                <button id = "clear">AC</button>

                <button id = "add">+</button>
                <button id = "subtract">-</button>
                <button id = "multiply">*</button>
                <button id = "divide">/</button>            
            </div>

            <div id="keysDigit">
                <KeysDigit />
                <button id = "zero">0</button>
                <button id = "decimal">.</button>
                <button id = "equals">=</button>
            </div>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))