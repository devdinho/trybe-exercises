/*
  1. Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!');
  2. Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
  3. Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
  4. Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução
     das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:
*/


// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
//Acordando!!