let loggedIn = false;

function openForm() {
    let form = document.getElementById("myForm")
    form.style.display = "block";
}

function closeForm() {
    let form = document.getElementById("myForm")
    form.style.display = "none";
}

function welcome() {

    //se l'utente è loggato:
    if (loggedIn) {
        let username = localStorage.getItem("username");
        alert("Benvenuto " + username);
    }
    else {
        alert("Benvenuto!")
    }
}


//Funzione per salvare i dati nel local storage
function save() {
    let userName = document.getElementById("usernameInput").value; //value -> prende ciò che ha scritto l'utente
    let password = document.getElementById("passwordInput").value;
    localStorage.setItem('username', userName); //salvare username con chiave username e valore ciò che ha scritto l'utente
    localStorage.setItem('password', password);
}


function checkLoggedUser() {
    //recupero dal local storage username e password
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    //se l'utente è loggato:
    if (username != null && password != null) {
        loggedIn = true;

        //recupero e nascondo la form
        let form = document.getElementById("myForm");
        form.style.display = "none";

        //rendo il button che apre la login disabilitato
        let button = document.getElementById("openLoginForm");
        button.disabled = loggedIn; //true
        button.style.opacity = 0.3;
    }
    else {
        loggedIn = false;
        let form = document.getElementById("myForm");
        form.style.display = "none";

        //rendo il button che apre la login abilitato
        let button = document.getElementById("openLoginForm");
        button.disabled = loggedIn; //disabilitato = false => abilitato
    }
}

