let filmes = [
  { titulo: 'Como treinar o seu dragão 3', classificacao: '0' },
  { titulo: 'Star Wars - O império Contra-ataca', classificacao: '12' },
  { titulo: 'Batman O cavaleiro das trevas', classificacao: '14' },
  { titulo: 'Dead Pool', classificacao: '16' },
  { titulo: 'The purge', classificacao: '18' }
];

let idade = Number(prompt('Por favor digite sua idade: '));

for (let item in filmes) {
  if (idade >= filmes[item].classificacao) {
    console.log(filmes[item].titulo);
  }
}