function find(char, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (char == array[i]) {
            count++;
        }
    }
    if (count != 1) {
        alert('So lan xuat hien ky tu ' + char + ' trong mang ' + array + ' la ' + count);
    } else {
        alert('-1');
    }
}

function charAndarray() {
    let text = prompt("Import char");
    let limit = Number(prompt("Import limit array"));
    let textArray, arraynumber = [];
    for (let i = 0; i < limit; i++) {
        textArray = prompt("Import number");
        arraynumber.push(textArray);
    }
    find(text, arraynumber);
}