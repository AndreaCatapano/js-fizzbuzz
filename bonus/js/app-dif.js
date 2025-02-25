/// difficile: utente sceglie numero massimo e se vuole stampare per i multipli di 3, 5 o 15


let maxNumber = 0;
let maxNumberIsANumber;

let dividerIsValid;

do {
    maxNumber = parseInt(prompt("Fino a che numero?"));

    // Se l'input della distanza è un numero
    if (!isNaN(maxNumber) && maxNumber > 0) {

        do {
            const userInput = prompt("Scrivi i multipli tra 3, 5 e 15 (anche più di una scelta")

            const regex3 = /\b(3)\b/;
            const regex5 = /\b(5)\b/;
            const regex15 = /\b(15)\b/;
            const checkInputFor3 = regex3.test(userInput);
            const checkInputFor5 = regex5.test(userInput);
            const checkInputFor15 = regex15.test(userInput);

            const checkInput = checkInputFor3 || checkInputFor5 || checkInputFor15;

            if ((checkInput)) {

                for (let i = 1; i <= maxNumber; i++) {   //Per ogni numero da 1 (indice) a 100 (condizione)

                    const isDivisibleBy3 = i % 3 === 0;
                    const isDivisibleBy5 = i % 5 === 0;

                    if (checkInputFor15 && isDivisibleBy3 && isDivisibleBy5) {  //SE l'indice è un numero divisibile per 3 e 5 
                        console.log("FIZZBUZZ"); //Stampa prompt3
                    }
                    else if (checkInputFor5 && isDivisibleBy5) { // ALTRIMENTI SE l'indice un numero divisibile per 5 
                        console.log("BUZZ"); //Stampa prompt2
                    }
                    else if (checkInputFor3 && isDivisibleBy3) { //ALTRIMENTI SE se l'indice è un numero divisibile per 3
                        console.log("FIZZ"); //Stampa prompt1
                    }
                    else {
                        console.log(i); // Stampa l'indice
                    }
                }
                maxNumberIsANumber = true;
                dividerIsValid = true;
            } else {
                //Si avvisa l'utente di aver inserito un valore sbagliato e si ferma il programma
                alert(`Il valore ${userInput} non contiene nessuna delle scelte possibili.`);
                dividerIsValid = false;
            }
        } while (!dividerIsValid)
    }
    else {
        //Si avvisa l'utente di aver inserito un valore sbagliato e si ferma il programma
        alert(`Il valore ${maxNumber} non è un input valido.`);
        maxNumberIsANumber = false;
    }

} while (!maxNumberIsANumber)