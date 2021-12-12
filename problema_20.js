
var n = prompt("Ingrese el número de latas");
var niveles = 0;
var sobrantes = 0;
function triangulo(n) {
    for(var i = 1; i <= n; i++) {
        niveles += i;
    }
    sobrantes = n - niveles;
    console.log("El triángulo tiene " + niveles + " niveles y " + sobrantes + " latas sobrantes");
}
triangulo(n);