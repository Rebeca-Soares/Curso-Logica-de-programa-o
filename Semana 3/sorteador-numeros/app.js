function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value); //value = descreve que queremos o valor e não o input do html
    //parseInt garante que vai um numero inteiro e nao uma string.
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);  


    //Criar um Array
    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    //for cria uma variavel para controlar o loop
    for (let i = 0; i < quantidade; i++){
        numero = obeterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = obeterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    //arrray: includes(Verificar se um valor está no array) e push(Adicionar elementos ao array);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obeterNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById(`btn-reiniciar`)
    //verificar se o botao esta desabilitado para habilitar - usar uma condicional.
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    };
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}