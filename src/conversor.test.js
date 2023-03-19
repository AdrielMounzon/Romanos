import romano from "./conversor";

describe("Romanos", () => {
  it("generar el romano de 1", () => {
    expect(romano(1)).toEqual("I");
  });

  it("generar el romano de 2", () => {
    expect(romano(2)).toEqual("II");
  });

  it("generar el romano de 3", () => {
    expect(romano(3)).toEqual("III");
  });

  it("generar el romano de 4", () => {
    expect(romano(4)).toEqual("IV");
  });
});
