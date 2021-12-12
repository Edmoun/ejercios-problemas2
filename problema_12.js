var cdigs = function(cantidad, digito){
    var contador = 0;
    for(var i = 0; i < cantidad.length; i++){
        if(cantidad[i] == digito){
            contador++;
        }
    }
    return contador;
}

cdigs(1241, 1);