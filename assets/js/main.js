/* Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */



/* Nome del passeggero */
const inputUserName = document.getElementById('username');




/* il numero di chilometri che vuole percorrere */
const inputUserKm = document.getElementById('km');
console.log(inputUserKm); 

/* l'età del passeggero. */
const inputUserAge = document.getElementById('age');
console.log(inputUserAge); 

/* Pulsante genera */
const generaButton = document.getElementById('genera');

generaButton.addEventListener("click", function () {
    const userName = inputUserName.value;
    console.log(userName)

    const userKm = inputUserKm.value;
    console.log(userKm)

    const userAge = inputUserAge.value;
    console.log(userAge)

    const costKm = 0.21;
console.log(costKm);

const ticketPrice = (costKm * userKm).toFixed(2);
console.log("controllo ticketPrice", ticketPrice+"€");


let finalPrice
/* va applicato uno sconto del 20% per i minorenni */
if (userAge < 18) {
    finalPrice = (ticketPrice * 0.8).toFixed(2);
    //console.log(ticketPriceUnder + "€");

} else if (userAge > 65) {
    finalPrice = (ticketPrice * 0.6).toFixed(2);
    //console.log(ticketPriceUnder + "€");

} else {
    finalPrice = ticketPrice;
    //console.log(ticketPriceUnder + "€");
}
console.log("controllo finalPrice", finalPrice + "€");



let discountName 

if (userAge < 18) {
    discountName = "Sconto Minorenne";
    //console.log(ticketPriceUnder + "€");

} else if (userAge > 65) {
    discountName = "Sconto Over 65";
    //console.log(ticketPriceUnder + "€");

} else {
    discountName = "Nessuno Sconto Applicato";
    //console.log(ticketPriceUnder + "€");
}
console.log("controllo sconto applicato", discountName);
document.getElementById('sconto').innerHTML = discountName



const finalTicket = finalPrice
console.log(finalTicket);
document.getElementById('prezzo').innerHTML = finalTicket


const ticketName = userName
document.getElementById('titolare').innerHTML = ticketName

const carrozza = Math.floor(Math.random() *10 )
document.getElementById('carrozza').innerHTML = carrozza

function getRandomIntInclusive(min, max) { min = Math.ceil(10000); max = Math.floor(99999); return Math.floor(Math.random() * (max - min + 1)) + min; } 

const zipCode= getRandomIntInclusive(10000, 99999)
document.getElementById('cp').innerHTML = zipCode




});




/* prezzo del biglietto è definito in base ai km (0.21 € al km) */

