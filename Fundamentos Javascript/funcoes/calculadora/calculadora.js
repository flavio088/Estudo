function calcularAreaTriangulo () {
    const base = prompt("Qual é a base do triângulo?")
    const altura = prompt("Qual é a altura do triângulo?")
    return (base * altura) / 2
}

function calcularAreaRetangulo () {
    const base = prompt("Qual é a base do retângulo?")
    const altura = prompt("Qual é a altura do retângulo?")
    return base * altura
}

function calcularAreaQuadrado () {  
    const lado = prompt("Qual é o lado do quadrado?")
    return lado * lado  
}

function calcularAreaTrapezio () {
    const baseMaior = prompt ("Qual é a base maior do trápezio ?")
    const baseMenor = prompt ("Qual é a base menor do trapezio ?")
    const altura = prompt ("Qual é a altura do trápezio ?")
    return ((baseMaior + baseMenor) * altura) / 2
}

function calcularAreaQuadrado () {
    const lado =  prompt ("Qual é o lado do quadrado ?")
    return lado * lado
}

function calcularAreaCirculo () {
    const raio = prompt ("Qual é o raio do círculo ?")
    return 3.14 * raio * raio
}

function exibirMenu () {
    return prompt (
        "Calculadora de Áreas \n" +
        "1. Triângulo \n" +
        "2. Retângulo \n" +
        "3. Quadrado \n" +
        "4. Trápezio \n" +
        "5. Círculo \n" +
        "6. Sair"
    )
}

function executar () {
    let opcao = ""

    do { 
        opcao = exibirMenu()
        let resultado ;

        switch (opcao) {
            case "1":
                    resultado = calcularAreaTriangulo()
                break;
            case "2":
                resultado = calcularAreaRetangulo()
                break;
            case "3":
                resultado = calcularAreaQuadrado()
                break;
            case "4":
                resultado = calcularAreaTrapezio()
                break;
            case "5":
                resultado = calcularAreaCirculo()
                break;
            case "6":   
                alert ("Saindo...")
                break;    
            default:
                alert ("Opção inválida")
                break;
        }

        if (resultado) {
            alert ("O resultado da operação foi: " + resultado)
        }


    } while (opcao !== "6")
}
