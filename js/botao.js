let contador = 0; // variavel que pode mudar = 0
const maximoCliques = 30; // variavel que nao pode mudar = 30

function gerarPosicaoAleatoria() {
  const margem = 100; // define margem para nao deixar proximo da borda
  const posicaoX = Math.floor(Math.random() * (window.innerWidth - margem * 2)); // calcula uma posicao aleatoria em x
  const posicaoY = Math.floor(Math.random() * (window.innerHeight - margem * 2)); // calcula uma posicao aleatoria em y
  return {x: posicaoX + margem, y: posicaoY + margem};
}

function resposta(opcao) {
  if (opcao === "sim") { // se o botao for "sim"
    document.getElementById("main").style.display = "none"; // deixa no style o display none do id main (apaga tudo desse id)
    document.getElementById("response").style.display = "block"; // deixa no style do id reposta o display block
    document.getElementById("message").innerText = "Eu sempre soube."; // escrever esse texto no id "mensagem"
  }

  else if (opcao === "nao") { // se o botao for "nao"
    contador++; // aumentar contador em 1

    if (contador >= maximoCliques) { // se o contador maior ou igual o maximo de cliques
      document.getElementById("nao").style.display = "none"; // retira o botao
      alert("Pare de mentir!"); // escrever texto apos clicar o maximo de cliques
    }

    else if (contador <= maximoCliques) { // se o contador for menor que o maximo de cliques
      const posicaoAleatoria = gerarPosicaoAleatoria(); // define variavel com escala (x, y) aleatorias da funcao gerarPosicaoAleatoria
      let botaoNao = document.getElementById("nao"); // cria variavel que pega id do botao "nao"
      botaoNao.style.position = "absolute"; // define que no style: ... {position: absolute;}
      botaoNao.style.left = `${posicaoAleatoria.x}px`; // define que no style: ... {left: a posicao aleatoria}
      botaoNao.style.top = `${posicaoAleatoria.y}px`; // define que no style: ... {top: a posicao aleatoria}
    }

    if (contador === 28) { // aparecer botao "mengo"
      document.getElementById("botao_escondido").style.display = "block";
    }
  }

  else if (opcao === "def_nao") { // se o botao for "def_nao"
    document.getElementById("def_nao").style.display = "none"; // retira o botao def_nao
    alert("Deixe de coisa!"); // escreve texto após clicar
  }

  else if (opcao === "mengo") { // se o botao for "mengo"
    document.getElementById("main").style.display = "none"; // some com o section main
    document.getElementById("ehmengo").style.display = "block"; // aparece a div ehmengo
  }

  else if (opcao == "nehmengo") { // se o botao for "nehmengo"
    document.getElementById("main").style.display = "block"; // aparece com o section main
    document.getElementById("ehmengo").style.display = "none"; // some com a div ehmengo
    document.getElementById("botao_escondido").style.display = "none"; // some o botao_escondido
  }
}