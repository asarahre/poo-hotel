import { Camareira } from "../funcionarios/camareira";
import { QuartoCompleto } from "../quartos/quartoCompleto";
import { QuartoSimples } from "../quartos/quartoSimples";
import { Hospede } from "../hospedes/hospede";

export class ServicoDeQuarto {
    quarto: QuartoSimples | QuartoCompleto;
    camareira: Camareira;
    hospede: Hospede
    constructor(quarto: QuartoSimples | QuartoCompleto, camareira: Camareira, hospede: Hospede) {
        this.quarto = quarto;
        this.camareira = camareira;
        this.hospede = hospede
    }
}