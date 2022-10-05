import { QuartoCompleto } from "../quartos/quartoCompleto";
import { QuartoSimples } from "../quartos/quartoSimples";
import { Hospede } from "../hospedes/hospede";

export class Reserva {
  private cdg_reserva: String;
  private quarto: QuartoCompleto | QuartoSimples;
  private hospede: Hospede;
  private valor_reserva: Number

  constructor(
    cdg_reserva: String,
    quarto: QuartoCompleto | QuartoSimples,
    hospede: Hospede
  ) {
    this.cdg_reserva = cdg_reserva;
    this.quarto = quarto;
    this.hospede = hospede;
    this.valor_reserva = quarto.valor_quarto
  }

  mostrar_reserva() {
  console.log(`\n
  Código reserva: ${this.cdg_reserva}\n
  Andar: ${this.quarto.andar}\n
  Número quarto: ${this.quarto.numero_quarto}\n
  Hospede: ${this.hospede.nome}\n
  Valor: R$${this.valor_reserva}\n`)
  }
}
