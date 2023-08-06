const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
transactions: []
}

document.getElementById("button-logout").addEventListener("click", logout)

//ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e){
    e.preventDefault();
})

checkLogged();

function checkLogged() {
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session
    }
    if(!logged) {
        window.location.href = "index.html"
    }
    const detaUser = localStorage.getItem(logged);
    if(dataUser) {
data = JSON.parse(dataUser)
    }

    console.log(data);
    }

    function logout() {
        sessionStorage.removeItem("Logged");
        localStorage.removeItem("session");

        window.location.href = "index.html";
    }