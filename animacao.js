// ===== Classe Animacao =====
class Animacao {
    // O constructor é chamado quando criamos uma nova instância da classe
    constructor(context) {
        this.context = context;   // Guarda o contexto do canvas (2D)
        this.sprites = [];        // Lista de sprites que serão animados
        this.ligado = false;      // Controla se a animação está ligada
    }

    // Adiciona um novo sprite à lista
    novoSprite(sprite) {
        this.sprites.push(sprite);
    }

    // Liga a animação e inicia o loop
    ligar() {
        this.ligado = true;      // Marca como ligada
        this.proximoFrame();     // Chama o loop de animação
    }

    // Desliga a animação
    desligar() {
        this.ligado = false;     // O loop de animação vai parar no próximo frame
    }

    // Executa um ciclo da animação
    proximoFrame() {
        // Se a animação estiver desligada, sai do método
        if (!this.ligado) return;

        // Limpa a tela antes de redesenhar os sprites
        this.limparTela();

        // Atualiza o estado de cada sprite (posição, física, etc.)
        for (let sprite of this.sprites) {
            sprite.atualizar();
        }

        // Desenha cada sprite no canvas
        for (let sprite of this.sprites) {
            sprite.desenhar();
        }

        // Chama o próximo frame usando requestAnimationFrame
        // Arrow function mantém o "this" referindo-se à instância da classe
        requestAnimationFrame(() => this.proximoFrame());
    }

    // Limpa toda a área do canvas
    limparTela() {
        const ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}