// Criando Objetos
// Um objeto é uma coleção de propriedades, onde cada propriedade é formada por um par chave:valor.

const personagem = {
    nome: "Aragorn",
    classe: "Ranger",
    idade: 87,
    habilidades: ["Espada", "Arco", "Liderança"]
  };
  
  console.log(personagem);
  // { nome: 'Aragorn', classe: 'Ranger', idade: 87, habilidades: [ 'Espada', 'Arco', 'Liderança' ] }
  
  // Acessando Propriedades
  // 1. Notação de ponto
  console.log(personagem.nome); // 'Aragorn'
  
  // 2. Notação de colchetes
  console.log(personagem["classe"]); // 'Ranger'
  
  // Adicionando Propriedades
  personagem.reino = "Gondor";
  console.log(personagem.reino); // 'Gondor'
  
  // Alterando Propriedades
  personagem.idade = 88;
  console.log(personagem.idade); // 88
  
  // Removendo Propriedades
  delete personagem.classe;
  console.log(personagem);
  // { nome: 'Aragorn', idade: 88, habilidades: [ 'Espada', 'Arco', 'Liderança' ], reino: 'Gondor' }
  
  // Verificando Propriedades
  // 1. Usando in
  console.log("nome" in personagem); // true
  console.log("classe" in personagem); // false
  
  // 2. Usando hasOwnProperty
  console.log(personagem.hasOwnProperty("reino")); // true
  console.log(personagem.hasOwnProperty("classe")); // false
  
  // Percorrendo Objetos
  // 1. Usando for...in
  for (let chave in personagem) {
    console.log(`${chave}: ${personagem[chave]}`);
  }
  
  // Métodos de Objetos
  // Objetos podem ter métodos, que são funções como valores das propriedades.
  const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1178,
    resumo: function() {
      return `${this.titulo}, escrito por ${this.autor}, tem ${this.paginas} páginas.`;
    }
  };
  
  console.log(livro.resumo());
  // 'O Senhor dos Anéis, escrito por J.R.R. Tolkien, tem 1178 páginas.'
  
  // Trabalhando com Chaves e Valores
  // 1. Object.keys (Retorna um array com as chaves do objeto)
  const chaves = Object.keys(personagem);
  console.log(chaves); // [ 'nome', 'idade', 'habilidades', 'reino' ]
  
  // 2. Object.values (Retorna um array com os valores do objeto)
  const valores = Object.values(personagem);
  console.log(valores); // [ 'Aragorn', 88, [ 'Espada', 'Arco', 'Liderança' ], 'Gondor' ]
  
  // 3. Object.entries (Retorna um array de pares [chave, valor])
  const entradas = Object.entries(personagem);
  console.log(entradas);
  // [
  //   ['nome', 'Aragorn'],
  //   ['idade', 88],
  //   ['habilidades', [ 'Espada', 'Arco', 'Liderança' ]],
  //   ['reino', 'Gondor']
  // ]
  
  // Criando Objetos Dinamicamente
  // Usando Factory Functions
  function criarPersonagem(nome, classe, idade) {
    return {
      nome,
      classe,
      idade
    };
  }
  
  const legolas = criarPersonagem("Legolas", "Elfo", 2931);
  console.log(legolas);
  // { nome: 'Legolas', classe: 'Elfo', idade: 2931 }
  
  // Trabalhando com Referências
  // Objetos em JavaScript são referenciados, ou seja, se você alterar um objeto, a referência também será afetada.
  const objetoA = { chave: "valor" };
  const objetoB = objetoA;
  
  objetoB.chave = "novo valor";
  console.log(objetoA.chave); // 'novo valor'
  
  // Copiando Objetos
  // 1. Object.assign
  const copia1 = Object.assign({}, personagem);
  console.log(copia1); // Cópia do objeto
  
  // 2. Spread Operator
  const copia2 = { ...personagem };
  console.log(copia2); // Outra cópia do objeto
  
  // Clonagem profunda (quando há objetos ou arrays aninhados)
  const personagemCompleto = JSON.parse(JSON.stringify(personagem));
  console.log(personagemCompleto); // Clonagem profunda
  