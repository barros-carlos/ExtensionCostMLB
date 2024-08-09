function processarValores(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const valorTextoNumerico = document.getElementById('valorTextoNumerico').value;
    const valorPorcentagem = parseFloat(document.getElementById('valorPorcentagem').value);
    const valorReais = parseFloat(document.getElementById('valorReais').value);

    // Formata o valor em reais como moeda
    const valorReaisFormatado = valorReais.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Exibe os valores no console
    console.log('Texto Numérico:', valorTextoNumerico);
    console.log('Porcentagem:', valorPorcentagem + '%');
    console.log('Valor em Reais:', valorReaisFormatado);

    // Exibir uma mensagem para o usuário
    alert(`Texto Numérico: ${valorTextoNumerico}\nPorcentagem: ${valorPorcentagem}%\nValor em Reais: ${valorReaisFormatado}`);
}