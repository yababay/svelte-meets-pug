import json from '@rollup/plugin-json'

export default {
    input: 'src/pug_modules/settings.js',
    output: {
        dir: 'scripts',
        format: 'cjs',
        exports: 'default'
    },
    plugins: [
        json(),
    ]
}

