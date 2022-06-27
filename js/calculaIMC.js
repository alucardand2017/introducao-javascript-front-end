var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    CalculaIMC(pacientes[i]);
}

function CalculaIMC(paciente) {
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoEValido = validaPeso(peso);
    var alturaEValido = validaAltura(altura);

    if (!pesoEValido) {
        console.log("PESO INVALIDO");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEValido) {
        console.log("ALTURA INVALIDA");
        alturaEValido = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoEValido && alturaEValido)
        tdImc.textContent = Calcular(peso, altura);
}

function validaPaciente(paciente) {
    var erro = [];
    if (!validaPeso(paciente.peso)) {
        erro.push("Peso é inválido!");
    }
    if (!validaAltura(paciente.altura)) {
        erro.push("Altura inválida!");
    }
    if (paciente.nome.length < 3) {
        erro.push("Tamanho do nome deve ser maior!");
    }
    if (paciente.gordura.length <= 0) {
        erro.push("Gordura deve ser maior que zero");
    }
    return erro;
}

function Calcular(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return false;
    }
    return true;
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;
    }
    return true;
}