function openModal() {
    document.getElementById("doacao-modal").style.display = "flex";  // Usando 'flex' para centralizar o modal
}

function closeModal() {
    document.getElementById("doacao-modal").style.display = "none";
}

function selecionarValor(valor) {
    document.getElementById("valor-doacao").value = valor;
}

function confirmarDoacao() {
    const valor = document.getElementById("valor-doacao").value;
    if (valor && valor > 0) {
        alert(`Obrigado por sua doação de R$${valor}!`);
        closeModal();  // Fecha o modal após a doação
    } else {
        alert("Por favor, insira um valor válido para a doação.");
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("doacao-modal");
    if (event.target === modal) {
        closeModal();
    }
}
