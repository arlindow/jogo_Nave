// ===== Classe Bola =====
export default class Bola {
    // O constructor define os atributos da bola
    constructor(context, animacao) {
        this.context = context;     // Contexto do canvas
        this.animacao = animacao; 

        this.x = 0;                 // Posição horizontal
        this.y = 0;                 // Posição vertical
        this.velocidadeX = 0;       // Velocidade horizontal
        this.velocidadeY = 0;       // Velocidade vertical
        this.cor = 'black';         // Cor da bola
        this.raio = 10;             // Raio da bola
    }

    // Atualiza a posição da bola e trata colisão com as bordas
    atualizar() {
        // MOVE O TIRO
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;

        // REMOVE AO SAIR DA TELA
        if (
            this.x < 0 ||
            this.x > this.context.canvas.width ||
            this.y < 0 ||
            this.y > this.context.canvas.height
        ) {
            this.animacao.excluirSprite(this);
        }
    }

    desenhar() {
    const ctx = this.context;
    ctx.save();

    ctx.fillStyle = this.cor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}
}
