const display = document.getElementById('inputBox');
const btn = document.querySelectorAll('button');
const spacel = ['%', "/", "*", "-", "+", '=']

let output = '';
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        const target = btn[i].innerHTML;
        if (display.value === '' && spacel.includes(target)) {
            return;
        }
        else if (target === 'AC') {
            output = '';
        }
        else if (target === "DEL") {
            output = output.slice(0, -1)
        }
        else if (target === "=") {
            const result = eval(output.replace('%', "/100"));
            if (Number.isInteger(result)) {
                output = result;
            }
            else{
               output = result.toFixed(2)
            }
        }
        else {
            output += target;
        }
        display.value = output;
    })
}