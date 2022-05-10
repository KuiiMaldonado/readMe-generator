// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
        name: 'constributions',
        message: 'What are the guidelines to contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does your project have any tests?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
    });
}

// Function call to initialize app
init();
