// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === "BSD 3-Clause License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (data.license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (data.license === "None")
    return  ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (data.license === "MIT") {

//   } else if (data.license === "Apache License 2.0") {

//   } else if (data.license === "BSD 3-Clause License") {
    
//   } else if (data.license === "GNU GPL v3") {
    
//   } else if (data.license === "Mozilla Public License 2.0") {
//     return 
//   }
// };
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// either creates the License section in markdown format or creates nothing if the user chose "none" for license
function renderLicenseSection(data) {
  if (data.license !== "None") {
    return `## License\n`
  } else if (data.license === "None") {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// organizes the readme with a table of contents and then links all of the user responses to the
// generated markdown to be written into the readme file
  return `# ${data.title} 

  ## Table of Contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)

  ## Description 
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests 
  ${data.tests}

  ## Questions
  ${data.email}
  ${data.github}

  ${renderLicenseSection(data)}
  ${renderLicenseBadge(data)}

`;
}

module.exports = generateMarkdown;
