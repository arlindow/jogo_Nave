var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Preenchimento vermelho
context.fillStyle = 'red';
context.fillRect(50, 50, 100, 100);
// Contorno azul, com espessura de 3px
context.lineWidth = 3;
context.strokeStyle = 'blue';
context.strokeRect(50, 50, 100, 100);

