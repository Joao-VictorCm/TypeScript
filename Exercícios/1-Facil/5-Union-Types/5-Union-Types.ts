// ✅ Exercício 5 – Union Types
// Enunciado:
// Crie uma função chamada exibirStatus que recebe um parâmetro chamado status, que pode ser:
// true (boolean)
// false (boolean)
// "desconhecido" (string)
// Dentro da função, imprima algo como:

// console.log("Status:", status);

function exibirStatus(status: boolean | string) {
  console.log("Status", status);
}

exibirStatus(true);
exibirStatus(false);
exibirStatus("Desconhecido");

// 🎯 Desafio Bônus – Union + Condicional
// Enunciado:
// Altere a função exibirStatus para que:
// Receba um parâmetro status que pode ser true, false ou "desconhecido"
// Imprima mensagens diferentes para cada caso:

// status	Mensagem impressa
// true	"Usuário ativo"
// false	"Usuário inativo"
// "desconhecido"	"Status do usuário é desconhecido"
// Dica: Você pode usar if ou switch, como preferir!

function exibirBonus(status: boolean | "desconhecido") {
  switch (status) {
    case true:
      console.log("Usuário ativo");
      break;
    case false:
      console.log("Usuário inativo");
      break;
    case "desconhecido":
      console.log("Status do usuário é desconhecido");
  }
}

exibirBonus("desconhecido");
