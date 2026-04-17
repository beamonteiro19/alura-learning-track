function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);

  let imagem = gameClicado.querySelector(".dashboard__item__img");

  let btn = gameClicado.querySelector(".dashboard__item__button");

  //   let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

  //   alert(nomeJogo.textContent)

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    imagem.classList.remove("dashboard__item__img--rented");

    btn.classList.remove("dashboard__item__button--return");
    btn.textContent = 'Alugar'
  } else {
    btn.classList.add("dashboard__item__button--return");
     btn.textContent = 'Devolver'
    imagem.classList.add("dashboard__item__img--rented");
  }
}

