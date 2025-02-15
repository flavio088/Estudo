function validarEmail (email) {
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const erro = new Error('Email inválido')
        erro.input = 'email'
        throw err
    }   
}

function
