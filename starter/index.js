const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const utils = require("./utils");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const licenseBadge = require("starter/utils/licenseBadge.js");
const { default: Choices } = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Hi! What's the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please provide a relative path if you wish to include a screenshot",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla",
          "MIT",
          "Apache",
          "Boost",
          "None",
        ],
    },
    {
        type: "input",
        name: "require",
        message: "List any requirements or dependancies here",
    },
    {
        type: "input",
        name: "usage",
        message: "List any languages or technologies associated within this project",
    },
    {
        type: "input",
        name: "creator",
        message: "What's your GitHub username?",
    },
    {
        type: "input",
        name: "name",
        message: "What's your full name?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a valid email address",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide a details of any tests if applicable"
    },


];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README.md file...");
        writeToFile("./README.md", generateMarkdown(responses));
    });
};

// function call to initialize program
init();