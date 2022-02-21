const fetch = require('node-fetch');

function tratarErros (erro) {
    throw new Error(erro.message);    
}


async function checaStatus (arrayURLs) {
    try{
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                const res = await fetch(url);
                return `${res.status} - ${res.statusText}`;
    }))
    return arrayStatus;
    } catch(erro){
        tratarErros(erro);
    }
}

function geraArrayDeURLs (arrayLinks) {
    return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join())
}

async function validaURLs (arrayLinks) {
   const links = geraArrayDeURLs(arrayLinks);
   const statusLinks = await checaStatus(links); 
   let indice = 0
   const resultados = arrayLinks.map((objeto, indice) => ({
       ...objeto, 
       statusURLs: statusLinks[indice]
   }))
   return resultados;
}

module.exports = validaURLs;