

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

  ${data.licenseBadge}
  
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
