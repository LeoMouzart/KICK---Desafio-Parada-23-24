const nomes = [
  "Luan",
  "Leonardo",
  "Bruna",
  "Bianca",
  "Isabella",
  "Carolina",
  "João Lucas",
  "Joana D'arc",
  "Mauricio",
  "Mauro",
];
function sortearNomes() {
  let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  return nomeAleatorio;
}

alert(sortearNomes());
