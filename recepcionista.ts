import { Funcionario } from "./funcionarios";
import { Reserva } from "./reserva";
import { Hospede } from "./hospede";
import { QuartoCompleto } from "./quartoCompleto";
import { QuartoSimples } from "./quartoSimples";

export class Recepcionista extends Funcionario {
  constructor(id: Number, name: String, login: String, password: String) {
    super(id, name, login, password);
  }

  criarReserva(
    cdg_reserva: String,
    quarto: QuartoCompleto | QuartoSimples,
    hospede: Hospede
  ) {
    const reserva = new Reserva(cdg_reserva, quarto, hospede);

    return reserva;
  }
}
