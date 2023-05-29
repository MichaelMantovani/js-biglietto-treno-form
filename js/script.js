console.log('JS OK')



/* OPERAZIONI PRELIMINARI */


/* Stabilisco tariffe di prezzo e sconti per età */

// Percentuale di sconto per minorenni
const discountUnderage = 20;

// Percentuale di sconto per over65
const discountSenior = 40;

// Soglie di età
const adultAge = 18;
const seniorAge= 65;

// Prezzo al km
const kmPrice = 0.21; 




//  Recupero elementi dal DOM

// Chiedo all'utente il suo nome e lo salvo
const userName = document.getElementById('user-name').value.trim();
console.log(userName);

// Chiedo all'utente il suo cognome e lo salvo
const userSurname = document.getElementById('user-surname').value.trim();
console.log(userSurname);

// Chiedo all'utente quanti km vuole percorrere e li salvo 
const userTravelDistance = parseInt(document.getElementById('user-travel-distance').value);
console.log(userTravelDistance);

// Chiedo all'utente la sua età e la salvo
const userAge = parseInt(document.getElementById('user-age').value);
console.log(userAge);


