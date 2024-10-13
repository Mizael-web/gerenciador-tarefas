// app.js
const prompt = require('prompt-sync')(); // Importa o prompt-sync

// Importando módulos de colaboradores, tarefas, prioridades e relatórios
const colaboradores = require('./colaboradores');
const tarefas = require('./tarefas');
const prioridades = require('./prioridades');
const relatorios = require('./relatorios');

// Função para exibir o menu principal
function menu() {
    console.log("\n=== Menu Principal ===");
    console.log("1. Gerenciar Colaboradores");
    console.log("2. Gerenciar Tarefas");
    console.log("3. Gerenciar Prioridades");
    console.log("4. Gerar Relatórios");
    console.log("5. Sair");
}

function main() {
    let opcao = 0;

    while (opcao !== 5) {
        menu();
        opcao = parseInt(prompt("Escolha uma opção: "), 10);

        switch (opcao) {
            case 1:
                colaboradores.menuColaboradores();
                break;
            case 2:
                tarefas.menuTarefas();
                break;
            case 3:
                prioridades.menuPrioridades();
                break;
            case 4:
                relatorios.menuRelatorios();
                break;
            case 5:
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                break;
        }
    }
}

// iniciar o programa
main();
