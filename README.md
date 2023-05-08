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

## Biclioteca ` Chalk`:
> Neste projeto começamos com a intslação e utilização da bibliotrca Chalk que pode ser utilizada para controle de formatação e cores aprensentadas pelos que é exibido no `console`

---

# Problemas e Soluções -> <div id='problemas__solucoes'>


## Import vs required:
> O modo de importação do Node era o required com o `const nomeDaImportação = required('caminhoDo Mesmo')`. Mas isso não só esta caindo em desuso como esta sendo substituido pelo `import` como o `import nomeDaImportação from 'caminhoDo Mesmo'`. Mas para que isso funcione e necessario especificar sua utilização no `package.json` com `"type": "module"` (lembrando da utilização de " pois trata-se de um arquivo .json)!

.gitignore -> node_modules
## `.gitignore`:
> O arquivo `gitignore` diz para o git quais arquivos devem ser ignorados na hora de mandar o projeto para o git. Utilizamos isso para o `node_module` pois a pasta e grande e iremos utilizala apenas em tempo de desenvolvimento, e por ter as bibliotecas descritas no `packege.json` as mesmas serão baixadas na instalação do npm.