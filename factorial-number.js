function factorialNumber(number) {
    for (let i = (number - 1); i > 0; i--) {
        number = number * i;
    }
    alert(number);
}

function transmit() {
    let value = Number(prompt("Import number"));
    factorialNumber(value);
}