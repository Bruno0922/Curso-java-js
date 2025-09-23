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
Objeto são basicamente variaveis com muitos valores
Ex:const carro = {marca: "ford", modelo: "ka", ano: 2015}

os valores dentro de um objeto são chamados de propriedades

Objetos tambem podem ter metados> Um metado é uma função colocadas dentro de uma propriedade.
*/

const carro = { // Objeto Sempre usar o const pois ele vai sempre ser valores fixos
    marca: "ford", //Propriedadas
    modelo: "ka", //Propriedadas
    ano: 2015, //Propriedadas
    placa: "ABC-1234", //Propriedadas
    buzina: function() {alert('Biii')}, //Metado com uma função chamada buzina
    completo: function (){
        return "A marca é " + this.marca + " e o modelo é: "+ this.modelo //this signifca"E"
    } // Para adicionar o mais alguma propriedade usa this.propriedade
};

console.log(carro.completo());

//console.log(carro) Mostrar todos os dados do carro
//console.log(carro.modelo) //Se quiser monstrar uma propriedade especifica

//carro.buzina(0); //Para chama função buzina