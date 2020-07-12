// npm run build to execute this file and build index.js
const findComponents = require('./findComponents');
const fs = require('fs');

function createRequireStatements(components){
    return components.map(component => `module.exports = require('${component}')\n`);
}

// Writes index.js file to export all components.
fs.writeFileSync(
    './index.js',
    createRequireStatements(findComponents('./components')).join(''),
    'utf8'
);
