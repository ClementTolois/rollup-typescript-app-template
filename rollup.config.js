import typescript from "@rollup/plugin-typescript";
import run from '@rollup/plugin-run';

export default {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
    },
    plugins: [typescript(), run()],
};
