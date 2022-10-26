//Il software deve chiedere per 5 volte all'uttente di inserire un numero.
//Il programma stampa la somma di tutti quelli inseriti:

//variabile
let x = 0;
//variabile sum
let sum = 0;

while( x < 5 ){
    let number = parseInt(prompt('inserire un numero'));
    sum += number;
    x++;
}
console.log('la somma dei numeri inseriti è: ', sum);