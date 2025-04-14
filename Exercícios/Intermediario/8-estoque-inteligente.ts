/*
🎯 Tarefa:
Crie uma função chamada gerarResumoPorCategoria que:
Agrupe os produtos por categoria
Para cada categoria, calcule:
Quantos produtos disponíveis existem
O valor total somado de todos os produtos disponíveis
Retorne um array de strings como este:


[
  "Categoria: papelaria | Produtos disponíveis: 3 | Total: R$ 4.30",
  "Categoria: acessorios | Produtos disponíveis: 1 | Total: R$ 80.00"
]
*/

interface ProdutoFiltrado {
  name: string;
  price: number;
  disponivel: boolean;
  categoria: string;
}

const stockList: ProdutoFiltrado[] = [
  { name: "canetao", price: 1.5, disponivel: true, categoria: "papelaria" },
  { name: "lapiseira", price: 0.5, disponivel: true, categoria: "papelaria" },
  { name: "estojos", price: 5, disponivel: false, categoria: "acessorios" },
  { name: "borracha", price: 2.3, disponivel: true, categoria: "papelaria" },
  { name: "bolsa", price: 80, disponivel: true, categoria: "acessorios" },
];

function gerarResumoPorCategoria(lista: ProdutoFiltrado[]) {
  const disponibilidade = lista.filter((items) => items.disponivel);
  const papel = disponibilidade.filter(
    (papel) => papel.categoria === "papelaria"
  );

  const acessorio = disponibilidade.filter(
    (acessorio) => acessorio.categoria === "acessorios"
  );

  const categoriaPapel = papel[0].categoria;

  const categoriaAcessorio = acessorio[0].categoria;

  const valorPapelaria = papel.reduce(
    (prevValue, estoque) => prevValue + estoque.price,
    0
  );

  const valorAcessorio = acessorio.reduce(
    (prevValue, estoque) => prevValue + estoque.price,
    0
  );

  return `Categoria: ${categoriaPapel} | Produtos disponiveis: ${
    papel.length
  } | Total: ${valorPapelaria.toFixed(2)}, 
Categoria: ${categoriaAcessorio} | Produtos disponiveis: ${
    acessorio.length
  } | Total: ${valorAcessorio.toFixed(2)}`;
}

console.log(gerarResumoPorCategoria(stockList));
