export const SETA_ESQUERDA = 37;
export const SETA_DIREITA = 39;
export const ESPACO = 32; 

export default class Teclado{
    constructor(elemento) {
        this.pressionadas = [];
        this.disparadas = [];
        this.funcoesDisparo = [];

        elemento.addEventListener('keydown', (e) => {
            const tecla = e.keyCode;
            this.pressionadas[tecla] = true;

            if (this.funcoesDisparo[tecla] && !this.disparadas[tecla]) {
                this.disparadas[tecla] = true; 
                this.funcoesDisparo[tecla]();
            }
        }); 

        elemento.addEventListener('keyup' , (e) => {
            this.pressionadas[e.keyCode] = false;
            this.disparadas[e.keyCode] = false;
        });

    }

    pressionada(tecla) {
        return this.pressionadas[tecla];
    }

    disparou(tecla, callback) {
        this.funcoesDisparo[tecla] = callback;
    }
}


