function createManagerCard(manager) {
    return `
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="card-title">${manager.name}</h4>
                <h5 class="card-subtitle">${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <h6 class="card-text">ID: ${manager.id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></h6>
                <h6 class="card-text">Office Number: ${manager.officeNumber}</h6>
            </div>
        </div>`
}

function createEngineerCards(engineersArray) {
    htmlEngineers = [];
    for(let i = 0; i < engineersArray.length; i++) {
        htmlEngineers.push(`
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="card-title">${engineersArray[i].name}</h4>
                <h5 class="card-subtitle">${engineersArray[i].getRole()}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-text">ID: ${engineersArray[i].id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${engineersArray[i].email}">${engineersArray[i].email}</a></h6>
                <h6 class="card-text">Github: <a href="https://www.github.com/${engineersArray[i].github}" target="_blank">${engineersArray[i].github}</a></h6>
            </div>
        </div>`)
    }

    return htmlEngineers.toString();
}

function createInternCards(internsArray) {
    htmlInterns = [];
    for(let i = 0; i < internsArray.length; i++) {
        htmlInterns.push(`
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="card-title">${internsArray[i].name}</h4>
                <h6 class="card-text">${internsArray[i].getRole()}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-text">ID: ${internsArray[i].id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${internsArray[i].email}">${internsArray[i].email}</a></h6>
                <h6 class="card-text">School: ${internsArray[i].school}</h6>
            </div>
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Document</title>
        </head>
        <body>
            <header class="bg-info jumbotron">
                <h1 class="text-center">My Team</h1>
            </header>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        ${createManagerCard(manager)}
                    </div>
                    <div class="col-4">
                        ${createEngineerCards(engineersArray)}
                    </div>
                    <div class="col-4">
                        ${createInternCards(internsArray)}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `
}

module.exports = generateWebPage;