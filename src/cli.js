import chalk from "chalk";
import pegaArquivo from "./index.js";
import fs from 'fs';
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprime(valida, resultado, arquivo) {
    if(valida){   
        console.log(chalk.blue(`lista Validada foi:`));     
        console.log(chalk.yellow(arquivo),await listaValidada(resultado))                
    }else{
        console.log(chalk.blue(`O resultado do arquivo ${chalk.yellow(arquivo)} foi:`));
        console.log(resultado);
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === "--valida";

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
        imprime(valida, resultado, caminho)
    }
    if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (arquivo) => {
            const resultado = await pegaArquivo(`${caminho}/${arquivo}`)
            imprime(valida, resultado, arquivo)
        })
    }

}

processaTexto(caminho);