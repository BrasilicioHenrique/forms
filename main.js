let contador = 0;
    const limiteCliques = 5;
    function getRandomPosition() {
      const offset = 50;
      const randomX = Math.floor(Math.random() * (window.innerWidth - offset * 2));
      const randomY = Math.floor(Math.random() * (window.innerHeight - offset * 2));
      return { x: randomX + offset, y: randomY + offset };
    }

    function resposta(opcao) {
      if (opcao === 'sim') {
        document.getElementById('pergunta').style.display = 'none';
        document.getElementById('resposta').style.display = 'block';
        document.getElementById('mensagem').innerText = 'Eu sempre soube.';
      } 
      else if (opcao === 'nao') {
        contador++;
        if (contador >= limiteCliques) {
          document.getElementById('nao').style.display = 'none';
          alert('Pare de mentir!');
        } 
        else {
          const randomPosition = getRandomPosition();
          let nao = document.getElementById('nao');
          nao.style.position = 'absolute';
          nao.style.left = `${randomPosition.x}px`;
          nao.style.top = `${randomPosition.y}px`;
        }
      } 
      else if (opcao === 'defnao') {
        document.getElementById('defnao').style.display = 'none';
        alert('Deixe de coisa!');
      }
    }