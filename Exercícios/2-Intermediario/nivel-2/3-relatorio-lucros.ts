/*
🧠 Desafio: Relatório de Lucro com Desconto
Você tem uma lista de produtos à venda. Cada produto tem:

name (string)

price (number)

disponivel (boolean)

quantidadeVendida (number) ✅

✅ Objetivo:
Filtrar apenas os produtos disponíveis.

Aplicar um desconto de 10% no preço de cada produto.

Calcular o lucro total com base na quantidade vendida de cada produto (com desconto aplicado).

Retornar uma string no seguinte formato:

Lucro total com produtos disponíveis (com 10% de desconto aplicado): R$ XXXX.XX

*/

interface ItensAVendaComDesconto {
  name: string;
  price: number;
  disponivel: boolean;
  qtdVendida: number;
}

const relatorioDeVendas: ItensAVendaComDesconto[] = [
  { name: "monitor", price: 500, disponivel: true, qtdVendida: 5 },
  { name: "mouse", price: 270.99, disponivel: true, qtdVendida: 3 },
  { name: "xbox", price: 2150, disponivel: true, qtdVendida: 8 },
  { name: "fone", price: 60, disponivel: false, qtdVendida: 16 },
  { name: "notbook", price: 3892.0, disponivel: true, qtdVendida: 10 },
  { name: "mousePad", price: 23.8, disponivel: true, qtdVendida: 15 },
];

function relatorioDeLucrosComDesconto(lista: ItensAVendaComDesconto[]) {
  const produtoDisponivel = lista.filter((items) => items.disponivel);
  const ordenDecrescente = produtoDisponivel.sort((a, b) => b.price - a.price);
  return ordenDecrescente.map((itens) => {
    const aplicarDesconto = itens.price - itens.price * 0.1;

    return `Produto: ${itens.name} | Lucro total com desconto: R$ ${(
      aplicarDesconto * itens.qtdVendida
    ).toFixed(2)} `;
  });
}

console.log(relatorioDeLucrosComDesconto(relatorioDeVendas));
