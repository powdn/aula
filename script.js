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

var cont = [5,2];
while((cont[0]+cont[1]) < 15){
    cont[0]+=1;
    cont[1]+=2;
    console.log('cont0 = '+cont[0]+' cont1 = '+cont[1]);
}

/* for(var tabuada = 1; tabuada<=10; tabuada++){
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

var cont = [5,2];
do{
    cont[0]+=1;
    cont[1]+=2;
    console.log('cont0 = '+cont[0]+' cont1 = '+cont[1]);
}while((cont[0]+cont[1]) < 15)

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

function soma(val1, val2){
    var result = val1 + val2;
    return result;
}

var result = soma (9,9);
console.log(result);


