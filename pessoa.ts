export class Pessoa {
  protected id: Number;
  protected name: String;

  constructor(id: Number, name: String) {
    (this.id = id), (this.name = name);
  }

  mostrarPessoa() {
    console.log(`id: ${this.id} \n
    nome: ${this.name}`);
  }
}
