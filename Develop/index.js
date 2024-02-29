// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license for your project",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0"]
    },
    {
        type: "input",
        name: "require",
        message: "List any dependencies here."
    },
    {
        type: "input",
        name: "usage",
        message: "What are the technologies used with your project?"
    },
    {
        type: "input",
        name: "test",
        message: "What is the test process for this project?"
    },
    {
        type: "input",
        name: "githubUserEmail",
        message: "What is your Github user email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {
        console.log("Generating ReadMe...!");
        const markdown = generateMarkdown(inquirerResponse);
        writeToFile("Readme.md", markdown);
    })
    .catch((err) => {
        console.error(err);
    });
}

// Function call to initialize app
init();
