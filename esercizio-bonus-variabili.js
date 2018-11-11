/*
  Caldo o freddo
  Scrivi un programma che scambi i valori tra due variabili senza ridefinire dal codice il valore in ciascuna.

  Il programma dopo la modifica dovrà restituire un risultato come questo:
  Output
    one: Wars
    two. Star
  http://www.imparareaprogrammare.it
*/



// Implementa qui il tuo codice
var one = 'Star';
var two = 'Wars';

var three = one;
one = two;
two = three;

console.log('one: '+one);
console.log('two: '+two);
