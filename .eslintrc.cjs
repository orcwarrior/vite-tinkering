module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {"legacyDecotators": true}
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
    ],
    "plugins": [
        "@typescript-eslint",
        "unused-imports",
        "eslint-plugin-import",
    ],
    "settings": {
        "react": {"version": "17"},
        "import/resolver": {"typescript": {"project": "/"}}
    },
    "rules": {
        "import/no-internal-modules": [
            "error",
            {
                "forbid": [
                    "{/,@}Document/{!(index),**}",
                    "{/,@}User/{!(index),**}",
                ]
            }
        ]
    }
}
