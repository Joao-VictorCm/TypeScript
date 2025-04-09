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
