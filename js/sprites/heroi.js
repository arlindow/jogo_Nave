import Bola from "./bola.js";
import { SETA_ESQUERDA, SETA_DIREITA  } from "../input/teclado.js";


// Códigos únicos para as direções
export const DIRECAO_ESQUERDA = 1;
export const DIRECAO_DIREITA = 2;


export default class Heroi {
    constructor(context, teclado, animacao) {        
        this.context = context;
        this.teclado = teclado;
        this.animacao = animacao;
    
        this.x = 0;
        this.y = 100;
        this.direcao = DIRECAO_DIREITA;

    }

    atualizar() {
       if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
               this.direcao = DIRECAO_ESQUERDA;
               this.x -= 10;
       }
       else if (this.teclado.pressionada(SETA_DIREITA) &&
           this.x < this.context.canvas.width - 20) {
               this.direcao = DIRECAO_DIREITA; 
               this.x += 10;
    }}


    desenhar() {
        const ctx = this.context;
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, 20, 50);
        ctx.restore();
}

    atirar() {
        const tiro = new Bola(this.context, this.animacao);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10;
        tiro.raio =10;
        tiro.cor = 'red';
        
        tiro.velocidadeX =
            this.direcao === DIRECAO_ESQUERDA ? -20 : 20;

        this.animacao.novoSprite(tiro);

    }

    
}