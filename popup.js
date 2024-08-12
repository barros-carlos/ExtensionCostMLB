addEventListener('DOMContentLoaded', function () {
    // add event listener to the button
    document.getElementById('btn').addEventListener('click', verifica_campos);
});

function verifica_campos(){
    let empresa = document.querySelector('input[name="empresa"]:checked') ? document.querySelector('input[name="empresa"]:checked').value : undefined;
    let codigoMLB = document.getElementById('CodigoMLB').value;
    let desconto = document.getElementById('ValorDesconto').value;
    let participacao = document.getElementById('ParticipacaoMLB').value;
    
    desconto = desconto === '' ? 0 : desconto;
    participacao = participacao === '' ? 0 : participacao;

    let regexCodigoMLB = /^(MLB|mlb)?\d+$/;
    let regexDesconto = /^\d+$/;
    let regexParticipacao = /^\d+$/


    let msg_falha = 'Campo vazio ou inválido! os seguintes:';
    let falhas = false
    if(empresa === '' || empresa === undefined ){
        msg_falha += ' Empresa';
        falhas = true;
    }
    if(codigoMLB === '' || codigoMLB === undefined || !regexCodigoMLB.test(codigoMLB)){
        msg_falha += ' Código MLB';
        falhas = true;
    }
    if(desconto === '' || desconto === undefined || !regexDesconto.test(desconto)){
        msg_falha += ' Valor de Desconto';
        falhas = true;
    }
    if(participacao === '' || participacao === undefined || !regexParticipacao.test(participacao)){
        msg_falha += ' Participação MLB';
        falhas = true;
    }
    if(!falhas){
        let url = 'https://ecomparts.com.br/geraValor.php?empresa='+empresa+'&codigoMLB='+codigoMLB+'&desconto='+desconto+'&participacao='+participacao;
        chrome.tabs.create({ url: url });
    }else{
        document.getElementById('avisos').innerHTML = msg_falha;
    }
}