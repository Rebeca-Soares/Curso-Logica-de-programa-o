//Alterar o h1 do html pelo JavaScript document (html) para selecionar o que deseja ".querySelector" e entre (o nome da propriedade/tag):
//let titulo = document.querySelector('h1');
//dar o valor a tag desejada = innerHTML = Dentro do HTML daquele titulo
//titulo.innerHTML = 'Jogo do número secreto';

//texto no parágrafo
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//criando a variação para chamar o numero aleatorio
let numeroSecreto = gerarNumeroAleatorio();

//para evitar repetição de codigo, podemos isolar numa função para executar o mesmo que foi executado acima.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

// Botão "Chute" - criar uma função
//função trecho de codigo que tem alguma responsabilidade, que é responsável por algo da página
function verificarChute() {
    let chute = document.querySelector('input').value;

    if  (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!')
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        } 
    }
};

//sortear numeros
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
};

//imput = entrada do usuáeio
// = atribui um valor == compara um valor