const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const fs = require('fs');

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

const startApp = () => {
    promptUser();
}

startApp();