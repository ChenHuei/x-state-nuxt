module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: [
    '@vue/standard',
    '@vue/typescript',
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'nuxt', 'vue'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'handle-callback-err': 'off',
    'no-template-curly-in-string': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    camelcase: 'off',
    curly: 'off',
    'prettier/prettier': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
