import { QuartoCompleto } from "./quartoCompleto";
import { QuartoSimples } from "./quartoSimples";
import { Hospede } from "./hospede";

export class Reserva {
  private cdg_reserva: String;
  private quarto: QuartoCompleto | QuartoSimples;
  private hospede: Hospede;
  constructor(
    cdg_reserva: String,
    quarto: QuartoCompleto | QuartoSimples,
    hospede: Hospede
  ) {
    this.cdg_reserva = cdg_reserva;
    this.quarto = quarto;
    this.hospede = hospede;
  }
}
