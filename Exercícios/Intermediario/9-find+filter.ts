/* 🧠 Desafio:
Crie uma função chamada buscarProduto que recebe:

a lista de produtos

o nome de um produto (string)

A função deve:

Procurar o primeiro produto que tiver esse nome (dica: find)

Se o produto for encontrado:

Retorne uma string no formato:
"Produto: [nome] | Preço: R$ [preço] | Disponível: sim/não"

Se não encontrar, retorne: "Produto não encontrado"
*/

interface Produto {
  name: string;
  price: number;
  disponivel: boolean;
  categoria: string;
}

const stock: Produto[] = [
  { name: "caneta", price: 1.5, disponivel: true, categoria: "papelaria" },
  { name: "lapis", price: 0.5, disponivel: true, categoria: "papelaria" },
  { name: "estojo", price: 5, disponivel: false, categoria: "acessorios" },
  { name: "borracha", price: 2.3, disponivel: true, categoria: "papelaria" },
  { name: "mochila", price: 50, disponivel: false, categoria: "acessorios" },
];

function buscarProduto(lista: Produto[], nomeProduto: string) {
  const result = lista.find((itens) => itens.name === nomeProduto);

  if (result?.name == nomeProduto) {
    const disponibilidade = result.disponivel ? "Sim" : "Não";
    return `Produto: ${result.name} | Preço: R$ ${result.price.toFixed(
      2
    )} | Disponivel: ${disponibilidade}`;
  } else {
    return `Produto não existe`;
  }
}

console.log(buscarProduto(stock, "caneta"));
