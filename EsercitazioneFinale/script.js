function hideForm() {
    let input = document.getElementById("subscribeForm"); //recupero elemento con id
    input.style.display = "none";

    
    //Recupero il tasto logout e lo faccio comparire
    let unsubscribeButton = document.getElementById('unsubscribeButton');
    unsubscribeButton.style.display = "";
}

function save() {
    let email = document.querySelector("input[type='email']").value;
    localStorage.setItem("email", email);
}

function welcomeMessage() {
    var storedEmail = localStorage.getItem('email'); //Recupera elemento da una chiave
    if (storedEmail === null) {
        alert('Welcome');
    } else {
        alert('Welcome ' + storedEmail.split("@")[0] + '!');
    }
}

function check() {
    var email = localStorage.getItem('email');
    if (email !== null) {
        hideForm();
    }
}

function unsubscribe() {
    
    var unsubscribeButton = document.getElementById('unsubscribeButton');
    if (localStorage.getItem('email') !== null) {

        //Rivisualizzo la form
        let form = document.getElementById('subscribeForm'); //recupero elemento con id loginForm (ovvero l'elemento div nella pagina html)
        form.style.display = '';

        //Facciamo scomparire il pulsante unsubscribeButton
        unsubscribeButton.style.display = "none";

        //Elimina dallo storage i dati dell'utente 
        localStorage.clear(); //cancella tutto quello che c'è nello storage
    }
}

function ableButton() {
    var subscribeInput = document.querySelector("input[type='email']");
    var subscribeButton = document.getElementById('subscribeButton');

    subscribeButton.disabled = ""

    if (subscribeInput.value == "") 
        {
        subscribeButton.disabled = true;
        //oppure button.disabled="disabled"; 
        //=> è disabilitato se il campo non è compilato
            return; //esce se trova un campo non compilato
        }
    
    subscribeButton.disabled = false;
}


