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

  //Periféricos
  const perifericos = disponivel.filter(
    (categoria) => categoria.categoria === "Periféricos"
  );
  const resultPer = perifericos.map((itens) => itens.preco * itens.quantidade);
  const totalPer = resultPer.reduce((prevValue, elem) => prevValue + elem, 0);
  const top1Per = perifericos
    .sort((a, b) => b.preco - a.preco)
    .map((name) => name.nome);

  //Armazenamento
  const armazenamento = disponivel.filter(
    (categoria) => categoria.categoria === "Armazenamento"
  );
  const resultArmaz = armazenamento.map(
    (itens) => itens.preco * itens.quantidade
  );
  const totalArmaz = resultArmaz.reduce(
    (prevValue, elem) => prevValue + elem,
    0
  );
  const top1Armaz = armazenamento
    .sort((a, b) => b.preco - a.preco)
    .map((name) => name.nome);

  //Hardware
  const hardware = disponivel.filter(
    (categoria) => categoria.categoria === "Hardware"
  );
  const resultHardware = hardware.map(
    (itens) => itens.preco * itens.quantidade
  );
  const totalHardware = resultHardware.reduce(
    (prevValue, elem) => prevValue + elem,
    0
  );
  const top1Hardware = hardware
    .sort((a, b) => b.preco - a.preco)
    .map((name) => name.nome);

  return `Categoria: ${perifericos[0].categoria}\nTotal de itens: ${perifericos.length}\nValor total em estoque: ${totalPer}\nProduto mais caro: ${top1Per[0]} 
  \nCategoria: ${armazenamento[0].categoria}\nTotal de itens: ${armazenamento.length}\nValor total em estoque: ${totalArmaz}\nProduto mais caro: ${top1Armaz[0]}\n\nCategoria: ${hardware[0].categoria}\nTotal de itens: ${hardware.length}\nValor total em estoque: ${totalHardware}\nProduto mais caro: ${top1Hardware[0]}`;
}

console.log(relatorioInventario(inventario));
