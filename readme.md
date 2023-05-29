# Calcolo del prezzo del biglietto del treno

**TRACCIA**: Scrivere un programma che chieda all’utente:
-Il proprio nome

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

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

**Svolgimento traccia**

- Recupero l'elemento dal DOM
- Stabilisco tariffe di prezzo e sconti per età
- Chiedo all'utente il numero di km che vuole percorrere e salvo la risposta
- Chiedo all'utente la sua età e salvo la risposta
- Controllo che le risposte siano corrette (bonus)
- Calcolo il costo del viaggio
- Applico gli sconti in base all'età
- Stampo in console il risultato

<br>
<br>

**MILESTONE 1**

- Modifico il file HTML creando gli input e il button
- Elimino i prompt
- Recupero gli elementi dal Dom
- Recupero i valore degli input al click del bottone
- Verifico che i valori dell'input siano validi
- Calcolo il prezzo
- Applico gli sconti
- Stampo il risultato in console

<br>
<br>

**MILESTONE 2**

- Applico dello stile al form
- Genero casualemente un numero per la carrozza
- Genero casualemente un codice per il biglietto
- Stampo il biglietto con tutti i dati in pagina
- Applico dello stile al biglietto in pagina
