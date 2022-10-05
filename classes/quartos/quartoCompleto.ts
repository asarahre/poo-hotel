import { Quarto } from "./quarto";

export class QuartoCompleto extends Quarto {

  private valor: Number

  constructor(numero_quarto: String, andar: String, valor_quarto: Number) {
    super(numero_quarto, andar);
  
    this.valor = valor_quarto

  }

  get valor_quarto() {
    return this.valor
  }
}
