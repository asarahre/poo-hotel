import { Hospede } from "./hospede";
import { Funcionario } from "./funcionarios";
import { Recepcionista } from "./recepcionista";
import { QuartoCompleto } from "./quartoCompleto";
import { QuartoSimples } from "./quartoSimples";

const recepcionista = new Recepcionista(
  1,
  "FatalMode",
  "fatalmode@gmail.com",
  "******"
);
const quarto = new QuartoCompleto(1, 2);
const hospede = new Hospede(
  1,
  "Mateus Zóio",
  "visitando o fatal mode",
  "cancelado",
  "o do inss"
);

const reserva = recepcionista.criarReserva("1234", quarto, hospede);

console.log(reserva);

hospede.mostrarPessoa();
