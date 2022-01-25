import settings from '../../../../src/settings.json'

const fs = require('fs')

const prefix = "node_modules/bootstrap-icons/icons/"
const opening = '<svg style="display: none">'
const closing = '</svg>'


function getSprite (settings){
    let buff = opening
    const sprite = settings.svgSprite
    if(!sprite || !sprite.length) return buff + closing
    for(const fn of sprite){
        const path = `${prefix}/${fn}.svg`
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

fs.writeFileSync('src/pug_modules/sprites/svg.pug', getSprite(settings))

export default null

