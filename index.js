// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    ''
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is your project titled?",
            },
            {
                type: "input",
                name: "description",
                message: "What is the description of your project?",
            },
            {
                type: "input",
                name: "installation",
                message: "How does one install your project?",
            },
            {
                type: "input",
                name: "usage",
                message: "How is your project used?",
            },
            {
                type: "input",
                name: "contributing",
                message: "Who else contributed to your project?",
            },
            {
                type: "input",
                name: "tests",
                message: "How does one test that your project is functioning correctly?",
            },
            {
                type: "list",
                name: "license",
                message: "Which license would you like to attach to your project?",
                choices: ["None", "MIT"]
            }, 
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?",
            },
        ])
        .then((response) =>
        console.log(` ${response.title} \n ${response.description} \n ${response.installation} \n
        ${response.usage} \n ${response.contributing} \n ${response.tests} \n
        ${response.license} \n ${response.github} \n ${response.email}`));

}

// Function call to initialize app
init();
