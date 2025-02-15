const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr); 
// [ 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]

// Adicionar elementos
// Push (Adiciona elementos no final do array)
arr.push("Boromir");
console.log(arr); 
// [ 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir' ]

// Unshift (Adiciona elementos no começo do array)
arr.unshift("Boromir");
console.log(arr); 
// [ 'Boromir', 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir' ]

// Remover elementos
// Pop (Remove o último elemento do array e o retorna)
let ultimoElemento = arr.pop();
console.log(arr); 
// [ 'Boromir', 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]
console.log(ultimoElemento); 
// 'Boromir'

// Shift (Remove o primeiro elemento do array)
ultimoElemento = arr.shift();
console.log(arr); 
// [ 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]
console.log(ultimoElemento); 
// 'Boromir'

// Pesquisar por um elemento
// Includes (Verifica se um elemento existe no array, retorna true ou false)
const inclui = arr.includes("Frodo"); 
console.log(inclui); // true

// IndexOf (Encontra o índice de um elemento no array)
const indice = arr.indexOf("Frodo");
console.log(indice); // 0

// Cortar e concatenar
// Slice (Cria uma cópia de uma parte do array)
const hobbits = arr.slice(0, 4); // Pega do índice 0 até o 4 (não inclusivo)
const outros = arr.slice(-4); // Pega os últimos 4 elementos
console.log(arr); 
console.log(hobbits); // [ 'Frodo', 'Sam', 'Merry', 'Pippin' ]
console.log(outros); // [ 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]

// Concat (Combina dois ou mais arrays)
const sociedade = hobbits.concat(outros);
console.log(sociedade); 
// [ 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]

// Substituir ou remover elementos
// Splice (Remove elementos e pode adicionar novos no lugar)
const elementosRemovidos = sociedade.splice(indice, 1, "Robert");
console.log(elementosRemovidos); // [ 'Frodo' ]
console.log(sociedade); 
// [ 'Robert', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]

// Iterar sobre os elementos do array
// Usando for
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i];
    console.log(`${elemento} se encontra na posição ${i}`);
}

// Usando forEach
sociedade.forEach((elemento, indice) => {
    console.log(`${elemento} se encontra na posição ${indice}`);
});
