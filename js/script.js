function openModal() {
    document.getElementById("doacao-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("doacao-modal").style.display = "none";
}

function selecionarValor(valor) {
    document.getElementById("valor-doacao").value = valor;
}

function confirmarDoacao() {
    const valor = document.getElementById("valor-doacao").value;
    if (valor) {
        alert(`Obrigado por sua doação de R$${valor}!`);
        closeModal();
    } else {
        alert("Por favor, insira um valor para doação.");
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("doacao-modal");
    if (event.target === modal) {
        closeModal();
    }
}