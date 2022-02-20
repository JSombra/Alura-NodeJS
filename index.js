const chalk = require('chalk');
const fs = require('fs');


function extraiLinks (texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]: temp[2]}) //o primeiro valor deve estar entra colchetes, como no caso do indice [1]
    }
    return arrayResultados
}


function trataErro (erro) {
    throw new Error(chalk.white.bgRedBright.bold(erro.code, 'Não há arquivos no caminho informado')); //throw new Error, é como deve ser tratado uma mensagem de erro. erro.code mostra o código do erro, para ficar mais fácil de verificar na documentação
}

async function pegaArquivo (caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(chalk.white.bgRedBright(erro))
    } finally { //finally vai ser executado, dando erro ou não.
        console.log(chalk.black.bgYellowBright("A operação foi concluída com sucesso"));
    }
}

pegaArquivo('./arquivos/texto1.md')