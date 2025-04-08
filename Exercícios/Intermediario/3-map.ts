/*✅ Exercício 9 – Gerando mensagens personalizadas com .map()
 Enunciado:
 Use novamente a interface Usuario.
 Crie uma função chamada gerarMensagensDeStatus que:
 recebe um array de Usuario
 retorna um novo array de strings, com mensagens do tipo:
 "Joao está ATIVO"
 "Maria está INATIVO"

Use o método .map() para criar essas mensagens dinamicamente.

🔧 Dica de estrutura:

function gerarMensagensDeStatus(lista: Usuario[]): string[] {
  return lista.map((usuario) => {
    // monta a mensagem com base em usuario.ativo
  });
} 
*/

interface Usuario {
  name: string;
  email: string;
  ativo: boolean;
}

const users: Usuario[] = [
  { name: "Joao", email: "tetse@gmail.com", ativo: true },
  { name: "Maria", email: "maria@email.com", ativo: false },
  { name: "Carlos", email: "carlos@email.com", ativo: true },
];

function gerarMensagensDeStatus(lista: Usuario[]): string[] {
  return lista.map((users) => {
    return users.ativo
      ? `${users.name} esta ativo`
      : `${users.name} esta inativo`;
  });
}

console.log(gerarMensagensDeStatus(users));
