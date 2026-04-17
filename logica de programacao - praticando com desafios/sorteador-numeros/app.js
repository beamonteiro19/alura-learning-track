function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  if (de != ate && de < ate) {
  } else {
    alert(
      "O número de inicio deve ser diferente e menor do último numero da lista ",
    );
    return;
  s}

  if (quantidade > ate - de + 1) {
    alert(
      "Digite uma quantidade de numeros sorteados que caiba no intervalo de 'de + ate'",
    );
    return;
  }

  let sorteados = [];

  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumAletorio(de, ate);

    while (sorteados.includes(numero)) {
      //includes devolve um booleano
      //enquanto um numero for soteado, ele nao sera sorteado novamente no array
      // O método .includes() - verificando se algo já existe no array
      // é uma maneira eficiente de garantir que os números sorteados sejam únicos.

      numero = obterNumAletorio(de, ate);
    }

    sorteados.push(numero);
    //O .push() - adicionando à lista
    // O método .push() é usado para adicionar um novo elemento ao final de um array.
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  //O .innerHTML é como você ter permissão para reescrever todo o conteúdo na página, ou seja, ele tem acesso a toda a estrutura do HTML,
  // podendo criar elementos, modificar o conteúdo, etc.
  // Ele é muito utilizado para atualizar dinamicamente o conteúdo de uma página sem precisar recarregá-la completamente.

  //chamado para alterar o staus do botão reiniciar, para que ele fique habilitado para o clique
  alterarStatusBtn();
}

function obterNumAletorio(min, max) {
  //dentro coloco os parametros

  return Math.floor(Math.random() * (max - min)) + min;
}

//agora, para o botão reiniciar trocar de classe css e ficar habilitado para o clique:

function alterarStatusBtn() {
  let btnReiniciar = document.getElementById("btn-reiniciar");
  if (btnReiniciar.classList.contains("container__botao-desabilitado")) {
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
  } else {
    btnReiniciar.classList.remove("container__botao");
    btnReiniciar.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

  alterarStatusBtn();
}
