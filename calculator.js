

const App = () => {
    const [getBGcolor, setBGcolor] = React.useState('#eef');
    const [bgThemeName, setBGthemeName] = React.useState('Light Mode');
    const [getCalc, setCalc] = React.useState('');
    
    const digits = [];
    const digitID = ['one','two','three','four','five','six','seven','eight','nine']
    const operation = ['/','*','-','+','.'];

    const themeBtn = document.getElementById('themeBtn');
    const footer = document.getElementById('footer');
    const body = document.querySelector("body");

    const updateCal = (value) => {
        if (operation.includes(value) && getCalc === '' || 
            operation.includes(value) && operation.includes(getCalc.slice(-1)) ||
            value === '0' && getCalc === '0')
        {
            return;
        }
        setCalc(getCalc + value);
    }

    const resultOutput = () => {
        setCalc(eval(getCalc).toString())
    }

    const getDigits = () => {
        for (let i = 1; i <10; i++) {
            digits.push(
                    <button id={digitID[i-1]} onClick={() => updateCal(i.toString())}>{i}</button>
             )
        }
        return digits;
    }

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
            themeChange(footer, {'style': 'color: #131a2; font-weight: bold'})
        }
        else
        {
            setBGcolor('#eef');
            setBGthemeName('Dark Mode')
            themeChange(body, {'style': 'background-color: ' + getBGcolor})
            themeChange(themeBtn, {'style': 'background-color: #eef; color: #131a26'})
            themeChange(footer, {'style': 'color: #eef; font-weight: bold'})
        }
    }

    return (
        <div>
            <div id="calculator">
                <div id="display">
                    { getCalc || "0" }
                </div>

                <div id="operators">
                    <button id = "clear" onClick={() => setCalc('')}>AC</button>

                    <button id = "add" onClick={() => updateCal(operation[3])}>+</button>
                    <button id = "subtract" onClick={() => updateCal(operation[2])}>-</button>
                    <button id = "multiply" onClick={() => updateCal(operation[1])}>*</button>
                    <button id = "divide" onClick={() => updateCal(operation[0])}>/</button>            
                </div>

                <div id="keysDigit">
                    {getDigits()}
                    <button id = "zero" onClick={() => updateCal('0')}>0</button>
                    <button id = "decimal" onClick={() => updateCal(operation[4])}>.</button>
                    <button id = "equals" onClick={resultOutput}>=</button>
                </div>
            
        </div>

        <div id="themeWrapper">
            <button id="themeBtn" onClick={bgChange}>Toggle: {bgThemeName}</button> 
        </div>

        <div id="footer">By <a href="https://github.com/huynhat30">Huy Giang <i class="fa fa-github"></i></a></div>
    </div>
            
         
    )
}

ReactDOM.render(<App />, document.getElementById('app'))