function check(number) {
    let result = false;
    if (number > 0) {
        result = true;
    }
    alert(result);
}

function positiveNumber() {
    let value = Number(prompt("Import number"));
    check(value);
}