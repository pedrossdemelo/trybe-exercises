// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./getPokemonDetails");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails("Bulbasausr", (error, message) => {
      try {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails("Bulbasaur", (error, message) => {
      try {
        expect(message).toEqual('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

