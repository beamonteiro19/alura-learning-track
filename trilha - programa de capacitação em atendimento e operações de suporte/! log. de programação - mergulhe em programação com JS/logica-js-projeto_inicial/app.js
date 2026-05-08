alert("Bem vindo ao jogo de azar");
// let numeroSecreto = 29; <--- numero que eu escolhi
// agora para gerar um numero aleatorio, utilizamos a funcção Math.random

let numeroMaximo = 5000

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
// se eu quiser que ele sorteie entre 1 a 100, faço: * 100 + 1
// fizemos a multioplicação por 10 porque queriamos que passe uma casa decimal pro lado
// aqui temos um sorteio de numero entre 0 e 9, mas queremos entre 1 e 10, então somamos  + 1

// o Math.random por padrão gera um numero entre 0 e 1, mas acima pedimos para ele multiplicar o numerop por 10
// e utilizamos o parseInt para dizer que queremos um numero inteiro
let chute;

let tentativas = 1;
// enquanto o usuário errar:
while (chute != numeroSecreto) {
  // se reparar bem, os numeros estao estaticos, seria elgal se eu mudasse num lugar e o outro respondesse
  // agora ele pega o valor da varivel numeroMaximo
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  if (numeroSecreto == chute) {
    break; // acaba por aqui, e vai para a condicional fora deste bloco, quemostra o numero de tentativas
  } else {
    if (numeroSecreto > chute) {
      alert(`Você errou! Dica: o número é maior que ${chute}`);
    } else {
      alert(`Você errou! Dica: o número é menor que ${chute}`);
    }
    //   tentativas + tentativas +1
    //   ou
    tentativas++;
  }
}

// este bloco mostra o numero de tentivas ou tentativa, mas pode ser refatorado!
// if (tentativas > 1) {
//   alert(
//     `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`,
//   );
// } else{
//    alert(
//     `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`,
//   );
// }

// ternario pode ser lido como uma pergunta, tentativas é maior que 1? caso não, faça isso: 
// ternario            condicao          senao representado por :
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(
    `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`,
  );


