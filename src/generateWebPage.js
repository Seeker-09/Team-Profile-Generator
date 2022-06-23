function createManagerCard(manager) {
    return `
        <div>
            ${manager.name}
            ${manager.id}
            <a href="mailto:${manager.email}">${manager.email}</a>
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
            <a href="mailto:${engineersArray[i].email}">${engineersArray[i].email}</a>
            ${engineersArray[i].github}
        </div>`)
    }

    return htmlEngineers.toString();
}

function createInternCards(internsArray) {
    htmlInterns = [];
    for(let i = 0; i < internsArray.length; i++) {
        htmlInterns.push(`
        <div>
            ${internsArray[i].name}
            ${internsArray[i].id}
            <a href="mailto:${internsArray[i].email}">${internsArray[i].email}</a>
            ${internsArray[i].school}
        </div>`)
    }

    return htmlInterns.toString();
}

function generateWebPage(manager, engineersArray, internsArray) {
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
                ${createInternCards(internsArray)}
            </div>
        </body>
        </html>
    `
}

module.exports = generateWebPage;