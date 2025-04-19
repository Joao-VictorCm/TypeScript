/*
 Desafio Avançado: Relatório Inteligente de Vendas
 Enunciado:
Você recebeu uma lista de produtos vendidos em uma loja. Cada item possui:

name: nome do produto

price: preço do produto

disponivel: se ainda está à venda ou não

qtdVendida: quantidade vendida

categoria: categoria do produto (ex: "hardware", "periféricos", "acessórios")

Com base nessa lista, crie uma função que gere um relatório agrupado por categoria, mostrando:

Nome da categoria

Quantidade total de produtos vendidos nessa categoria

Lucro total da categoria (considerando 10% de desconto aplicado sobre o preço)

Produtos mais vendidos da categoria (até 2 nomes)


🎯 Dicas:
Use reduce para agrupar por categoria

Para cada categoria, calcule o lucro considerando 10% de desconto

Use sort para encontrar os mais vendidos

Estruture o retorno como um array de strings ou objetos formatados para exibição


*/

interface ProdutoLoja {
  name: string;
  price: number;
  disponivel: boolean;
  qtdVendida: number;
  categoria: string;
}

const produtosVendidos: ProdutoLoja[] = [
  {
    name: "Teclado",
    price: 150,
    disponivel: true,
    qtdVendida: 10,
    categoria: "prerifericos",
  },
  {
    name: "Mouse",
    price: 100,
    disponivel: true,
    qtdVendida: 20,
    categoria: "prerifericos",
  },
  {
    name: "Monitor",
    price: 1700,
    disponivel: false,
    qtdVendida: 5,
    categoria: "prerifericos",
  },
  {
    name: "Placa de Vídeo",
    price: 1200,
    disponivel: false,
    qtdVendida: 3,
    categoria: "hardware",
  },
  {
    name: "HeadSet",
    price: 159.36,
    disponivel: true,
    qtdVendida: 7,
    categoria: "prerifericos",
  },
  {
    name: "Placa mae",
    price: 1350,
    disponivel: true,
    qtdVendida: 5,
    categoria: "hardware",
  },
  {
    name: "Xbox",
    price: 2100,
    disponivel: true,
    qtdVendida: 3,
    categoria: "hardware",
  },
  {
    name: "Notbook",
    price: 5500,
    disponivel: false,
    qtdVendida: 3,
    categoria: "hardware",
  },
];

function relatorioPorCategoria(lista: ProdutoLoja[]) {
  const produtoDisponivel = lista.filter((itens) => itens.disponivel);

  const prerifericos = produtoDisponivel.filter(
    (itens) => itens.categoria == "prerifericos"
  );

  const qtdv = prerifericos.reduce(
    (prevValue, elem) => prevValue + elem.qtdVendida,
    0
  );

  const totalSemDesconto = prerifericos.reduce(
    (acc, item) => acc + item.price * item.qtdVendida,
    0
  );

  const totalComDesconto = totalSemDesconto * 0.9;

  const top2 = prerifericos
    .sort((a, b) => b.qtdVendida - a.qtdVendida)
    .slice(0, 2)
    .map((item) => item.name);

  // Aí sim você retorna uma única string:
  return `Categoria: prerifericos | Total vendido: R$ ${totalComDesconto.toFixed(
    2
  )} | Mais vendidos: ${top2.join(", ")}`;
}

console.log(relatorioPorCategoria(produtosVendidos));
