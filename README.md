# app007_FlatList_02

Projeto desenvolvido com Expo e React Native para o desafio de `FlatList`.

O aplicativo exibe uma lista de paises e capitais a partir de um arquivo JSON localizado em `src/dados/paises.json`, com cabecalho e rodape personalizados.

## Estrutura

```text
app007_FlatList_02
├── App.js
├── app.json
├── index.js
├── package.json
└── src
    ├── componentes
    │   ├── Cabecalho.js
    │   ├── Conteudo.js
    │   ├── Rodape.js
    │   └── SimboloBandeiras.js
    ├── dados
    │   └── paises.json
    └── styleSheet
        └── estilos.js
```

## Funcionalidades

- Leitura de dados a partir de um arquivo JSON.
- Renderizacao com `FlatList`.
- Uso de `keyExtractor`, `renderItem`, `ItemSeparatorComponent`, `ListHeaderComponent` e `ListFooterComponent`.
- Cabecalho e rodape com simbolos de bandeiras.
- Cards com nome do pais, capital e bandeira.

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o projeto:

```bash
npx expo start
```

3. Para abrir no navegador:

```bash
npx expo start --web
```

## Validacao

Build web validado com:

```bash
npx expo export --platform web
```

## Observacao

As bandeiras utilizadas no app sao carregadas por URL publica do IBGE Paises.
