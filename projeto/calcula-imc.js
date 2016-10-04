// var tdPeso = document.getElementById("peso-2");
// var tdAltura = document.getElementById("altura-2");

// var peso = tdPeso.textContent;
// var altura = tdAltura.textContent; //testando com 0

// var paciente = { "peso": peso, "altura": altura }

// if (paciente.altura != 0) {
//     var imc = paciente.peso / (paciente.altura * paciente.altura);
//     document.getElementById("imc-2").textContent = imc;
//     console.log(imc);
// } else {
//     console.log("Não posso executar uma divisão por 0!");
// }

var trPacientes = document.getElementsByClassName("paciente"); //Array de trs

for (var posicaoAtual = 0; posicaoAtual <= trPacientes.length - 1; posicaoAtual++) {
    var pacienteTr = trPacientes[posicaoAtual];
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var paciente = { nome: tdNome.textContent, peso: tdPeso.textContent, altura: tdAltura.textContent };

    if (paciente.altura != 0) {

        var imc = paciente.peso / (paciente.altura * paciente.altura);

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);

    } else {

        console.log("Não posso executar uma divisão por 0!");
    }
}