function register () { 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('passwordConfirmation').value;

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + ' criado com sucesso!');
    } else {        
        alert('As senhas não coincidem!');
    }
}   