function find(number1, number2, number3) {
    let array = [number1, number2, number3];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    alert('Min is ' + min);
}

function importNumber() {
    let value1 = Number(prompt('Import number 1'));
    let value2 = Number(prompt('Import number 2'));
    let value3 = Number(prompt('Import number 3'));
    find(value1, value2, value3);
}