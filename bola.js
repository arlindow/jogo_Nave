// ===== Classe Bola =====
class Bola {
    // O constructor define os atributos da bola
    constructor(context) {
        this.context = context;     // Contexto do canvas
        this.x = 0;                 // Posição horizontal
        this.y = 0;                 // Posição vertical
        this.velocidadeX = 0;       // Velocidade horizontal
        this.velocidadeY = 0;       // Velocidade vertical
        this.cor = 'black';         // Cor da bola
        this.raio = 10;             // Raio da bola
    }

    // Atualiza a posição da bola e trata colisão com as bordas
    atualizar() {
        const ctx = this.context;

        // Colisão horizontal: inverte a velocidade se bater nas bordas
        if (this.x < this.raio || this.x > ctx.canvas.width - this.raio) {
            this.velocidadeX *= -1;
        }

        // Colisão vertical: inverte a velocidade se bater nas bordas
        if (this.y < this.raio || this.y > ctx.canvas.height - this.raio) {
            this.velocidadeY *= -1;
        }

        // Atualiza posição somando a velocidade
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    }

    // Desenha a bola no canvas
    desenhar() {
        const ctx = this.context;

        ctx.save();                     // Salva o estado atual do canvas
        ctx.fillStyle = this.cor;       // Define a cor da bola
        ctx.beginPath();                // Inicia um novo caminho
        ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false); // Desenha um círculo
        ctx.fill();                     // Preenche o círculo
        ctx.restore();                  // Restaura o estado anterior do canvas
    }
}