// function to generate markdown for README
function generateMarkdown(data) {

// This function will determine badges based on license selection.
let license = data.license;
let licenseBadge = (" ");
switch (license) {
  case "Apache":
  licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  break;
  case "Boost":
  licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  break;
  case "GNU AGPLv3":
    licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    break;
  case "GNU GPLv3":
    licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    break;
  case "GNU LGPLv3":
    licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    break;
  case "MIT":
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
  case "Mozilla":
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
  case "The Unlicense":
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    break;
  default:
    licenseBadge = "None";
    break;

};
function licenseBadges(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return " ";
}

return `## ${data.title}

  ${data.licenseBadge}
  
##${data.description}


## Table Of Contents
  * [Description](#description)
  * [Requirements](#require)
  * [Usage](#usage)
  * [Contact](#contact - me)
  * [Contributers](#contributors)
  * [Testing](#test)


## Description
${ data.description }

## Screenshot
![alt - text] <img src=(${ data.screenshot })/>

## Requirements
${ data.require }

## Usage
${ data.usage }

## Contact
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.creator}](https://github.com/${data.creator}/)

## Contributors
${ data.contributors }

## Testing
${ data.test }

## License
  License used for this project - ${ data.license }
  * For more information on license types, please reference this website
for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
  `;
}

module.exports = generateMarkdown;
