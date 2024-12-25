function verificarRespostas() {
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nasc = document.getElementById("nasc").value;

    if (!nome || !email || !nasc) {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }
    return true
}