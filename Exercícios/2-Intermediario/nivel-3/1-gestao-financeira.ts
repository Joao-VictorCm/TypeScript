/*
Desafio: Gestão de Transações Financeiras
Temos um sistema de transações financeiras com várias contas. Cada conta tem um saldo inicial e uma lista de transações. Cada transação pode ser de crédito ou débito, e tem um valor. Você precisa:

Calcular o saldo atual de cada conta, considerando as transações de crédito e débito.

Filtrar as transações de um tipo específico (crédito ou débito).

Calcular a média de transações por conta, com base no número de transações que cada conta fez.

Aplicar uma taxa de 5% sobre o saldo final de contas que têm mais de R$10.000,00 de saldo.

*/

type Transacao = {
  tipo: "Credito" | "Debito";
  valor: number;
  data: string;
};

type Conta = {
  numero: string;
  saldoInicial: number;
  transacoes: Transacao[];
};

const conta: Conta[] = [
  {
    numero: "001-B",
    saldoInicial: 500,
    transacoes: [
      { tipo: "Credito", valor: 1700, data: "05-05-2025" },
      { tipo: "Debito", valor: 350.03, data: "23-06-2025" },
    ],
  },
  {
    numero: "001-c",
    saldoInicial: 700,
    transacoes: [
      { tipo: "Credito", valor: 1700, data: "05-05-2025" },
      { tipo: "Debito", valor: 350.03, data: "23-06-2025" },
    ],
  },
];

function gestaoConta(conta: Conta[], numeroConta: string) {
  const log = conta.filter((loggin) => loggin.numero === numeroConta);
  for (const conta of log) {
    const saldoFInal = conta.transacoes.reduce((saldo, transcao) => {
      if (transcao.tipo === "Credito") {
        return saldo + transcao.valor;
      } else if (transcao.tipo === "Debito") {
        return saldo - transcao.valor;
      } else {
        return saldo;
      }
    }, conta.saldoInicial);

    console.log(`Conta: ${conta.numero}, Saldo final: ${saldoFInal}`);
  }
}

gestaoConta(conta, "001-B");
