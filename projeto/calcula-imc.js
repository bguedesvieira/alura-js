function calculaTodosImcs() {
    var trPacientes = document.getElementsByClassName("paciente"); //Array de trs

    percorreArray(trPacientes, function(trPaciente) {

        var pacienteAtual = montaPaciente(trPaciente);
        var imc = pacienteAtual.pegaImc();

        var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);
    });
}

var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;
botao.addEventListener("click", calculaTodosImcs);
botao.addEventListener("click",function(){console.log("calculando imcs...");})

/*
for (var posicaoAtual = 0; posicaoAtual <= trPacientes.length - 1; posicaoAtual++) {
    var pacienteTr = trPacientes[posicaoAtual];
    var pacienteAtual = montaPaciente(pacienteTr);

    var imc = pacienteAtual.pegaImc();

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;

    console.log(imc);
}
*/