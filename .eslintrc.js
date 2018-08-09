module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        "standard",
        "plugin:vue/essential"
    ],
    // required to lint *.vue files
    plugins: ['standard', 'vue'],
    // add your custom rules here
    rules: {
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        // "max-len": [
        // 	"error",
        // 	120,
        // 	{
        // 		"tabWidth": 2
        // 	}
        // ],
        "no-tabs": "off",
        "no-debugger": 0,
        "no-useless-escape": 0,
        "vue/html-indent": [
            "error",
            2,
            {
                "attribute": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true
            }
        ],
        "vue/order-in-components": "error",
        "vue/require-default-prop": "off"
    }
}
