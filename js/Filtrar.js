var campofiltro = document.querySelector("#filtrar-tabela");
campofiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, "i");
        if (!expressao.test(nome)) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
})