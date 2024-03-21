// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    'What is your project titled?',
    'What is the description of your project?',
    'How does one install your project?',
    'How is your project used?',
    'Who else contributed to your project?',
    'How does one test that your project is functioning correctly?',
    'Which license would you like to attach to your project?',
    'What is your GitHub username?',
    'What is your email address?'
];

const [titleMsg, descriptionMsg, installationMsg, usageMsg, 
    contributingMsg, testsMsg, licenseMsg, githubMsg, emailMsg] = questions

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
                message: titleMsg,
            },
            {
                type: "input",
                name: "description",
                message: descriptionMsg,
            },
            {
                type: "input",
                name: "installation",
                message: installationMsg,
            },
            {
                type: "input",
                name: "usage",
                message: usageMsg,
            },
            {
                type: "input",
                name: "contributing",
                message: contributingMsg,
            },
            {
                type: "input",
                name: "tests",
                message: testsMsg,
            },
            {
                type: "list",
                name: "license",
                message: licenseMsg,
                choices: ["None", "MIT"]
            }, 
            {
                type: "input",
                name: "github",
                message: githubMsg,
            },
            {
                type: "input",
                name: "email",
                message: emailMsg,
            },
        ])
        .then((response) =>
        console.log(` ${response.title} \n ${response.description} \n ${response.installation} \n
        ${response.usage} \n ${response.contributing} \n ${response.tests} \n
        ${response.license} \n ${response.github} \n ${response.email}`));

}

// Function call to initialize app
init();
