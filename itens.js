/* if/else */
let a = 10
let b = 20

if (a = b) {
console.log("a é igual a b")
} else {
  console.log("a não é igual a b")
  
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

  /* switch case
  tarefas: 1- rota de entrega
  2- if/else de alguém que vai tirar carta */

  
 let localAtual = 'correios';
  switch(localAtual) {
    case 'endereço de saída':
      console.log('Seu produto ainda não saiu para entrega. Cheque novamente em breve.');
      break;
    case 'viajando':
      console.log('Seu produto está viajando. Cheque novamente em breve para receber atualizações.')
      break;
    case 'correios':
      console.log('Seu produto está nos correios. Em breve chegará a seu destino final!')
      break;
       case 'destino final':
      console.log('Seu produto chegou!')
      break;
    default:
      console.log('Algo deu errado. Por favor, entre em contato.);
                  break;
  }
  
  
  const idadeExigida = 18;
  const idadeAtual = 15;

  if (idadeAtual => idadeExigida) {
    console.log('Você foi aprovado para tirar sua habilitação. Bem vindo(a) ao sistema!');
  } else {
    console.log('Sentimos muito, mas você precisa esperar um pouco mais para tirar sua habilitação.');
    ]
  
  
/* Laço for 06-02-26 
tarefa: criar tabuada do 2 */
  
for (let i = 1; i <= 10; i ++) {
console.log('2x' + i + '=' + (2 * i));
}
  
