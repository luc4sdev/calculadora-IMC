function imc() {

var name1 = document.getElementById('name').value;
var height = document.getElementById('height').value;
var weight = document.getElementById('weight').value;
var result = document.getElementById('result');

if(name1 != '' && height != '' && weight != '') {


var imcValue = (weight / (height*height)).toFixed(2);

var classification = '';


if(imcValue < 18.5) {
    classification = 'Abaixo do peso.'
}

else if(imcValue >= 18.5 && imcValue <= 24.9) {
    classification = 'Peso Normal.'
}

else if(imcValue >= 25 && imcValue <= 29.9) {
    classification = 'Sobrepeso.'
}

else if(imcValue >= 30 && imcValue <= 34.9) {
    classification = 'Obesidade Grau I.'
}

else if(imcValue >=35 && imcValue <= 39.9) {
    classification = 'Obesidade Grau II.'
}

else if(imcValue >= 40) {
    classification = 'Obesidade Grau II ou Mórbida.'
}

var text = `Bem vindo(a) ${name1}, seu IMC é: ${imcValue} e sua classificação é: ${classification}`;
result.innerHTML = text;

}

else {
    result.textContent = 'Preencha todos os campos!!';
}

}
