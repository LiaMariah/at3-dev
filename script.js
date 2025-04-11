
function mudarTexto() {
    const resposta = prompt("Digite o novo texto:");
    if (resposta !== null) {  
        document.getElementById("texto").textContent = resposta;
    }
}