export default class Animacao {
    constructor(context) {
        this.context = context;
        this.sprites = [];
        this.ligado = false;
    }

    novoSprite(sprite) {
        this.sprites.push(sprite);
    }

    excluirSprite(sprite) {
        const index = this.sprites.indexOf(sprite);
        if (index !== -1) {
            this.sprites.splice(index, 1);
        }
    }

    ligar() {
        this.ligado = true;
        this.proximoFrame();
    }

    desligar() {
        this.ligado = false;
    }

    proximoFrame() {
        if (!this.ligado) return;

        this.limparTela();

        for (const sprite of this.sprites) {
            sprite.atualizar();
        }

        for (const sprite of this.sprites) {
            sprite.desenhar();
        }

        requestAnimationFrame(() => this.proximoFrame());
    }

    limparTela(){
        const ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

}