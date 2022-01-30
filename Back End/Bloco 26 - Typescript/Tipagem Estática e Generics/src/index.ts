import readline from 'readline-sync';
import { Months } from './months';
import { Seasons } from './seasons';

enum Hemisphere {
  Northern = 1,
  Southern,
}

const monthOptions = Object.keys(Months).map((key: any) => Months[key]).filter(value => typeof value === 'string');

const selectedMonth = readline.keyInSelect(monthOptions, 'Which month is it?') + 1;

const hemisphereOptions = Object.keys(Hemisphere).map((key: any) => Hemisphere[key]).filter(value => typeof value === 'string');

const selectedHemisphere = readline.keyInSelect(hemisphereOptions, 'Which hemisphere is it?') + 1;

function getSeason(month: Months, hemisphere: Hemisphere): String[] {
  const seasons: Seasons[] = [];
  console.log(arguments);
  if (hemisphere === Hemisphere.Northern) {
    if (month === Months.January || month === Months.February || month === Months.March) {
      seasons.push(Seasons.Winter);
    }
    if (month === Months.April || month === Months.May || month === Months.June) {
      seasons.push(Seasons.Spring);
    }
    if (month === Months.July || month === Months.August || month === Months.September) {
      seasons.push(Seasons.Summer);
    }
    if (month === Months.October || month === Months.November || month === Months.December) {
      seasons.push(Seasons.Autumn);
    }
  }
  if (hemisphere === Hemisphere.Southern) {
    if (month === Months.January || month === Months.February || month === Months.March) {
      seasons.push(Seasons.Autumn);
    } else if (month === Months.April || month === Months.May || month === Months.June) {
      seasons.push(Seasons.Winter);
    } else if (month === Months.July || month === Months.August || month === Months.September) {
      seasons.push(Seasons.Summer);
    } else if (month === Months.October || month === Months.November || month === Months.December) {
      seasons.push(Seasons.Spring);
    }
  }
  console.log(seasons);
  return seasons.map(( season: any ) => Seasons[season]);
}

console.log(`In the ${Hemisphere[selectedHemisphere]} hemisphere, the month of ${Months[selectedMonth]} is in ${getSeason(selectedMonth, selectedHemisphere)}`);