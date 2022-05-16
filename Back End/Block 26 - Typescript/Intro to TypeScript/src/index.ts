import readline from "readline-sync";
import capacityConvert, { CapacityUnit } from "./capacity";
import lengthConvert, { LengthUnit } from "./length";
import massConvert, { MassUnit } from "./mass";
import volumeConvert, { VolumeUnit } from "./volume";

const options = [
  "Converter Volume",
  "Converter Massa",
  "Converter Comprimento",
  "Converter Capacidade",
];

const option = readline.keyInSelect(options, "Escolha uma opção: ");

const value = readline.questionInt("Digite um valor: ");

switch (option) {
  case 0:
    const volumeFrom = VolumeUnit[readline.keyInSelect([...VolumeUnit], "De: ")];
    const volumeTo = VolumeUnit[readline.keyInSelect([...VolumeUnit], "Para: ")];
    console.log(`${value} ${volumeFrom} = ${volumeConvert(value, volumeFrom, volumeTo)} ${volumeTo}`);
    break;
  case 1:
    const massFrom = MassUnit[readline.keyInSelect([...MassUnit], "De: ")];
    const massTo = MassUnit[readline.keyInSelect([...MassUnit], "Para: ")];
    console.log(`${value} ${massFrom} = ${massConvert(value, massFrom, massTo)} ${massTo}`);
    break;
  case 2:
    const lengthFrom = LengthUnit[readline.keyInSelect([...LengthUnit], "De: ")];
    const lengthTo = LengthUnit[readline.keyInSelect([...LengthUnit], "Para: ")];
    console.log(`${value} ${lengthFrom} = ${lengthConvert(value, lengthFrom, lengthTo)} ${lengthTo}`);
    break;
  case 3:
    const capacityFrom = CapacityUnit[readline.keyInSelect([...CapacityUnit], "De: ")];
    const capacityTo = CapacityUnit[readline.keyInSelect([...CapacityUnit], "Para: ")];
    console.log( `${value} ${capacityFrom} = ${capacityConvert(value, capacityFrom, capacityTo)} ${capacityTo}`);
    break;
  default:
    console.log("Opção inválida");
    break;
}
