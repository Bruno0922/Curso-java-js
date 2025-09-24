/*
document.getElementById("text").innerHTML="Primeiro texto <b> JS </b>!";
alert(5+15);


var pote = "Bombom";
alert(pote);

var a = 1;
var b = 2;
var c = 3;
var d = (a+b+c);
alert(d);


var nome, sobrenome,nomeCompleto;
nome = "Bruno";
sobrenome = "Conceição";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("text").innerHTML= nomeCompleto;
*/

/*🔹 var

Escopo: Função (ou global, se declarada fora de função).

Reatribuição: Pode ser reatribuída.

Redeclaração: Pode ser redeclarada no mesmo escopo (isso pode causar bugs).

Hoisting: Sofre hoisting (é "elevada" para o topo, mas fica com valor undefined até ser inicializada).

⚠️ Hoje em dia, é pouco usado porque pode gerar comportamentos inesperados.

EXEMPLO:

var x = 10;
var x = 20; // permitido
console.log(x); // 20


🔹 let
Escopo: Bloco ({ }), mais restrito e seguro.

Reatribuição: Pode ser reatribuída.

Redeclaração: ❌ Não pode ser redeclarada no mesmo escopo.

Hoisting: Também sofre hoisting, mas não pode ser usada antes de ser declarada (gera erro de referência).

Exemplo:

let y = 10;
y = 15; // permitido
// let y = 20; ❌ não permitido no mesmo escopo
console.log(y); // 15





const z = 30;
// z = 40; ❌ não permitido

const arr = [1, 2, 3,4];
arr.push(5); // ✅ permitido
console.log(arr); // [1, 2, 3, 4]

*/

/*
📌 Operadores em JavaScript

São símbolos usados para realizar operações. 
Categorias principais:

1. Aritméticos (matemáticos) → +, -, *, /, % 
2. Atribuição (valor para variável) → =, +=, -=, *=, /= 
3. Sequência (concatenação de strings) → +
4. Comparação (comparar valores) → ==, ===, !=, <, >, <=, >=
5. Condicional (ternário) → condição ? valor1 : valor2
6. Lógicos → &&, ||, !


// ==========================
// Operadores Aritméticos
// ==========================
let valor1 = 5;
let valor2 = 2;
let total = valor1 + valor2;

console.log("Soma:", total); // 7

// Exemplos práticos:
// 1. Calculadora simples
// 2. Preço total de produtos
// 3. Média de notas


// ==========================
// Operador de Pré-incremento
// ==========================
valor1 = 5;
total = ++valor1;

console.log("Pré-incremento:", total); // 6
console.log("Valor1 atualizado:", valor1); // 6

// Exemplos práticos:
// 1. Contadores automáticos
// 2. Controle de tentativas
// 3. Percorrer arrays


// ==========================
// Operadores de Atribuição
// ==========================
valor1 = 5;
valor2 = 2;

valor1 += valor2; // equivalente a valor1 = valor1 + valor2
console.log("Atribuição (+=):", valor1); // 7

// Exemplos práticos:
// 1. Acumular pontos em jogo
// 2. Somar valores no carrinho
// 3. Contador em loops


// ==========================
// Operadores de Sequência (Concatenação)
// ==========================
let nome = "Bruno ";
let sobrenome = "Souza";

let nomeCompleto = nome + sobrenome;
console.log("Concatenação:", nomeCompleto); // Bruno Souza

// Exemplos práticos:
// 1. Mensagens de boas-vindas
// 2. Frases dinâmicas
// 3. Exibir informações em páginas


// ==========================
// Operadores de Comparação
// ==========================
valor1 = 8;
valor2 = 10;

console.log("== :", valor1 == valor2);   // false
console.log("=== :", valor1 === valor2); // false
console.log("!= :", valor1 != valor2);   // true
console.log("< :", valor1 < valor2);     // true
console.log("> :", valor1 > valor2);     // false

// Exemplos práticos:
// 1. Verificar igualdade ou diferença
// 2. Condições de maior/menor
// 3. Validar tipos de dados


// ==========================
// Operador Ternário
// ==========================
let idade = 18;
let eleitor = (idade < 18) ? "Não eleitor" : "Sim, eleitor";

console.log(`Idade: ${idade} → ${eleitor}`);

// Exemplos práticos:
// 1. Verificar permissão de acesso
// 2. Mensagens dinâmicas
// 3. Simplificação de if/else


// ==========================
// Operadores Lógicos
// ==========================
idade = 65;

console.log("&& :", (idade > 60 && idade < 70));  // true
console.log("|| :", (idade === 65 || idade === 70)); // true
console.log("!  :", !(idade === 65)); // false

// Exemplos práticos:
// 1. Validações múltiplas
// 2. Regras de acesso
// 3. Negação de condições
*/

/*
📌 FUNÇÕES EM JAVASCRIPT
Uma função é um bloco de código projetado para executar uma tarefa específica.
Pode ser vista como uma "pequena fábrica": você fornece uma entrada (parâmetros)
e recebe uma saída (retorno).

Uma função só é executada quando é invocada (chamada).
*/

// ==========================
// Exemplo 1: Função de Soma
// ==========================
function soma(a, b) {
  return a + b;
}

document.getElementById("text").innerHTML = `Resultado da soma: ${soma(10, 10)}`;


// ==========================
// Exemplo 2: Conversão de Real para Dólar
// ==========================
function realParaDolar(real, cotacao) {
  return real * cotacao;
}

const total = realParaDolar(10, 5.08);
console.log(`Conversão de R$10,00 → $${total.toFixed(2)}`);


// ==========================
// Exemplo 3: Função em Evento de Botão
// ==========================
function alertaHello() {
  alert("Olá, pessoal!");
}
// Essa função pode ser chamada diretamente no HTML:
// <button onclick="alertaHello()">Clique aqui</button>


// ==========================
// Exemplo 4: Conversão Fahrenheit → Celsius
// ==========================
function paraCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

const temperatura = paraCelsius(77);
console.log(`A temperatura é ${temperatura.toFixed(1)}°C`);


/* OBJETOS
   Objetos em JavaScript são coleções de pares chave-valor, ou seja,
   variáveis que armazenam múltiplos valores organizados em propriedades.
   Além de propriedades, objetos também podem conter métodos
   (funções dentro de um objeto).
*/

// Criando um objeto "carro"
const carro = { 
    // Propriedades
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",

    // Método: função associada ao objeto
    buzina: function () {
        alert("Biii 🚗");
    },

    // Método que retorna informações completas
    completo: function () {
        // `this` faz referência ao próprio objeto
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`;
    }
};

// Exemplos de uso:
console.log(carro.completo());  // Mostra marca e modelo
// console.log(carro);          // Mostra todas as propriedades
// console.log(carro.modelo);   // Mostra apenas o modelo
// carro.buzina();              // Executa o método buzina

/* EVENTOS EM JAVASCRIPT
Eventos são ações disparadas pela interação do usuário com a página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Principais eventos:
- onclick        → disparado ao clicar
- ondblclick     → clique duplo
- onmouseover    → mouse sobre o elemento
- onmouseout     → mouse sai do elemento
- onmousedown    → botão do mouse pressionado
- onmouseup      → botão do mouse solto
- onfocus        → elemento recebe foco (ex: input)
- onchange       → alteração de conteúdo (ex: select)
- onblur         → elemento perde foco
- onkeydown      → tecla pressionada
- onkeypress     → tecla pressionada e solta
- onkeyup        → tecla solta
- onload         → página carregada
- onresize       → janela redimensionada
*/

// Clique simples: muda cor do fundo
function eventoClick() {
  document.body.style.backgroundColor = "red";
}

// Clique duplo: alerta
function eventoDblClick() {
  alert("Evento de clique duplo");
}

// Mouse sobre a div
function viraVermelho() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}

// Mouse sai da div
function viraAzul() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}

// Campo select alterado
function mudou() {
  console.log("O select foi alterado");
}

// Quando o input recebe foco
function limpaTexto() {
  document.getElementById("Texto").value = "";
}

// Quando o input perde o foco
function eventoBlur() {
  console.log("O campo perdeu o foco");
}

// Tecla pressionada dentro do input
function teclaPressionada() {
  let input = document.getElementById("Texto").value;
  console.log("Digitando: " + input);
}


/* ARRAYS
Os arrays em JavaScript são usados para armazenar vários valores em uma única variável.
Diferente dos objetos, que funcionam com propriedades (chave/valor),
os arrays funcionam por **posição** (índices numéricos começando do 0).
*/

// ----------------------------
// 🔹 Criando Arrays
// ----------------------------

// Forma 1: Mais usada (colchetes [])
const lista1 = ["arroz", "feijão", "macarrão", "leite"];

// Forma 2: Adicionando item por índice
const lista2 = [];
lista2[0] = "arroz";
lista2[1] = "feijão";
lista2[2] = "macarrão";
lista2[3] = "leite";

// Forma 3: Usando new Array()
const lista3 = new Array("arroz", "feijão", "macarrão", "leite");

// ----------------------------
// 🔹 Acessando e alterando valores
// ----------------------------
const lista = ["arroz", "feijão", "macarrão", "leite"];
lista[0] = "Café"; // Alterando o valor da posição 0
console.log(lista); // Mostra a lista completa
alert(lista[0]); // Mostra apenas o primeiro item → "Café"

// ----------------------------
// 🔹 Trabalhando com arrays
// ----------------------------
const Pessoa = ["Bruno", "Conceição", 20];

console.log(Pessoa.length);         // Conta os itens do array → 3
console.log(Pessoa[Pessoa.length-1]); // Mostra o último item → 20



console.log(Array.isArray(Pessoa)); // Verifica se é um array → true

// ----------------------------
// 🔹 Diferença entre Array e Objeto
// ----------------------------

// Array (acesso por índice)
console.log(Pessoa[0]); // Bruno

// Objeto (acesso por chave)
const pessoaObj = {nome:"Bruno", sobrenome:"Conceição", idade:20};
console.log(pessoaObj.nome); // Bruno



// Exemplo de array
const pessoa = ["Bruno", "Conceição", 20];

// ----------------------------
// 🔹 Adicionar e remover itens
// ----------------------------
pessoa.push("Brasileiro");  // Adiciona no final
console.log(pessoa);

pessoa.pop();               // Remove o último item
console.log(pessoa);

pessoa.shift();             // Remove o primeiro item
console.log(pessoa);

pessoa.unshift("Bonitão");  // Adiciona no início
console.log(pessoa);

delete pessoa[0];           // Remove o item pelo índice, mas deixa "undefined"
console.log(pessoa);

// ----------------------------
// 🔹 splice()
// ----------------------------
// splice(posição, quantosRemover, itensParaAdicionar...)
pessoa.splice(1, 0, "Item 1", "Item 2"); // Adiciona a partir do índice 1
console.log(pessoa);

// ----------------------------
// 🔹 join()
// ----------------------------
document.getElementById("Teste02").innerHTML = pessoa.join(" * ");  
// Une os itens em uma string → "undefined * Item 1 * Item 2 * Conceição * 20"

// ----------------------------
// 🔹 concat()
// ----------------------------
const Lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"];
const Lista2 = ["Suco", "Refrigerante", "Carne"];
const superlista = Lista1.concat(Lista2);
console.log(superlista);

// ----------------------------
// 🔹 slice()
// ----------------------------
const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Cristiano Ronaldo", "Vampeta", "Diniz"];
const melhores = jogadores.slice(2, 6); // Do índice 2 até antes do índice 6
console.log(melhores); // ["Pelé", "Maradona", "Neymar", "Cristiano Ronaldo"]

// ----------------------------
// 🔹 sort()
// ----------------------------
const jogoordem = jogadores.sort(); // Ordem alfabética
console.log(jogoordem);

const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(function(a, b){ return a - b }); // Ordem crescente
console.log(numeros);

// ----------------------------
// 🔹 Math.max / Math.min
// ----------------------------
function maiornumero(array){
    return Math.max.apply(null, array);
}
console.log("Maior número:", maiornumero(numeros));

function menornumero(array){
    return Math.min.apply(null, array);
}
console.log("Menor número:", menornumero(numeros));

// ----------------------------
// 🔹 filter()
// ----------------------------
const maior20 = numeros.filter(function(value){
    return value > 20;
});
console.log(maior20); // Números maiores que 20




/* ==========================
   IF e ELSE - Exemplos
   ========================== */

// Exemplo 1: Interruptor
var interruptor = "off";

if (interruptor == "on") {
    alert("A lâmpada está ligada");
} else {
    alert("A lâmpada está desligada");
}

// --------------------------

// Exemplo 2: Saudação pelo horário
var hora = new Date().getHours(); // pega a hora atual

if (hora < 12) {
    alert("Bom dia");
} else if (hora < 18) {
    alert("Boa tarde");
} else {
    alert("Boa noite");
}

// --------------------------

// Exemplo 3: Verificação de campo input
function verificar() {
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("teste03");
        p.innerHTML = "O campo está vazio, preencha por favor!";
        p.style.color = "red";
    } else {
        alert("O nome foi enviado com sucesso!");
    }
}


/* Switch 
É usado para realizar diferntes ações com base em diferntes condições no mesmo bloco de verificação. caso a condição não seja compativel
não sera executada e o vaor padrão será acionado.
*/

function verificarcor (){
    let cor = document.getElementById("cor").value;

    switch (cor){
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue";
            break;

        case "vermelho":
            // o que acontece
            document.body.style.backgroundColor = "red";
            break;

        case "amarelo":
            // o que acontece
            document.body.style.backgroundColor = "yellow";
            break;

        default:
            document.getElementById("teste04").innerHTML = "Cor deconhecida para:" + cor;
    }
    
}

/* Laço de repetição for
/* ==========================
   Laços de Repetição (FOR)
   ========================== 
   Os laços oferecem um jeito fácil e rápido de executar
   uma ação repetidas vezes.
*/

// --------------------------
// Exemplo 1: Contando de 0 até 10.000
// --------------------------
// Início: i = 0
// Condição: repetir enquanto i < 10001
// Incremento: i++ (aumenta 1 a cada volta)
/*
for (let i = 0; i < 10001; i++) {
    document.getElementById("teste05").innerHTML += i + " , ";
}
*/

// --------------------------
// Exemplo 2: Lista de anos (1900 até o ano atual)
// --------------------------
var ano = new Date().getFullYear(); // Pega o ano atual do sistema

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += 
        "<option value='" + i + "'>" + i + "</option>";
}

// --------------------------
// Exemplo 3: Lista de carros
// --------------------------
const carros = ["GOL", "FUSCA", "BRASILIA", "DEL REY", "CHEVETTE"];
var tamanho = carros.length; // Quantidade de itens no array

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste06").innerHTML += carros[i] + " - ";
}


/** 
 * CLASSES EM JAVASCRIPT
 * 
 * Em 2015 foi introduzido no JS as classes.
 * As classes são um conceito antigo em programação
 * e várias linguagens utilizam elas. Mas no JavaScript
 * isso é relativamente novo, por isso mesmo programadores 
 * experientes às vezes não sabem usar muito bem.
 * 
 * Basicamente, as classes são como "fábricas" para criar objetos.
 * Pode-se dizer que são "funções especiais" para criação de objetos.
 * 
 * Assim como uma fábrica da vida real precisa de máquinas para 
 * construir os objetos, as classes no JS usam um método `constructor()` 
 * para fabricar os objetos.
 */

class Carro {
    constructor(valor1, valor2, valor3) { // valores que vão ser passados no objeto
        this.Marca = valor1;
        this.Modelo = valor2;
        this.Ano = valor3;
    }

    buzina() {
        return this.Marca + " buzina: biiii";
    }
}

// Objetos criados a partir da classe Carro
const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol Quadrado", 2005);

// Exibindo o resultado no console
console.log(uno.buzina());
console.log(gol.buzina());

/* 
 * Dica: Classes sempre precisam ser declaradas 
 * antes da criação dos objetos.
 */
