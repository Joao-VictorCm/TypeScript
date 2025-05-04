import { idades } from "./4-Arrays-Tipados";

describe("Verificando idades", () => {
  it("Testando array", () => {
    expect(idades.every((item) => typeof item === "number")).toBe(true);
  });
});
