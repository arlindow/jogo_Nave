// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Iniciar o caminho (apaga desenhos anteriores)
context.beginPath();

// Desenhar uma estrela
context.moveTo(75,250); // Ponto Inicial
context.lineTo(150,50);
context.lineTo(225,250);
context.lineTo(50,120);
context.lineTo(250,120);
context.lineTo(75,250);

// Configurar linha
context.lineWidth = 2;
context.strokeStyle = 'red';

// Traçar as linhas do caminho
context.stroke();



