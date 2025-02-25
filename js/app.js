for (let i = 1; i <= 100; i++) {   //Per ogni numero da 1 (indice) a 100 (condizione)
   
    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {  //SE l'indice è un numero divisibile per 3 e 5 
        console.log("fizzbuzz"); //Stampa "BUZZFIZZ"
    }
    else if (isDivisibleBy5) { // ALTRIMENTI SE l'indice un numero divisibile per 5 
        console.log("buzz"); //Stampa "BUZZ"
    }
    else if (isDivisibleBy3) { //ALTRIMENTI SE se l'indice è un numero divisibile per 3
        console.log("fizz"); //Stampa "FIZZ"
    }
    else {
        console.log(i); // Stampa l'indice
    }
}