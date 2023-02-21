const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const utils = require("./utils");
const generateMarkdown = require("./utils/generateMarkdown");
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

// // This function will determine badges based on license selection.
// function licenseBadge(value) {
//     if (value === "GNU AGPLv3") {
//       return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
//     } else if (value === "GNU GPLv3") {
//       return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//     } else if (value === "GNU LGPLv3") {
//       return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
//     } else if (value === "Mozilla") {
//       return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//     } else if (value === "MIT") {
//       return "[![License: MIT](https://img.shields.io/bower/l/mi?style=flat-square)](https://opensource.org/licenses/MIT)";
//     } else if (value === "Apache") {
//       return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//     } else {
//       return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//     }
//   };

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README.md file...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    });
};

// function call to initialize program
init();