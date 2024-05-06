// Função para escrever s eu sou maior de idade comparando minha data de nascimento com a datya de hoje

function isMaiorIdade() {
    var dataNasc = new Date(2004, 4, 23); // Data de Nascimento
    var dataHoje = new Date();// Data de Hoje
    
    var anosAtuais = dataHoje.getFullYear() - dataNasc.getFullYear();
  
    var mesAtual = dataHoje.getMonth();
    var mesNascimento = dataNasc.getMonth();
  
    var diaAtual = dataHoje.getDate();
    var diaNascimento = dataNasc.getDate();
  
    if (anosAtuais > 18 || (anosAtuais = 18 && mesAtual >= mesNascimento && diaAtual >= diaNascimento)) {
        console.log('MAIOR DE IDADE')
        } else{
            console.log('MENOR DE IDADE');
        }
}

isMaiorIdade();