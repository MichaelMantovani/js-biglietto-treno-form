# Calcolo del prezzo del biglietto del treno

**TRACCIA**: Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

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

- Sostituisco i prompt con degli output
- Aggiungo un bottone
- Recupero i valore degli input
- Calcolo il prezzo
- Applico gli sconti
- Stampo il risultato in console

<br>
<br>
