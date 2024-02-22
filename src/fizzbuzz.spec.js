import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("deberia generar el mismo numero para uno que no tiene reglas por ejemplo para el 1", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });
  });