import * as fs from 'fs'

import settings from '../../../../src/settings.json'

const copy = require('recursive-copy')

const iconsPath = "node_modules/bootstrap-icons/icons/"
const opening = '<svg style="display: none">'
const closing = '</svg>'
const fromPug = 'node_modules/@yababay67/svelte-meets-pug'

const options = {
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

function getSprite (settings){
    let buff = opening
    const sprite = settings.svgSprite
    if(!sprite || !sprite.length) return buff + closing
    for(const fn of sprite){
        const path = `${iconsPath}/${fn}.svg`
        if(!fs.existsSync(path)){
            console.log(`There is no ${fn} icon.`)
            continue
        }
        let svg = fs.readFileSync(path).toString()
        svg = svg.replace(/<svg[^>]+>/, `<symbol id="${fn}" viewBox="0 0 16 16" fill="currentColor">`)
        svg = svg.replace('</svg>', '</symbol>')
        buff += svg
    }
    buff += closing
    return buff
}

async function copyAll(){
    fs.writeFileSync('src/pug_modules/sprites/svg.pug', getSprite(settings))
    console.log('SVG files are copied.')
    try {
        await copy(fromPug, 'src/pug_modules', options)
        console.log('Pug files are copied.')
        await copy(fromPug + '/css', 'docs/pug-modules/css')
        console.log('CSS files are copied.')
        await copy(fromPug + '/js',  'docs/pug-modules/js')
        console.log('JS files are copied.')
    }
    catch(e){
        console.error('Pug modules have not been copied.')
    }
}

copyAll()

export default null

