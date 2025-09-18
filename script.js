// um listener para o evento keydown, que desloca um “personagem”
var canvas = document.getElementById('canvas_teclado_1');
var context = canvas.getContext('2d');

// Posição inicial do personagem
var posicao = 0;
desenharPersonagem();

document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 37) {
        posicao -= 10;
        desenharPersonagem();
    }
    else if (evento.keyCode == 39) {
        posicao += 10;
        desenharPersonagem();
    }
});
    
// Um personagem não muito simpático, mas...
function desenharPersonagem() {
context.clearRect(0, 0, canvas.width, canvas.height);
context.fillRect(posicao, 100, 20, 50);
}
