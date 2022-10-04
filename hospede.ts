import { Pessoa } from "./pessoa";

export class Hospede extends Pessoa {
  private status: String;
  private cpf: String;
  private telefone: String;

  constructor(
    id: Number,
    name: String,
    status: String,
    cpf: String,
    telefone: String
  ) {
    super(id, name);
    this.status = status;
    this.cpf = cpf;
    this.telefone = telefone;
  }

  mostrarPessoa(): void {
    console.log(`\n
    id:${this.id}\n
    name:${this.name}\n
    status:${this.status}\n
    cpf:${this.cpf}\n
    telefone:${this.telefone}\n
    `);
  }
}
