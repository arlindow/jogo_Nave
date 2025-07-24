// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Dados da bola
var x = 20;
var y = 100;
var raio = 5;

// Iniciar a animação
requestAnimationFrame(mexerBola);

// Função de animação
function mexerBola() {
    // Aqui uma bolinha se deslocará
    // Limpar o Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Desenhar a bola
    context.beginPath();
    context.arc(x, y, raio, 0, Math.PI*2);
    context.fill();
    // Deslocar 20 pixels para a direita
    x += 20;
    // Chamar o próximo ciclo da animação
    requestAnimationFrame(mexerBola);
    
}