let contador = 1;

while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

console.clear();

let cont = 10;

while (cont >= 0) {
    console.log(`Valor = ${cont}`);
    cont --;
}

console.clear();
let i = 0,
text = '';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

console.clear();

for (let i = 0; i < 10; i++) console.log(`Laço for número: ${i}`);

console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);

const frutas = ['Apples', 'Oranges', 'Pears', 10, true];
console.clear();
for (let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);

console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appoitment',
        isCompleted: false,
    },
];

for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}