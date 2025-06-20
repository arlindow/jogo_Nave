var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Desenhar um retângulo
context.fillRect(50, 50, 100, 100);
// Se trocarmos fillRect por strokeRect, veremos apenas o contorno:
// context.strokeRect(50, 50, 100, 100);
