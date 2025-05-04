import { item1 } from "./3-Objetos-Tipados";

describe("Verificando dados do objeto", () => {
  test("Veriicando se o tipo nome foi passada uma string", () => {
    expect(typeof item1.nome).toBe("string");
  });

  test("Verificando se o preço foi passado um Number", () => {
    expect(typeof item1.preço).toBe("number");
  });

  test("Verificando se o emEstoque foi passado um boolena", () => {
    expect(typeof item1.emEstoque).toBe("boolean");
  });
});
