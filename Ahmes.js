function CalcolaAhmes() {
    let numero1 = InserisciNumero1();
    let numero2 = InserisciNumero2();

    if (numero1 == " ") {
        document.getElementById("passaggi") = "inserisci un numero valido";
        document.getElementById("risultato") = "";
    }
    else {
        if (numero2 == " ") {
            document.getElementById("passaggi") = "inserisci un numero valido";
            document.getElementById("risultato") = "";
        }
        else {
            let risultato = CalcolaRisultato(numero1, numero2);

            let StampaRisultato = "il risultato finale è " + risultato;
            document.getElementById("risultato").innerHTML = StampaRisultato;
        }

    }
}

function InserisciNumero1() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    return numero1;
}

function InserisciNumero2() {
    let numero2 = parseInt(document.getElementById("numero2").value);
    return numero2;
}

function CalcolaRisultato(numero1, numero2) {
    let resto = 0, passaggio = 0, StampaHtml = "";

    while (numero1 > 0) {
        passaggio++;

        if (numero1 % 2 == 0) {
            StampaHtml += passaggio + ") passaggio visto che " + numero1 + " è pari allora --> (" + numero1 + "/ 2) * (2 *" + numero2 + ")";
            numero1 = numero1 / 2;
            numero2 = numero2 * 2;
        }
        else {
            if (resto == 0)
                StampaHtml += passaggio + ") passaggio visto che " + numero1 + " è dispari allora --> (" + numero1 + "- 1) * (" + numero2 + " + " + numero2 + ")";

            else {
                StampaHtml += passaggio + ") passaggio visto che " + numero1 + " è dispari allora --> (" + numero1 + "- 1) * (" + numero2 + " + " + resto + ")";
            }

            numero1--;
            resto += numero2;
        }

        StampaHtml += "<br>";
    }

    let risultato = resto;

    StampaHtml += "<br>";

    if (passaggio == 1)
        StampaHtml += "il calcolo è stato fatto in " + passaggio + " passaggio";
    else
        StampaHtml += "il calcolo è stato fatto in " + passaggio + " passaggi";

    StampaHtml += "<br>"
    StampaHtml += "<br>"

    document.getElementById("passaggi").innerHTML = StampaHtml;

    return risultato;
}