
function underAge() {
    let currentYear = 2022;
    var diaNasc = Number(document.querySelector('input#year').value);
    var yearChecked = currentYear - diaNasc;

    if (yearChecked >= 18) {
        alert('Acesso permitido');
        window.location.href = "https://rilakkumalifestyle.com/";
    } else {
        alert('Idade insuficiente para acesso ao site');
    }
}