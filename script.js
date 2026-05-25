function calcularDias() {
    const emissao = document.getElementById("dataEmissao").value;
    const pagamento1 = document.getElementById("dataPagamento1").value;
    const pagamento2 = document.getElementById("dataPagamento2").value;

    if (!emissao) {
        alert("Preencha a data de emissão da nota!");
        return;
    }

    const dataInicio = new Date(emissao);

    calcularResultado(
        pagamento1,
        dataInicio,
        "resultado1",
        "condição 1"
    );

    calcularResultado(
        pagamento2,
        dataInicio,
        "resultado2",
        "condição 2"
    );
}

function calcularResultado(
    pagamento,
    dataInicio,
    resultadoId,
    condicao
) {
    const resultado = document.getElementById(resultadoId);

    if (!pagamento) {
        resultado.innerText = "";
        return;
    }

    const dataFim = new Date(pagamento);

    if (dataFim < dataInicio) {
        alert("A data de pagamento deve ser maior que a de emissão!");
        resultado.innerText = "";
        return;
    }

    const diferenca = dataFim - dataInicio;

    const diasCorridos =
        diferenca / (1000 * 60 * 60 * 24);

    resultado.innerText =
        `Total de dias corridos (${condicao}): ${diasCorridos}`;
}

function alternarTema() {
    document.body.classList.toggle("dark");

    const botao = document.getElementById("botaoTema");

    const darkModeAtivo =
        document.body.classList.contains("dark");
    botao.innerHTML = darkModeAtivo ? "☀️" : "🌙";
}