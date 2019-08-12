function reverse(array) {
    let temp = array[0];
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    alert(array);
}

function arrayNumber() {
    let limit = Number(prompt("Import limit array"));
    let number, arraynumber = [];
    for (let i = 0; i < limit; i++) {
        number = Number(prompt("Import number"));
        arraynumber.push(number);
    }
    reverse(arraynumber);
}