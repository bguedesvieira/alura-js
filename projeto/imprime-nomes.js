var trPacientes = document.getElementsByClassName("paciente"); //Array de trs

percorreArray(trPacientes, function(trPaciente) {

    var pacienteAtual = montaPaciente(trPaciente);
    console.log(pacienteAtual.nome);
});