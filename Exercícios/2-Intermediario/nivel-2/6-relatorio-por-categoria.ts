/*
🧠 Desafio: Relatório de Estoque por Categoria
Você vai trabalhar com um inventário de produtos agrupados por categoria. O objetivo é:

✅ Requisitos:
Filtrar apenas os produtos disponíveis.

Agrupar os produtos por categoria.

Para cada categoria, mostrar:

Total de produtos disponíveis

Valor total em estoque (preço × quantidade)

Nome do produto mais caro da categoria
*/

interface ProdutoEstoque {
  nome: string;
  categoria: string;
  preco: number;
  quantidade: number;
  disponivel: boolean;
}

const inventario: ProdutoEstoque[] = [
  {
    nome: "Mouse",
    categoria: "Periféricos",
    preco: 150,
    quantidade: 12,
    disponivel: true,
  },
  {
    nome: "Teclado",
    categoria: "Periféricos",
    preco: 200,
    quantidade: 10,
    disponivel: true,
  },
  {
    nome: "Monitor",
    categoria: "Periféricos",
    preco: 1200,
    quantidade: 5,
    disponivel: false,
  },
  {
    nome: "SSD",
    categoria: "Armazenamento",
    preco: 500,
    quantidade: 8,
    disponivel: true,
  },
  {
    nome: "HD",
    categoria: "Armazenamento",
    preco: 300,
    quantidade: 15,
    disponivel: true,
  },
  {
    nome: "Placa de Vídeo",
    categoria: "Hardware",
    preco: 2500,
    quantidade: 3,
    disponivel: false,
  },
  {
    nome: "Processador",
    categoria: "Hardware",
    preco: 1800,
    quantidade: 2,
    disponivel: true,
  },
];

function relatorioInventario(lista: ProdutoEstoque[]) {
  const disponivel = lista.filter((itens) => itens.disponivel);
  const perifericos = disponivel.filter(
    (categoria) => categoria.categoria === "Periféricos"
  );
  const categoriaName = perifericos.map((name) => name.categoria);
  const result = perifericos.map((itens) => itens.preco * itens.quantidade);
  const total = result.reduce((prevValue, elem) => prevValue + elem, 0);

  return `Categoria: ${categoriaName[0]}\nTotal de intens: ${perifericos.length}\nValor total em estoque: ${total}`;
}

console.log(relatorioInventario(inventario));
