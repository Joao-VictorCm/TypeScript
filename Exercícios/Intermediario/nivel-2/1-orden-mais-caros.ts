/*
🧩 Desafio: Top 3 produtos mais caros
✅ O que fazer:
Ordene a lista de produtos por preço decrescente (do mais caro para o mais barato).

Pegue os 3 primeiros itens da lista ordenada.

Para cada item, crie uma string no seguinte formato:


Produto: notbook | Preço: R$ 3892.00
Retorne essas 3 strings em um array.

🔄 Exemplo de retorno esperado:
[
  "Produto: notbook | Preço: R$ 3892.00",
  "Produto: xbox | Preço: R$ 2150.00",
  "Produto: monitor | Preço: R$ 500.00"
]

*/

interface ItensAVenda {
  name: string;
  price: number;
  disponivel: boolean;
}

const intensAVenda: ItensAVenda[] = [
  { name: "monitor", price: 500, disponivel: true },
  { name: "mouse", price: 270.99, disponivel: true },
  { name: "xbox", price: 2150, disponivel: true },
  { name: "fone", price: 60, disponivel: false },
  { name: "notbook", price: 3892.0, disponivel: true },
  { name: "mousePad", price: 23.8, disponivel: true },
];

function itensMaisCaros(lista: ItensAVenda[]) {
  const top3 = lista.sort((a, b) => b.price - a.price).slice(0, 3);
  return top3.map((itens) => {
    return `Produto: ${itens.name} | Preço: ${itens.price}`;
  });
}

console.log(itensMaisCaros(intensAVenda));
