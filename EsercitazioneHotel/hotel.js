
function welcome() {
    let username = localStorage.getItem("username");

    if (username != null)
        alert("Benvenuto " + username);
    else {
        alert("Benvenuto!")
    }
}

function openForm() {
    let form = document.getElementById("myForm")
    form.style.display = "block";
}

function closeForm() {
    let form = document.getElementById("myForm")
    form.style.display = "none";
}