/* Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */



/* Nome del passeggero */
const userName = document.getElementById('username').value
console.log(userName); 


/* il numero di chilometri che vuole percorrere */
const userKm = document.getElementById('km').value
console.log(userKm); 

/* l'età del passeggero. */
const userAge = document.getElementById('age')
console.log(userAge); 

/* Pulsante genera */
const generaButton = document.getElementById('genera').


/* prezzo del biglietto è definito in base ai km (0.21 € al km) */
const costKm = 0.21
console.log(costKm);

const ticketPrice = (costKm * userKm).toFixed(2);
console.log("controllo ticketPrice", ticketPrice+"€");


generaButton.addEventListener("click", function() {
    ;
  });


let finalPrice
/* va applicato uno sconto del 20% per i minorenni */
if (userAge < 18) {
    finalPrice = (ticketPrice *0.8).toFixed(2);
    //console.log(ticketPriceUnder + "€");
    
} else if (userAge > 65 ) {
    finalPrice = (ticketPrice *0.6).toFixed(2);
    //console.log(ticketPriceUnder + "€");

} else {
    finalPrice = ticketPrice;
    //console.log(ticketPriceUnder + "€");
}
console.log("controllo finalPrice", finalPrice + "€");

const finalTicket = ("Ciao il prezzo del tuo biglietto è " + finalPrice)
console.log(finalTicket);

