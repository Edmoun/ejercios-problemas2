var a = 1 * prompt ("Introduce el valor de (a).");
var b = 1 * prompt ("Introduce el valor de (b).");
var c = 1 * prompt ("Introduce el valor de (c).");

var raiz = (b ** 2) - 4 * (a * c);

if (raiz < 0){
    alert("El resultado es negativo, ingresa otro numero.");
} else if (raiz > 0){
    alert(eqcuad (a , b, raiz));
} else {
    alert("Alguno de los valores introducidos no es un numero.");
}

function eqcuad(a, b, raiz){
    console.log (raiz)
    var x = (b) + (Math.sqrt(raiz)) / (2 * a);
    return x
}
