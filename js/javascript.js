/**
 * Scrivi un programma che stampi in console i numeri da 1 a 100:
    ma che per i multipli di 3 stampi “Fizz” al posto del numero e
    per i multipli di 5 stampi “Buzz”.
    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

for (let i = 0; i < 101; i++){
    console.log(i);
    
    if (i % 3 === 0){
        console.log(i + 'frizz')
    }else if (i % 5 === 0){
        console.log(i + 'buzz');
    }
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + 'FrizzBuzz');
    }
}