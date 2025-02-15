class User {
    constructor(fullname, email, password) {
      this.fullname = fullname;
      this.email = email;
      this.password = password;
    }
  
    login(email, password) {
      if (this.email === email && this.password === password) {
        console.log("Login bem-sucedido!");
      } else {
        console.log("Email ou senha incorretos.");
      }
    }
  }

  const usuario =  new User("Fulano da Silva", "3aY3a@example.com", "senha12");

  usuario.login("3aY3a@example.com", "senha123");

