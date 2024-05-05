/*
Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição deacordo com a tabela abaixo:

IMC em adultos - Condição:

- Abaixo de 18.5 - Abaixo do peso;
- Entre 18.5 e 23.9 - Peso normal;
- Entre 24.0 e 27.9 - Sobrepeso;
- Entre 28.0 e 32.9 - Obesidade grau I;
- Acima de 33.9 - Obesidade Grave.

Formula doi IMC:

IMC = peso / (altura * altura)

*/

const peso = 65; // kg
const altura = 1.70; // metros

let imc = peso / (altura * altura);     // ou  let imc = peso/Math.pow(altura,2);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if(imc < 18.5){
    console.log("Você está abaixo do peso.");
}else if(imc >= 18.5 && imc <= 23.9){
    console.log("Você tem o peso ideal.")
}else if(imc >= 24 && imc <= 27.9){
    console.log("Você está com Sobrepeso.")
}else if(imc >= 28 && imc <= 32.9){
    console.log("Você está com Obesidade grau I.")
}else{
    console.log("Você está com Obesidade Grave.")
}


