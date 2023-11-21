var RuleTester = require('eslint').RuleTester
var rule = require('../rules/sort-import-declaration-specifiers')

var ruleTester = new RuleTester()

ruleTester.run('sort-import-declaration-specifiers', rule, {
  invalid: [
    {
      code: 'import {it, describe} from "mocha"',
      errors: [
        {
          column: 9,
          line: 1,
          message: 'Expected describe instead of it',
          type: 'ImportSpecifier'
        },
        {
          column: 13,
          line: 1,
          message: 'Expected it instead of describe',
          type: 'ImportSpecifier'
        }
      ],
      output: 'import {describe, it} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {describe, beforeEach, it} from "mocha"',
      errors: [
        {
          column: 9,
          line: 1,
          message: 'Expected beforeEach instead of describe',
          type: 'ImportSpecifier'
        },
        {
          column: 19,
          line: 1,
          message: 'Expected describe instead of beforeEach',
          type: 'ImportSpecifier'
        }
      ],
      output: 'import {beforeEach, describe, it} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    }
  ],
  valid: [
    {
      code: 'import {it} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {describe, it} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {beforeEach, describe, it} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {afterEach, beforeEach, describe, it} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {\n' +
            '  it\n' +
            '} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {\n' +
            '  describe,\n' +
            '  it\n' +
            '} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {\n' +
            '  beforeEach,\n' +
            '  describe,\n' +
            '  it\n' +
            '} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {\n' +
            '  afterEach,\n' +
            '  beforeEach,\n' +
            '  describe,\n' +
            '  it\n' +
            '} from "mocha"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Ember from "ember"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    }
  ]
})
