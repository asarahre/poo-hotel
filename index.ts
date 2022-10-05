import { Camareira } from './classes/funcionarios/camareira';
import { Hospede } from "./classes/hospedes/hospede";
import { Funcionario } from "./classes/funcionarios/funcionarios";
import { Recepcionista } from "./classes/funcionarios//recepcionista";
import { QuartoCompleto } from "./classes/quartos/quartoCompleto";
import { QuartoSimples } from "./classes/quartos/quartoSimples";

const camareira = new Camareira(
  2,
  "camareira",
  "camareirafatalmode@gmail.com",
  "fatalmode123"
)

const recepcionista = new Recepcionista(
  1,
  "FatalMode",
  "fatalmode@gmail.com",
  "******"
);
const quarto = new QuartoCompleto("A1", "2", 250);
const hospede = new Hospede(
  1,
  "Mateus Zóio",
  "visitando o fatal mode",
  "cancelado",
  "o do inss"
);

const reserva = recepcionista.criarReserva("1234", quarto, hospede);

console.log("----------------------------------");

reserva.mostrar_reserva()

console.log("----------------------------------");

hospede.mostrarPessoa();

console.log("----------------------------------");

recepcionista.mostrarPessoa();

console.log("----------------------------------");

const servico_de_quarto = hospede.chamarServicoDeQuarto(quarto, camareira, hospede)

console.log(servico_de_quarto);
