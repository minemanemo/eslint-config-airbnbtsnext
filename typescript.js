module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // AirBnB & TypeScript & React & hooks
    // https://github.com/iamturns/eslint-config-airbnb-typescript#i-wish-this-config-would-support-
    'airbnb-typescript',
    'airbnb/hooks',

    // Prettier
    // https://github.com/prettier/eslint-config-prettier#special-rules
    'plugin:prettier/recommended',

    // TypeScript ESLint
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // import/export TypeScript
    // https://github.com/import-js/eslint-plugin-import#typescript
    'plugin:import/recommended',
    'plugin:import/typescript',

    // Next.js
    // https://nextjs.org/docs/basic-features/eslint
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'prettier',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-props-no-spreading': 'off',
  },
};
