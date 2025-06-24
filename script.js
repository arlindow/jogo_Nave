// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Primeiro arco:
// Novo path
context.beginPath();

// Desenha
context.arc(50,50,40,90*Math.PI/180, 270*Math.PI/180, false);

// Preenchimento
context.fill();

// Contorno
context.stroke();

// Segundo  - iniciar novo Path - Dois arcos desenhados juntos no mesmo path:um é a continuação do outro!
context.beginPath(); 
context.arc(150, 50, 40, 90*Math.PI/180, 270*Math.PI/180,
true);
context.fill();
context.stroke();

// Circunferência completa
context.beginPath();
context.arc(250, 50, 40, 0, 2*Math.PI);
context.fill();
context.stroke();




