// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"













const eleGrid = document.querySelector('.grid');

for (let numero = 1; numero <= 100; numero++) {
	let content = numero;
	let classes = 'cell';
	if (numero % 3 == 0 && numero % 5 == 0) {
		content = 'fizzbuzz';
		classes = 'cell fizzbuzz';
	} else if (numero % 3 == 0) {
		content = 'fizz';
		classes = 'cell fizz';
	} else if (numero % 5 == 0) {
		content = 'buzz';
		classes = 'cell buzz';
	}
	
	eleGrid.innerHTML = eleGrid.innerHTML + `<div class="${classes}">${content}</div>`;
}


