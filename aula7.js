const pessoa = {
    nome: 'Osvaldo',
    idade:36
};
for (let chave in pessoa){
    console.log(chave);
}
const cores = ['vermelho', 'azul', 'verde'];
for (let indice in cores){
    console.log(indice, cores[indice]);
}

for(let cor of cores){
    console.log(cor);
}

let valorMaior = max(10,9);
console.log(valorMaior);

function max(num1, num2){
    if (num1 > num2)  //return num1 > num2 ? num1 : num2 ; código mais limpo
    return num1;
    else return num2;
}


const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
    return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz';
    if (entrada % 3 === 0)
    return 'Fizz';
    if (entrada % 5 === 0)
    return 'Buzz';
  
    return entrada;
}


verificarVelocidade(132);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    if(velocidade <= velocidadeMaxima)
    console.log('ok');
    else {
      const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPontos); 
      if (pontos >=12)
      console.log('carteira suspensa');
      else 
      console.log("pontos", pontos);
    }
}

exibirTipo(5);

function exibirTipo(limite){
     for (let i = 1; i <= limite; i++) {
        if (i % 2 == 0)
        console.log(i,'par');
        else 
        console.log(i,'impar');
     }
}
