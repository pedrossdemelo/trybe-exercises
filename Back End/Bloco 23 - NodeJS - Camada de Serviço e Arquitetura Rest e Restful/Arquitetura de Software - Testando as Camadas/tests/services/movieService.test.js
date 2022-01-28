const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../models/connection");

const MoviesModel = require("../../models/movieModel");
const MoviesService = require("../../services/movieService");

describe("Insere um novo filme no BD", () => {
  describe("quando o payload informado não é válido", async () => {
    const payloadMovie = {};

    it("retorna um boolean", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("boolean");
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe("quando é inserido com sucesso", async () => {
    const payloadMovie = {
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, "create").resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

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

    before(() => {
      sinon.stub(MoviesModel, "getById").resolves(resolvedMovie);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "title", "directedBy" e "releaseYear" do novo filme inserido', async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.have.a.property("title");
      expect(response).to.have.a.property("directedBy");
      expect(response).to.have.a.property("releaseYear");
    });
  });

  describe("quando o filme não é encontrado", () => {
    before(() => {
      sinon.stub(MoviesModel, "getById").resolves(null);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it("retorna nulo", async () => {
      const response = await MoviesService.getById(120495);

      expect(response).to.be.null;
    });
  });
});
