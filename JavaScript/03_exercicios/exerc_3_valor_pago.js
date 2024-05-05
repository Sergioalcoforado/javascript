/**
Elabore um algoritimo que calcule o quanto deve ser pago por um produto, 
considerando o preço normal da etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela abaixo para indicar as condições escolhidas e 
efetuar o cálculo adequado.

Código - Condição - Percentual de  desconto/acréscimo
1 - A vista débito - 10% de desconto
2 - A vista no dinheiro ou PIX - 15% de desconto
3 - Em até 2x - preço da etiqueta sem juros
4 - Acima de 2x - acréscimo de 10%

*/

const preco = 1200.50; //preço da etiqueta do produto

const condicaoPagamento = 4; //condição escolhida (A vista débito)

if(condicaoPagamento === 1){
    const desconto = preco * 0.1;
    console.log(`Forma de pagamento - A vista débito`);
    console.log(`O valor do desconto é: R$ ${desconto.toFixed(2)}`);
    console.log(`O valor do produto com desconto é: R$ ${(preco - desconto).toFixed(2)}`);
}else if(condicaoPagamento == 2){
    const desconto = preco * 0.15;
    console.log(`Forma de pagamento - A vista no dinheiro ou PIX`);
    console.log(`O valor do desconto é: R$ ${desconto.toFixed(2)}`);
    console.log(`O valor do produto com desconto é: R$  ${(preco - desconto).toFixed(2)}`);
}else if(condicaoPagamento == 3){
    console.log(`Forma de pagamento - Em até 2x`);
    console.log(`O valor do produto é: R$ ${preco.toFixed(2)}`);
    console.log(`O valor da prestação é: R$ ${(preco/2).toFixed(2)}`);
}else if(condicaoPagamento == 4){
    const acresimo = preco * 0.1;
    console.log("Forma de pagamento - Acima de 2x");
    console.log(`O valor do produto com acrésimo é: R$ ${(preco + acresimo).toFixed(2)}`);
    let total = preco + acresimo;
    console.log(`O valor da prestação é: R$ ${(total/3).toFixed(2)}`);
}else{
    console.log("Condição de pagamento inválida!"); 
}

console.log(" =================================== ");


switch(condicaoPagamento){
    case 1 :
        const desc = preco * 0.1;
        console.log(`Forma de pagamento - A vista débito`);
        console.log(`O valor do desconto é: R$ ${desc.toFixed(2)}`);
        console.log(`O valor do produto com desconto é: R$ ${(preco - desc).toFixed(2)}`);
        break;
    case 2 :
        const desco = preco * 0.15;
        console.log(`Forma de pagamento - A vista no dinheiro ou PIX`);
        console.log(`O valor do desconto é: R$ ${desco.toFixed(2)}`);
        console.log(`O valor do produto com desconto é: R$  ${(preco - desco).toFixed(2)}`);
        break;
    case 3 :
        console.log(`Forma de pagamento - Em até 2x`);
        console.log(`O valor do produto é: R$ ${preco.toFixed(2)}`);
        console.log(`O valor da prestação é: R$ ${(preco/2).toFixed(2)}`);
        break;
    case 4 :
        const acresimo = preco * 0.1;
        console.log("Forma de pagamento - Acima de 2x");
        console.log(`O valor do produto com acrésimo é: R$ ${(preco + acresimo).toFixed(2)}`);
        let total = preco + acresimo;
        console.log(`O valor da prestação é: R$ ${(total/3).toFixed(2)}`);
        break;
    default:
        console.log("Condição de pagamento inválida!");
}


