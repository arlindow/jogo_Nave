// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Métodos save e restore
// Um pequeno quadrado verde
context.fillStyle = 'green';
context.fillRect(50,50,25,25);

// Salvamos a configuração e subimos na pilha
context.save();

// Agora um quadrado roxo
context.fillStyle = 'purple';
context.fillRect(100, 50, 25, 25);

// Voltamos para o nível anterior na pilha
context.restore();

// Voltou para o verde!
context.fillRect(150, 50, 25, 25);



