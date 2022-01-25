var copy = require('recursive-copy')

var fromPug = 'node_modules/@yababay67/svelte-meets-pug'
var toPug = 'src/pug_modules'

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

module.exports.copySrc = () => copy(fromPug, toPug, options, (err, result)=>{
    console.log(`Pug templates are ${err ? "not copied!" + err : "copied successfully."}`)
})

module.exports.copyCss = () => copy(fromPug + '/css', 'docs/pug-modules', (err, result)=>{
    console.log(`CSS templates are ${err ? "not copied!" + err : "copied successfully."}`)
})

module.exports.copyJs = () => copy(fromPug + '/js', 'docs/pug-modules', (err, result)=>{
    console.log(`JavaScript templates are ${err ? "not copied!" + err : "copied successfully."}`)
})

