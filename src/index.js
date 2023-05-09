import fs from 'fs';
import chalk from 'chalk';

console.log(chalk.blue('Olá, mundo'));

function extrairLink(texto) {
    // gm no final é pra dizer que é global e mult linha
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(item => ({ [item[1]]: [item[2]] }))
    return resultados.length !== 0 ? resultados : "Não existem Links no arquivo";
}

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, "Erro de diretorio"))
}

// Função utilisando o metodo async
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encodin = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encodin);
        const listaDeLinks = extrairLink(texto);
        return listaDeLinks;
    } catch (erro) {
        trataErro(erro)
    }
}

export default pegaArquivo;

// Função utilisando o metodo .then
// const pegaArquivo = (caminhoDoArquivo) => {
//     const encodin = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encodin)
//     .then(texto => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

//Sem assincronicidade
// const pegaArquivo = (caminhoDoArquivo) => {
//     const encodin = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encodin, (erro, conteudo) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(conteudo));
//     })
// }



