/*
💼 Desafio: Controle de Pedidos em um Restaurante
Você deve criar uma função chamada relatorioPedidos() que analisa a produtividade dos garçons e o volume de pedidos.

📋 Regras:
Sua função deve retornar:

Quantos garçons ativos existem.

Qual garçom teve o maior total de pedidos em valor.

A média de valor por pedido considerando apenas garçons ativos.

Se a média de pedidos for abaixo de R$30, exibir um alerta:
"⚠️ Alerta: média de pedidos abaixo do ideal."

*/

type Pedido = {
  prato: string;
  valor: number;
};

type Garcom = {
  nome: string;
  ativo: boolean;
  pedidos: Pedido[];
};

const garcons: Garcom[] = [
  {
    nome: "Lucas",
    ativo: true,
    pedidos: [
      { prato: "Lasanha", valor: 45 },
      { prato: "Refrigerante", valor: 10 },
    ],
  },
  {
    nome: "Carla",
    ativo: true,
    pedidos: [
      { prato: "Pizza", valor: 60 },
      { prato: "Cerveja", valor: 15 },
      { prato: "Sobremesa", valor: 20 },
    ],
  },
  {
    nome: "Marina",
    ativo: false,
    pedidos: [{ prato: "Sopa", valor: 25 }],
  },
];

function relatorioPedidos(lista: Garcom[]) {
  const grcAtivos = lista.filter((status) => status.ativo);

  let totalPedios = 0;
  let grcComMaisPedidos = "";
  let maiorQuantidade = 0;

  for (const grc of grcAtivos) {
    const toalValorPedido = grc.pedidos.reduce((a, b) => a + b.valor, 0);
    console.log(toalValorPedido);

    totalPedios += toalValorPedido;

    if (toalValorPedido > maiorQuantidade) {
      maiorQuantidade = toalValorPedido;
      grcComMaisPedidos = grc.nome;
    }
    0;
  }

  const mediaGeral = grcAtivos.length > 0 ? totalPedios / grcAtivos.length : 0;

  console.log(
    `Garçons ativos: ${grcAtivos.length}\nGarçom com masi valor em pedidos: ${grcComMaisPedidos}\nMédia de valor por pedido: ${mediaGeral} `
  );
}

relatorioPedidos(garcons);
