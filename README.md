# Simple Calculator Application

This project is a simple calculator application built with React. It allows users to perform basic arithmetic operations (addition, subtraction, multiplication) on two numbers provided as input. The application has automated tests and CI/CD processes to ensure code quality and facilitate deployment on GitHub Pages.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [License](#license)

## Features

- Perform basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
- User-friendly input handling with error validation
- Automated tests to ensure functionality
- CI/CD for automated testing and deployment

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JhonyParwani/Calculator_TDD.git
   
3. Install the dependencies:
    npm install

## Usage
1. Start the application:
    npm start
   
2. Open your browser and go to http://localhost:3000 to use the calculator.
   
4. Enter two numbers separated by a comma in the input field and click the desired operation button (Add, Subtract, Multiply).

## Testing
1. To run the tests, use the following command:
   
   npm test
   
## CI/CD Pipeline
This project utilizes GitHub Actions for Continuous Integration and Continuous Deployment. The workflow is defined in the .github/workflows/main.yml file and includes the following steps:

1. Triggering Events: The pipeline runs on pushes and pull requests to the main branch.

2. Jobs:

    - Build:
      - Check out the code.
      - Set up Node.js.
      - Install dependencies.
      - Run tests.
      - Build the project.
      - Upload the build artifact.
    - Deploy:
      - Deploys the application to GitHub Pages after a successful build.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

