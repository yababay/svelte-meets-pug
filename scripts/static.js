import copy from 'recursive-copy'

var fromPug = 'node_modules/@yababay67/svelte-meets-pug'

var options = {
    filter: [
        '**/*',
        '!css',
        '!js',
        '!index.js',
        '!LICENSE',
        '!package.json',
        '!README.md',
    ]
}

try {
    await copy(fromPug, 'src/pug_modules', options)
    await copy(fromPug + '/css', 'docs/pug-modules/css')
    await copy(fromPug + '/js',  'docs/pug-modules/js')
}
catch(e){
    console.error('Pug files have not been copied.')
}

export default null

