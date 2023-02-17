// function to return license badge
function licenseBadge(licence) {
  if (licence !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${licence}-yellowgreen.svg)`;
  }
  return "";
}
// function to return license link
function licenceLink(licence) {
  if (licence !== "none") {
    return `/n* [License](#license)/n`;
  }
  return "";
}
// function to return the license section to readme
function licenseSection(licence) {
  if (licence !== "none") {
    return `## License
      Licensed under the ${licence} license.`;
  }
  return "";
}

\// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
