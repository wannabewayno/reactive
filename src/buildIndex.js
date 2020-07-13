// npm run build to execute this file and build index.js
const findComponentPaths = require('./findComponentPaths');
const fs = require('fs');

function createRequireStatements(components){
    return components.map(component => {
        const componentName = component
        return {
            componentName,
            importStatement:`module.exports = require('${component}')\n`
        }
    });
}

// Writes index.js file to export all components.
fs.writeFileSync(
    './index.js',
    createRequireStatements(findComponentPaths('./components')).join(''),
    'utf8'
);
