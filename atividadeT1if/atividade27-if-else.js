var prompt = require ('prompt-sync')(); 

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}






function somar(parametro1 ,parametro2) {
    return parametro1 + parametro2; 
    
}
let variavel = somar(55, 1);
console.log(somar(2, 4));
console.log(variavel);
