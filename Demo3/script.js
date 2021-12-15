//int i = 1;
//Book b = new Book();
//...

let i = 1;
i = "uno";

//function miaFunzione(parametri) {
//istruzioni
//}

function miaFunzione() {
    console.log("Var Prima di essere dichiarata: " + a);
    var a = 2;

    console.log("Var dopo essere stata dichiarata: " + a);

    //console.log("Let prima di essere dichiarata: " + b);
    let b = 1;

    console.log("Let dopo essere stata dichiarata: " + b);

    if (a == 2) {
        let c = 3;
        var d = 4;
    }

    console.log(d);
    //console.log(c);
}

function demo1() {
    alert("Hai cliccato un tasto!");
}

function demo2() {
    alert("Benvenut*!");
}

function demo3() {
    //recupero l'elemento html con id sex
    let element = document.getElementById("sex");

    //recupero la option selezionata dall'utente e il testo contenuto
    let option = element.options[element.selectedIndex]
    let text = option.text;

    alert("Hai scelto " + text); //passo a alert la scelta

    //Per recupera il value della option nella select -> value
    //let value = element.value;

    //alternativa
    //let value = document.getElementById("sex").value;
}

function demo4() {
    //recupero l'elemento con id checkboxes 
    //per valutare se è stato selezionato qualcosa
    let elements = document.querySelectorAll('input[type="checkbox"]');

    //mi aspetto di trovare in elements 2 elementi

    var count = 0;
    for (let i = 0; i < elements.length; i++) {
        //se la casella è checkata, incremento il contatore
        if (elements[i].checked)
            count++;
    }

    //Hai selezionato TOT opzioni...
    alert("Hai selezionato " + count + " opzione/i!");
}