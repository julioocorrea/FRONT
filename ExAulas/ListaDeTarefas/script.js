// Obtém uma referência à lista de tarefas (ul)
let listaTarefa = document.getElementById('listaTarefas');
// Obtém uma referência ao campo de entrada de texto
const inputTarefa = document.getElementById('tarefaInput');

function adicionarTarefa() {
    if (inputTarefa.value.trim() !== ''){
        // Obtém o texto do campo de entrada
        const texto = inputTarefa.value;

        // Cria um novo elemento <li> para representar a nova tarefa
        let novaTarefa = document.createElement('li');

        // Define o conteúdo HTML do elemento <li> com base no texto do campo de entrada
        novaTarefa.innerHTML = `<p>${texto}</p> 
        <button onclick='removerTarefa(this)' style='display:inline'>Excluir</button> 
        <button onclick='ConcluirTarefa(this)' style='display:inline'>Concluir</button>
        <button onclick='EditarTarefa(this)' style='display:inline'>Editar</button>
        `;

        // Adiciona o novo elemento <li> à lista de tarefas (listaTarefa)
        listaTarefa.appendChild(novaTarefa);

        // Limpa o campo de entrada, definindo seu valor como uma string vazia
        inputTarefa.value = '';
    }
}

function removerTarefa(button){
    listaTarefa.removeChild(button.parentElement);
}

function ConcluirTarefa(button){
    // Encontre o elemento pai do botão (que é o elemento <li> representando a tarefa)
    const tarefa = button.parentElement;

    // Encontre o elemento <p> dentro da tarefa
    const paragrafo = tarefa.querySelector('p');
    
    // Aplicar um estilo de linha no parágrafo para riscá-lo
    paragrafo.style.textDecoration = 'line-through';

    // Definir a cor do texto do parágrafo como verde
    paragrafo.style.color = 'green';
    
    // Você pode querer desabilitar o botão "Concluir" após marcar a tarefa como concluída
    button.disabled = true;
}

function EditarTarefa(button) {
    const tarefa = button.parentElement;
    const paragrafo = tarefa.querySelector('p');
  
    const inputEdicao = document.createElement('input');
    inputEdicao.type = 'text';
    inputEdicao.value = paragrafo.textContent;
  
    const botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = 'Salvar';
    botaoSalvar.style.display = 'inline'; // Exibe o botão "Salvar"
  
    botaoSalvar.addEventListener('click', function () {
      paragrafo.textContent = inputEdicao.value;
      inputEdicao.remove();
      botaoSalvar.remove();

      paragrafo.style.display = 'inline'; // Mostrar o parágrafo novamente

      // Exibe os botões Excluir e Concluir novamente
      const botoes = tarefa.querySelectorAll('button');
      botoes.forEach(botao => {
        botao.style.display = 'inline';
      });

    });
  
    // Esconde os botões Excluir, Concluir e Editar
    const botoes = tarefa.querySelectorAll('button');
    botoes.forEach(botao => {
      botao.style.display = 'none';
    });
  
    paragrafo.style.display = 'none';
    tarefa.appendChild(inputEdicao);
    tarefa.appendChild(botaoSalvar);
  
    button.style.display = 'none'; // Oculta o botão "Editar"
  }


