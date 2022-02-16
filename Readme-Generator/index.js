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
      name: 'tableofcontents',
      message: 'What is the table of index.js contents for your project?',
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
      name: 'license',
      message: 'What is the license for your project',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests for your project?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'what is the usage for your project',
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
