window.onload = dados;

function dados(){
    let formulario = document.getElementById('form');
    formulario.onsubmit = leitura;
}

function leitura(){
    let senha,codigo,formulario;
    formulario = document.getElementById('form');
    senha = formulario.elements.item(0).value;
    codigo = 'batata';
    if (senha == codigo){
        alert('senha correta');
    }else{
        alert('senha incorreta')
    }

}

