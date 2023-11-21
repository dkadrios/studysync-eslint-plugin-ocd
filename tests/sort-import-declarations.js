const RuleTester = require('eslint/lib/testers/rule-tester.js')
var rule = require('../rules/sort-import-declarations')

var ruleTester = new RuleTester()

ruleTester.run('sort-import-declarations', rule, {
  invalid: [
    {
      code: 'import Baz from "baz"\n' +
            'import Bar from "bar"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Foo from "foo"\n' +
            'import Bar from "bar"\n' +
            'import Baz from "baz"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: 'Expected import of foo',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Bar from "bar"\n' +
            'import Foo from "foo"\n' +
            'import Baz from "baz"',
      errors: [
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: 'Expected import of foo',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Foo from "foo"\n' +
            'import Baz from "baz"\n' +
            'import Bar from "bar"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: 'Expected import of foo',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Baz from "baz"\n' +
            'import Bar from "bar"\n' +
            'import Foo from "foo"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import A from "baz"\n' +
            'import B from "bar"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import B from "bar"\n' +
              'import A from "baz"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import A from "baz"\n' +
            'import B from "bar"\n' +
            'import C from "foo"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import B from "bar"\n' +
              'import A from "baz"\n' +
              'import C from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    }
  ],
  valid: [
    {
      code: 'import Bar from "bar"\n',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Bar from "bar"\n' +
            'import Baz from "baz"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import Bar from "bar"\n' +
            'import Baz from "baz"\n' +
            'import Foo from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import B from "bar"\n' +
            'import A from "baz"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import C from "bar"\n' +
            'import A from "baz"\n' +
            'import B from "foo"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import {expect} from "chai"\n' +
            'import {expectSelectWithState, filterSelect} from "dummy/tests/helpers/ember-frost-core"\n' +
            'import {integration} from "dummy/tests/helpers/ember-test-utils/describe-component"\n' +
            'import Ember from "ember"\n' +
            'import {keyCodes} from "ember-frost-core/utils"\n' +
            'import {$hook} from "ember-hook"\n' +
            'import {describeComponent, it} from "ember-mocha"\n' +
            'import wait from "ember-test-helpers/wait"\n' +
            'import hbs from "htmlbars-inline-precompile"\n' +
            'import {afterEach, beforeEach, describe} from "mocha"\n' +
            'import sinon from "sinon"',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import foo from "foo"\n' +
            'import bar from "../bar"\n' +
            'import baz from "./baz"\n' +
            'import spam from "dummy/spam"',
      options: [
        {
          localPrefixes: ['../', './', 'dummy/']
        }
      ],
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'export default {}',
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    {
      code: 'import "polyfills"\n' +
            'import foo from "foo"',
      options: [
        {
          ignore: ['polyfills']
        }
      ],
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true }, sourceType: 'module' },
    }
  ]
})
