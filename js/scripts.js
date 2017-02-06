// plik scripts.js

var	a = 1,
	b = 1,
	value = 0;
a = prompt('Wpisz pierwszą zmienną');
b = prompt('Wpisz drugą zmienną');
value = (a * a) + (2 * a * b) - (b * b);
if (value > 0) {
	console.log('Wynik działania jest dodatni');
	alert('Wynik działania jest dodatni i wynosi: ' + value);
} else if (value < 0) {
	console.log('Wynik działania jest ujemny');
	alert('Wynik działania jest ujemny i wynosi: ' + value);
} else {
	console.log('Wynik działania wynosi 0');
	alert('Wynik działania wynosi 0');
}
