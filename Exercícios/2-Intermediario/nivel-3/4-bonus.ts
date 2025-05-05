/*
📌 Mini Exercício para Fixar (Tema: Vendedores)
Crie uma função que recebe uma lista de vendedores. Cada vendedor tem:

Desafios:

Filtrar apenas os vendedores ativos.

Calcular o total vendido por cada vendedor.

Descobrir o vendedor com mais vendas (em valor).

Calcular a média de vendas por vendedor ativo.
*/

interface Venda {
  valor: number;
  data: string;
}

interface Vendedor {
  nome: string;
  ativo: boolean;
  vendas: Venda[];
}

const vendedores: Vendedor[] = [
  {
    nome: "Alice",
    ativo: true,
    vendas: [
      { valor: 1200, data: "01-01-2025" },
      { valor: 800, data: "03-01-2025" },
    ],
  },
  {
    nome: "Bruno",
    ativo: false,
    vendas: [
      { valor: 500, data: "02-01-2025" },
      { valor: 300, data: "05-01-2025" },
    ],
  },
  {
    nome: "Camila",
    ativo: true,
    vendas: [
      { valor: 1000, data: "01-01-2025" },
      { valor: 700, data: "06-01-2025" },
    ],
  },
  {
    nome: "Diego",
    ativo: true,
    vendas: [
      { valor: 2000, data: "02-01-2025" },
      { valor: 1500, data: "04-01-2025" },
    ],
  },
];

function relatorioVendas(lista: Vendedor[]) {
  const vendedorAtivo = lista.filter((index) => index.ativo);
}

relatorioVendas(vendedores);
