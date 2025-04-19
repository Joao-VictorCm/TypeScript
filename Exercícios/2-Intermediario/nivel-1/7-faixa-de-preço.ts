/*
🧠 Exercício 7 – Buscar produtos por faixa de preço
🟨 Enunciado:
Crie uma função chamada buscarPorFaixaDePreco que:
Recebe três parâmetros:
lista: Produto[]
min: number (preço mínimo)
max: number (preço máximo)

Retorna um array com todos os produtos disponíveis cujo price esteja entre min e max, inclusive.
Exibe uma mensagem com os nomes e preços formatados, por exemplo:

"caneta - R$ 1.50"
"borracha - R$ 2.30"
*/

interface Produto02 {
  name: string;
  price: number;
  disponivel: boolean;
}

const estoque: Produto02[] = [
  { name: "caneta", price: 1.5, disponivel: true },
  { name: "lapis", price: 0.5, disponivel: true },
  { name: "estojo", price: 5, disponivel: false },
  { name: "borracha", price: 2.3, disponivel: true },
];

function buscarPorFaixaDePreco(lista: Produto02[], min: number, max: number) {
  const disponivel = lista.filter(
    (produtoDisponivel) =>
      produtoDisponivel.disponivel &&
      produtoDisponivel.price >= min &&
      produtoDisponivel.price <= max
  );

  return disponivel.map((produto) => {
    return `${produto.name} - R$ ${produto.price.toFixed(2)}`;
  });
}

console.log(buscarPorFaixaDePreco(estoque, 0, 3));
