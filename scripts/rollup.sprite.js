import { nodeResolve } from "@rollup/plugin-node-resolve"
import json from '@rollup/plugin-json';
import run  from '@rollup/plugin-run';

export default {
    input: './node_modules/@yababay67/svelte-meets-pug/scripts/sprite.js',
    output: {
        dir: '.tmp',
        format: 'cjs',
        exports: 'default'
    },
    plugins: [json(), run(), nodeResolve()]
}

