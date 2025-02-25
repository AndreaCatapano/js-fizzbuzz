for (let i = 1; i <= 100; i++) {   //Per ogni numero da 1 (indice) a 100 (condizione)
    if(i % 3 === 0 && i % 5 === 0){  //SE l'indice è un numero divisibile per 3 e 5 
        console.log("fizzbuzz") //Stampa "BUZZFIZZ"
    }
    else{
        console.log(i) //Stampa l'indice
    }
}