import typescript from '@rollup/plugin-typescript';
import run from '@rollup/plugin-run';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const PRODUCTION = !process.env.ROLLUP_WATCH;
const APP_NAME = 'typescriptApp';

export default [
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
