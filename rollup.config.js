const typescript = require('@rollup/plugin-typescript');
const run = require('@rollup/plugin-run');
const terser = require('@rollup/plugin-terser');
const { readFileSync } = require('fs');

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const PRODUCTION = !process.env.ROLLUP_WATCH;
const APP_NAME = 'typescriptApp';

module.exports = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.browser,
                format: 'umd',
                name: APP_NAME,
            },
            {
                file: pkg.main,
                format: 'cjs',
            },
            {
                file: pkg.module,
                format: 'es',
            },
        ],
        plugins: [
            typescript(),
            PRODUCTION ? terser() : run(),
        ],
    },
];
