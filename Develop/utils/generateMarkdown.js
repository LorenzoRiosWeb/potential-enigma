// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      if (!license) {
        return '';
    }

// Define the mapping of licenses to their corresponding badge URLs
    const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
      'APACHE2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
      'Boost1.0': '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]',
      'MPL2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
};

// Return the corresponding badge
      return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
}

// Define the mapping of licenses to their corresponding badge URLs
const licenseLinks = {
  'MIT': '(https://opensource.org/licenses/MIT)',
  'APACHE2.0': '(https://opensource.org/licenses/Apache-2.0)',
  'Boost1.0': '(https://www.boost.org/LICENSE_1_0.txt)',
  'MPL2.0': '(https://opensource.org/licenses/MPL-2.0)'
};
      return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
}

// Define the mapping of licenses to their corresponding license sections
const licenseSections = {
    'MIT': `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`,
    'APACHE2.0': `
## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).`,
    'Boost1.0': `
## License

This project is licensed under the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt).`,
    'MPL2.0': `
## License

This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).`
};

// Return the corresponding license section for the given license
return licenseSections[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.require}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
Contributions are welcome. Please submit a pull request or open an issue for discussion.

## Tests
${data.test}

## Questions
For any questions regarding this project, please contact [${data.githubUserEmail}](mailto:${data.githubUserEmail}).
`;
}

module.exports = generateMarkdown;
