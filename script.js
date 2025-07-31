// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

// Dados da bola
var x = 20;
var y = 100;
var raio = 5;

// Controlando o tempo da animação
// Momento inicial
var anterior = new Date().getTime();

// Iniciar a animação
requestAnimationFrame(mexerBola);

// Função de animação
function mexerBola() {
    // Momento atual
    var agora = new Date().getTime();

    // Diferença
    var decorrido = agora - anterior;

    // Aqui uma bolinha se deslocará
    // Limpar o Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Desenhar a bola
    context.beginPath();
    context.arc(x, y, raio, 0, Math.PI*2);
    context.fill();

    // Guardamos o instante para o próximo ciclo
    anterior = agora;
    requestAnimationFrame(mexerBola);

    // Deslocar 20 pixels por segundo
    var velocidade = 20;
    x += velocidade * decorrido / 1000;
    
    
}