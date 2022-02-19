const chalk = require('chalk');
const fs = require('fs');

function trataErro (erro) {
    throw new Error(chalk.white.bgRedBright.bold(erro.code, 'Não há arquivos no caminho')); //throw new Error, é como deve ser tratado uma mensagem de erro. erro.code mostra o código do erro, para ficar mais fácil de verificar na documentação
}

function pegaArquivo (caminhoDoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro)
        } else {
            console.log(chalk.black.bgGreenBright(texto));
        }
    })
}

pegaArquivo('./arquivos/texto1.md')