/*
🧠 Desafio: Ordenar Produtos por Preço
Você tem uma lista de produtos, e sua missão é criar uma função que retorne os produtos ordenados pelo preço, do mais barato para o mais caro.


interface Produto {
  name: string;
  price: number;
  disponivel: boolean;
}
Exemplo de entrada:
ts
Copiar
Editar
const produtos: Produto[] = [
  { name: "caneta", price: 1.5, disponivel: true },
  { name: "lapis", price: 0.5, disponivel: true },
  { name: "estojo", price: 5, disponivel: false },
  { name: "borracha", price: 2.3, disponivel: true },
];
Requisitos:
Crie uma função chamada ordenarPorPreco.

A função deve retornar um novo array ordenado do mais barato ao mais caro.

O array original não deve ser modificado.
*/

interface ItensAVenda {
  name: string;
  price: number;
  disponivel: boolean;
}

const intensAvenda: ItensAVenda[] = [
  { name: "monitor", price: 500, disponivel: true },
  { name: "mouse", price: 270.99, disponivel: true },
  { name: "xbox", price: 2150, disponivel: true },
  { name: "fone", price: 60, disponivel: false },
  { name: "notbook", price: 3892.0, disponivel: true },
  { name: "mousePad", price: 23.8, disponivel: true },
];

function ordenarPorPreco(lista: ItensAVenda[]) {
  return lista.sort((a, b) => a.price - b.price);
}

console.log(ordenarPorPreco(intensAvenda));
