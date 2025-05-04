// ✅ Exercício 3 – Objetos Tipados
// Enunciado:
// Crie um tipo chamado Produto com as seguintes propriedades:
// nome: string
// preco: number
// emEstoque: boolean
// Depois, crie uma variável chamada produto1 do tipo Produto com valores fictícios.

type Item = {
  nome: string;
  preço: number;
  emEstoque: boolean;
};

export const item1: Item = {
  nome: "caneta",
  preço: 1.5,
  emEstoque: true,
};

console.log(item1);
