//método queryselector
const btn = document.querySelector('.btn');
btn.style.background = 'red';

//busca pelos elementos do formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

//método addEventListener
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput === '' || emailInput === '')
 {
//alert
msg.classList.add('error');
msg.innerHTML = 'Por favor, preencha os dados.';
setTimeout(() => msg.remove(), 3000);
 } else {
     //console.log('sucess');
     const li = document.createElement('li');
     li.appendChild(
         document.createTextNode(
             `${nameInput.value} : ${emailInput.value} : ${horario.value}`
         )
     );
     userList.appendChild(li);
     //limpa o formulário
     nameInput.value = '';
     emailInput.value = '';
     horario.getElementsByTagName('option')[0].selected = 'selected';
     nameInput.focus(); //coloca foco no elemento
 }
}

//validando email
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        //alert
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);
    }
});