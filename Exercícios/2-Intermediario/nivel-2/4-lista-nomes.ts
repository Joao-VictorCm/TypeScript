/*
Desafio: Lista de Nomes com Filtros e Transformações
Você recebeu uma lista de pessoas e precisa implementar uma função que:

Filtre apenas os nomes que têm mais de 5 letras.

Converta os nomes filtrados para letras maiúsculas.

Retorne a nova lista ordenada em ordem alfabética.
*/

const nomes: string[] = [
  "Ana",
  "Fernando",
  "Carlos",
  "Bianca",
  "Jo",
  "Patrícia",
  "Léo",
  "Gabriel",
];

function processarNomes(lista: string[], tamanhoMinimo: number = 5) {
  return lista
    .filter((itens) => itens.length >= tamanhoMinimo)
    .map((nomes) => nomes.toUpperCase())
    .sort();
}

console.log(processarNomes(nomes));
