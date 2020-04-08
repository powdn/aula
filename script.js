/*
    arquivo script.js 
    criado e inserido na pág java.html
*/
// alert('carregou o script')

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

if(a ==b){
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
