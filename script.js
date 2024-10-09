function calculadora(a, b, operacao) {
    if(operacao == 'soma'){
        return console.log(a + b)
    } else if(operacao == 'subtracao'){
        return console.log(a - b)
    } else if(operacao == 'multiplicacao'){
        return console.log(a * b)
    } else if(operacao == 'divisao'){
        return console.log(a / b)
    } else {
        return console.log('ERRO. Operação Inválida')
    }
}

calculadora(5, 4, 'soma');
calculadora(3, 2, 'subtracao');
calculadora(2, 3, 'multiplicacao');
calculadora(15, 3, 'divisao');
calculadora(20, 2, 'banana');

