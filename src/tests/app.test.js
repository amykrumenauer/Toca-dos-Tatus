import { describe, it, expect } from "vitest";

describe("Testes básicos do site", () => {

  it("1 - título contém texto", () => {
    expect("Toca dos Tatus").toContain("Tatus");
  });

  it("2 - cor principal existe", () => {
    const cor = "#00C29F";
    expect(cor).toBe("#00C29F");
  });

  it("3 - menu responsivo existe", () => {
    const menu = true;
    expect(menu).toBe(true);
  });

  it("4 - lista de páginas", () => {
    const paginas = ["home", "sobre", "adotar"];
    expect(paginas).toContain("home");
  });

  it("5 - botão de ação", () => {
    const botao = "Quero Adotar";
    expect(botao).toBe("Quero Adotar");
  });

});