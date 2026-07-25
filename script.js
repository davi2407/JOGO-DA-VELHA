const botao = document.getElementById("calcular");

botao.addEventListener("click", function(){

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(peso) || isNaN(altura) || altura <= 0){
        resultado.innerHTML = "Digite valores válidos!";
        resultado.className = "resultado";
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";
    let classe = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
        classe = "abaixo";
    }
    else if(imc < 25){
        classificacao = "Peso normal";
        classe = "normal";
    }
    else if(imc < 30){
        classificacao = "Sobrepeso";
        classe = "sobrepeso";
    }
    else{
        classificacao = "Obesidade";
        classe = "obesidade";
    }

    resultado.innerHTML = `
        IMC: ${imc.toFixed(2)} <br>
        Classificação: ${classificacao}
    `;

    resultado.className = "resultado " + classe;

});