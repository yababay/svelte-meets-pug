import pug  from 'rollup-plugin-pug'

export default {
    input: 'src/pug_modules/html.js',
    output: {
        dir: 'scripts',
        format: 'cjs',
        exports: 'default'
    },
    plugins: [
        pug({pretty: true}),
    ]
}

