# Desafios TypeScript 

Este repositório contém uma série de desafios resolvidos em TypeScript, com foco em manipulação de arrays e funções. O objetivo é aprimorar as habilidades com métodos como map, filter, reduce, forEach, some, every e outros conceitos essenciais da linguagem.

## Objetivo

O projeto visa desenvolver um sistema simples para controle de estoque de produtos, abordando:

Criação e manipulação de listas de objetos (produtos).

Uso de funções de ordem superior em arrays.

Aplicação de lógicas como filtragem, ordenação, e cálculo de valores.

## Tecnologias Utilizadas

- TypeScript: Linguagem principal para resolução dos desafios.

- Node.js (opcional para execução local do código).

## Funcionalidades

- Filtragem de produtos disponíveis: A função filtra os produtos com base em seu status de disponibilidade.

- Cálculo de média de preços: Função para calcular a média dos preços de produtos disponíveis.

- Resumo de estoque: Geração de relatório com valor total em estoque e quantidade de produtos disponíveis.

- Busca por nome de produto: Função para buscar um produto específico no estoque e exibir detalhes.

- Verificação de disponibilidade total: Verifica se todos os produtos estão disponíveis no estoque.

## Exemplos de Uso

```ts
const produtos = [
  { nome: "Caderno", preco: 20, disponivel: true },
  { nome: "Mochila", preco: 120, disponivel: false },
  { nome: "Caneta", preco: 5, disponivel: true },
];

function calcularMediaDisponiveis(lista: Produto[]) {
  const filtro = lista.filter((itens) => itens.disponivel);
  const soma = filtro.reduce((prevVal, itens) => prevVal + itens.preco, 0);
  const media = soma / filtro.length;
  console.log(`Média de preços: R$ ${media.toFixed(2)}`);
}

calcularMediaDisponiveis(produtos);
```

## Desafios Enfrentados

- Entendimento de métodos de arrays: Muitos desafios foram baseados no uso dos métodos filter, map e reduce. Inicialmente, a implementação parecia complexa, mas a prática constante ajudou na compreensão.

- Lógica de filtragem: A implementação da filtragem e cálculo de valores foi um ponto crucial para garantir a precisão dos resultados.

## Próximos Passos

- Explorar novos conceitos: Aprofundar o conhecimento em conceitos mais avançados de TypeScript, como interfaces mais complexas, classes e tipos genéricos.

- Refatoração e otimização: Melhorar a estrutura do código e buscar soluções mais eficientes para problemas já resolvidos.

- Integração com Backend: Implementar integração de algum desses exercícios com um backend simples para praticar APIs e comunicação entre sistemas.

## Como Rodar o Projeto

- Para rodar os exemplos localmente, siga os passos abaixo:

1 - Instale o Node.js e TypeScript:
``` bash
-npm install -g typescript
```

2 - Crie o arquivo .ts com o código desejado e compile:
```bash
tsc nome-do-arquivo.ts
```

3 -  Execute o código:
```bash
node nome-do-arquivo.js
