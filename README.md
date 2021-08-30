# About

Front-End Code Style를 모듈화

# Install

```bash
yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/cypress
yarn add -D cypress eslint jest next prettier typescript

yarn add -D ssh://git@github.com:minemanemo/eslint-config-airbnbtsnext.git
```

# Setting

## TypeScript + Next.js + Airbnb Setting

> open .eslintrc.json

```json
{
  "extends": ["eslint-config-airbnbtsnext"]
}
```

or

```json
{
  "extends": ["eslint-config-airbnbtsnext/typescript"]
}
```

## Cypress

> open .eslintrc.json

```json
{
  "extends": ["eslint-config-airbnbtsnext/cypress"]
}
```

## Jest

> open .eslintrc.json

```json
{
  "extends": ["eslint-config-airbnbtsnext/jest"]
}
```

## Prettier

> open .prettierrc

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```
