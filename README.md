# Simon Says

Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



## Steps 

- generare randomicamente 5 numeri unici(non ripetere lo stesso numero)
- inserire i numeri in pagina 
- salvare i numeri in un'array 
- dopo 5 secondi rimuovere i numeri dalla pagina
- far apparire 5 input che chiedano i numeri 
- se i numeri inseriti sono uguali a quelli nell'array dei numeri estratti hai vinto altrimenti hai perso
- se hai perso vengono mostrat3 entrambe le liste di numeri e vengono colorati di rosso quelli diversi 
- se hai vinto vengono mostrate entrambe le liste di numeri e uelli inseriti dall'utente saranno verdi