import json from '@rollup/plugin-json'

export default {
    input: './settings.js',
    output: {
        dir: 'scripts',
        format: 'cjs',
        exports: 'default'
    },
    plugins: [
        json(),
    ]
}

