let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");

  if (amigo.value == "") {
    alert("Informe um nome!");
    return;
  }

  if (amigos.includes(amigo.value)) {
    alert("Nome já adicionado!");
    return;
  }

  let listaAmigos = document.getElementById("lista-amigos");

  amigos.push(amigo.value);

  if (listaAmigos.textContent == "") {
    listaAmigos.textContent = amigo.value;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + ", " + amigo.value;
  }
  amigo.value = "";
}

function sortear() {
  if (amigos.length <= 4) {
    alert("Adicione pelo menos 4 pessoas!");
    return;
  }
  embaralhar(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralhar(listaAmigos) {
  for (let i = listaAmigos.length - 1; i > 0; i--) {
    const iAleatorio = Math.floor(Math.random() * (i + 1));
    [listaAmigos[i], listaAmigos[iAleatorio]] = [
      listaAmigos[iAleatorio],
      listaAmigos[i],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
