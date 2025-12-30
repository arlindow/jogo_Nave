// referenciando canvas
var canvas = document.getElementById('canvas_teclado_3');
var context = canvas.getContext('2d');

var teclado = new Teclado(document);
var animacao = new Animacao(context);

// Sprite
var heroi = new Heroi(context, teclado, animacao);
heroi.x = 0;
heroi.y = 100;

animacao.novoSprite(heroi);

teclado.disparou(ESPACO, function () {
    heroi.atirar();
});

// Inicia o loop do jogo
animacao.ligar();
