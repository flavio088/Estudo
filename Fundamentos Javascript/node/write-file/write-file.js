const fs = require('fs')

try {
    fs.writeFileSync('hello.txt', 'Hello World!', 'utf-8')
    console.log('Arquivo criado com sucesso!') 
} catch (err) {
    console.error("Houve um erro",err.mensege)
}