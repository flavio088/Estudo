const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho: " + baralho.length + 
        "\n1. Adicionar uma carta \n2. Puxar uma carta \n3. Sair"
        )

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta ?")
            baralho.push(novaCarta)
            break;

        case "2":
            const cartaRemovida = baralho.pop()
            if (!cartaRemovida) {
                alert("Não há cartas no baralho!")
              } else {
                alert(cartaRemovida + " foi removida do baralho.")
              }
            break;
        
        case "3":
            alert (`Saindo...`)
            break

        default:
            alert(`Opção inválida`)
            break;
    }

} while (opcao !== "3");