// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

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

// destructures the questions array to assign each question a variable name
const [titleMsg, descriptionMsg, installationMsg, usageMsg, 
    contributingMsg, testsMsg, licenseMsg, githubMsg, emailMsg] = questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(err))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
// uses the variables from the destructured array above as the message in each prompt
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
                choices: ["None", "MIT", "Apache License 2.0", "GNU GPL v3",
                 "Mozilla Public License 2.0", "BSD 3-Clause License"]
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
// selects the output folder as the destination of the file and the generateMarkdown function to write the content
        .then((response) => 
            writeToFile('./output/readme.md', generateMarkdown(response)))
}

// Function call to initialize app
init();
