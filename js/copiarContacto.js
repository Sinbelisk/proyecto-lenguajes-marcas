function copiarAlPortapapeles(textoACopiar){
    navigator.clipboard.writeText(textoACopiar);
    alert("Copiado al portapapeles" + "\n" + textoACopiar);
}