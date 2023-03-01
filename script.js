let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value;

    let qdtTotalcarne = carnep(duracao) * adultos + (carnep(duracao)/2 * criancas);
    let qdtTotalCerveja = bebida(duracao) * adultos;
    let qdtTotalRefri = refri(duracao) * adultos + (refri(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalcarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefri / 2000)} Garrafas de Bebida</p>`
}

function carnep(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }   

}

function bebida(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }   

}

function refri(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }   

}