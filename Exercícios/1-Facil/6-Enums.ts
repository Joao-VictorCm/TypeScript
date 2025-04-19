// ✅ Exercício 6 – Enums
// Enunciado:
// Crie um enum chamado StatusPedido com os seguintes valores:
// Pendente
// EmAndamento
// Concluido

// Crie uma função chamada mostrarStatusPedido que recebe um valor do tipo StatusPedido e imprime:
// Status	Mensagem
// Pendente	"Pedido pendente de aprovação"
// EmAndamento	"Pedido está sendo processado"
// Concluido	"Pedido finalizado com sucesso"

// 🔧 Dica:

// enum StatusPedido {
//   Pendente,
//   EmAndamento,
//   Concluido
// }

// function mostrarStatusPedido(status: StatusPedido) {
//   // sua lógica aqui
// }

enum StatusPedido {
  Pendente,
  EmAndamento,
  Concluido,
}

function mostrarStatusPedido(status: StatusPedido) {
  if (status === StatusPedido.Pendente) {
    console.log("Pedido pendente de aprovação");
  }
  if (status === StatusPedido.EmAndamento) {
    console.log("Pedido está sendo processado");
  } else if (status === StatusPedido.Concluido) {
    console.log("Pedido finalizado com sucesso");
  }
}

mostrarStatusPedido(StatusPedido.Pendente);
mostrarStatusPedido(StatusPedido.EmAndamento);
mostrarStatusPedido(StatusPedido.Concluido);
