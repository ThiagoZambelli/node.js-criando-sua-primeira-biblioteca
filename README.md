<div align="center">

![Alt text](assets/logoLithtleZ.svg)

&nbsp;

---

&nbsp;




&nbsp;

---
</div>


<img align="left" width="50%" style="margin-top:-20px" src="assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h2 align="justify">Primeira Biblioteca Node.JS</h2>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Projeto feito durante a aula de -> Node.js: criando sua primeira biblioteca.</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>

</div>

- [Projeto](#projeto)
- [Problemas e Soluções](#problemas__solucoes)

&nbsp;

# Projeto -> <div id='projeto'>

&nbsp;

## Biclioteca ` Chalk`:
> Neste projeto começamos com a intslação e utilização da bibliotrca Chalk que pode ser utilizada para controle de formatação e cores aprensentadas pelos que é exibido no `console`

## Assincronicidade:
> Quando lidamos com JS é comum a utilização de funçoes assincronas para resolução de problemas, pois o JS por si só é sincrono, ou seja, ele resolve uma coisa por vez. Por tanto, utilizamos das funções assincronas, para que esperemos a resolução de alguma coisa mas o codigo continue sendo executado enquanto isso. existem duas formas mais comun de fazer isso:
  - async/await ->
  ~~~JavaScript
  async function pegaArquivo(caminhoDoArquivo) {
      try {
          const encodin = 'utf-8';
          const texto = await fs.promises.readFile(caminhoDoArquivo, encodin);
          console.log(chalk.green(texto));
      }catch(erro){
          trataErro(erro)
      }
  }
  ~~~

  - .then ->
  ~~~JavaScript
  const pegaArquivo = (caminhoDoArquivo) => {
      const encodin = 'utf-8';
      fs.promises
      .readFile(caminhoDoArquivo, encodin)
      .then(texto => console.log(chalk.green(texto)))
      .catch(trataErro)
  }
  ~~~

> Onde ambas funcinam de forma similar e com o mesmo desempenho mas o .then encadeia a função e o async/await se parece mais com uma função normal JS.

---

&nbsp;

# Problemas e Soluções -> <div id='problemas__solucoes'>

&nbsp;


## Import vs require:
  - ESM (EcmaScript Modules) ou CJS (Common JavaScript) 
> O modo de importação do Node era o required com o `const nomeDaImportação = require('caminhoDo Mesmo')`. Mas isso não só esta caindo em desuso como esta sendo substituido pelo `import` como o `import nomeDaImportação from 'caminhoDo Mesmo'`. Mas para que isso funcione e necessario especificar sua utilização no `package.json` com `"type": "module"` (lembrando da utilização de " pois trata-se de um arquivo .json)!


## `.gitignore`:
> O arquivo `gitignore` diz para o git quais arquivos devem ser ignorados na hora de mandar o projeto para o git. Utilizamos isso para o `node_module` pois a pasta e grande e iremos utilizala apenas em tempo de desenvolvimento, e por ter as bibliotecas descritas no `packege.json` as mesmas serão baixadas na instalação do npm.

## Expressões Regulares:
> Neste projeto queremos indentificar e analisar linkes de um arquivo `.md`, e links nos arquivos com essa extensão tem uma configuração muito especifica. Por tanto, iremos utilizar Expressões Regulares que tem por objetivo gerar padrões para pegar combinações expecificas em arquivos de texto.
  - [Link para a documentação das Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [Site Regex101, para ajudar na criação de Expressões Regulares](https://regex101.com/)

---

&nbsp;

# Aulas -> <div id='aulas'>

&nbsp;

## Aula 1:

- Que para criar um projeto em Node.js utilizamos o comando npm init;
- Que o arquivo package.json é utilizado pelo Node.js para listar as dependências instaladas, além de informações sobre versão do programa, autoria e scripts;
- Que as dependências (também chamadas de libs ou bibliotecas) são pacotes de código pronto que outras pessoas da comunidade disponibilizam, e nós as utilizamos para executar tarefas específicas no código sem termos que reescrever do zero;
- Que para deixar o código mais organizado podemos usar ferramentas de linting, além da importância delas para reforçar estilo e também para prever possíveis bugs.

## Aula 2:

- Que podemos utilizar a lib fs (File System, ou sistema de arquivos) nativa do JavaScript para que o programa consiga acessar e ler arquivos do computador;
- Que conseguimos capturar mensagens de erro enviadas pelo Node.js quando algo no programa não sai como o esperado utilizando a palavra-chave throw, ou lançar;
- Que as “promessas” são a forma que o JavaScript utiliza para trabalhar com código assíncrono e que podemos resolvê-las utilizando em conjunto as palavras-chave async e await ou o método .then().

## Aula 3:

- Como utilizar expressões regulares, uma sintaxe feita para reconhecer padrões de texto, para capturar links e URLs;
- Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo match e exec) para trazer os resultados e trabalhar com eles;
- Manipular os resultados extraídos do texto através de expressões regulares e montar um objeto de retorno utilizando a sintaxe do JavaScript e desestruturação de objetos com o spread operator ....