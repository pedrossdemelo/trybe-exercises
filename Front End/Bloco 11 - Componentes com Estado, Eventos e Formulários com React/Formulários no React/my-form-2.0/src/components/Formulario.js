import React from "react";

let alerted = false;

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipo: "",
      resumo: "",
      cargo: "",
      descricao: "",
      printed: false,
      formSnapshot: [],
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
    this.setState({
      printed: true,
      formSnapshot: Object.values(this.state).slice(0, -2),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={() => {
        this.setState({
          nome: "",
          email: "",
          senha: "",
          endereco: "",
          cidade: "",
          estado: "",
          tipo: "",
          resumo: "",
          cargo: "",
          descricao: "",
          printed: false,
          formSnapshot: [],
        });
      }}>
        <fieldset>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nome}
            onChange={(e) => {
              if (e.target.value.length <= 40)
                this.setState({ nome: e.target.value.toUpperCase() });
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => {
              if (e.target.value.length <= 50)
                this.setState({ email: e.target.value });
            }}
            required
          />
          <input
            type="text"
            placeholder="CPF"
            value={this.state.senha}
            onChange={(e) => {
              if (e.target.value.length <= 11)
                this.setState({ senha: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Endereço"
            value={this.state.endereco}
            onChange={(e) => {
              if (e.target.value.length <= 200)
                this.setState({
                  endereco: e.target.value.replace(/[^A-Za-z0-9 ]/g, ""),
                });
            }}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={this.state.cidade}
            onChange={(e) => {
              if (e.target.value.length <= 28)
                this.setState({ cidade: e.target.value });
            }}
            onBlur={(e) => {
              if (e.target.value.match(/^[0-9]/)) this.setState({ cidade: "" });
            }}
            required
          />
          <select
            value={this.state.estado}
            onChange={(e) => {
              this.setState({ estado: e.target.value });
            }}
            required
          >
            <option value="">Selecione o Estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          <label>
            Casa
            <input
              type="radio"
              name="tipo"
              value="Casa"
              checked={this.state.tipo === "Casa"}
              onChange={(e) => {
                this.setState({ tipo: e.target.value });
              }}
              required
            />
          </label>
          <label>
            Apartamento
            <input
              type="radio"
              name="tipo"
              value="Apartamento"
              checked={this.state.tipo === "Apartamento"}
              onChange={(e) => {
                this.setState({ tipo: e.target.value });
              }}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Resumo do currículo"
            value={this.state.resumo}
            onChange={(e) => {
              if (e.target.value.length <= 1000)
                this.setState({ resumo: e.target.value });
            }}
            required
          ></textarea>
          <textarea
            placeholder="Cargo"
            value={this.state.cargo}
            onChange={(e) => {
              if (e.target.value.length <= 40)
                this.setState({ cargo: e.target.value });
            }}
            onMouseEnter={(e) => {
              if (!alerted) {
                alert("Preencha com cuidado esta informação.");
                alerted = true;
              }
            }}
            required
          ></textarea>
          <textarea
            placeholder="Descrição do cargo"
            value={this.state.descricao}
            onChange={(e) => {
              if (e.target.value.length <= 500)
                this.setState({ descricao: e.target.value });
            }}
            required
          ></textarea>
        </fieldset>
        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>
        {this.state.printed && (
          <div>
            {this.state.formSnapshot.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        )}
      </form>
    );
  }
}

export default Formulario;