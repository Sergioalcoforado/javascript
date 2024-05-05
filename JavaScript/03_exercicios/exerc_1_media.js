/*
Facá um algoritimo que dada as 3 notas tiradas por um aluno na faculdade,
calcule e imprima a média e sua classificação conforme tabela abaixo:

Média (nota1 +nota2 + nota3) / 3

Classificação:

- Média menor que 5 - Reprovação
- Média entre 5 e 7 - Recuperação
- Média maior que 7 - Aprovação

*/


const nota1 = 5;
const nota2 = 8.5;
const nota3 = 9.3;

let media = (nota1 + nota2 + nota3) / 3;
console.log(`A média do(a) aluno(a) é ${media.toFixed(2)}`);

if (media < 5){
    console.log("Reprovado");
} else if (media >= 5 && media <= 7){
    console.log("Recuperação");
}else{
    console.log("Aprovado")
}





