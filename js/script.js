console.log('JS OK')



/* OPERAZIONI PRELIMINARI */


/* Stabilisco tariffe di prezzo e sconti per età */

// Percentuale di sconto per minorenni
const discountUnderage = 0.2;

// Percentuale di sconto per over65
const discountSenior = 0.4;

// Soglie di età
const adultAge = 18;
const seniorAge= 65;

// Prezzo al km
const kmPrice = 0.21; 




//  Recupero elementi dal DOM

const userNameInput = document.getElementById('user-name');
console.log(userNameInput);

const userSurnameInput = document.getElementById('user-surname');
console.log(userSurnameInput);

const userTravelDistanceInput = document.getElementById('user-travel-distance');
console.log(userTravelDistanceInput);

const userAgeInput = document.getElementById('user-age');
console.log(userAgeInput);

const submitButton = document.getElementById('button-submit');
console.log(submitButton);


// Recupero i valori degli input al click del bottone

submitButton.addEventListener('click' , function(){
  
  const userName = userNameInput.value.trim();
  const userSurname = userSurnameInput.value.trim();
  const userTravelDistance = parseInt(userTravelDistanceInput.value);
  const userAge = parseInt(userAgeInput.value);
  console.log(userName , userSurname , userTravelDistance , userAge);

  // Calcolo il prezzo
  const travelPrice = userTravelDistance * kmPrice;
  console.log(travelPrice);

  
  // Applico gli sconti in base alla fascia d'età
  let discountPrice = travelPrice;
  if (userAge < adultAge) {
    discountPrice = travelPrice - (travelPrice * discountUnderage); 
  } else if(userAge >= seniorAge){
    discountPrice = travelPrice - (travelPrice * discountSenior)
  }
  
  console.log(discountPrice);
  
})






