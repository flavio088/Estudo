// Cria um array vazio chamado `imoveis` para armazenar os imóveis cadastrados.
const imoveis = [];

// Declara uma variável `opcao` como uma string vazia para capturar a escolha do usuário no menu.
let opcao = "";

// Inicia um laço de repetição `do...while` que continuará executando enquanto a variável `opcao` não for igual a "3".

// Função para exibir o menu e capturar a opção do usuário
function exibirMenu(imoveis) { 
    return prompt(
        "Bem-vindo ao cadastro de Imóveis! \n" +
        "Total de Imóveis: " + imoveis.length + 
        "\n\nEscolha uma opção: \n 1.Cadastrar novo imóvel\n 2. Listar Imóveis \n 3. Sair "
    );
}
do {
  // Chama a função `exibirMenu` passando o array de imóveis e atribui o retorno à variável `opcao`.
    opcao = exibirMenu(imoveis); 

    // Estrutura `switch` para decidir o que fazer com base na escolha do usuário.
    switch (opcao) {
        case "1": // Caso o usuário escolha "1", cadastrar um novo imóvel.
            // Cria um objeto vazio para armazenar os dados do novo imóvel.
            const imovel = {};
            
            // Coleta os dados do imóvel usando `prompt` e armazena no objeto.
            imovel.proprietario = prompt("Qual é o nome do proprietário?");
            imovel.endereco = prompt("Qual é o endereço do imóvel?");
            imovel.quartos = parseFloat(prompt("Quantidade de quartos?"));
            imovel.banheiros = parseFloat(prompt("Quantidade de banheiros?"));
            imovel.garagem = prompt("Possui garagem? (Sim/Não)");
            
            // Exibe uma confirmação com os dados coletados antes de salvar.
            const confirmaCadastro = confirm(
                "Confirma o cadastro do imóvel abaixo? \n" +
                "Proprietário: " + imovel.proprietario + "\n" +
                "Endereço: " + imovel.endereco + "\n" +
                "Quartos: " + imovel.quartos + "\n" +
                "Banheiros: " + imovel.banheiros + "\n" +
                "Possui Garagem: " + imovel.garagem
            );
            
            // Se o usuário confirmar, adiciona o imóvel ao array `imoveis`.
            if (confirmaCadastro) {
                imoveis.push(imovel); // Salva o imóvel no array.
                alert("Bohyaaa !!! \nImóvel cadastrado com sucesso!");
            } else {
                // Caso o usuário cancele, exibe uma mensagem.
                alert("Cadastro cancelado.");
            }
            break;

        case "2": // Caso o usuário escolha "2", listar todos os imóveis cadastrados.
            // Percorre o array `imoveis` e exibe os dados de cada imóvel.
            for (let i = 0; i < imoveis.length; i++) {
                const imovel = imoveis[i]; // Obtém o imóvel atual.
                alert(
                    "Proprietário: " + imovel.proprietario + "\n" +
                    "Endereço: " + imovel.endereco + "\n" +
                    "Quartos: " + imovel.quartos + "\n" +
                    "Banheiros: " + imovel.banheiros + "\n" +
                    "Possui Garagem: " + imovel.garagem
                );
            }
            break;

        case "3": // Caso o usuário escolha "3", sair do programa.
            alert("Saindo..."); // Exibe uma mensagem antes de sair.
            break;

        default: // Caso o usuário insira uma opção inválida.
            alert("Opção inválida!"); // Exibe uma mensagem de erro.
            break;
    }
} while (opcao !== "3"); // O laço continua enquanto `opcao` for diferente de "3".
