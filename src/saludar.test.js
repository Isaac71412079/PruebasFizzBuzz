
import saludar from "./saludar.js";

describe("Saludador Chatbot", () => {
  it("deberia saludar en cualquier funcionalidad", () => {
    expect(saludar("Isaac", 31, "masculino", "es")).toEqual("Buenos días,  Hola Sr. Isaac");
  });
});
