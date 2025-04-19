/*
🧠 Desafio: Ranking dos Produtos em Estoque com Desconto
Você tem uma lista de produtos à venda. Cada produto possui:

name: nome do produto

price: valor original

disponivel: se está disponível para venda

✅ Regras:
Filtrar apenas os produtos disponíveis.

Aplicar um desconto de 10% sobre o preço original.

Ordenar os produtos com desconto do mais caro para o mais barato.

Retornar uma lista com strings no seguinte formato:

"Produto: [nome] | Preço com desconto: R$ [preço formatado]"

*/

interface ItensAVenda {
  name: string;
  price: number;
  disponivel: boolean;
}

const rankingProdutos: ItensAVenda[] = [
  { name: "monitor", price: 500, disponivel: true },
  { name: "mouse", price: 270.99, disponivel: true },
  { name: "xbox", price: 2150, disponivel: true },
  { name: "fone", price: 60, disponivel: false },
  { name: "notbook", price: 3892.0, disponivel: true },
  { name: "mousePad", price: 23.8, disponivel: true },
];

function rankingProdutosComDesconto(lista: ItensAVenda[]) {
  const produtoDisponivel = lista.filter((items) => items.disponivel);
  const ordenDecrescente = produtoDisponivel.sort((a, b) => b.price - a.price);
  return ordenDecrescente.map((itens) => {
    return `Produto: ${itens.name} | Preço com desconto: R$ ${(
      itens.price -
      itens.price * 0.1
    ).toFixed(2)}`;
  });
}

console.log(rankingProdutosComDesconto(rankingProdutos));
