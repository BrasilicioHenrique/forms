function verificarRespostas() {
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nasc = document.getElementById("nasc").value;

    if (!nome || !email || !nasc) {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }
    else {
        alert("Ao continuat, você concorda em compartilhar esses dados.")
        window.location.href = "../html/botao.html";
    }
}