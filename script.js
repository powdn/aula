/*
    arquivo script.js 
    criado e inserido na pág java.html
*/
// Alerta:
// alert('carregou o script')

//var contas

var a = 1 + 1;
console.log("a - Soma:" + a);
var b = "1" + 1;
console.log("b - Concatenação:" + b);
var c = 2 - 1;
console.log("c - Subtração" + c);
var d = 2*3;
console.log("d - Multiplicação" + d);
var e = 10/5;
console.log("e - Divisão" + e);
var f = 10%2;
console.log("f - Resto:" + f);

//var if else
if(a == b){
    console.log('a é igual a b');
} else{
    console.log('a é diferente de b'); 
}

if(a != c){
    console.log('a é diferente de c');
} else{
    console.log('a é igual a c');
}

if(a > d){
    console.log('a é maior que d');
} else{
    console.log('a não é maior que d');
}

if(a < e){
    console.log('a é maior que e');
} else if(a <=e){
    console.log('a é menor/igual a e')
} else{
    console.log('a não é maior que e')
}

(a == e ? console.log('a é igual a e') : console.log ('a é diferente de e'));

var empresa = "4Linux";

switch(empresa){
    case 'outra':
        console.log ('Outra empresa');
    break;
    case '4Linux':        
        console.log('Empresa 4Linux');
    break;
    default:
        console.log('Que empresa é essa?');
    break;
}

//
var cont = [5,2];
while((cont[0]+cont[1]) < 15){
    cont[0]+=1;
    cont[1]+=2;
    console.log('cont0 = '+cont[0]+' cont1 = '+cont[1]);
}

/* var tabuada

for(var tabuada = 1; tabuada<=10; tabuada++){
    console.log('Tabuada de '+tabuada);

    for(var j = 1; j <=10; j++){
        console.log(tabuada+"x"+j+" = "+ tabuada*j);
    }
}


(escrita extensa do 'for' acima)
 var tabuada = 1, numero = 1;

while(tabuada <=10){
    console.log('Tabuada de  ' + tabuada);

    while(numero <=10){
        console.log(tabuada+"x"+numero+" = "+ tabuada*numero);
        numero++
    }
    numero = 1;
    tabuada++;
} */

//do while
var cont = [5,2];
do{
    cont[0]+=1;
    cont[1]+=2;
    console.log('cont0 = '+cont[0]+' cont1 = '+cont[1]);
}while((cont[0]+cont[1]) < 15)

//var para textos 
var txt = '';
var infos = {nome: '4linux', formacao: 'Formação FrontEnd', curso: 'HTML5 e CSS Essentials'};
var x;

for(x in infos){
    txt += infos[x]+" ";
}

document.getElementById('forin').innerHTML = txt;

var frutas = ['Abacaxi', 'Laranja', 'Manga', 'Morango', 'Banana'];
/*console.log(frutas.length);
for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
} 

for(var pos in frutas){
    console.log("Elemento "+(parseInt(pos)+1)+" - "+frutas[pos]);
}*/

//função
function soma(val1, val2){
    var result = val1 + val2;
    return result;
}

var result = soma (9,9);
console.log(result);

/* var de evento no carregamento onload

function exibeOi(){
    alert('Oi!');
}


var pergunta = window.prompt("Que dia é hoje?");
alert(pergunta);
console.log(pergunta);
document.getElementById('forin').innerHTML = pergunta; */

//função select para exibição de seleção
function mudaCarro(){
    var x = document.getElementById("carros").value;
    document.getElementById('mostraCarro').innerHTML = 'Você selecionou o carro ' + x;
}

//alerta de formulário

function enviaForm(){
    alert('Formulário enviado!');
    return false;
}

function apagaForm(){
    alert('Formulário Apagado');
}

/* função de Blur 
function blurNoInput(){
    alert('Blur!');
    var x = document.getElementById("nome");
    x.value = x.value.toUpperCase(); //deixar em letra maiuscula
}
*/

// preenchimento de cor
function focoNoInput(x){
    x.style.background = "red";
} 

// função deixar conteúdo em caixa alta
function keyUp(){
    var x = document.getElementById("nome");
    x.value = x.value.toUpperCase();
}

// função de alerta ao teclar
function keyPress(){
    alert('KeyPress');
}

// função keydown
function keyDown(){
    alert('KeyDown');
}

// double click (na area da escrita do string)
function dblClick(){
    alert('Clicou Duas Vezes');
}

//mouse down (na area da escrita do string)
function mouseDown(x){
    x.style.color = "yellow";
}

//mouse up (na area da escrita do string)
function mouseUp(x){
    x.style.color = "red";
}

//mover mouse
function moveu(e){
    var x = e.clientX;
    var y = e.clientY;
    var coord = "Coordenadas: ("+x+", "+y+")";
    document.getElementById('coord').innerHTML = coord;
}

//limpar mouse out
function limpaCoord(){
    document.getElementById('coord').innerHTML = '';
}

// manipular objetos
var pessoa = {
    nome: "joão",
    dizerNome: function(){
        console.log("Eu sou " +this.nome);
    }
}

pessoa.dizerNome();

var mercado = [];
mercado.push('Água'); //função push insere valor no objeto
mercado.push('Açúcar');
mercado.push('Água'); 
mercado.push('Açúcar');
mercado.push('Água'); 
mercado.push('Açúcar');
mercado.unshift('Primeiro Elemento');

//mercado.pop(); apagar elemento
//mercado.shift();  apagar primeiro elemento

console.log(mercado);

var numeros = [2,4,6,1,5,7,8];
numeros.sort().reverse(); //ordenar os numeros .reverse função
console.log(numeros);
console.log(mercado.indexOf('Açúcar')); //lastindexof pegar o ultimo  

var concatenado =  mercado.concat(numeros);
console.log(concatenado);

var corte = mercado.slice(0,3); //splice recorta e altera
console.log(corte);


//
var cursos = [];

function Curso(nome, idade, cidade){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    return this;
}

cursos.push(new Curso('João', 78, 'são paulo'));
cursos.push(new Curso('João', 60, 'sorocada'));

for(var curso = 0; curso<cursos.length; curso ++){
    console.log("Nome da Cidade: "+cursos[curso].nome);
}

function confirma(){
    var txt;
    
    var r = confirm("Selecione uma opção");
    if(r == true){
        txt = "Você apertou ok!";
    } else{
        txt = "Você cancelou!";
    }
    alert (txt);
}
