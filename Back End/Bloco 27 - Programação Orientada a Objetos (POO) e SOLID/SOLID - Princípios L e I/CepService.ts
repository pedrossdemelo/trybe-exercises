import FooCepAPI from './FooCepAPI';

class CepService {
  constructor(private readonly cepApi: FooCepAPI = new FooCepAPI()) {}

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;