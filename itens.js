/* if/else */
let a = 10
let b = 20

if (a = b) {
console.log("a é igual a b")
} else {
  console.log("a não é igual a b")

/* array */


/* function */
  
/*objeto*/
const pessoa1 = {
  nome: 'Carol',
  idade: 20,
}

/*objeto com função*/
function criarPessoa(nome, idade) {
return {
  nome: nome,
  idade: idade,
};
}

const pessoa1 = criarPessoa('Carol', 20);
console.log(pessoa1.idade);

/* 25.01.26 criação de datas 
tarefa: mostrar o mês do ano */

  const data = new Date('2026-01-25');
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ]
  console.log(meses, data.getMonth());

  


