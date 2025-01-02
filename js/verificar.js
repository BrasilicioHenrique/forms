function verificarRespostas() {
    // criando variáveis com os valores escritos no forms
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nasc = document.getElementById("nasc").value;

    if (!nome || !email || !nasc) { // verifica se o valor de nome ou o valor do email ou o valor do nasc não foram escritos
        alert("Todos os campos devem ser preenchidos!"); // escreve se a situação acima for true
    }
    else {
        alert("Ao continuar, você concorda em compartilhar esses dados."); // escreve se a condição do if acima for false
        window.location.href = "../html/botao.html"; // redireciona a página para botao.html
    }
}