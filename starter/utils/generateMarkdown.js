// This function will determine badges based on license selection.
function licenseBadge(value) {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "None") {
    return "![Github license](https://img.shields.io/badge/license-${license}-blue.svg)";
  } else
  return "";
}


module.exports = {
  licenseBadge: licenseBadge,
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

  ${data.licenseBadge.value}
  
  ${data.description}


## Table Of Contents
* [Description](#description)
* [Requirements](#require)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributers](#contributors)
* [Testing](#test)

## Description
${data.description}

## Screenshot
![alt-text](${data.screenshot})

## Requirements
${data.require}

## Usage
${data.usage}

## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.creator}](https://github.com/${data.creator}/)

## Contributors
${data.contributors}

## Testing
${data.test}

## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
`;
}

module.exports = generateMarkdown;
