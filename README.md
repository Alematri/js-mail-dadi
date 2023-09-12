Js-Mail-Dadi
===
## Esercizio di oggi:
Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
===
**1** Creazione del file html, css e Js , linkiamo tutto e inseriamo BS5 nell'HTML
**2** Creiamo un input in HTML dove facciamo inserire la mail all'utente
**3** Passiamo a JS, creiamo un Array in JS con una lista di mail, andiamo a prenderci l'input che inserirà l'utente in HTML, ora un ciclo verificherà se l'input inserito è all'interno dell'array, se è falso stampiamo un messaggio di errore, altrimenti andiamo al prossimo punto
**4** L'input della mail a questo punto sarà sostituito da un bottone che lancierà randomicamente 2 dadi mostrandone il risultato, se il primo dado è maggiore del secondo restituirà il messaggio "hai vinto", se è minore "hai perso", se è uguale "hai pareggiato". Il tutto sarà replicabile quindi non dovrà riportarmi all'inserimento della mail ma a un nuovo lancio di dadi.
**5** Sarebbe figo se tutti i passaggi, dall'inserimento della mail al lancio dei dadi fossero accompagnati da immagini raffiguranti quello che sta accadendo ^^