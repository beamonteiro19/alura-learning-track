// 1.  qual dia da semana
let diaSemana = prompt('Qual dia é hoje?')

if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    console.log('Bom final de semana')
} else{
    console.log('Boa semana!')
}


// 2. verificar se é par ou impar
let numero = prompt('Insira um numero')

function verificaNumero(numero){
    if (numero % 2 == 0){
        alert('Par')
    } else{
        alert('Ímpar')
    }
  
}  verificaNumero(Number(numero))


// 3. verificar se é positivo pu negativo
let numero = prompt('Insira um numero')

function verificaNumero(numero){
    if (numero >= 0){
        alert('Positivo')
    } else{
        alert('Negativo')
    }
  
} verificaNumero(Number(numero))


// 4. sistema de pontuação - se for maios que ou igual a 100, mostra uma mensagem de sucesso!

let pontuacao = prompt('Insira uma pontuação de 0 a 100')

function verificaPontuacao(pontuacao){
    if(pontuacao >= 100){
        alert('Parabéns, você venceu!')
    }else{
        alert('Não foi desta vez! Tente novamente')
    }
} verificaPontuacao(Number(pontuacao))

// 5.  mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let valor = prompt('Insira um valor para deposito')

alert(`Você tem ${valor} reais em conta`)

// 5. Inserir nome e alert com template string após

let nome = prompt('Insira seu nome')
alert(`Boas vindas, ${nome}`)

// 6.  contador

let contador = 1

while(contador < 5 ){
    alert('Executando a iteração ' +contador)
    contador ++
}

// 7.  contador do 1 ao 10

let contador = 1

while(contador <= 10 ){
    console.log('Executando a iteração ' +contador)
    contador ++
}

