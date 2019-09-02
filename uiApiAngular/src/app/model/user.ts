export class User{
  constructor(){}

    public id: string;
    public name: string;
    public lastname: string;
    public cpf: string;
    public rg: string;
    public email: string;
    public address: {
      cep: number,
      street: string,
      complement: string,
      district: string,
      locality: string,
      uf: string,
      number: string
    };
    public login: string;
    public password: string;
    public profile: string

}
