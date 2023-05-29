console.log('JS OK')



/* OPERAZIONI PRELIMINARI */


//  Recupero elemento dal DOM
const userWelcome = document.getElementById('user-name');
const userAgeRange = document.getElementById('user-age');
const userTravelPrice = document.getElementById('travel-price');
const userDiscountTravelPrice = document.getElementById('discount-travel-price');


// Stabilisco tariffe di prezzo e sconti per età

// Percentuale di sconto per maggiorenni
const discountUnderage = 20;

// Percentuale di sconto per over65
const discountSenior = 40;

// Soglie di età
const adultAge = 18;
const seniorAge= 65;

// Prezzo al km
const kmPrice = 0.21; 


// Chiedo all'utent il suo nome e salvo la risposta
const userName = prompt('Come ti chiami?' , 'Fabio');
userWelcome.innerText = userName;
console.log(userName);


// Chiedo all'utente il numero di km che vuole percorrere e salvo la risposta

const userTravelDistance = parseInt(prompt('Quanti km vuoi percorrere?' , ' 20')); 
console.log(userTravelDistance);


// Chiedo all'utente la sua età e salvo la risposta

const userAge = parseInt(prompt('Qunati anni hai?' , '17'));
console.log(userAge);

// Calcolo il costo del viaggio

const travelPrice = userTravelDistance * 0.21;
userTravelPrice.innerText = travelPrice
console.log(travelPrice);


// Applico gli sconti in base all'età

let discountTravelPrice; 
let ageRange = 'minorenne'

if (userAge < 18){
  discountTravelPrice = travelPrice - ((travelPrice * discountUnderage) / 100 )
} else if (userAge >= seniorAge) {
  ageRange = 'un over 65'
  discountTravelPrice = travelPrice - ((travelPrice * discountSenior) / 100)
} else {
  ageRange = 'maggiorenne. Putroppo devi esere un over65 oppure un minorenne per accedere agli sconti'
}

userAgeRange.innerText = ageRange;


// Stampo in console il risultato
console.log (discountTravelPrice.toFixed(2));
userDiscountTravelPrice.innerText = (discountTravelPrice.toFixed(2));



