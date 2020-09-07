var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var todos = [
//   'Fazer Café',
//   'Escovar os dentes',
//   'Estudar JS'
// ];

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  // limpa a lista HTML
  listElement.innerHTML = '';

  // escreve na lista os itens presentes no array
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    // adiciona a propriedade de link, porem o # 
    //serve como enchedor de espaço sem efeito para links
    linkElement.setAttribute('href', '#');

    var linkText = document.createTextNode('Excluir');

    // atribuindo as posicoes dos itens do array
    var position = todos.indexOf(todo);
    // definindo a acao do click ao link, chamando 
    // a duncao e passando a posicao como parametro
    linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }

}

renderTodos();

function addTodo() {
  // recupera o valor do input
  var newTodo = inputElement.value;
  // adiciona o valor no array
  todos.push(newTodo);
  // limpa o conteudo do input
  inputElement.value = '';
  // deixa o cursor preso ao input
  inputElement.focus();
  // reexibe os valores do array
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo (position) {
  // remove uma certa quantidade de itens do array de acordo com a psição
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage () {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}