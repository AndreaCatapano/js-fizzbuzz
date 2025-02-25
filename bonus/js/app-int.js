/// intermedio: utente sceglie numero massimo e le 3 parole da stampare
let maxNumber = 0; 
let maxNumberIsANumber;


do {
    maxNumber = parseInt(prompt("Fino a che numero?"));

    // Se l'input della distanza è un numero
    if (!isNaN(maxNumber) && maxNumber > 0) {


        let prompt1 = prompt("Scegli la prima parola")
        let prompt2 = prompt("Scegli la seconda parola")
        let prompt3 = prompt("Scegli la terza parola")

        for (let i = 1; i <= maxNumber; i++) {   //Per ogni numero da 1 (indice) a 100 (condizione)

            const isDivisibleBy3 = i % 3 === 0;
            const isDivisibleBy5 = i % 5 === 0;
        
            if (isDivisibleBy3 && isDivisibleBy5) {  //SE l'indice è un numero divisibile per 3 e 5 
                console.log(prompt3); //Stampa prompt3
            }
            else if (isDivisibleBy5) { // ALTRIMENTI SE l'indice un numero divisibile per 5 
                console.log(prompt2); //Stampa prompt2
            }
            else if (isDivisibleBy3) { //ALTRIMENTI SE se l'indice è un numero divisibile per 3
                console.log(prompt1); //Stampa prompt1
            }
            else {
                console.log(i); // Stampa l'indice
            }
        }

        maxNumberIsANumber = true;
    }
    else {
        //Si avvisa l'utente di aver inserito un valore sbagliato e si ferma il programma
        alert(`Il valore ${maxNumber} non è un input valido.`);
        maxNumberIsANumber = false;
    }

} while (!maxNumberIsANumber)
