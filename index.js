const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const fs = require('fs');
const Manager = require("./lib/Manager");
const generateWebPage = require("./src/generateWebPage.js");

const promptUser = () => {
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
}

const createManager = (data) => {
    return new Manager(data.name, data.id, data.email, data.officeNumber);

    console.log(manager);
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
    promptUser()
        .then(data => {
            return createManager(data);
        })
        .then(manager => {
            return generateWebPage(manager);
        })
        .then(webPage => writeToFile(webPage));
}

startApp();