

var km, eta, nome;

function myFunction() {

    document.getElementById("errore").style.display = "none";
    document.getElementById("errore2").style.display = "none";
    document.getElementById("errore3").style.display = "none";
    document.getElementById("errore4").style.display = "none";
    
    nome = document.getElementById("my_name").value;
    document.getElementById("nome").innerHTML = nome;

    km = document.getElementById("my_km").value;

    eta = document.getElementById("myList").value;

    if (nome == "") {
        document.getElementById("errore").style.display = "block";
    }

    if (isNaN(km)) {
        document.getElementById("errore2").style.display = "block";
    } else if ((km < 1) || (km > 100)) {
        document.getElementById("errore3").style.display = "block";
    }

    if (eta == "") {
        document.getElementById("errore4").style.display = "block";
    }

    if ((nome == "") ||  (isNaN(km)) || ((km < 1) || (km > 100)) || (eta == "")) {
        document.getElementById("ticket").style.display = "none";
    } else {
        document.getElementById("ticket").style.display = "block";
    }

    var prezzo = (km * 21)/ 100;

    if (eta == "Minorenne"){
        prezzo = prezzo * 0.8;
        document.getElementById("offerta").innerHTML = "Sconto Minorenne (20%)";
    } else if (eta == "Over 65") {
        prezzo = prezzo * 0.6;
        document.getElementById("offerta").innerHTML = "Sconto Anziani (40%)";
    } else {
        document.getElementById("offerta").innerHTML = "Nessuno Sconto";
    }

    var code = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
    document.getElementById("codice").innerHTML = code;

    var coach = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    document.getElementById("carrozza").innerHTML = coach;

    document.getElementById("costo").innerHTML = prezzo.toFixed(2) + "€";
}


function denyFunction() {
    location.reload();
}