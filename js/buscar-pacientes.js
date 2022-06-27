var botaoBuscarPaciente = document.querySelector("#buscar-pacientes");
botaoBuscarPaciente.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    console.log("BUSCANDO PACIENTES ...");
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
        var mensagem = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            mensagem.classList.add("invisivel");

            console.log(xhr.responseText);
            var pacientes = JSON.parse(xhr.responseText);
            console.log(pacientes);
            pacientes.forEach(element => {
                adicionarPacienteNaTabela(element);
            });
        } else {
            mensagem.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});