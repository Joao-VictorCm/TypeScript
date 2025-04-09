/* 
🧪 Exercício 4 – Total do valor dos produtos disponíveis
📋 Enunciado:
Crie uma função chamada calcularTotalDisponiveis que:
Recebe um array de produtos (como o produtos que você já usou).
Filtra apenas os produtos disponíveis.
Soma o preço de todos esses produtos.
Retorna o total com duas casas decimais.

🔧 Dica:
Você vai usar .filter() junto com .reduce().
A lógica do .reduce() é assim:

array.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual.algo;
}, 0); */

interface Produto {
  name: string;
  price: number;
  disponivel: boolean;
}

const items: Produto[] = [
  { name: "caneta", price: 1.5, disponivel: true },
  { name: "lapis", price: 0.5, disponivel: true },
  { name: "estojo", price: 5, disponivel: false },
  { name: "borracha", price: 2.3, disponivel: true },
];

function calcularTotalDisponiveis(lista: Produto[]) {
  const disponiveis = lista.filter((produto) => produto.disponivel);

  const total = disponiveis.reduce((soma, produto) => {
    return soma + produto.price;
  }, 0);

  return total.toFixed(2);
}

const result = calcularTotalDisponiveis(items);
console.log("Total em estoque: R$ " + result);
