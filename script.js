document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulando o envio do formulário (aqui você pode adicionar código para enviar o email)
    let email = document.getElementById('email').value;
    
    // Exibindo a mensagem legal após enviar o email
    let mensagemElement = document.getElementById('mensagem');
    mensagemElement.classList.remove('hidden');
    mensagemElement.textContent = `fique feliz 😁 ${email}!`;
    
    // Limpando o campo de email
    document.getElementById('email').value = '';
});
