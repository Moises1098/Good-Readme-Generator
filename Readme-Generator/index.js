// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description for your project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What is your Installation for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage for your project',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who are the contributors for your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is the license for your project',
      choices: ['MIT License-blue','Apache License 2.0-blue', 'GPL 3.0-blue' , 'BSD 3-blue'],
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your GitHub username? (No @ needed)",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email?",
    },
  ])
  .then((answers) => {
    const readmeGenerator = generateMarkdown(answers);

    fs.writeFile('dist/README.md', readmeGenerator, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
