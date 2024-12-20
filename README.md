
# Curso
https://www.udemy.com/course/react-redux-pt

## Setup

Criar projeto:

```
npx create-react-app <app name>
```

Executar projeto:
```
npm start
```

Abrir url [http://localhost:3000](http://localhost:3000) para visualizar projeto.

## Misc
Gerar Paleta de cores:
[https://coolors.co/gradient-palette](https://coolors.co/gradient-palette/f9b16e-f68080?number=30)


## Resumo
<details> 
<summary>Aula 01</summary>

    ### Pontos Importantes
        - React é uma biblioteca
        - Padrão SinglePageApplication (SPA)
</details>

<details> 
    <summary>Aula 02</summary>

    ### Pontos Importantes
    - Iteragir com o DOM (Document Object Model)
    - Hot reload
    - Manipular root element da sua SPA (index.html)
    - Alterado exemplo para resolver códigos [deprecated](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis)
    
</details>

<details> 
    <summary>Aula 03</summary>

    ### Pontos Importantes
    - JSX: Enxtensão que permite escrever código semelhante a `HTML` em arquivos `javascript`, 
    - Para usar `JSX` com react é necessário realizar o import `react`.
    - React é fortemente orientado a criação de componentes
</details>

<details> 
    <summary>Aula 04</summary>

    ### Pontos Importantes
    - Para utilizar `arquivos` (ex.: css) necessitamos realizar o `import relativo`
</details>

<details> 
    <summary>Aula 05</summary>

    ### Pontos Importantes
    - Convenção: Components (método e arquivos) costumam ser nomeados no padrão 'Pascal case'.
    - JSX acessa os camponentes como tags, exemplo: '<div><Comp01 /></div>'
</details>

<details> 
    <summary>Aula 06</summary>
    ### Pontos Importantes
    -  Convenção: componentes devem ter seu conteúdo envolvidos por parenteses `()`
</details>

<details> 
    <summary>Componente com Propriedade</summary>
    ### Pontos Importantes
    - convenção: nome de propriedades serão conhecidos como `props`
    - upload images: em andamento
</details>

<details> 
    <summary>Edição de propriedades</summary>
    ### Pontos Importantes
    -  Propriedades são somente leitura (read only)
</details>

<details> 
    <summary>React Fragment</summary>
    ### Pontos Importantes
    -  Utilizar alguma tag para envolver os elementos html/jsx dos componentes
    - <React.Fragment> ou <></> é utilizado para resolver o erro:
      `Adjacent JSX elementos must be wrapper in an enclosing tag.`
</details>

<details> 
    <summary>React Fragment</summary>
    ### Pontos Importantes
    -  Utilizar alguma tag para envolver os elementos html/jsx dos componentes
    - <React.Fragment> ou <></> é utilizado para resolver o erro:
      `Adjacent JSX elementos must be wrapper in an enclosing tag.`
</details>
<details> 
    <summary>Componente Card #02</summary>
    ### Pontos Importantes
    - Para utilizar a propriedade `class` (CSS) devemos em elementos React utilizar `className`
</details>
<details> 
    <summary>Componente Card #03</summary>
    ### Pontos Importantes
    - No Javascript variaveis não podem conter hifen no seu nome
    - Para criar um objeto em javascript utilizamos a sintaxe: `{}`
</details>

<details> 
    <summary>Componente com Filhos #01</summary>
    ### Pontos Importantes
    - As propriedades não são passadas automaticamente entre componentes pais e filhos
    - Para compartilhar o objeto de propriedades completo utilizar spread `{...props}` [Javascript]    
</details>

<details> 
    <summary>Componente com Filhos #02</summary>
    ### Pontos Importantes
    - Compartilhar props entre componentes aninhados requer `cloneElement`     
</details>

<details> 
    <summary>Repetição</summary>
    ### Pontos Importantes
    - Usar `keys` nos componentes é importante para que o React possa encontrar os
    elementos rapidamente no caso de mudanças (unique keys prop error)
</details>

<details> 
    <summary>Renderização Condicional #01</summary>
    ### Pontos Importantes
    - Comparação `==` compara apenas o conteúdo (Javascript)
    - Comparação `===` compara conteúdo e tipo da variável  (Javascript)
</details>
<details> 
    <summary>Componentes com Estado</summary>
    ### Pontos Importantes
    - React Hooks (useState)
</details>
<details> 
    <summary>Componente Controlado</summary>
    ### Pontos Importantes
    - Estado do componente é associado ao dado
    - Não é possível alterar a interface gráfica sem alterar o dado (unidirecional)
    - Para mudar o estado, utilizar eventos e hooks
    - Para ter um componente sem onChange utilizar readOnly
    - Para ter um componente não controlado, utlizar undefined no valor de onChange
</details>
