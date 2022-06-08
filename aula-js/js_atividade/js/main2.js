var loginCadastrado = "kokomi";
    var senhaCadastrada = "peixinha";

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");
    var tentativa = 1;
    var erro = 2 ;

while (tentativa <=3)
{ 
    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {
        alert("Bem-vindo ao sistema " + loginInformado);
    tentativa = 4;
    } else 
    {
    tentativa = tentativa + 1;
    alert("Login inválido. " + erro + " tentativa(s) restante(s)" );
    loginInformado = prompt("Informe seu login");
        senhaInformada = prompt("Informe sua senha");
    erro = erro - 1;
    }
if (tentativa == 3)
    {    
    alert("Excedeu número de tentativas válidas, tente novamente");
    tentativa = 5; ,
    }
}


if (tentativa == 4)
{
document.write("BEM VINDO AO SISTEMA DE TESTE");
}

if (tentativa == 5)
{
document.write("Erro! Seu acesso ao Sistema foi negado por erro de usuário/senha! Tente Novamente");
window.location.assign("error.html");
}