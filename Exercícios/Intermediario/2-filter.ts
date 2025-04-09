// ✅ Exercício 8 – Filtrando usuários ativos (com .filter())
// Enunciado:
// Use o mesmo tipo Usuario e array usuarios.
// Crie uma função chamada obterUsuariosAtivos que:
// recebe o array de usuários
// retorna um novo array com apenas os usuários que estão ativos (ativo: true)
// Imprima o array retornado no console

interface Usuario {
  name: string;
  email: string;
  ativo: boolean;
}

const usuario: Usuario[] = [
  { name: "Joao", email: "tetse@gmail.com", ativo: true },
  { name: "Maria", email: "maria@email.com", ativo: false },
  { name: "Carlos", email: "carlos@email.com", ativo: true },
];

function obterUsuariosAtivos(lista: Usuario[]) {
  return lista.filter((usuario) => usuario.ativo);
}

const ativos = obterUsuariosAtivos(usuario);
console.log("Usuários ativos:", ativos);

/* 🧪 Exercício 1 – Filtrar produtos disponíveis
Enunciado:
Crie uma interface Produto com:

nome (string)

preco (number)

disponivel (boolean)

Crie um array com pelo menos 4 produtos.

Crie uma função filtrarDisponiveis que:

recebe um array de produtos

retorna apenas os produtos com disponivel: true
 */

interface Produto {
  name: string;
  price: number;
  disponivel: boolean;
}

const produtos: Produto[] = [
  { name: "caneta", price: 1.5, disponivel: true },
  { name: "lapis", price: 0.5, disponivel: true },
  { name: "estojo", price: 5, disponivel: false },
  { name: "borracha", price: 2.3, disponivel: true },
];

function filtrarDisponiveis(lista: Produto[]) {
  return lista.filter((produtos) => produtos.disponivel);
}

const emEstoque = filtrarDisponiveis(produtos);
console.log(emEstoque);

/* Exercício 2 – Calcular preço com imposto
📋 Regras:
Use a mesma interface Produto e o array emEstoque que você já criou.

Crie uma função chamada aplicarImposto que:

Recebe um array de Produto

Retorna um array de strings com a seguinte estrutura:
*/

function aplicarImposto(lista: Produto[]) {
  return lista.map((emEstoque) => {
    const result = emEstoque.price * 1.1;
    return `${emEstoque.name} - ${result.toFixed(2)}`;
  });
}

const juros = aplicarImposto(emEstoque);
console.log(juros);

/* 🧪 Exercício 3 – Relatório de Produtos
📋 Enunciado:
Crie uma função chamada exibirRelatorioDeProdutos que:

Recebe um array de produtos (como o produtos que você já criou antes).

Para cada produto, exibe no console a seguinte mensagem formatada:

makefile
Copiar
Editar
Produto: Caneta | Preço: R$ 1.50 | Disponível: Sim
🧠 Regras:
Utilize .forEach() para iterar.

O campo disponivel: true deve aparecer como "Sim" e false como "Não".

Mantenha a formatação do preço com duas casas decimais. */

function exibirRelatorioDeProdutos(lista: Produto[]) {
  lista.forEach((produtos) => {
    const estoque = produtos.disponivel ? "sim" : "não";
    console.log(
      `Produto: ${produtos.name} | Preço: ${produtos.price} | Disponivel: ${estoque}`
    );
  });
}

exibirRelatorioDeProdutos(produtos);
