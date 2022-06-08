console.log('Hello World!');
console.error('Essa é uma mensagem de erro');
console.warn('Essa é uma mensagem de aviso!');

// let, const
console.clear();
let idade = 30;
const nome = 'Nico';
console.log(nome);
console.log(idade);
idade = 31;
console.log(idade);

// string, numbers, boolean, null, undefined
console.clear();
const nome_pessoa = 'John';
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome_pessoa); // type of const -- tipo de variável: string
console.log(typeof idade1); //tipo de variável: number
console.log(typeof rating); //tipo de variável: number
console.log(typeof isCool); // tipo de variável: boolean
console.log(typeof x);// tipo de variável:object
console.log(typeof y);// tipo de variável: undefined
console.log(typeof z);// tipo de variável: undefined

// concatenar strings
console.clear();
const pessoa = 'Irmão do Jorel';
const idade2 = 30;
console.log('Meu nome é ' + pessoa + ' e eu tenho ' + idade2 + ' anos!')

//template string
const hello = `Meu nome é ${pessoa} e eu tenho ${idade2} anos!`;
console.log(hello);

// operadores de comparação e lógico
console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

console.log(teste1 > teste2); //operador de comparação
console.log(teste1 < teste2); //operador de comparação
console.log(teste1 && teste2); //operador lógico
console.log(valor1 && valor2); //operador lógico
