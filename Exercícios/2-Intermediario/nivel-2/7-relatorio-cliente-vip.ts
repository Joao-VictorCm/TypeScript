/*
🧩 Desafio: Relatório de Clientes VIP
Contexto:
Você trabalha em uma empresa que gerencia dados de clientes. Cada cliente tem um nome, total de compras, se está ativo ou não e a cidade onde mora.

Seu objetivo é:

Filtrar apenas os clientes ativos.

Agrupar os clientes por cidade.

Para cada cidade, exibir:

Quantidade de clientes ativos.

Nome do cliente com maior total de compras.

Total geral de compras daquela cidade.
*/

interface Cliente {
  nome: string;
  compras: number;
  ativo: boolean;
  cidade: string;
  valorTotal: number;
}

const clientes: Cliente[] = [
  {
    nome: "Ana",
    cidade: "São Paulo",
    ativo: true,
    compras: 5,
    valorTotal: 1200,
  },
  {
    nome: "João",
    cidade: "Rio de Janeiro",
    ativo: false,
    compras: 2,
    valorTotal: 300,
  },
  {
    nome: "Carlos",
    cidade: "São Paulo",
    ativo: true,
    compras: 3,
    valorTotal: 900,
  },
  {
    nome: "Bianca",
    cidade: "Curitiba",
    ativo: true,
    compras: 8,
    valorTotal: 2000,
  },
  {
    nome: "Patrícia",
    cidade: "Rio de Janeiro",
    ativo: true,
    compras: 6,
    valorTotal: 1500,
  },
  {
    nome: "Fernando",
    cidade: "Curitiba",
    ativo: false,
    compras: 1,
    valorTotal: 200,
  },
  {
    nome: "Léo",
    cidade: "São Paulo",
    ativo: true,
    compras: 4,
    valorTotal: 950,
  },
  {
    nome: "Gabriel",
    cidade: "Belo Horizonte",
    ativo: true,
    compras: 7,
    valorTotal: 1800,
  },
  {
    nome: "Julia",
    cidade: "Belo Horizonte",
    ativo: false,
    compras: 2,
    valorTotal: 400,
  },
  {
    nome: "Marcos",
    cidade: "Porto Alegre",
    ativo: true,
    compras: 9,
    valorTotal: 2500,
  },
  {
    nome: "Larissa",
    cidade: "Porto Alegre",
    ativo: true,
    compras: 3,
    valorTotal: 760,
  },
  {
    nome: "Bruna",
    cidade: "São Paulo",
    ativo: false,
    compras: 2,
    valorTotal: 500,
  },
  {
    nome: "Rafael",
    cidade: "Curitiba",
    ativo: true,
    compras: 5,
    valorTotal: 1100,
  },
  {
    nome: "Renata",
    cidade: "Rio de Janeiro",
    ativo: true,
    compras: 7,
    valorTotal: 1700,
  },
  {
    nome: "Caio",
    cidade: "Porto Alegre",
    ativo: false,
    compras: 1,
    valorTotal: 100,
  },
];

function gerarRelatorioPorCidade(lista: Cliente[], cidade: string) {
  const clientesAtivos = lista.filter((ativos) => ativos.ativo);
  const cidadeCliente = clientesAtivos.filter(
    (cliente) => cliente.cidade === cidade
  );
  const qdtClientesPorCidade = cidadeCliente.length;
  const nomeMaiorCliente = cidadeCliente.sort(
    (a, b) => b.valorTotal - a.valorTotal
  );
  const comprasClientes = cidadeCliente.reduce(
    (prevValue, elem) => prevValue + elem.compras,
    0
  );

  return `Clientes ativos da cidade: ${cidade}\nQuantidade de clientes ativos na ${cidade}: ${qdtClientesPorCidade}\nCliente com mais compras: ${nomeMaiorCliente[0].nome}\nTotal de compras da cidade: ${comprasClientes}`;
}

console.log(gerarRelatorioPorCidade(clientes, "Porto Alegre"));

/*
Desafio: Análise de Fidelidade dos Clientes
Você recebeu um array de clientes com dados como nome, cidade, número de compras, total gasto e se está ativo.

Seu objetivo é criar uma função analisarFidelidade(clientes: Cliente[]) que retorne:

A quantidade total de clientes ativos

A média de valor gasto por cliente ativo

O cliente mais fiel (maior número de compras entre os ativos)

O ranking dos 3 clientes ativos que mais gastaram (nome e valor)

Um alerta caso a média de gastos esteja abaixo de R$1000
*/

function analisarFidelidade(lista: Cliente[]) {
  const clienteAtivo = lista.filter((itens) => itens.ativo);
  const totalClientes = clienteAtivo.length;
  const maisFiel = clienteAtivo.sort((a, b) => b.compras - a.compras)[0].nome;

  const top3Gastos = clienteAtivo
    .sort((a, b) => b.valorTotal - a.valorTotal)
    .slice(0, 3)
    .map((result) => {
      const nome = result.nome;
      const valor = result.valorTotal;

      return `nome:${nome} valor gasto:${valor}`;
    })
    .join("\n");

  const somaGastos = clienteAtivo.reduce(
    (prevValue, elem) => prevValue + elem.valorTotal,
    0
  );
  const mediaDeGastos = somaGastos / totalClientes;

  if (mediaDeGastos <= 999) {
    return `Media de gasto esta abaixo de 100 ${mediaDeGastos.toFixed(2)}`;
  } else {
    return `Clientes ativos: ${totalClientes}\nMedia de gastos: ${mediaDeGastos.toFixed(
      2
    )}\nCliente mais fiel: ${maisFiel}\nRanking mais ativos  ${top3Gastos}`.trim();
  }
}

console.log(analisarFidelidade(clientes));
