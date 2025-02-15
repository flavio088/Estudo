const tarefas = []
let opcao = ""

do {
    
    let lista = ""
    for (let i = 0; i < tarefas.length; i++) {
        lista += (i + 1) + "º -" + tarefas[i] + "\n"
    }

    opcao = prompt (
        "Tarefas: \n" + lista +
        "\nEscolha uma opção: \n1. Nova tarefa \n2. Realizar tarefa\n 3. Sair"
    )

    switch (opcao) {
        case "1":
            const novaTarefa = prompt("Qual atividade deseja adicionar ?")
            tarefas.push(novaTarefa)
            break;
        case "2":
            const atividadeRealizada = tarefas.shift()
            if (!atividadeRealizada) {
                alert("Não há atividades pendentes!")
            } else {
                alert(atividadeRealizada + " foi realizada.")
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