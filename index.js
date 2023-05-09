import fs from 'fs';
import chalk from 'chalk';

console.log(chalk.blue('Olá, mundo'));

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, "Erro de diretorio"))
}

// Função utilisando o metodo .then
// const pegaArquivo = (caminhoDoArquivo) => {
//     const encodin = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encodin)
//     .then(texto => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

// Função utilisando o metodo async
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encodin = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encodin);
        console.log(chalk.green(texto));
    }catch(erro){
        trataErro(erro)
    }
}

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

pegaArquivo('./arquivos/texto.md')
