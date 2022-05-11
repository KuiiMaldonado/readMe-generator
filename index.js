// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use your application/project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the guidelines to contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does your project have any tests?',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        name: 'license',
        choices: ['MITLicense', 'Unlicense', 'MozillaPublicLicense2.0', 'ApacheLicense2.0', 'No License'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        let buf = markdown.generateMarkdown(data);
        writeToFile('./output/README.md', buf);
    });
}

// Function call to initialize app
init();
