const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generateWebPage = require("./src/generateWebPage.js");

let manager;
let engineersArray = [];
let internsArray = [];

// PROMPTS
const managerPrompt = () => {
    return inquirer.prompt([
        // add manager
        // name
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name?"
        },
        // id
        {
            type: "input",
            name: "id",
            message: "What is the Team Manager's id"
        },
        // email
        {
            type: "input",
            name: "email",
            message: "What is the Team Manager's email?"
        },
        // office number
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Team Manager's office number?"
        }
    ])
    .then(data => {
        createManager(data);
        selectEmployeeTypePrompt();
    })
    .then(() => {
        return generateWebPage(manager, engineersArray);
    })
    .then(webPage => writeToFile(webPage));
}

const selectEmployeeTypePrompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern","None"]
        },
    ])
    .then(data => {
        if(data.employeeType === "None") {
            return;
        }
        else if(data.employeeType === "Engineer") {
            engineerPrompt()
        }
    })
}

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's id"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's github name?"
        }
    ])
    .then(data => {
        createEngineer(data);
        selectEmployeeTypePrompt();
    }).then(() => {
        return generateWebPage(manager, engineersArray);
    })
    .then(webPage => writeToFile(webPage));
}

// CREATE OBJECTS
const createManager = data => {
    manager = new Manager(data.name, data.id, data.email, data.officeNumber);
}

const createEngineer = data => {
    engineer = new Engineer(data.name, data.id, data.email, data.github);

    engineersArray.push(engineer);
    console.log(engineersArray);
}

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", data, err => {
            if(err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: "File Created"
            })
        })
    })
}

const startApp = () => {
    managerPrompt();
}

startApp();