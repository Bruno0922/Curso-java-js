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