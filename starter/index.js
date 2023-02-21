const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// Title H1
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

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
        message: "Please providea relative path if you wish to include a screenshot",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a licence applicable to this project",
        choices: ["MIT", "Apache 2.0", "Boost 1.0", "MPL 2.0", "BSD2", "BSD3", "None"],
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

// License
// const license = process.argv[2];

// const myOutputString = `Hi. You're using my page. You have selected
// to use this license: ${generateLicenseString(license)}. That's a good choice.`;

// function generateLicenseString(input) {
//     if (input !== undefined) {
//         return `${input} (a mighty good license)`;
//     } else {
//         return "No license selected.";
//     }
// }


// console.log(myOutputString);

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README.md file...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    });
}

// function call to initialize program
init();