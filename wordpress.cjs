module.exports = {
	env: {
		browser: true,
		es2021: true,
		jquery: true,
	},
	extends: [
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 80,
				tabWidth: 4,
				singleQuote: true,
				trailingComma: 'all',
				arrowParens: 'always',
				semi: false,
				endOfLine: 'auto',
			},
		],
	},
}
