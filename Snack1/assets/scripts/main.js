//Crea un arry vuoto e chiedi all'utente un numero da inserire nell'array.
//Continua fino a quando la somma degli elementi è minore di 50:

//variabile sum
let sum = 0;

//creo un array
let array = [];

//check
while(sum < 50){
    let number = parseInt(prompt('inserisci un numero'));
    sum += number;
    array.push(number);
}
console.log(array);
console.log('la somma è:', sum);