function createManagerCard(manager) {
    return `
        <div>
            ${manager.name}
            ${manager.id}
            ${manager.email}
            ${manager.officeNumber}
        </div>`
}

function createEngineerCards(engineersArray) {
    htmlEngineers = [];
    for(let i = 0; i < engineersArray.length; i++) {
        htmlEngineers.push(`
        <div>
            ${engineersArray[i].name}
            ${engineersArray[i].id}
            ${engineersArray[i].email}
            ${engineersArray[i].github}
        </div>`)
    }

    return htmlEngineers.toString();
}

function generateWebPage(manager, engineersArray) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id="main">
                ${createManagerCard(manager)}
                ${createEngineerCards(engineersArray)}
            </div>
        </body>
        </html>
    `
}

module.exports = generateWebPage;