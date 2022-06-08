let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);

function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');
}

//adiciona item
function addItem(e) {
    e.preventDefault();

//pega o valor do <input>
let newItem = document.getElementById('item').value;
//cria elemento novo <li>
let li = document.createElement('li');
//adiciona classe
li.className = 'list-group-item';
//adiciona o texto no novo elemento com o valor armazenado no newItem
li.appendChild(document.createTextNode(newItem));

let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn- float-end delete';

deleteBtn.appendChild(document.createTextNode('x'));
//acrescenta botão no elemento li
li.appendChild(deleteBtn);
itemList.appendChild(li); //adiciona novo item na lista

form.reset();
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

function buscarItems(e) {
    //converte p/ minúsculo
    let text = e.target.value.toLowerCase();
    //busca todos os itens
    let items = itemList.getElementsByTagName('li');

    //converte items para array
    Array.from(items).forEach(function (item) {
        //busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        //busca o item na lista que começa com o mesmo texto digitado
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; //exibe o item
        } else {
            item.style.display = 'none'; //oculta o item
        }
    });
}