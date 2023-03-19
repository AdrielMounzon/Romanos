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

  it("generar el romano de 5", () => {
    expect(romano(5)).toEqual("V");
  });

  it("generar el romano de 8", () => {
    expect(romano(8)).toEqual("VIII");
  });

  it("generar el romano de 10", () => {
    expect(romano(10)).toEqual("X");
  });

  it("generar el romano de 15", () => {
    expect(romano(15)).toEqual("XV");
  });

  it("generar el romano de 20", () => {
    expect(romano(20)).toEqual("XX");
  });

  it("generar el romano de 38", () => {
    expect(romano(38)).toEqual("XXXVIII");
  });

  it("generar el romano de 49", () => {
    expect(romano(49)).toEqual("XLIX");
  });
});
