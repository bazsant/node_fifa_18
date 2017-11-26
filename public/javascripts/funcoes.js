function sortear(event, itens) {

    randomizar(50, event, itens);
}

function randomizar(i, event, itens) {
    if (i < 0) return;

    setTimeout(function() {

        var resultado = shuffle(JSON.parse(itens))[0].valor;

        $($(event.parentElement).children('#spNSort')).text(resultado);

        randomizar(--i, event, itens);

    }, 50);
}

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j].valor;
        sourceArray[j].valor = sourceArray[i].valor;
        sourceArray[i].valor = temp;
    }
    return sourceArray;
}