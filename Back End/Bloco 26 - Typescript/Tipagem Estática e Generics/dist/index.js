"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = require("./months");
const seasons_1 = require("./seasons");
var Hemisphere;
(function (Hemisphere) {
    Hemisphere[Hemisphere["Northern"] = 1] = "Northern";
    Hemisphere[Hemisphere["Southern"] = 2] = "Southern";
})(Hemisphere || (Hemisphere = {}));
const monthOptions = Object.keys(months_1.Months).map((key) => months_1.Months[key]).filter(value => typeof value === 'string');
const selectedMonth = readline_sync_1.default.keyInSelect(monthOptions, 'Which month is it?') + 1;
const hemisphereOptions = Object.keys(Hemisphere).map((key) => Hemisphere[key]).filter(value => typeof value === 'string');
const selectedHemisphere = readline_sync_1.default.keyInSelect(hemisphereOptions, 'Which hemisphere is it?') + 1;
function getSeason(month, hemisphere) {
    const seasons = [];
    if (hemisphere === Hemisphere.Northern) {
        if (month === months_1.Months.January || month === months_1.Months.February || month === months_1.Months.March) {
            seasons.push(seasons_1.Seasons.Winter);
        }
        if (month === months_1.Months.April || month === months_1.Months.May || month === months_1.Months.June) {
            seasons.push(seasons_1.Seasons.Spring);
        }
        if (month === months_1.Months.July || month === months_1.Months.August || month === months_1.Months.September) {
            seasons.push(seasons_1.Seasons.Summer);
        }
        if (month === months_1.Months.October || month === months_1.Months.November || month === months_1.Months.December) {
            seasons.push(seasons_1.Seasons.Autumn);
        }
    }
    if (hemisphere === Hemisphere.Southern) {
        if (month === months_1.Months.January || month === months_1.Months.February || month === months_1.Months.March) {
            seasons.push(seasons_1.Seasons.Autumn);
        }
        else if (month === months_1.Months.April || month === months_1.Months.May || month === months_1.Months.June) {
            seasons.push(seasons_1.Seasons.Winter);
        }
        else if (month === months_1.Months.July || month === months_1.Months.August || month === months_1.Months.September) {
            seasons.push(seasons_1.Seasons.Summer);
        }
        else if (month === months_1.Months.October || month === months_1.Months.November || month === months_1.Months.December) {
            seasons.push(seasons_1.Seasons.Spring);
        }
    }
    return seasons.map((season) => seasons_1.Seasons[season]);
}
console.log(`In the ${Hemisphere[selectedHemisphere]} hemisphere, the month of ${months_1.Months[selectedMonth]} is in ${getSeason(selectedMonth, selectedHemisphere)}`);
