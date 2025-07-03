// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// carregar a imagem
var imagem = new Image();
imagem.src = 'img/ovni.png';
imagem.onload = function () {
    // começar na posição 20
    var x = 20;
    // desenhar as imagens
    for (var i = 1; i <= 5; i++){
        context.drawImage(imagem, x, 20, 64, 32);
        x += 70;
        // Ampliando para o dobro do tamanho
        //context.drawImage(imagem, x, 20, 128, 64);
    }
}
