import romano from "./conversor";

describe("Romanos", () => {
  it("generar el romano de 1", () => {
    expect(romano(1)).toEqual("I");
  });
});
