import chalk from "chalk";
import pegaArquivo from "./index.js";
import fs from 'fs';

const caminho = process.argv;

function imprime(resultado, arquivo) {
    console.log(chalk.blue(`O resultado do arquivo ${chalk.yellow(arquivo)} foi:`));
    console.log(resultado);
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.black.bgRed('Arquivo ou diretorio não existe!'));
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprime(resultado, caminho)
    }
    if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (arquivo) => {
            const resultado = await pegaArquivo(`${caminho}/${arquivo}`)
            imprime(resultado, arquivo)
        })
    }

}

processaTexto(caminho);