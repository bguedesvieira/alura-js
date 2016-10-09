var trs = document.getElementsByClassName("paciente"); //Array de trs
percorreArray(trs, function(tr) {
    tr.addEventListener("dblclick", function() {
        this.setAttribute("bgcolor", "grey");
    })
});