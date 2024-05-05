// Organizaremos agora as funções

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function  classificarImc(imc) {
    if(imc < 18.5){
        return 'Você está abaixo do peso.';
    }else if(imc >= 18.5 && imc <= 23.9){
        return 'Você tem o peso ideal.'
    }else if(imc >= 24 && imc <= 27.9){
        return 'Você está com Sobrepeso.'
    }else if(imc >= 28 && imc <= 32.9){
        return 'Você está com Obesidade grau I.'
    }else{
        return 'Você está com Obesidade Grave.'
    }
}


(function () {
    const peso = 65; // kg
    const altura = 1.70; // metros

    const imc = calcularImc(peso, altura);
    console.log(`Seu IMC é ${imc.toFixed(2)}`);
    console.log(classificarImc(imc));

})();
