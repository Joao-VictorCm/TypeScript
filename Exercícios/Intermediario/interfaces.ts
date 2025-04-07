// Exercício 7 – Lista de usuários com Interface
// Enunciado:
// Crie uma interface chamada Usuario com as seguintes propriedades:
// nome: string
// email: string
// ativo: boolean

// Crie um array chamado usuarios, contendo pelo menos 3 objetos do tipo Usuario.
// Escreva uma função chamada listarUsuariosAtivos que:
// recebe o array de usuários
// imprime apenas os usuários que estão com ativo: true

// 🔧 Dica de estrutura:
// interface Usuario {
//   nome: string;
//   email: string;
//   ativo: boolean;
// }

// const usuarios: Usuario[] = [
//   // objetos aqui
// ];

// function listarUsuariosAtivos(lista: Usuario[]) {
//   // lógica aqui
// }

interface Usuario {
  name: string;
  email: string;
  ativo: boolean;
}

const usuarios: Usuario[] = [
  { name: "Joao", email: "tetse@gmail.com", ativo: true },
  { name: "Maria", email: "maria@email.com", ativo: false },
  { name: "Carlos", email: "carlos@email.com", ativo: true },
];

function listarUsuariosAtivos(lista: Usuario[]) {
  lista.forEach((usuarios) => {
    if (usuarios.ativo) {
      console.log(`Usuário ativo: ${usuarios.name} - ${usuarios.email}`);
    }
  });
}

console.log(usuarios);
