var prompt = require ('prompt-sync')();

let numero = parseInt(prompt("Digite o número desejado:"));
if(numero > 0){
    console.log("Número positivo");
}else if(numero < 0){
    console.log("Número negativo");
}else{
    console.log("O Número é zero");
}



let numero1 = prompt("digite o número:")
numero1 = Number(numero1);
if(numero1 % 2 === 0) {
console.log("PAR");
}else{
console.log("IMPAR");
}




let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("digite a segunda nota:"));
let nota3 =  parseFloat(prompt("digite a terceira nota:"))
let media = (nota1 + nota2 + nota3)/3
console.log("Media:" + media.toFixed(2))
if(media >=7){
console.log("Aluno aprovado");
}else if ( media >=5) {
console.log("Aluno em recuperação");
let recuperaçao = parseFloat(prompt("Digite a nota da recuperaçao"));
let novaMedia = (media + recuperaçao)/2;
if (novaMedia >= 5){
console.log("Aluno aprovado na recuperação!");
}else {
   console.log("Aluno reprovado!");
}
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {

  console.log(`5 x ${i} = ${5 * i}`);
}

 let i= parseInt(prompt("Digite o número que vc deseja:"));
while(i < 11){
    console.log(i);
    i++;
}


let senha = parseFloat(prompt("DIGITE A SENHA:"))
let Senha = 2002
while(senha != 2002){
console.log("acesso invalido");
senha = parseInt(prompt("digite sua senha:"))
}
console.log("acesso permitido");