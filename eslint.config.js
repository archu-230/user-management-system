import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  globalIgnores([
    "dist",
    "node_modules",
    "types",
    "**/*/types.ts"
  ]),
  {
    files: [ "**/*.{js,jsx}" ],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    extends: [
      js.configs.recommended,
      ...compat.extends("plugin:react/recommended"),
      reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "19.0",
      },
    },

    rules: {
      // =========================================
      // CORE RULES
      // =========================================
      "react/prop-types": "off",
      "react/no-children-prop": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/set-state-in-effect": "off",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      /**
       * Disallow var declarations
       * - 'error': Force using let/const instead of var for better scoping
       * - let/const have block scope vs var's function scope
       */
      "no-var": "error",

      /**
       * Prefer const when variables are not reassigned
       * - 'error': Use const for variables that don't get reassigned
       * - Improves code clarity and prevents accidental reassignment
       */
      "prefer-const": "error",

      /**
       * Require strict equality operators (=== and !==)
       * - 'error': Must use === and !== instead of == and !=
       * - Prevents type coercion bugs: 0 == false, '' == false, etc.
       */
      "eqeqeq": "error",

      /**
       * Require curly braces for all control statements
       * - 'error': if, else, for, while, do must use braces
       * - Prevents dangling else problems and improves readability
       */
      "curly": "error",

      /**
       * Warn when using console statements
       * - 'warn': console.log, console.error, etc. should be removed in production
       * - Kept as warning to allow temporary debugging during development
       */
      "no-console": "warn",

      /**
       * Disallow duplicate import statements
       * - 'error': Cannot import from same module multiple times
       * - Encourages combining imports: import { a, b } from 'module'
       */
      "no-duplicate-imports": "error",

      // =========================================
      // SPACING & STRUCTURE RULES
      // =========================================

      /**
       * Require space before blocks
       * - ['error', 'always']: Space required before { of blocks
       * - Good: function foo() { ... }
       * - Bad: function foo(){ ... }
       */
      "space-before-blocks": [ "error", "always" ],

      /**
       * Space around keywords
       * - before: true, after: true: Keywords must have spaces around them
       * - Affects: if, else, for, while, do, switch, try, catch, finally, return
       * - Good: if (condition) { ... }
       * - Bad: if(condition){ ... }
       */
      "keyword-spacing": [ "error", { before: true, after: true } ],

      /**
       * No spaces inside parentheses
       * - ['error', 'never']: No spaces between ( and content
       * - Good: foo(bar, baz)
       * - Bad: foo( bar, baz ) or foo( bar,baz )
       */
      "space-in-parens": [ "error", "never" ],

      /**
       * Space inside array brackets
       * - ['error', 'always']: Spaces inside [] for array literals
       * - Good: [ 1, 2, 3 ]
       * - Bad: [1, 2, 3] or [ 1,2,3 ]
       */
      "array-bracket-spacing": [ "error", "always" ],

      /**
       * Space inside object braces
       * - ['error', 'always']: Spaces inside {} for object literals
       * - Good: { foo: 'bar', baz: 'qux' }
       * - Bad: {foo: 'bar', baz: 'qux'} or { foo:'bar', baz:'qux' }
       */
      "object-curly-spacing": [ "error", "always" ],

      /**
       * Space around operators
       * - 'error': Operators must have spaces around them
       * - Good: a + b, x = y, foo && bar
       * - Bad: a+b, x=y, foo&&bar
       */
      "space-infix-ops": "error",

      /**
       * Space after commas
       * - before: false, after: true: No space before, space after commas
       * - Good: foo(bar, baz, qux)
       * - Bad: foo(bar,baz,qux) or foo(bar ,baz ,qux)
       */
      "comma-spacing": [ "error", { before: false, after: true } ],

      /**
       * Space around semicolons
       * - before: false, after: true: No space before, space after semicolons
       * - Good: for (let i = 0; i < 10; i++) { ... }
       * - Bad: for (let i = 0;i < 10;i++) { ... }
       */
      "semi-spacing": [ "error", { before: false, after: true } ],

      /**
       * Space inside single-line blocks
       * - ['error', 'always']: Space required between { and } in single-line blocks
       * - Good: if (true) { return foo; }
       * - Bad: if (true) {return foo;}
       */
      "block-spacing": [ "error", "always" ],

      /**
       * Disallow trailing whitespace
       * - 'error': No spaces or tabs at end of lines
       * - Removes invisible characters that can cause issues in version control
       */
      "no-trailing-spaces": "error",

      /**
       * Limit multiple empty lines
       * - max: 2: Maximum 2 consecutive empty lines allowed
       * - maxEOF: 0: No empty lines at end of file
       * - Prevents excessive vertical spacing
       */
      "no-multiple-empty-lines": [ "error", { max: 2, maxEOF: 0 } ],

      /**
       * Enforce 2-space indentation
       * - ['error', 2]: Use 2 spaces per indentation level
       * - SwitchCase: 1: case statements indented 1 level from switch
       * - Industry standard for JavaScript/TypeScript
       */
      "indent": [ "error", 2, { SwitchCase: 1 } ],

      // =========================================
      // QUOTES & SEMICOLONS RULES
      // =========================================

      /**
       * Use single quotes for JavaScript strings
       * - ['error', 'single', { avoidEscape: true }]:
       *   - Single quotes required for strings
       *   - avoidEscape: true allows double quotes if escaping would be needed
       *   - Good: 'Hello world', "It's awesome"
       *   - Bad: "Hello world", 'He said, "Hi"'
       */
      "quotes": [ "error", "double", { avoidEscape: true } ],

      /**
       * JSX attributes must use double quotes
       * - ['error', 'prefer-double']: JSX props use double quotes
       * - Good: <Component prop="value" />
       * - Bad: <Component prop='value' />
       * - Consistent with HTML attribute style
       */
      "jsx-quotes": [ "error", "prefer-double" ],

      /**
       * Enforce consistent spacing inside JSX curly braces
       *
       * - ['error', { when: 'always', children: true, attributes: true }]
       * - Requires spaces before and after expressions inside `{}` in JSX
       * - Improves readability and enforces consistent formatting
       *
       * Good:
       *   <h1>{ title }</h1>
       *   <Component value={ count } />
       *
       * Bad:
       *   <h1>{title}</h1>
       *   <Component value={count} />
       *
       * Rule: react/jsx-curly-spacing
       */
      "react/jsx-curly-spacing": [ "error", {
        when: "always",
        children: true,
        attributes: true,
        spacing: { objectLiterals: "always" },
      },
      ],

      /**
       * Always require semicolons
       * - ['error', 'always']: Statements must end with semicolons
       * - Prevents Automatic Semicolon Insertion (ASI) issues
       * - Good: const x = 1;
       * - Bad: const x = 1
       */
      "semi": [ "error", "always" ],

      // =========================================
      // FUNCTION RULES
      // =========================================

      /**
       * No space before function parentheses
       * - anonymous: 'never': function () { ... }
       * - named: 'never': function foo() { ... }
       * - asyncArrow: 'always': async () => { ... }
       * - Good: function foo() {}, async () => {}
       * - Bad: function foo () {}, async() => {}
       */
      "space-before-function-paren": [ "error", {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      } ],

      /**
       * No space before function call parentheses
       * - ['error', 'never']: No space between function name and (
       * - Good: foo(), bar.baz()
       * - Bad: foo (), bar.baz ()
       */
      "func-call-spacing": [ "error", "never" ],

      // =========================================
      // BRACES RULES
      // =========================================

      /**
       * Enforce 1 true brace style (Allman style)
       * - ['error', '1tbs', { allowSingleLine: true }]:
       *   - Opening brace on same line as statement
       *   - Closing brace on its own line
       *   - allowSingleLine: true permits: if (true) { return; }
       *   - Good: if (condition) {
       *            // ...
       *          }
       */
      "brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
    }
  },
]);