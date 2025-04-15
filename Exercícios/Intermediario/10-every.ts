/*
💪 Desafio - Verificar se todos os produtos estão disponíveis
Você tem uma lista de produtos. Crie uma função que retorne:

true se todos os produtos estão disponíveis

false caso algum produto não esteja disponível

✅ Regras:
Use o método every.

O retorno deve ser um boolean.

A função deve se chamar verificarTodosDisponiveis.
*/

interface Produto {
  name: string;
  price: number;
  disponivel: boolean;
  categoria: string;
}

const estoqueAlmox: Produto[] = [
  { name: "caneta", price: 1.5, disponivel: true, categoria: "papelaria" },
  { name: "lapis", price: 0.5, disponivel: true, categoria: "papelaria" },
  { name: "estojo", price: 5, disponivel: false, categoria: "acessorios" },
  { name: "borracha", price: 2.3, disponivel: true, categoria: "papelaria" },
  { name: "mochila", price: 50, disponivel: false, categoria: "acessorios" },
];

function verificarTodosDisponiveis(lista: Produto[]) {
  return lista.every((produto) => produto.disponivel);
}

console.log(verificarTodosDisponiveis(estoqueAlmox));
