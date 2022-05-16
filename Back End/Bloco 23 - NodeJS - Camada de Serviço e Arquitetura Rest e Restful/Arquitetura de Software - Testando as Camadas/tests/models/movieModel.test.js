const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../models/connection");
const MoviesModel = require("../../models/movieModel");

describe("Insere um novo filme no BD", () => {
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, "execute").resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe("quando é inserido com sucesso", async () => {
    it("retorna um objeto", async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property("id");
    });
  });
});

describe("Acessa um filme no BD", () => {
  describe("quando é acessado com sucesso", async () => {
    const resolvedMovie = {
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    before(async () => {
      sinon.stub(connection, "execute").resolves([[resolvedMovie], []]);
    });

    after(async () => {
      connection.execute.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "title", "directedBy" e "releaseYear" do novo filme inserido', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.have.a.property("title");
      expect(response).to.have.a.property("directedBy");
      expect(response).to.have.a.property("releaseYear");
    });
  });

  describe("quando o filme não é encontrado", async () => {
    before(async () => {
      sinon.stub(connection, "execute").resolves([[], []]);
    });

    after(async () => {
      connection.execute.restore();
    });

    it("retorna nulo", async () => {
      const response = await MoviesModel.getById(120495);

      expect(response).to.be.null;
    });
  });
});
