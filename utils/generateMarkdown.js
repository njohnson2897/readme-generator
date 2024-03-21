// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license) {
  //   return `\n${}`
  // }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// either creates the License section in markdown format or creates nothing if the user chose "none" for license
function renderLicenseSection(license) {
  if (license) {
    return `## License\n`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// organizes the readme with a table of contents and then links all of the user responses to the
// generated markdown to be written into the readme file
  return `# ${data.title} 

  ## Table of Contents
    [Description](#Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [Contributing](#Contributing)
    [Tests](#Tests)
    [Questions](#Questions)

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

  ## Questions?
  ${data.email}
  ${data.github}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
