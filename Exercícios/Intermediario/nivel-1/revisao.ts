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

interface Produto01 {
  name: string;
  price: number;
  disponivel: boolean;
}

const produtos: Produto01[] = [
  { name: "caneta", price: 1.5, disponivel: true },
  { name: "lapis", price: 0.5, disponivel: true },
  { name: "estojo", price: 5, disponivel: false },
  { name: "borracha", price: 2.3, disponivel: true },
];

function filtrarDisponiveis(lista: Produto01[]) {
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

function aplicarImposto(lista: Produto01[]) {
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

  Produto: Caneta | Preço: R$ 1.50 | Disponível: Sim
  🧠 Regras:
  Utilize .forEach() para iterar.
  
  O campo disponivel: true deve aparecer como "Sim" e false como "Não".
  
  Mantenha a formatação do preço com duas casas decimais. */

function exibirRelatorioDeProdutos(lista: Produto01[]) {
  lista.forEach((produtos) => {
    const estoque = produtos.disponivel ? "sim" : "não";
    console.log(
      `Produto: ${produtos.name} | Preço: ${produtos.price} | Disponivel: ${estoque}`
    );
  });
}

exibirRelatorioDeProdutos(produtos);

/* 🚀 Retomando com o Exercício 5 – Média dos produtos disponíveis (nível intermediário)
📋 Enunciado (relembrando):
Crie uma função calcularMediaDisponiveis que:
Filtra os produtos disponíveis no estoque.
Soma os preços desses produtos.
Calcula a média dos preços.
Retorna o resultado com duas casas decimais. */

function calcularMediaDisponiveis(lista: Produto01[]) {
  const filtro = lista.filter((itens) => (itens.disponivel ? true : false));
  const soma = filtro.reduce((prevVal, itens) => prevVal + itens.price, 0);
  const media = soma / filtro.length;
  const result = media.toFixed(2);

  return `media em estoque é ${result}`;
}

const total = calcularMediaDisponiveis(produtos);
console.log(total);

/*
🧠 Exercício 6 – Valor total dos produtos disponíveis + Mensagem formatada
🟨 Enunciado:
Crie uma função chamada gerarResumoDeEstoque que:
Filtra apenas os produtos disponíveis.
Soma o valor total dos produtos disponíveis usando .reduce().
Retorna uma mensagem formatada, assim:

"Total em estoque: R$ 4.30 para 3 itens disponíveis."

*/

function gerarResumoDeEstoque(lista: Produto01[]) {
  const produtoEmEstoque = lista.filter((estoque) =>
    estoque.disponivel ? true : false
  );
  const valorTotal = produtoEmEstoque.reduce(
    (prevVal, estoque) => prevVal + estoque.price,
    0
  );

  return `Total em estoque; R$ ${valorTotal.toFixed(2)} para ${
    produtoEmEstoque.length
  } itens disponíveis`;
}

console.log(gerarResumoDeEstoque(produtos));
