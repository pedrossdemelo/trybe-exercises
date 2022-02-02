export interface IFooCepAPI {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, num: number): Promise<string>;
}

export default class FooCepAPI implements IFooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number:number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}
