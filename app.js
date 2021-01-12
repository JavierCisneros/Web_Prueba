
console.log({"username" : "ryan", "score" : 70.4});
var name = "Usuario";
let last = "Dos";
console.log(last);
let numer1=100;
let number2=50;
let result;

    result = numer1 + number2;

    console.log(result);


let complete = name + ' '+last;

console.log(complete);

let comparacion = numer1 > number2;


console.log("Resultado: " +comparacion);


let type= "credit";

switch(type){

    case "cre" : 

    console.log("Es de credito");

    break;

    case "debit" :

    console.log("Es de debito");

    break;

    default: 

    console.log("No hay tarjeta");

    break;

}

    let i=0;
    for(i=0; i<50; i++){
    
        console.log(i);

    }
    let count=50;
    while(count>0){

        console.log("Hello world" +count);
        count--;

    }
        
        let names = ['hello', 'uno', 'cero']

        console.log(names.length);

        for(let i=0; i<names.length; i++){

            console.log(names[i]);
            saludar(names[i]);

        }


        function saludar(persona){

            console.log("Hello" + persona)

        }