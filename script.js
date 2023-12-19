let display = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
let special = ['%', "*", "/", "-", "+", "="]

let output = '';

function calculate(btnValue) {
    if (output === '' && special.includes(btnValue)) {
        return
    }
    else if (btnValue === "=" && output !== "") {
        let result = eval(output.replace("%", "/100"));
        if(Number.isInteger(result)){
           output = result
        }
        else{
            output = result.toFixed(2)
        }
    }
    else if (btnValue === 'Ac') {
        output = '';
    }
    else if (btnValue === 'DEL') {
        output = output.slice(0, -1)
    }
    else {

        output += btnValue
    }

    display.value = output;
}

button.forEach((button => {
    button.addEventListener('click', e => {
        calculate(e.target.innerHTML)
    })
}))


