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

const userSurnameInput = document.getElementById('user-surname');

const userTravelDistanceInput = document.getElementById('user-travel-distance');

const userAgeInput = document.getElementById('user-age');

const submitButton = document.getElementById('button-submit');

const userNamePlaceholder = document.getElementById('user-name-placeholder');

const ticketTypePlaceholder = document.getElementById('ticket-type-placeholder');

const ticketPricePlaceholder = document.getElementById('ticket-price-placeholder');

const userWagonPlaceholder = document.getElementById('user-wagon-placeholder');

const cpCodePlaceholder = document.getElementById('cp-code-placeholder');

const ticket = document.querySelector('.bottom-content');


// Recupero i valori degli input al click del bottone

submitButton.addEventListener('click' , function(){
  
  const userName = userNameInput.value.trim();
  const userSurname = userSurnameInput.value.trim();
  const userTravelDistance = parseInt(userTravelDistanceInput.value);
  const userAge = parseInt(userAgeInput.value);

  console.log(typeof userName)
  
  // Controllo che i dati raccolti siano validi
  if (userName.length < 1 || userSurname.length < 1 || isNaN(userTravelDistance) || isNaN(userAge) || userTravelDistance <= 0 || userAge < 0) {
    alert('Alcuni dati inseriti non sono validi')
  } else {

      // Calcolo il prezzo
    const travelPrice = userTravelDistance * kmPrice;

    
    // Applico gli sconti in base alla fascia d'età
    let discountPrice = travelPrice;
    let ticketType = 'Biglietto Standard';
    if (userAge < adultAge) {
      discountPrice = travelPrice - (travelPrice * discountUnderage); 
      ticketType = 'Biglietto Ridotto'
    } else if(userAge >= seniorAge){
      discountPrice = travelPrice - (travelPrice * discountSenior)
      ticketType = 'Biglietto over65'
    }
    

    // Genero casualemente un numero per la carrozza
    const wagonMin = 1;
    const wagonMax = 20;
    const userWagon = Math.floor(Math.random() * (wagonMax - wagonMin + 1) + wagonMin);
    

    // Genero casualemente un codice per il biglietto
    const cpMin = 10000;
    const cpMax = 99999;
    const cpCode = Math.floor(Math.random() * (cpMax - cpMin + 1) + cpMin);

    // Faccio apparire il biglietto solo quando è generato
    ticket.classList.remove('d-none');
    
    // Stampo in pagina il nome e il cognome
    userNamePlaceholder.innerText = userName + ' ' + userSurname

    // Stampo in pagina il tipo di sconto e il prezzo del biglietto 
    ticketTypePlaceholder.innerText = ticketType;
    ticketPricePlaceholder.innerText = (discountPrice.toFixed(2)) + '€'; 
    
    // Stampo in pagina i numeri generati 
    userWagonPlaceholder.innerText = userWagon;
    cpCodePlaceholder.innerText = cpCode;
  
  }


})






