/**
 * @Date         : 2021-04-21 11:18:06
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-20 18:30:44
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@constq/eslint-config-qzr/index',
    '@constq/eslint-config-qzr/vue',
    '@constq/eslint-config-qzr/typescript',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'jest'
  ],
  ignorePatterns: ['index.html', '/docker'],
  rules: {
  },
}
