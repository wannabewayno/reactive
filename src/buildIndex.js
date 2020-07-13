// npm run build to execute this file and build index.js
const findComponentPaths = require('./findComponentPaths');
const fs = require('fs');

Array.prototype.joinByKey = function(key,selector) {
    console.log(this);
    return this.map(item => item[key]).join(selector);
}

function createExportStatement(statements){
    const componentNames = statements.joinByKey('componentName',',\n');

    return `export {\n${componentNames}\n}`
}

function createImportStatement(statements){
    return statements.joinByKey('importStatement','')
}

function createStatements(componentPaths){
    
    /* maps all component paths to a statement object
     ? Example: for path './components/buttons/buttons/CloseButton'
     ? -> { 
     ?      componentName:'CloseButton',
     ?      importStatement: `import CloseButton from './components/buttons/buttons/CloseButton'`
     ?    }
     */
    const statements = componentPaths.map(componentPath => {
        const componentName = componentPath.slice(componentPath.lastIndexOf('/')+1);
        return {
            componentName,
            importStatement:`import ${componentName} from '${componentPath}';\n`
        }
    });

    const exportStatement = createExportStatement(statements);
    const importStatement = createImportStatement(statements);

    return { exportStatement, importStatement };
}


function createWriteData(path){
    const componentPaths = findComponentPaths(path)
    const { importStatement, exportStatement } = createStatements(componentPaths);
    console.log(importStatement);
    console.log(exportStatement);
    return importStatement +'\n\n'+ exportStatement;
}

// Writes index.js file to export all components.
fs.writeFileSync(
    './src/index.js',
    createWriteData('./src/components'),
    'utf8'
);
