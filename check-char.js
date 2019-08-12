function checkNumber(number) {
    if (number / number === 1) {
        alert(true);
    } else {
        alert(false);
    }
}

function check() {
    let value = Number(prompt("Import char"));
    checkNumber(value);
}