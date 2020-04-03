module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "ignorePatterns": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "brace-style": [
            "off",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": "error",
        "@typescript-eslint/camelcase": [
            "error",
            {
                "properties": "never",
                "ignoreDestructuring": false,
                "ignoreImports": false
            }
        ],
        "comma-spacing": [
            "off",
            {
                "before": false,
                "after": true
            }
        ],
        "@typescript-eslint/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "func-call-spacing": [
            "off",
            "never"
        ],
        "@typescript-eslint/func-call-spacing": [
            "error",
            "never"
        ],
        "indent": [
            "off",
            2,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1,
                "FunctionDeclaration": {
                    "parameters": 1,
                    "body": 1
                },
                "FunctionExpression": {
                    "parameters": 1,
                    "body": 1
                },
                "CallExpression": {
                    "arguments": 1
                },
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
                "flatTernaryExpressions": false,
                "ignoredNodes": [
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild"
                ],
                "ignoreComments": false
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "no-array-constructor": [
            "off"
        ],
        "@typescript-eslint/no-array-constructor": [
            "error"
        ],
        "no-dupe-class-members": [
            "off"
        ],
        "@typescript-eslint/no-dupe-class-members": [
            "error"
        ],
        "no-empty-function": [
            "off",
            {
                "allow": [
                    "arrowFunctions",
                    "functions",
                    "methods"
                ]
            }
        ],
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                "allow": [
                    "arrowFunctions",
                    "functions",
                    "methods"
                ]
            }
        ],
        "no-extra-parens": [
            "off",
            "all",
            {
                "conditionalAssign": true,
                "nestedBinaryExpressions": false,
                "returnAssign": false,
                "ignoreJSX": "all",
                "enforceForArrowConditionals": false
            }
        ],
        "@typescript-eslint/no-extra-parens": [
            "off",
            "all",
            {
                "conditionalAssign": true,
                "nestedBinaryExpressions": false,
                "returnAssign": false,
                "ignoreJSX": "all",
                "enforceForArrowConditionals": false
            }
        ],
        "no-extra-semi": [
            "off"
        ],
        "@typescript-eslint/no-extra-semi": [
            "error"
        ],
        "no-implied-eval": [
            "off"
        ],
        "@typescript-eslint/no-implied-eval": [
            "error"
        ],
        "no-magic-numbers": [
            "off",
            {
                "ignore": [],
                "ignoreArrayIndexes": true,
                "enforceConst": true,
                "detectObjects": false
            }
        ],
        "@typescript-eslint/no-magic-numbers": [
            "off",
            {
                "ignore": [],
                "ignoreArrayIndexes": true,
                "enforceConst": true,
                "detectObjects": false
            }
        ],
        "no-throw-literal": "error",
        "@typescript-eslint/no-throw-literal": [
            "error"
        ],
        "no-unused-expressions": "error",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": false,
                "allowTernary": false,
                "allowTaggedTemplates": false
            }
        ],
        "no-unused-vars": [
            "off",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "no-use-before-define": [
            "off",
            {
                "functions": true,
                "classes": true,
                "variables": true
            }
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "functions": true,
                "classes": true,
                "variables": true
            }
        ],
        "no-useless-constructor": [
            "off"
        ],
        "@typescript-eslint/no-useless-constructor": [
            "error"
        ],
        "quotes": [
            "off",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "semi": [
            "off",
            "always"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "mjs": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "test/**",
                    "tests/**",
                    "spec/**",
                    "**/__tests__/**",
                    "**/__mocks__/**",
                    "test.{js,jsx,ts,tsx}",
                    "test-*.{js,jsx,ts,tsx}",
                    "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}",
                    "**/jest.config.js",
                    "**/jest.setup.js",
                    "**/vue.config.js",
                    "**/webpack.config.js",
                    "**/webpack.config.*.js",
                    "**/rollup.config.js",
                    "**/rollup.config.*.js",
                    "**/gulpfile.js",
                    "**/gulpfile.*.js",
                    "**/Gruntfile{,.js}",
                    "**/protractor.conf.js",
                    "**/protractor.conf.*.js",
                    "**/karma.conf.js"
                ],
                "optionalDependencies": false
            }
        ],
        "jsx-a11y/anchor-has-content": [
            "error",
            {
                "components": []
            }
        ],
        "jsx-a11y/aria-role": [
            "error",
            {
                "ignoreNonDom": false,
                "ignoreNonDOM": false
            }
        ],
        "jsx-a11y/aria-props": [
            "error"
        ],
        "jsx-a11y/aria-proptypes": [
            "error"
        ],
        "jsx-a11y/aria-unsupported-elements": [
            "error"
        ],
        "jsx-a11y/alt-text": [
            "error",
            {
                "elements": [
                    "img",
                    "object",
                    "area",
                    "input[type=\"image\"]"
                ],
                "img": [],
                "object": [],
                "area": [],
                "input[type=\"image\"]": []
            }
        ],
        "jsx-a11y/img-redundant-alt": [
            "error"
        ],
        "jsx-a11y/label-has-for": [
            "off",
            {
                "components": [],
                "required": {
                    "every": [
                        "nesting",
                        "id"
                    ]
                },
                "allowChildren": false
            }
        ],
        "jsx-a11y/label-has-associated-control": [
            "error",
            {
                "labelComponents": [],
                "labelAttributes": [],
                "controlComponents": [],
                "assert": "both",
                "depth": 25
            }
        ],
        "jsx-a11y/control-has-associated-label": [
            "error",
            {
                "labelAttributes": [
                    "label"
                ],
                "controlComponents": [],
                "ignoreElements": [
                    "audio",
                    "canvas",
                    "embed",
                    "input",
                    "textarea",
                    "tr",
                    "video"
                ],
                "ignoreRoles": [
                    "grid",
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "row",
                    "tablist",
                    "toolbar",
                    "tree",
                    "treegrid"
                ],
                "depth": 5
            }
        ],
        "jsx-a11y/mouse-events-have-key-events": [
            "error"
        ],
        "jsx-a11y/no-access-key": [
            "error"
        ],
        "jsx-a11y/no-onchange": [
            "off"
        ],
        "jsx-a11y/interactive-supports-focus": [
            "error"
        ],
        "jsx-a11y/role-has-required-aria-props": [
            "error"
        ],
        "jsx-a11y/role-supports-aria-props": [
            "error"
        ],
        "jsx-a11y/tabindex-no-positive": [
            "error"
        ],
        "jsx-a11y/heading-has-content": [
            "error",
            {
                "components": [
                    ""
                ]
            }
        ],
        "jsx-a11y/html-has-lang": [
            "error"
        ],
        "jsx-a11y/lang": [
            "error"
        ],
        "jsx-a11y/no-distracting-elements": [
            "error",
            {
                "elements": [
                    "marquee",
                    "blink"
                ]
            }
        ],
        "jsx-a11y/scope": [
            "error"
        ],
        "jsx-a11y/click-events-have-key-events": [
            "error"
        ],
        "jsx-a11y/no-static-element-interactions": [
            "error",
            {
                "handlers": [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp"
                ]
            }
        ],
        "jsx-a11y/no-noninteractive-element-interactions": [
            "error",
            {
                "handlers": [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp"
                ]
            }
        ],
        "jsx-a11y/accessible-emoji": [
            "error"
        ],
        "jsx-a11y/aria-activedescendant-has-tabindex": [
            "error"
        ],
        "jsx-a11y/iframe-has-title": [
            "error"
        ],
        "jsx-a11y/no-autofocus": [
            "error",
            {
                "ignoreNonDOM": true
            }
        ],
        "jsx-a11y/no-redundant-roles": [
            "error"
        ],
        "jsx-a11y/media-has-caption": [
            "error",
            {
                "audio": [],
                "video": [],
                "track": []
            }
        ],
        "jsx-a11y/no-interactive-element-to-noninteractive-role": [
            "error",
            {
                "tr": [
                    "none",
                    "presentation"
                ]
            }
        ],
        "jsx-a11y/no-noninteractive-element-to-interactive-role": [
            "error",
            {
                "ul": [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid"
                ],
                "ol": [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid"
                ],
                "li": [
                    "menuitem",
                    "option",
                    "row",
                    "tab",
                    "treeitem"
                ],
                "table": [
                    "grid"
                ],
                "td": [
                    "gridcell"
                ]
            }
        ],
        "jsx-a11y/no-noninteractive-tabindex": [
            "error",
            {
                "tags": [],
                "roles": [
                    "tabpanel"
                ]
            }
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "components": [
                    "Link"
                ],
                "specialLink": [
                    "to"
                ],
                "aspects": [
                    "noHref",
                    "invalidHref",
                    "preferButton"
                ]
            }
        ],
        "no-underscore-dangle": "error",
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "class-methods-use-this": [
            "error",
            {
                "exceptMethods": [
                    "render",
                    "getInitialState",
                    "getDefaultProps",
                    "getChildContext",
                    "componentWillMount",
                    "UNSAFE_componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "UNSAFE_componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "UNSAFE_componentWillUpdate",
                    "componentDidUpdate",
                    "componentWillUnmount",
                    "componentDidCatch",
                    "getSnapshotBeforeUpdate"
                ]
            }
        ],
        "react/display-name": [
            "off",
            {
                "ignoreTranspilerName": false
            }
        ],
        "react/forbid-prop-types": [
            "error",
            {
                "forbid": [
                    "any",
                    "array",
                    "object"
                ],
                "checkContextTypes": true,
                "checkChildContextTypes": true
            }
        ],
        "react/forbid-dom-props": [
            "off",
            {
                "forbid": []
            }
        ],
        "react/jsx-boolean-value": [
            "error",
            "never",
            {
                "always": []
            }
        ],
        "react/jsx-closing-bracket-location": [
            "error",
            "line-aligned"
        ],
        "react/jsx-closing-tag-location": [
            "error"
        ],
        "react/jsx-curly-spacing": [
            "error",
            "never",
            {
                "allowMultiline": true
            }
        ],
        "react/jsx-handler-names": [
            "off",
            {
                "eventHandlerPrefix": "handle",
                "eventHandlerPropPrefix": "on"
            }
        ],
        "react/jsx-indent-props": [
            "error",
            2
        ],
        "react/jsx-key": [
            "off"
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 1,
                "when": "multiline"
            }
        ],
        "react/jsx-no-bind": [
            "error",
            {
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "allowFunctions": false,
                "allowBind": false,
                "ignoreDOMComponents": true
            }
        ],
        "react/jsx-no-duplicate-props": [
            "error",
            {
                "ignoreCase": true
            }
        ],
        "react/jsx-no-literals": [
            "off",
            {
                "noStrings": true
            }
        ],
        "react/jsx-no-undef": [
            "error"
        ],
        "react/jsx-pascal-case": [
            "error",
            {
                "allowAllCaps": true,
                "ignore": []
            }
        ],
        "react/sort-prop-types": [
            "off",
            {
                "ignoreCase": true,
                "callbacksLast": false,
                "requiredFirst": false,
                "sortShapeProp": true
            }
        ],
        "react/jsx-sort-prop-types": [
            "off"
        ],
        "react/jsx-sort-props": [
            "off",
            {
                "ignoreCase": true,
                "callbacksLast": false,
                "shorthandFirst": false,
                "shorthandLast": false,
                "noSortAlphabetically": false,
                "reservedFirst": true
            }
        ],
        "react/jsx-sort-default-props": [
            "off",
            {
                "ignoreCase": true
            }
        ],
        "react/jsx-uses-react": [
            "error"
        ],
        "react/jsx-uses-vars": [
            "error"
        ],
        "react/no-danger": [
            "warn"
        ],
        "react/no-deprecated": [
            "error"
        ],
        "react/no-did-mount-set-state": [
            "off"
        ],
        "react/no-did-update-set-state": [
            "error"
        ],
        "react/no-will-update-set-state": [
            "error"
        ],
        "react/no-direct-mutation-state": [
            "off"
        ],
        "react/no-is-mounted": [
            "error"
        ],
        "react/no-multi-comp": [
            "off"
        ],
        "react/no-set-state": [
            "off"
        ],
        "react/no-string-refs": [
            "error"
        ],
        "react/no-unknown-property": [
            "error"
        ],
        "react/prefer-es6-class": [
            "error",
            "always"
        ],
        "react/prefer-stateless-function": [
            "error",
            {
                "ignorePureComponents": true
            }
        ],
        "react/prop-types": [
            "error",
            {
                "ignore": [],
                "customValidators": [],
                "skipUndeclared": false
            }
        ],
        "react/react-in-jsx-scope": [
            "error"
        ],
        "react/require-render-return": [
            "error"
        ],
        "react/self-closing-comp": [
            "error"
        ],
        "react/sort-comp": [
            "error",
            {
                "order": [
                    "static-variables",
                    "static-methods",
                    "instance-variables",
                    "lifecycle",
                    "/^on.+$/",
                    "getters",
                    "setters",
                    "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                    "instance-methods",
                    "everything-else",
                    "rendering"
                ],
                "groups": {
                    "lifecycle": [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics",
                        "defaultProps",
                        "constructor",
                        "getDefaultProps",
                        "getInitialState",
                        "state",
                        "getChildContext",
                        "getDerivedStateFromProps",
                        "componentWillMount",
                        "UNSAFE_componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "UNSAFE_componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "UNSAFE_componentWillUpdate",
                        "getSnapshotBeforeUpdate",
                        "componentDidUpdate",
                        "componentDidCatch",
                        "componentWillUnmount"
                    ],
                    "rendering": [
                        "/^render.+$/",
                        "render"
                    ]
                }
            }
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            }
        ],
        "react/jsx-first-prop-new-line": [
            "error",
            "multiline-multiprop"
        ],
        "react/jsx-equals-spacing": [
            "error",
            "never"
        ],
        "react/jsx-indent": [
            "error",
            2
        ],
        "react/jsx-no-target-blank": [
            "error",
            {
                "enforceDynamicLinks": "always"
            }
        ],
        "react/jsx-no-comment-textnodes": [
            "error"
        ],
        "react/no-render-return-value": [
            "error"
        ],
        "react/require-optimization": [
            "off",
            {
                "allowDecorators": []
            }
        ],
        "react/no-find-dom-node": [
            "error"
        ],
        "react/forbid-component-props": [
            "off",
            {
                "forbid": []
            }
        ],
        "react/forbid-elements": [
            "off",
            {
                "forbid": []
            }
        ],
        "react/no-danger-with-children": [
            "error"
        ],
        "react/no-unused-prop-types": [
            "error",
            {
                "customValidators": [],
                "skipShapeProps": true
            }
        ],
        "react/style-prop-object": [
            "error"
        ],
        "react/no-unescaped-entities": [
            "error"
        ],
        "react/no-children-prop": [
            "error"
        ],
        "react/jsx-tag-spacing": [
            "error",
            {
                "closingSlash": "never",
                "beforeSelfClosing": "always",
                "afterOpening": "never",
                "beforeClosing": "never"
            }
        ],
        "react/jsx-space-before-closing": [
            "off",
            "always"
        ],
        "react/no-array-index-key": [
            "error"
        ],
        "react/require-default-props": [
            "error",
            {
                "forbidDefaultForRequired": true
            }
        ],
        "react/forbid-foreign-prop-types": [
            "warn",
            {
                "allowInPropTypes": true
            }
        ],
        "react/void-dom-elements-no-children": [
            "error"
        ],
        "react/default-props-match-prop-types": [
            "error",
            {
                "allowRequiredDefaults": false
            }
        ],
        "react/no-redundant-should-component-update": [
            "error"
        ],
        "react/no-unused-state": [
            "error"
        ],
        "react/boolean-prop-naming": [
            "off",
            {
                "propTypeNames": [
                    "bool",
                    "mutuallyExclusiveTrueProps"
                ],
                "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                "message": ""
            }
        ],
        "react/no-typos": [
            "error"
        ],
        "react/jsx-curly-brace-presence": [
            "error",
            {
                "props": "never",
                "children": "never"
            }
        ],
        "react/jsx-one-expression-per-line": [
            "error",
            {
                "allow": "single-child"
            }
        ],
        "react/destructuring-assignment": [
            "error",
            "always"
        ],
        "react/no-access-state-in-setstate": [
            "error"
        ],
        "react/button-has-type": [
            "error",
            {
                "button": true,
                "submit": true,
                "reset": false
            }
        ],
        "react/jsx-child-element-spacing": [
            "off"
        ],
        "react/no-this-in-sfc": [
            "error"
        ],
        "react/jsx-max-depth": [
            "off"
        ],
        "react/jsx-props-no-multi-spaces": [
            "error"
        ],
        "react/no-unsafe": [
            "off"
        ],
        "react/jsx-fragments": [
            "error",
            "syntax"
        ],
        "react/jsx-curly-newline": [
            "error",
            {
                "multiline": "consistent",
                "singleline": "consistent"
            }
        ],
        "react/state-in-constructor": [
            "error",
            "always"
        ],
        "react/static-property-placement": [
            "error",
            "property assignment"
        ],
        "react/jsx-props-no-spreading": [
            "error",
            {
                "html": "enforce",
                "custom": "enforce",
                "exceptions": []
            }
        ],
        "react/prefer-read-only-props": [
            "off"
        ],
        "react/jsx-no-script-url": [
            "off",
            [
                {
                    "name": "Link",
                    "props": [
                        "to"
                    ]
                }
            ]
        ],
        "react/jsx-no-useless-fragment": [
            "off"
        ],
        "react/no-adjacent-inline-elements": [
            "off"
        ],
        "react/function-component-definition": [
            "off",
            {
                "namedComponents": "function-expression",
                "unnamedComponents": "function-expression"
            }
        ],
        "strict": [
            "error",
            "never"
        ],
        "import/no-unresolved": [
            "error",
            {
                "commonjs": true,
                "caseSensitive": true
            }
        ],
        "import/named": [
            "error"
        ],
        "import/default": [
            "off"
        ],
        "import/namespace": [
            "off"
        ],
        "import/export": [
            "error"
        ],
        "import/no-named-as-default": [
            "error"
        ],
        "import/no-named-as-default-member": [
            "error"
        ],
        "import/no-deprecated": "error",
        "import/no-mutable-exports": [
            "error"
        ],
        "import/no-commonjs": [
            "off"
        ],
        "import/no-amd": [
            "error"
        ],
        "import/no-nodejs-modules": [
            "off"
        ],
        "import/first": [
            "error"
        ],
        "import/imports-first": [
            "off"
        ],
        "import/no-duplicates": [
            "error"
        ],
        "import/no-namespace": [
            "off"
        ],
        "import/order": "error",
        "import/newline-after-import": [
            "error"
        ],
        "import/prefer-default-export": [
            "error"
        ],
        "import/no-restricted-paths": [
            "off"
        ],
        "import/max-dependencies": [
            "off",
            {
                "max": 10
            }
        ],
        "import/no-absolute-path": [
            "error"
        ],
        "import/no-dynamic-require": [
            "error"
        ],
        "import/no-internal-modules": "error",
        "import/unambiguous": [
            "off"
        ],
        "import/no-webpack-loader-syntax": [
            "error"
        ],
        "import/no-unassigned-import": [
            "off"
        ],
        "import/no-named-default": [
            "error"
        ],
        "import/no-anonymous-default-export": [
            "off",
            {
                "allowArray": false,
                "allowArrowFunction": false,
                "allowAnonymousClass": false,
                "allowAnonymousFunction": false,
                "allowLiteral": false,
                "allowObject": false
            }
        ],
        "import/exports-last": [
            "off"
        ],
        "import/group-exports": [
            "off"
        ],
        "import/no-default-export": [
            "off"
        ],
        "import/no-named-export": [
            "off"
        ],
        "import/no-self-import": [
            "error"
        ],
        "import/no-cycle": [
            "error",
            {
                "maxDepth": 1
            }
        ],
        "import/no-useless-path-segments": [
            "error",
            {
                "commonjs": true
            }
        ],
        "import/dynamic-import-chunkname": [
            "off",
            {
                "importFunctions": [],
                "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
            }
        ],
        "import/no-relative-parent-imports": [
            "off"
        ],
        "import/no-unused-modules": [
            "off",
            {
                "ignoreExports": [],
                "missingExports": true,
                "unusedExports": true
            }
        ],
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "constructor-super": "error",
        "generator-star-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "no-class-assign": [
            "error"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-const-assign": [
            "error"
        ],
        "no-duplicate-imports": "error",
        "no-new-symbol": [
            "error"
        ],
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
        "no-this-before-super": [
            "error"
        ],
        "no-useless-computed-key": [
            "error"
        ],
        "no-useless-rename": [
            "error",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "no-var": [
            "error"
        ],
        "object-shorthand": "error",
        "prefer-arrow-callback": [
            "error",
            {
                "allowNamedFunctions": false,
                "allowUnboundThis": true
            }
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": true
            }
        ],
        "prefer-destructuring": [
            "error",
            {
                "VariableDeclarator": {
                    "array": false,
                    "object": true
                },
                "AssignmentExpression": {
                    "array": true,
                    "object": false
                }
            },
            {
                "enforceForRenamedProperties": false
            }
        ],
        "prefer-numeric-literals": [
            "error"
        ],
        "prefer-reflect": [
            "off"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "prefer-template": "error",
        "require-yield": [
            "error"
        ],
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "sort-imports": [
            "off",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "symbol-description": [
            "error"
        ],
        "template-curly-spacing": [
            "error"
        ],
        "yield-star-spacing": [
            "error",
            "after"
        ],
        "init-declarations": [
            "off"
        ],
        "no-catch-shadow": [
            "off"
        ],
        "no-delete-var": [
            "error"
        ],
        "no-label-var": [
            "error"
        ],
        "no-restricted-globals": [
            "error",
            "isFinite",
            "isNaN",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top"
        ],
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-undef": [
            "error"
        ],
        "no-undef-init": "error",
        "no-undefined": [
            "off"
        ],
        "array-bracket-newline": [
            "off",
            "consistent"
        ],
        "array-element-newline": [
            "off",
            {
                "multiline": true,
                "minItems": 3
            }
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "capitalized-comments": [
            "error",
            "never"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline"
            }
        ],
        "comma-style": [
            "error",
            "last",
            {
                "exceptions": {
                    "ArrayExpression": false,
                    "ArrayPattern": false,
                    "ArrowFunctionExpression": false,
                    "CallExpression": false,
                    "FunctionDeclaration": false,
                    "FunctionExpression": false,
                    "ImportDeclaration": false,
                    "ObjectExpression": false,
                    "ObjectPattern": false,
                    "VariableDeclaration": false,
                    "NewExpression": false
                }
            }
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-this": [
            "off"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "function-call-argument-newline": [
            "off",
            "consistent"
        ],
        "func-name-matching": [
            "off",
            "always",
            {
                "includeCommonJSModuleExports": false,
                "considerPropertyDescriptor": true
            }
        ],
        "func-names": [
            "warn"
        ],
        "func-style": [
            "off",
            "expression"
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ],
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
        "id-length": [
            "off"
        ],
        "id-match": "error",
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true,
                "overrides": {
                    "return": {
                        "after": true
                    },
                    "throw": {
                        "after": true
                    },
                    "case": {
                        "after": true
                    }
                }
            }
        ],
        "line-comment-position": [
            "off",
            {
                "position": "above",
                "ignorePattern": "",
                "applyDefaultPatterns": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": false
            }
        ],
        "lines-around-comment": [
            "off"
        ],
        "lines-around-directive": [
            "error",
            {
                "before": "always",
                "after": "always"
            }
        ],
        "max-depth": [
            "off",
            4
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
        "max-lines-per-function": [
            "off",
            {
                "max": 50,
                "skipBlankLines": true,
                "skipComments": true,
                "IIFEs": true
            }
        ],
        "max-nested-callbacks": [
            "off"
        ],
        "max-params": [
            "off",
            3
        ],
        "max-statements": [
            "off",
            10
        ],
        "max-statements-per-line": [
            "off",
            {
                "max": 1
            }
        ],
        "multiline-comment-style": [
            "off",
            "starred-block"
        ],
        "multiline-ternary": [
            "off",
            "never"
        ],
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "newIsCapExceptions": [],
                "capIsNew": false,
                "capIsNewExceptions": [
                    "Immutable.Map",
                    "Immutable.Set",
                    "Immutable.List"
                ],
                "properties": true
            }
        ],
        "new-parens": "error",
        "newline-after-var": [
            "off"
        ],
        "newline-before-return": [
            "off"
        ],
        "newline-per-chained-call": "error",
        "no-bitwise": "error",
        "no-continue": [
            "error"
        ],
        "no-inline-comments": [
            "off"
        ],
        "no-lonely-if": [
            "error"
        ],
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    [
                        "%",
                        "**"
                    ],
                    [
                        "%",
                        "+"
                    ],
                    [
                        "%",
                        "-"
                    ],
                    [
                        "%",
                        "*"
                    ],
                    [
                        "%",
                        "/"
                    ],
                    [
                        "/",
                        "*"
                    ],
                    [
                        "&",
                        "|",
                        "<<",
                        ">>",
                        ">>>"
                    ],
                    [
                        "==",
                        "!=",
                        "===",
                        "!=="
                    ],
                    [
                        "&&",
                        "||"
                    ]
                ],
                "allowSamePrecedence": false
            }
        ],
        "no-mixed-spaces-and-tabs": [
            "error"
        ],
        "no-multi-assign": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-negated-condition": [
            "off"
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-plusplus": [
            "error"
        ],
        "no-restricted-syntax": [
            "error",
            {
                "selector": "ForInStatement",
                "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
            },
            {
                "selector": "ForOfStatement",
                "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
            },
            {
                "selector": "LabeledStatement",
                "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
            },
            {
                "selector": "WithStatement",
                "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
            }
        ],
        "no-spaced-func": [
            "error"
        ],
        "no-tabs": [
            "error"
        ],
        "no-ternary": [
            "off"
        ],
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": false
            }
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "nonblock-statement-body-position": [
            "error",
            "beside",
            {
                "overrides": {}
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                },
                "ObjectPattern": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                },
                "ImportDeclaration": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                },
                "ExportDeclaration": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                }
            }
        ],
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": true,
                "allowMultiplePropertiesPerLine": false
            }
        ],
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        "operator-assignment": [
            "error",
            "always"
        ],
        "operator-linebreak": [
            "error",
            "before",
            {
                "overrides": {
                    "=": "none"
                }
            }
        ],
        "padded-blocks": [
            "error",
            {
                "blocks": "never",
                "classes": "never",
                "switches": "never"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],
        "padding-line-between-statements": [
            "off"
        ],
        "prefer-exponentiation-operator": [
            "off"
        ],
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "require-jsdoc": [
            "off"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "sort-keys": [
            "off",
            "asc",
            {
                "caseSensitive": false,
                "natural": true
            }
        ],
        "sort-vars": [
            "off"
        ],
        "space-before-blocks": [
            "error"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false,
                "overrides": {}
            }
        ],
        "spaced-comment": "error",
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "wrap-regex": [
            "off"
        ],
        "callback-return": [
            "off"
        ],
        "global-require": [
            "error"
        ],
        "handle-callback-err": [
            "off"
        ],
        "no-buffer-constructor": [
            "error"
        ],
        "no-mixed-requires": [
            "off",
            false
        ],
        "no-new-require": [
            "error"
        ],
        "no-path-concat": [
            "error"
        ],
        "no-process-env": [
            "off"
        ],
        "no-process-exit": [
            "off"
        ],
        "no-restricted-modules": [
            "off"
        ],
        "no-sync": [
            "off"
        ],
        "for-direction": [
            "error"
        ],
        "getter-return": [
            "error",
            {
                "allowImplicit": true
            }
        ],
        "no-async-promise-executor": [
            "error"
        ],
        "no-await-in-loop": [
            "error"
        ],
        "no-compare-neg-zero": [
            "error"
        ],
        "no-cond-assign": "error",
        "no-console": "error",
        "no-constant-condition": [
            "warn"
        ],
        "no-control-regex": [
            "error"
        ],
        "no-debugger": "error",
        "no-dupe-args": [
            "error"
        ],
        "no-dupe-else-if": [
            "off"
        ],
        "no-dupe-keys": [
            "error"
        ],
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": [
            "error"
        ],
        "no-ex-assign": [
            "error"
        ],
        "no-extra-boolean-cast": [
            "error"
        ],
        "no-func-assign": [
            "error"
        ],
        "no-import-assign": [
            "off"
        ],
        "no-inner-declarations": [
            "error"
        ],
        "no-invalid-regexp": [
            "error"
        ],
        "no-irregular-whitespace": [
            "error"
        ],
        "no-misleading-character-class": [
            "error"
        ],
        "no-obj-calls": [
            "error"
        ],
        "no-prototype-builtins": [
            "error"
        ],
        "no-regex-spaces": [
            "error"
        ],
        "no-setter-return": [
            "off"
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": [
            "error"
        ],
        "no-unreachable": [
            "error"
        ],
        "no-unsafe-finally": "error",
        "no-unsafe-negation": [
            "error"
        ],
        "no-negated-in-lhs": [
            "off"
        ],
        "require-atomic-updates": [
            "off"
        ],
        "use-isnan": "error",
        "valid-jsdoc": [
            "off"
        ],
        "valid-typeof": "error",
        "accessor-pairs": [
            "off"
        ],
        "array-callback-return": [
            "error",
            {
                "allowImplicit": true
            }
        ],
        "block-scoped-var": [
            "error"
        ],
        "complexity": [
            "error",
            {
                "max": 7
            }
        ],
        "consistent-return": [
            "error"
        ],
        "curly": "error",
        "default-case": [
            "error",
            {
                "commentPattern": "^no default$"
            }
        ],
        "default-param-last": [
            "off"
        ],
        "dot-notation": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "grouped-accessor-pairs": [
            "off"
        ],
        "guard-for-in": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-alert": [
            "warn"
        ],
        "no-caller": "error",
        "no-case-declarations": [
            "error"
        ],
        "no-constructor-return": [
            "off"
        ],
        "no-div-regex": [
            "off"
        ],
        "no-else-return": [
            "error",
            {
                "allowElseIf": false
            }
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-eq-null": [
            "off"
        ],
        "no-eval": "error",
        "no-extend-native": [
            "error"
        ],
        "no-extra-bind": "error",
        "no-extra-label": [
            "error"
        ],
        "no-fallthrough": "error",
        "no-floating-decimal": [
            "error"
        ],
        "no-global-assign": [
            "error",
            {
                "exceptions": []
            }
        ],
        "no-native-reassign": [
            "off"
        ],
        "no-implicit-coercion": [
            "off",
            {
                "boolean": false,
                "number": true,
                "string": true,
                "allow": []
            }
        ],
        "no-implicit-globals": [
            "off"
        ],
        "no-invalid-this": "error",
        "no-iterator": [
            "error"
        ],
        "no-labels": [
            "error",
            {
                "allowLoop": false,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ],
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": false
            }
        ],
        "no-multi-str": [
            "error"
        ],
        "no-new": [
            "error"
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-wrappers": "error",
        "no-octal": [
            "error"
        ],
        "no-octal-escape": [
            "error"
        ],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "acc",
                    "accumulator",
                    "e",
                    "ctx",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope",
                    "staticContext"
                ]
            }
        ],
        "no-proto": [
            "error"
        ],
        "no-redeclare": "error",
        "no-restricted-properties": [
            "error",
            {
                "object": "arguments",
                "property": "callee",
                "message": "arguments.callee is deprecated"
            },
            {
                "object": "global",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "self",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "window",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "global",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "object": "self",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "object": "window",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "property": "__defineGetter__",
                "message": "Please use Object.defineProperty instead."
            },
            {
                "property": "__defineSetter__",
                "message": "Please use Object.defineProperty instead."
            },
            {
                "object": "Math",
                "property": "pow",
                "message": "Use the exponentiation operator (**) instead."
            }
        ],
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-return-await": "error",
        "no-script-url": [
            "error"
        ],
        "no-self-assign": [
            "error",
            {
                "props": true
            }
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": "error",
        "no-unmodified-loop-condition": [
            "off"
        ],
        "no-unused-labels": "error",
        "no-useless-call": [
            "off"
        ],
        "no-useless-catch": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-useless-escape": [
            "error"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-void": "error",
        "no-warning-comments": [
            "off",
            {
                "terms": [
                    "todo",
                    "fixme",
                    "xxx"
                ],
                "location": "start"
            }
        ],
        "no-with": [
            "error"
        ],
        "prefer-promise-reject-errors": [
            "error",
            {
                "allowEmptyReject": true
            }
        ],
        "prefer-named-capture-group": [
            "off"
        ],
        "prefer-regex-literals": [
            "off"
        ],
        "radix": "error",
        "require-await": [
            "off"
        ],
        "require-unicode-regexp": [
            "off"
        ],
        "vars-on-top": [
            "error"
        ],
        "wrap-iife": [
            "error",
            "outside",
            {
                "functionPrototypeMethods": false
            }
        ],
        "yoda": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
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
        "jsdoc/no-types": "error",
        "no-null/no-null": "error",
        "prefer-arrow/prefer-arrow-functions": "error",
        "unicorn/filename-case": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "ban": [
                        true,
                        {
                            "name": "functionName",
                            "message": "This is not allowed"
                        }
                    ],
                    "encoding": true,
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "match-default-export-name": true,
                    "no-boolean-literal-compare": true,
                    "no-dynamic-delete": true,
                    "no-inferred-empty-object-type": true,
                    "no-mergeable-namespace": true,
                    "no-reference-import": true,
                    "no-unnecessary-callback-wrapper": true,
                    "no-unused-variable": true,
                    "object-literal-sort-keys": true,
                    "one-line": [
                        true,
                        "check-catch",
                        "check-finally",
                        "check-else",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "prefer-conditional-expression": [
                        true,
                        "check-else-if"
                    ],
                    "prefer-method-signature": true,
                    "prefer-switch": true,
                    "prefer-while": true,
                    "strict-type-predicates": true,
                    "typedef": true
                }
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".ts",
                    ".jsx",
                    ".tsx",
                    ".json"
                ]
            }
        },
        "import/extensions": [
            ".js",
            ".ts",
            ".mjs",
            ".jsx",
            ".tsx"
        ],
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx",
                ".d.ts"
            ]
        },
        "react": {
            "pragma": "React",
            "version": "detect"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            "exact",
            "Object.freeze"
        ],
        "import/core-modules": [],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$"
        ]
    }
};
