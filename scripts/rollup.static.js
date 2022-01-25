import run  from '@rollup/plugin-run'
import { nodeResolve } from "@rollup/plugin-node-resolve"

export default {
    input: './node_modules/@yababay67/svelte-meets-pug/scripts/static.js',
    output: {
        dir: '.tmp',
        format: 'cjs',
        exports: 'default'
    },
    plugins: [run(), nodeResolve()]
}

