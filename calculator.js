
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
    const [getBGcolor, setBGcolor] = React.useState('#eef')
    const [bgThemeName, setBGthemeName] = React.useState('Light Mode');
    const themeBtn = document.getElementById('themeBtn');
    const body = document.querySelector("body");

    const themeChange = (elem, elemAttributes) => {
        for(let i in elemAttributes) {
            elem.setAttribute(i, elemAttributes[i]);
            
        }
    }

    const bgChange = () => {
        if ( getBGcolor === '#eef') {
            setBGcolor('#131a26');
            setBGthemeName('Light Mode')
            themeChange(body, {'style': 'background-color: ' + getBGcolor})
            themeChange(themeBtn, {'style': 'background-color: #131a26; color: #eef'})
        }
        else
        {
            setBGcolor('#eef');
            setBGthemeName('Dark Mode')
            themeChange(body, {'style': 'background-color: ' + getBGcolor})
            themeChange(themeBtn, {'style': 'background-color: #eef; color: #131a26'})
        }
    }

    return (
        <div>
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

        <div id="themeWrapper">
            <button id="themeBtn" onClick={bgChange}>Toggle: {bgThemeName}</button> 
        </div>
    </div>
            
         
    )
}

ReactDOM.render(<App />, document.getElementById('app'))