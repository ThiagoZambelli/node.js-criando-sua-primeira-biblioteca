import chalk from "chalk";
import pegaArquivo from "./index.js";
import fs from 'fs';

const caminho = process.argv;

function imprime(resultado){
    console.log(chalk.blue('O resultado foi:'), resultado);
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprime(resultado)
    }
    if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (arquivo) => {
            const resultado = await pegaArquivo(`${caminho}/${arquivo}`)
            imprime(resultado)
        })
    }

}

processaTexto(caminho);