import pug  from 'rollup-plugin-pug'

export default {
    input: './templates/html.js',
    output: {
        dir: 'scripts',
        format: 'cjs',
        exports: 'default'
    },
    plugins: [
        pug({pretty: true}),
    ]
}

