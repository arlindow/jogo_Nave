// Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

/*
* Resumo de conceitos básicos de O.O.
* Classe: um tipo de objetos determinado, composto por atributos
  e métodos definidos;
* Instância: cada objeto pertencente a uma determinada classe;
* Atributo: cada propriedade dos objetos listada em uma classe;
* Método: cada tarefa que um objeto de uma classe pode executar.
*/

// Função construtora - usada com o propósito de criar objetos
function Carro(cor, velocMaxima) {
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;

    // Criando um método
    this.acelerar = function() {
        this.velocAtual += 10;
    }
}

// Instanciando objetos da classe Carro
var meuCarro = new Carro ('vermelho', 250);
var oponente = new Carro ('azul', 300);

// Chamando um método 
meuCarro.acelerar();
oponente.acelerar();
oponente.acelerar();

// Verificando as velocidades
document.getElementById('saida').innerHTML =
    meuCarro.cor + ': ' + meuCarro.velocAtual + '<br>' +
    oponente.cor + ': ' + oponente.velocAtual;

// Objetos sem função construtora
var Moto = {
cor: 'azul',
velocidade: 0,
acelerar: function() {
    this.velocidade += 10;
}
}

// Criando “instâncias” usando Object.create
var minhaMoto = Object.create(Moto);
minhaMoto.cor = 'azul';

var outraMoto = Object.create(Moto);
outraMoto.cor = 'vermelha';

// Chamando método
minhaMoto.acelerar();

// Verificando
document.getElementById('moto').innerHTML =
    minhaMoto.cor + ': ' + minhaMoto.velocidade + '<br>' + // azul: 10
    outraMoto.cor + ': ' + outraMoto.velocidade;           // vermelha: 0

/**
 * O prototype (protótipo)
Declarar métodos como funções anônimas dentro das construtoras tem

um preço: maior consumo de memória. Cada vez que executamos o constru-
tor, uma cópia da função anônima é criada na memória e cada instância terá

sua cópia não somente do atributo, mas também da função:

* Pensando nisso, o JavaScript traz o recurso do prototype (protótipo), que é
um objeto associado a uma função construtora. Colocando os métodos neste
objeto, todas as instâncias usarão as mesmas cópias de cada método.
 */

// Função construtora
function Carro2(cor, velocMaxima) {
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;
}

// Adicionando método ao prototype
// Prototype com os métodos
Carro2.prototype = {
    acelerar: function() {
        this.velocAtual += 10;
}
}

// Instanciando
var meuCarro2 = new Carro2('vermelho', 250);

// Chamando método
meuCarro2.acelerar();

// Verificando
document.getElementById('carro2').innerHTML = 
    meuCarro2.cor + ': ' + meuCarro2.velocAtual;
