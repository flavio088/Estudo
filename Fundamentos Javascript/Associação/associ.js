const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Rua A", 123, "Bairro X", "Cidade Y", "UF Z");
const jonh = new Person("John Doe", addr);

console.log(jonh); 