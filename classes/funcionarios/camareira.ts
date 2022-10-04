import { Funcionario } from "./funcionarios";

export class Camareira extends Funcionario {
    constructor(id: Number, nome: String, login: String, password: String){
        super(id, nome, login, password)
    }
}