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

        // recupero elemento tasto logout 
        let logoutButton = document.getElementById("logOutButton");
        //lo mostro 
        logoutButton.style.display = "inline";
    }
    else {
        loggedIn = false;
        let form = document.getElementById("myForm");
        form.style.display = "none";

        //rendo il button che apre la login abilitato
        let button = document.getElementById("openLoginForm");
        button.disabled = loggedIn; //disabilitato = false => abilitato

        //recupero il button di logout e lo nascondo
        let logoutButton = document.getElementById("logOutButton");
        logoutButton.style.display = "none";
    }
}


//-------------------------------------------------
//Per fare logout
function logOut() {

    //ripulire il localstorage
    localStorage.clear();

    loggedIn = false;

    //recuperare la form e mostrarla di nuovo 
    let form = document.getElementById("myForm");
    form.style.display = "none";

    //abilitare il tasto 'Effettua login'
    let openFormButton = document.getElementById("openLoginForm");
    openFormButton.disabled = loggedIn; //disabilitato = false
    openFormButton.style.opacity = 0.7;

    //recuperare e nascondere tasto logout
    let logoutButton = document.getElementById("logOutButton");
    logoutButton.style.display = "none";

}

//Settare la minima data di prenotazione a quella di oggi
function setMinDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    let element = document.getElementById("checkInDate");
    element.setAttribute("min", today);
}

//Recuperare info sulla stanza
function getRoomInfo() {
    //recuperare elementi selezionati (<input type="checkbox" />)
    let checkBoxes = document.querySelectorAll("input[type='checkbox']");

    //recuperaro elementi con classe price (ovvero i td con il prezzo)
    let priceData = document.querySelectorAll("td.price");

    let bill = 0.0;

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            bill += parseInt(priceData[i].innerHTML)
        }
    }

    if (bill != 0.0)
        localStorage.setItem("bill", bill);
    else {
        alert("Non hai selezionato nessuna stanza!");
        let bookingButtons = document.getElementsByClassName("vaiAPrenotazione");
        for (let i = 0; i < bookingButtons.length; i++) {
            bookingButtons[i].setAttribute("href", "CamereHotel.html"); //cambio l'attributo href, mettendo come 'destinazione'
            //la pagina delle camere stessa
        }
    }
}

function showBill() {
    let element = document.getElementById("bill");
    let bill = localStorage.getItem("bill");
    element.innerHTML = "Totale: " + bill;
}