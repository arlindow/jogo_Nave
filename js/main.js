import Animacao from "./engine/animacao.js";
import Teclado, {ESPACO} from "./input/teclado.js";
import Heroi from "./sprites/heroi.js";


// referenciando canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const teclado = new Teclado(document);
const animacao = new Animacao(context);

// Sprite
const heroi = new Heroi(context, teclado, animacao);
animacao.novoSprite(heroi);

teclado.disparou(ESPACO, () => {
    heroi.atirar();
});

// Inicia o loop do jogo
animacao.ligar();
