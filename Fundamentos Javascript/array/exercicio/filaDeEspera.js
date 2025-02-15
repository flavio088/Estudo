let fila = []
let opcao = ""

do {
    let pacientes = ""
    fila.forEach((paciente, i) => {
        pacientes += (i + 1) + "º - " + paciente + "\n";
    })

    opcao = prompt (
        "Pacientes: \n" + pacientes +
        "\nEscolha uma opção: \n1. Novo paciente \n2. Consultar paciente\n 3. Sair"
    )

    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente ?")
            fila.push(novoPaciente)
            break;
        case "2": 
            const pacienteConsultado = fila.shift();
            if (!pacienteConsultado) {
                alert("Não há pacientes na fila!")
              } else {
                alert(pacienteConsultado + " foi removido da fila.")
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