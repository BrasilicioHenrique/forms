const flamengo = document.getElementById("ehmengo");
const gay = document.getElementById("sim");

let escolhaUsuario;

function handleClick(buttonId) {
    escolhaUsuario = buttonId;
    console.log(`Você clicou no ${escolhaUsuario}`);
}

flamengo.addEventListener('click', () => handleClick('flamengo'));
gay.addEventListener('click', () => handleClick('gay'));

