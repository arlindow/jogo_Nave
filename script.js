// referenciando canvas
var canvas = document.getElementById('canvas_teclado_2');
var context = canvas.getContext('2d');

// Posição inicial do personagem
var posicao = 0;
desenharPersonagem();

var teclado = new Teclado(document); 


requestAnimationFrame(animar);

function animar() {
    if (teclado.pressionada(SETA_ESQUERDA))
        posicao -= 10;
    else if (teclado.pressionada(SETA_DIREITA))
        posicao += 10;
    desenharPersonagem();
    requestAnimationFrame(animar);
}
    
// Um personagem não muito simpático, mas...
function desenharPersonagem() {
context.clearRect(0, 0, canvas.width, canvas.height);
context.fillRect(posicao, 100, 20, 50);
}
