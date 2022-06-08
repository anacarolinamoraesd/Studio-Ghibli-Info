const e = '10';
if (e === 10) console.log('e é o numeral 10');
else {
    console.log(`Resultado da condição: ${e === 10}`);
    console.log('e não é o numeral 10');
}

console.clear();

const f = 4;
const g = 11;

if (f > 5 || g > 10) {
    console.log(`Condição é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior do que 10');
} else console.log('f não é maior do que 5 e g não é maior do que 10');

if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do que 10');
else {
    console.log(`Condição é ${f > 5 && g > 10}`);
    console.log('f não é maior do que 5 ou g não é maior do que 10');
}

console.clear();

const num = 'Ola';

if (num % 2 == 0 && !isNaN(num)) console.log('Número par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar');
else console.log('Não é número');

console.clear();

let resultado = 3 > 4 ? "Sim" : "Não";
console.log(resultado)

console.clear();

let result = Math.PI < 4 ? console.log('Sim') : console.log('Não');

const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';

console.clear();

switch (cor) {
    case 'vermelha':
        console.log('A cor é vermelha');
        break;
        case 'azul':
            console.log('A cor é azul');
            break;
            default:
                console.log('A cor não é vermelha ou azul');
            break;
        }

