function square(number) {
    number = number * number;
    alert('Square is ' + number);
}

function callNumber() {
    let value = Number(prompt("Import number"));
    square(value);
}