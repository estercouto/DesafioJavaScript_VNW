// 01
let dia = "claro";

if (dia === "claro") {
    console.log("está de dia");
} else{
    console.log("está de noite");
 }

//  02
for(let contador = 20; contador <=20; contador +=2){
    console.log(contador);
}

let contadorMax20 = 0;

while(contadorMax20 < 20){
    console.log((contadorMax20 += 2));
}
//  03

function happiness(estadoEmocional){
    console.log('Você está ' +  estadoEmocional);
}
happiness("feliz");

// 04
function exibirNome(meuNome){
    console.log("Meu nome é " + meuNome)
}
exibirNome("Ester");

// fiz de dois jeitos pois não entedi direito o requisito.

function ExibirNome2(Ester){
    console.log("Meu nome é " + Ester)
}
ExibirNome2("Ester");

// 05

function sobreMim(nome, idade, estiloMusicalPreferido){
    console.log(`Meu nome é ${nome}, minha idade é ${idade}, e  meu estilo de música preferido é ${estiloMusicalPreferido}`);
}
sobreMim("Ester", "20 anos", "RAP");

// 06

function arte(filme, música){
    console.log(`Meu filme favorito é ${filme},e minha música favorita atualmente é ${música}`);
} 
arte("As Branquelas", "Flow Espacial");

// 07

function triplicar(valor, triplicar){
    return valor * triplicar;
}
let resultado = triplicar(3,3);

console.log(resultado);

// 08
let variavel = true;

    if(variavel == true){
    console.log("A variável é true");
   } else {
        console.log("A variável é False");
    }


// 09
let itens = ["café", "BMW X6", "notebook Gamer", "torta", "livro"];

console.log(itens);

// 10

itens.unshift("casa");
console.log(itens);

// 11

itens.pop()
console.log(itens);

// 12

itens.push("FIAT FASTBACK", "Tênis Nike");
console.log(itens);

// 13

itens.shift()
console.log(itens);

// 14

let numbers = [7,5,6,3,8,9,2,1,4]

console.log(numbers.sort());

// 15

let me = {
    nome:"Ester",
    sobrenome: "Bomfim Couto",
    idade: "20 anos" 
};

// 16

me.comidaFavorita = "strogonoff";

// 17

delete me.comidaFavorita;

// 18
console.log(me);

// 19

let cadastro = [
   {
    nome:"Karen",
    idade:25,
    telefone:11986452987,
    amigos:["Vanessa","Everton","Júlia","Andre"] 
   },
   {
    nome:"Anderson",
    idade:35,
    telefone:63958423745,
    amigos:["Giovana","Roberta","Juliana","Andrew"]  
   },
   {
    nome:"Maria",
    idade:70,
    telefone:21945638756,
    amigos:["Jorge","Vitor","Evelyn","Cris"]   
   },
   {
    nome:"Pedro",
    idade:67,
    telefone:41936527814,
    amigos:["Bianca","Higor","Marcos","Ana"]  
   },
   {
    nome:"Enzo",
    idade:15,
    telefone:21963247851,
    amigos:["Henrique","Gabriel","Carlos","Lazaro"] 
   }
];

// 20 

console.log(cadastro[0].amigos[1], cadastro[1].amigos[2], cadastro[2].amigos[3], cadastro[3].amigos[0], cadastro[4].amigos[0]);

  