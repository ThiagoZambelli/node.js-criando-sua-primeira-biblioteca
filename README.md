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

## Script:
> Dentro do `package.json`, criamos um script para que quando fosse rodado no terminal nós precisacessos apenas rodar o script e dar o caminho do arquivo.
- > E.X: 
    `npm run nomeDoScript CaminhoASerExecutado`

    
## Lidando com erros:

> Uma lista com alguns dos erros mais comuns que podem aparecer.

`ENOTFOUND`
- Error: not found - Retorna quando o Node.js tenta estabelecer uma conexão com um servidor e a tentativa falha no DNS lookup; ou seja, ou o host não existe ou há algum erro no endereço fornecido, que não consegue ser resolvido pelo DNS.

- >Algumas das soluções possíveis: verifique se a URL fornecida realmente existe e se a string com a URL está sendo fornecida da forma correta para a função ou método que fará a conexão.

`ENOENT`
- Error: no entity - Como vimos no curso, muitas vezes acontece quando um caminho especificado, seja um diretório ou um arquivo, não existe no sistema de arquivos. Neste caso, temos que verificar se o caminho fornecido está correto.

- >Importante: algumas operações com fs requerem o uso do caminho absoluto de um arquivo ou diretório. Para “montar” a string com estes caminhos, você pode utilizar uma das libs mais comuns do Node.js, a path.

`EISDIR`
- Error: is a directory - O caminho fornecido é um diretório. Normalmente vemos este erro quando o programa esperava receber um caminho de um arquivo, mas ao invés disso recebeu um diretório. Novamente, devemos verificar a string recebida pela função ou método para conferir se está completa e montada da forma correta.

`ENOTDIR`
- Error: not a directory - é o contrário do erro anterior, quando o programa espera receber o caminho de um diretório mas recebe o caminho de um arquivo.

`EADDRINUSE`
- Error: address already in use - Muitas vezes este erro acontece quando estamos iniciando ou reiniciando um servidor web. Ele indica que o servidor está tentando se conectar a uma porta lógica que já está sendo ocupada por outro programa.


`ECONNREFUSED`
- Error: connection refused - Houve uma tentativa de envio de requisição a um endpoint, porém a conexão foi recusada. Normalmente é causada por inatividade do serviço que está sendo requisitado.

`ECONNRESET`
- Error: connection reset - Uma conexão em andamento foi fechada durante o processo de requisição-resposta, antes que a resposta fosse recebida. Pode ser causada por um timeout ou reinício do servidor.

### > A lista completa de erros pode ser conferida aqui, direto na [documentação do Node.js](https://nodejs.org/api/errors.html).

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

## cli.js:
> Utilizamos um arquico `cli.js` com uma constante com o valor `process.argv` que por sua vez pega os caminhos do terminal. Isso somado a exportação da nossa função faz com que possamos dar via comando de terminal o texto no qual queremos executar o codigo.

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

## Aula 4:

- A utilizar a interface de linha de comando e como aplicamos a lib process do Node.js para capturar e utilizar os dados informados no terminal em nosso código;
- A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;
- Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com import e export;
- Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.

