const chalk = require('chalk');
console.log(chalk.red.bgGreen.bold("Vamos testar"));

const paragrafo = "Texto retornado por uma função";
const paragrafo2 = 'Texto de testa referente ao chalk'

function texto (string) {
    return string;
}

console.log(chalk.black.bgWhite.bold(texto(paragrafo)))
console.log(chalk.red.underline.bgWhite(texto(paragrafo2)));