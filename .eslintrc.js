module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        // "@typescript-eslint",
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-param-reassign": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "camelcase": "error",
        "capitalized-comments": [
            "error",
            "never"
        ],
        "complexity": [
            "error",
            {
                "max": 7
            }
        ],
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/no-deprecated": "error",
        "import/no-internal-modules": "error",
        "import/order": "error",
        "jsdoc/no-types": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": [
            "error",
            {
                "ignoreRegExpLiterals": false,
                "ignoreStrings": false,
                "code": 120
            }
        ],
        "max-lines": [
            "error",
            300
        ],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-new-wrappers": "error",
        "no-null/no-null": "error",
        "no-redeclare": "error",
        "no-restricted-imports": [
            "error",
            {
                "paths": [
                    {
                        "name": "lodash",
                        "importNames": []
                    }
                ]
            }
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-void": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": "error",
        "unicorn/filename-case": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "yoda": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    // "ban": [
                    //     true,
                    //     {
                    //         "name": "functionName",
                    //         "message": "This is not allowed"
                    //     }
                    // ],
                    // "encoding": true,
                    // "import-spacing": true,
                    // "jsdoc-format": true,
                    // "jsx-alignment": true,
                    // "jsx-boolean-value": true,
                    // "jsx-curly-spacing": [
                    //     true,
                    //     "never"
                    // ],
                    // "jsx-equals-spacing": [
                    //     true,
                    //     "never"
                    // ],
                    // "jsx-key": true,
                    // "jsx-no-bind": true,
                    // "jsx-no-lambda": true,
                    // "jsx-no-multiline-js": true,
                    // "jsx-no-string-ref": true,
                    // "jsx-self-close": true,
                    // "jsx-wrap-multiline": true,
                    // "match-default-export-name": true,
                    // "no-boolean-literal-compare": true,
                    // "no-dynamic-delete": true,
                    // "no-inferred-empty-object-type": true,
                    // "no-mergeable-namespace": true,
                    // "no-reference-import": true,
                    // "no-unnecessary-callback-wrapper": true,
                    // "no-unused-variable": true,
                    // "object-literal-sort-keys": true,
                    // "one-line": [
                    //     true,
                    //     "check-catch",
                    //     "check-finally",
                    //     "check-else",
                    //     "check-open-brace",
                    //     "check-whitespace"
                    // ],
                    // "prefer-conditional-expression": [
                    //     true,
                    //     "check-else-if"
                    // ],
                    // "prefer-method-signature": true,
                    // "prefer-switch": true,
                    // "prefer-while": true,
                    // "strict-type-predicates": true,
                    // "typedef": true
                }
            }
        ]
    }
};
