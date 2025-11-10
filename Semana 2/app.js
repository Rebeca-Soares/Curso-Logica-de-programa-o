//Alterar o h1 do html pelo JavaScript document (html) para selecionar o que deseja ".querySelector" e entre (o nome da propriedade/tag):
//let titulo = document.querySelector('h1');
//dar o valor a tag desejada = innerHTML = Dentro do HTML daquele titulo
//titulo.innerHTML = 'Jogo do número secreto';

//texto no parágrafo
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//lista para nao repetir numeros sorteados
let listaDeNumerosSorteados = [];

let numeroLimite = 10;

//criando a variação para chamar o numero aleatorio
let numeroSecreto = gerarNumeroAleatorio();
//para chamar o numero de tentativas do usuario
let tentativas = 1;


//para evitar repetição de codigo, podemos isolar numa função para executar o mesmo que foi executado acima.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

// Botão "Chute" - criar uma função
//função trecho de codigo que tem alguma responsabilidade, que é responsável por algo da página
function verificarChute() {
    let chute = document.querySelector('input').value;

    if  (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
            //tentativas = tentativas + !; é o mesmo que:
            tentativas ++;
            //limpar o campo após erro do numero
            limparCampo()
        } 
    }
};

//sortear numeros
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
} 

//imput = entrada do usuário
// = atribui um valor == compara um valor