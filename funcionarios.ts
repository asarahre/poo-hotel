import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa {
  private login: String;
  private password: String;

  constructor(id: Number, name: String, login: String, password: String) {
    super(id, name);
    this.login = login;
    this.password = password;
  }

  mostrarPessoa(): void {
    console.log(`id:${this.id}\n
    name:${this.name}\n
    login:${this.login}\n
    password:*****\n
    `);
  }
}
