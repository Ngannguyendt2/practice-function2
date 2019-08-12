function swap(number1, number2) {
    let temp = 0;
    temp = number1;
    number1 = number2;
    number2 = temp;
    alert('Number 1 is ' + number1 + ' ,number 2 is ' + number2);
}

function inputNumber() {
    let value1 = Number(prompt("Import number1"));
    let value2 = Number(prompt("Import number2"));
    swap(value1, value2);
}