var copy = require('recursive-copy')

var from = 'node_modules/@yababay67/svelte-meets-pug'
var to = 'src/pug_modules'

var options = {
    filter: [
        '**/*',
        '!index.js',
        '!LICENSE',
        '!package.json',
        '!README.md',
    ]
}

module.exports = () => copy(from, to, options, (err, result)=>{
    console.log(`Pug templates are ${err ? "not copied!" + err : "copied successfully."}`)
})

