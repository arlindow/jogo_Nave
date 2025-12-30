// arquivo: teclado.js
// Códigos de teclas
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var ESPACO = 32;

function Teclado(elemento) {
    this.elemento = elemento;

    this.pressionadas = [];
    this.disparadas = [];
    this.funcoesDisparo = [];

    var teclado = this;

    // KEYDOWN
    elemento.addEventListener('keydown', function (evento) {
        var tecla = evento.keyCode;

        teclado.pressionadas[tecla] = true;

        // Dispara apenas uma vez por pressionamento
        if (teclado.funcoesDisparo[tecla] &&
            !teclado.disparadas[tecla]) {

            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla]();
        }
    });

    // KEYUP
    elemento.addEventListener('keyup', function (evento) {
        teclado.pressionadas[evento.keyCode] = false;
        teclado.disparadas[evento.keyCode] = false;
    });
}

// PROTOTYPE
Teclado.prototype = {
    pressionada: function (tecla) {
        return this.pressionadas[tecla];
    },

    disparou: function (tecla, callback) {
        this.funcoesDisparo[tecla] = callback;
    }
};
