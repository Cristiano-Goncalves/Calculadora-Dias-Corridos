function calcularDias() {

    const emissao = document.getElementById("dataEmissao").value;
    const pagamento1 = document.getElementById("dataPagamento1").value;
    const pagamento2 = document.getElementById("dataPagamento2").value;

    if (!emissao) {
        alert("Preencha a data de emissão da nota!");
        return;
    }

    const dataInicio = new Date(emissao);

    calcularResultado(pagamento1, dataInicio, "resultado1", "condição 1");
    calcularResultado(pagamento2, dataInicio, "resultado2", "condição 2");
}


function calcularResultado(pagamento, dataInicio, resultadoId, condicao) {

    const resultado = document.getElementById(resultadoId);

    // Se não preencher a data de pagamento boleto
    if (!pagamento) {
        resultado.innerText = "";
        return;
    }

    const dataFim = new Date(pagamento);

    // Validação da data de emissão da nota
    if (dataFim < dataInicio) {
        alert("A data de pagamento deve ser maior que a de emissão!");
        resultado.innerText = "";
        return;
    }

    // Diferença em milissegundos
    const diferenca = dataFim - dataInicio;

    // Converter para dias
    const diasCorridos = diferenca / (1000 * 60 * 60 * 24);

    resultado.innerText =
        `Total de dias corridos (${condicao}): ${diasCorridos}`;
}