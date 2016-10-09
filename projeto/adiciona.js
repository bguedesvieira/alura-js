document.getElementById("adicionar-paciente").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("adicionanado");

    var campoNome = document.querySelector("#campo-nome");
    var campoAltura = document.querySelector("#campo-altura");
    var campoPeso = document.querySelector("#campo-peso");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info-nome'>" + campoNome.value + "</td>" +
        "<td class='info-peso' id='peso-2'>" + campoPeso.value + "</td>" +
        "<td class='info-altura' id='altura-2'>" + campoAltura.value + "</td>" +
        "<td class='info-imc' id='imc-2'>"+campoPeso.value/(campoAltura.value*campoAltura.value)+"</td>" +
        "</tr>"

    var tabela = document.querySelector("table");
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    campoAltura.value = "";
    campoPeso.value="";
    campoNome.value="";

});