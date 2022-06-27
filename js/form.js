var botaoAdicionar = document
    .querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var novoPaciente = obterPacienteDoFormulario(form);


    var erro = validaPaciente(novoPaciente);
    if (erro.length > 0) {
        exibeMensagemDeErro(erro);
        return;
    }
    adicionarPacienteNaTabela(novoPaciente);
    form.reset();
    var mensagensErro = document.querySelector("#mensagem-erros");
    mensagensErro.innerHTML = "";
});

function adicionarPacienteNaTabela(novoPaciente) {
    var paciente = montarTr(novoPaciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(paciente);
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function obterPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: Calcular(form.peso.value, form.altura.value)
    }
    return paciente;
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagem-erros");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}