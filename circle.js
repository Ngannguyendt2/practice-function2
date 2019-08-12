function perimeter(radius, Pi) {
    let circle = radius * 2 * Pi;
    alert('Perimeter is ' + circle);
}

function areaCircle(radius, Pi) {
    let area = radius * radius * Pi;
    alert('Area is ' + area);
}

function callfunction() {
    let pi = 3.14;
    let radiusCircle = Number(prompt("Import radius"));
    perimeter(radiusCircle, pi);
    areaCircle(radiusCircle, pi);
}