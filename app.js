//mensagem que chega ao usuário como alerta
alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10; 
//criar variavel "let"
//parseInt = numero inteiro e Math.random() = numeros aleatorios
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)

// o numero ficou fora das "" pois assim o js interpreta como numero e nao texto.
//criar a interação do usuário para criar o numero
//pedir para o usuário informar o numero
let chute 
let tentativas = 1;

// while = enquanto o chute não for igual ao nº secreto (!=) comparação/diferente
while (chute != numeroSecreto) {
    //parar while caso acerte o nº secreto de primeira
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
//condição - se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break
    }
    else {
        if(chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`); 
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; quer dizer o mesmo que:
        tentativas ++
    }
}
// operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
// codigo acima significa isso:
/*if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/

//let nome = 'Rebeca';
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDispovivel = 1000;

/* let mensagemDeErro = 'Responda as perguntas para saber se pode tirar habilitação';
alert(mensagemDeErro);

let nome = prompt('Digite o seu nome:');


let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
}
else {
    alert('Você não pode tirar habilitação!')
} */

//alert('Boas vindas ao nosso site')
