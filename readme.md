# Calcolo del prezzo del biglietto del treno

**TRACCIA**: Scrivere un programma che chieda all’utente:
-Il proprio nome

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

<br>
<br>

**MILESTONE 1**:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

<br>
<br>

**MILESTONE 2** :
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

<br>
<br>
<br>

**SVOLGIMENTO DELLA TRACCIA E DELLE MILESTONE**

- Recupero l'elemento dal DOM
- Aggiungo un event listener al button di submit
- **QUANDO** l'utente clicca sul bottone di submit
  - Raccolgo i dati dagli input
  - Effettuo il controllo dei dati
    **SE** manca il nome
    **OPPURE** il cognome
    **OPPURE** l'età è inferiore a zero o non è un numero
    **OPPURE** i km del viaggio non sono un numero o sono meno di zero 
      - Aggiungo un alert
    **FINE.**
    **ALTRIMENTI** 
    - Calcolo il prezzo del biglietto
      **SE** l'utente è minorenne 
        - Applico uno sconto del 20%
      **SE INVECE** è over 65 
        - Applico uno sconto del 40%
  - Randomizzo il numero della carrozza
  - Randomizzo il numero del CP Code
  - Inserisco i dati negli elementi del DOM recuperati
  - Faccio apparire il biglietto con tutti i dati
    **FINE**
