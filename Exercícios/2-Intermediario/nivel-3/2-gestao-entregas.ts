/*
🎯 O que você deve implementar:
Filtrar apenas entregadores ativos.

Calcular o total de entregas de cada um.

Encontrar o entregador com mais entregas.

Calcular a média de entregas por entregador ativo.

Se a média for menor que 15, exibir um alerta.
*/

type Entregador = {
  nome: string;
  ativo: boolean;
  entregas: {
    mes: string;
    quantidade: number;
  }[];
};

const entregadores: Entregador[] = [
  {
    nome: "Carlos",
    ativo: true,
    entregas: [
      { mes: "Janeiro", quantidade: 12 },
      { mes: "Fevereiro", quantidade: 10 },
    ],
  },
  {
    nome: "Ana",
    ativo: true,
    entregas: [
      { mes: "Janeiro", quantidade: 18 },
      { mes: "Fevereiro", quantidade: 22 },
    ],
  },
  {
    nome: "Pedro",
    ativo: false,
    entregas: [{ mes: "Janeiro", quantidade: 25 }],
  },
];

function gestaoDeEntregas(lista: Entregador[]) {
  const entregadoresAtivos = lista.filter((entregador) => entregador.ativo);

  let totalEntregasGeral = 0;
  let entregadorComMaisEntregas = "";
  let maiorQuantidade = 0;

  for (const entregador of entregadoresAtivos) {
    const entregasTotal = entregador.entregas.reduce(
      (soma, entrega) => soma + entrega.quantidade,
      0
    );

    totalEntregasGeral += entregasTotal;

    if (entregasTotal > maiorQuantidade) {
      maiorQuantidade = entregasTotal;
      entregadorComMaisEntregas = entregador.nome;
    }
  }

  const mediaGeral =
    entregadoresAtivos.length > 0
      ? totalEntregasGeral / entregadoresAtivos.length
      : 0;

  console.log(
    `Média geral de entregas por entregador: ${mediaGeral.toFixed(2)}`
  );
  console.log(
    `Entregador com mais entregas: ${entregadorComMaisEntregas} (${maiorQuantidade} entregas)`
  );
}

gestaoDeEntregas(entregadores);
