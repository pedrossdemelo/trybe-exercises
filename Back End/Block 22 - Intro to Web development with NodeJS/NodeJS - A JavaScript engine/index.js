const readline = require('readline-sync');
// const {execSync} = require('child_process');

const scripts = [
  'giveaway',
  'speed',
  'imc',
];

const selected = readline.keyInSelect(scripts, 'Choose a script: ');

// execSync(`npm run ${scripts[selected]}`);
eval(`require("./${scripts[selected]}.js")`);