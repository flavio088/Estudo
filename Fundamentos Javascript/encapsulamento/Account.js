class Account {
    #password
    #balance = 0
    constructor (user) {
        this.email = user.email
        this.#password = user.password
    }
    getBalance(email, password) {
        if (email === this.email && password === this.#password) {
            return this.#balance
        }else {
            return "Email ou senha incorretos"
        }
    }
}

const user = {
    email: "3aY3a@example.com",
    password: "123456"  
}

const myAccount = new Account(user)

console.log(myAccount)