const pegaArquivo = require('../index')
const validaURLs = require('../http-validacao')

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

const arrayURLs = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
        statusURLs: '200 - OK'
    }
]


describe('pegaArquivo::', () => {
    it('deve ser uma função pegaArquivo', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/home/jefferson/Documents/curso-alura-nodejs-express/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    });
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/home/jefferson/Documents/curso-alura-nodejs-express/test/arquivos/texto1_semlinks.md')
        expect(resultado).toBe('não há links')
    });
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('/home/jefferson/Documents/curso-alura-nodejs-express/test/arquivos')).rejects.toThrowError("Não há arquivos no caminho informado")
    });
    it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('/home/jefferson/Documents/curso-alura-nodejs-express/test/arquivos/texto1.md')).resolves.toEqual(arrayResult)
      })
})
