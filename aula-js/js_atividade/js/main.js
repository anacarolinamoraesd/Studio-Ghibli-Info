var objPeople = [
    {
        username: 'kokomi',
        password: 'fish'
    }
];

var attempt = 3;

function getInfo() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    for (i = 0; i < objPeople.length; i++) {
        if (username != objPeople[i].username || password != objPeople[i].password) {
            alert('User ou senha incorretos, tente novamente')
            attempt --;
            if (attempt == 0);
            window.location.assign("error.html");
        } 
        if (username == objPeople[i].username && password == objPeople[i].password) { 
        window.location.assign('pag2.html');
        } 
}   
}

/* 
const username = 'kokomi';
const password = 'fish';

if (username == 'kokomi' && password == 'fish') {
    alert('Bem vinda(o)!);
    window.location.assign("pag2.html")
} else 
{
    attempt --;
    if(attempt == 0) {
        alert('Você fez mais tentativas do que o permitido);
        window.location.assign("error.html");
    }
}

*/