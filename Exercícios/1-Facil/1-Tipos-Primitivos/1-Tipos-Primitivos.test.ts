import { cidade, anoNascimento, temConta } from "./1-Tipos-Primitivos";

describe("Teste de tipos primitivos", () => {
  test("Cidade deve ser uma string", () => {
    expect(typeof cidade).toBe("string");
  });

  test("Ano de nascimento deve ser um number", () => {
    expect(typeof anoNascimento).toBe("number");
  });

  test("Tem conta deve ser um boleano", () => {
    expect(typeof temConta).toBe("boolean");
  });
});
