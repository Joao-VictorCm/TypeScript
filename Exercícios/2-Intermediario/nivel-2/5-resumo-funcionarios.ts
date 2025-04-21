/*
🎯 Objetivo:
Crie uma função gerarResumoFuncionarios que retorne:

A quantidade total de funcionários ativos.

A média salarial dos desenvolvedores ativos.

O nome dos 3 funcionários ativos com maior salário, em ordem decrescente.
*/

interface Funcionario {
  nome: string;
  idade: number;
  cargo: string;
  salario: number;
  ativo: boolean;
}

const funcionarios: Funcionario[] = [
  {
    nome: "Ana",
    idade: 30,
    cargo: "Desenvolvedor",
    salario: 5000,
    ativo: true,
  },
  { nome: "Carlos", idade: 45, cargo: "Gerente", salario: 9000, ativo: true },
  { nome: "João", idade: 22, cargo: "Estagiário", salario: 1500, ativo: false },
  {
    nome: "Bianca",
    idade: 35,
    cargo: "Desenvolvedor",
    salario: 5500,
    ativo: true,
  },
  {
    nome: "Fernanda",
    idade: 28,
    cargo: "Designer",
    salario: 4000,
    ativo: true,
  },
  {
    nome: "Lucas",
    idade: 32,
    cargo: "Desenvolvedor",
    salario: 5200,
    ativo: false,
  },
];

function gerarResumoFuncionarios(lista: Funcionario[]) {
  const funcAtivos = lista.filter((funcionarios) => funcionarios.ativo);
  const top3Salarios = funcAtivos
    .sort((a, b) => b.salario - a.salario)
    .slice(0, 3)
    .map((name) => name.nome);
  //devs
  const devs = funcAtivos.filter((dev) => dev.cargo === "Desenvolvedor");

  const somatoriaSalariosDev = devs.reduce(
    (prevValue, elemn) => prevValue + elemn.salario,
    0
  );
  const mediaSalarioDevs = somatoriaSalariosDev / devs.length;
  return `Funcionarios ativos: ${
    funcAtivos.length
  } | Media de Salario dos devs:  ${mediaSalarioDevs}| Top 3 Salarios: ${top3Salarios.join(
    ", "
  )}`;
}

console.log(gerarResumoFuncionarios(funcionarios));
