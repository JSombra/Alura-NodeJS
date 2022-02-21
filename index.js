// const chalk = require('chalk');
const fs = require('fs');
const { Module } = require('module');
const path = require('path');


function extraiLinks (texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]: temp[2]}) //o primeiro valor deve estar entra colchetes, como no caso do indice [1]
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}


function trataErro (erro) {
    throw new Error('Não há arquivos no caminho informado'); //throw new Error, é como deve ser tratado uma mensagem de erro. erro.code mostra o código do erro, para ficar mais fácil de verificar na documentação
}

async function pegaArquivo (caminhoDoArquivo) {
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        return extraiLinks(texto);
      } catch(erro) {
        trataErro(erro);
      }
}

// ---Função para buscar todos os arquivos dentro de uma pasta
// async function pegaArquivoDiretorio(caminho) {
//     const caminhoAbsoluto = path.join(__dirname, '..', caminho);
//     const encoding = 'utf-8';
//     try {
//     const arquivos = await fs.promises.readdir(caminhoAbsoluto, {encoding});
//     const result = await Promise.all(arquivos.map(async (arquivo) => {
//       const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
//       const texto = await fs.promises.readFile(localArquivo, encoding);
//       return extraiLinks(texto);
//     }));
//     return result
//    } catch {
//        return trataErro(erro)
//    }
// }
// module.exports = pegaArquivoDiretorio;


module.exports = pegaArquivo;
