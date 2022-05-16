"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const capacity_1 = __importStar(require("./capacity"));
const length_1 = __importStar(require("./length"));
const mass_1 = __importStar(require("./mass"));
const volume_1 = __importStar(require("./volume"));
const options = [
    "Converter Volume",
    "Converter Massa",
    "Converter Comprimento",
    "Converter Capacidade",
];
const option = readline_sync_1.default.keyInSelect(options, "Escolha uma opção: ");
const value = readline_sync_1.default.questionInt("Digite um valor: ");
switch (option) {
    case 0:
        const volumeFrom = volume_1.VolumeUnit[readline_sync_1.default.keyInSelect([...volume_1.VolumeUnit], "De: ")];
        const volumeTo = volume_1.VolumeUnit[readline_sync_1.default.keyInSelect([...volume_1.VolumeUnit], "Para: ")];
        console.log(`${value} ${volumeFrom} = ${(0, volume_1.default)(value, volumeFrom, volumeTo)} ${volumeTo}`);
        break;
    case 1:
        const massFrom = mass_1.MassUnit[readline_sync_1.default.keyInSelect([...mass_1.MassUnit], "De: ")];
        const massTo = mass_1.MassUnit[readline_sync_1.default.keyInSelect([...mass_1.MassUnit], "Para: ")];
        console.log(`${value} ${massFrom} = ${(0, mass_1.default)(value, massFrom, massTo)} ${massTo}`);
        break;
    case 2:
        const lengthFrom = length_1.LengthUnit[readline_sync_1.default.keyInSelect([...length_1.LengthUnit], "De: ")];
        const lengthTo = length_1.LengthUnit[readline_sync_1.default.keyInSelect([...length_1.LengthUnit], "Para: ")];
        console.log(`${value} ${lengthFrom} = ${(0, length_1.default)(value, lengthFrom, lengthTo)} ${lengthTo}`);
        break;
    case 3:
        const capacityFrom = capacity_1.CapacityUnit[readline_sync_1.default.keyInSelect([...capacity_1.CapacityUnit], "De: ")];
        const capacityTo = capacity_1.CapacityUnit[readline_sync_1.default.keyInSelect([...capacity_1.CapacityUnit], "Para: ")];
        console.log(`${value} ${capacityFrom} = ${(0, capacity_1.default)(value, capacityFrom, capacityTo)} ${capacityTo}`);
        break;
    default:
        console.log("Opção inválida");
        break;
}
