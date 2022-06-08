//método getElementBy
let titulo = document.getElementById('titulo');
//alterando o conteudo do elemento
titulo.innerHTML = 'Olá caros alunos';
//configurando o estilo css do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = 'pink'
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Heizou come home pls';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'violet';

/*for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'pink';
}*/

//método getElementByTagName
/*let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++); {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = 'fff'; 
}*/

//método getElementByName

let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';

// elemento remove
let item2 = document.getElementById('item2');
item2.remove();

// retornar elemento
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

// alterando o estilo da lista

let ul = document.getElementById('items');
ul.style.listStyle = 'none';
ul.style.lineHeight = '2em';

//marcadores numéricos
ul.style.listStyle = 'decimal inside';

