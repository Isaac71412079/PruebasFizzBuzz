import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("deberia generar el mismo numero para uno que no tiene reglas por ejemplo para el 1", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("deberia generar el mismo numero para otro numero que no tiene reglas como para el 2", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("deberia generar Fizz para un numero que sigue la regla como el 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("deberia generar Fizz para un numero que sigue la regla como el 6", () => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
    });

    it("deberia generar Buzz para un numero que sigue la regla como el 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });
    it("deberia generar Buzz para un numero que sigue la regla como el 10", () => {
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });

  });