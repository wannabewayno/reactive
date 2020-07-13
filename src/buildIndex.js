// npm run build to execute this file and build index.js
const findComponentPaths = require('./findComponentPaths');
const fs = require('fs');

function createImportStatements(componentPaths){
    return componentPaths.map(componentPath => {
        const componentName = componentPath.slice(componentPath.lastIndexOf('/'));
        return {
            componentName,
            importStatement:`module.exports = require('${component}')\n`
        }
    });
}

function 

// Writes index.js file to export all components.
fs.writeFileSync(
    './index.js',
    createRequireStatements(findComponentPaths('./components')).join(''),
    'utf8'
);
