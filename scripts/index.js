const fs = require('fs')
const html = require('./scripts/html.js')
const settings = require('./scripts/settings.js')

fs.writeFileSync('docs/index.html', html(settings))

