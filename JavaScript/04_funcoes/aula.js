/*
Função é um pequeno  trecho de código que executa uma tarefa específica.
Ela pode ser chamada quando necessário e executar a mesma tarefa novamente, se desejado.
*/

//Exemplo de função simples:
function saudacao(nome){
    console.log(`Bom dia ${nome}!`); //O parâmetro nome é passado para dentro da função e usado na mensagem de saudação.
    console.log("Olá " + nome);
}

saudacao('João'); //Chamando a função com o parâmetro 'João'

/*
Ao invés de passar os dados diretamente para a função, como no exemplo acima, podemos passá-los através dos parâmetros 
da função. 

Os parâmetros são usados para armazenar esses dados temporariamente , ou seja, eles permitem passar informações da outside (fora) para
A palavra-chave function indica que estamos criando uma função.

Dessa forma, a função fica mais reutilizável e flexível.
*/

function teste(nome) {
    console.log(`Imprime a palavra Teste para o ${nome}. `);  
}

teste('Sergio');
teste('Carla');

// Função para calcular o quadrado de um número
function quadrado(valor) {  
    return Math.pow(valor,2);   // O return serve para retornar um valor da função. 
                                //Se não houver ele, a função é chamada de procedimento.
}

console.log(quadrado(10));      // Aqui a função é chamada pelo nome(quadrado) e atribui um valor (10) a função. 




// Função para calcular o acresimo de juros
function incrementarJuros(valor, percentual) {    
    const valorAcresimo = valor * percentual / 100;
    return valor + valorAcresimo;
}

console.log(incrementarJuros(150,33).toFixed(2));

