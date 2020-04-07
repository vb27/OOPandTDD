const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
employeeList = []

function start() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Make a new employee?"
            }
        ]).then(val => {
            if (val.choice) {
                makeNewEmployee();
            } else {
                printOrQuit();
            }
        })
}


function makeNewEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the employee?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is thier email?",
                name: "email"
            },
            {
                type: "list",
                message: "What role does the new employee fall into?",
                choices: ["Engineer", "Intern", "Manager"],
                name: "employeeType"
            },
        ]).then(function (response) {
            switch (response.employeeType) {
                case "Engineer":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What if you GitHub username?",
                                name: "github"
                            }
                        ]).then(function (res) {
                            let newEmp = new Engineer(response.name, response.id, response.email, res.github)
                            employeeList.push(newEmp)
                            console.log(employeeList)
                            start();

                        })
                    break;
                case "Intern":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What school do they go to?",
                                name: "school"
                            }
                        ]).then(function (res) {
                            let newEmp = new Intern(response.name, response.id, response.email, res.school)
                            employeeList.push(newEmp)
                            console.log(employeeList)
                            start();
                        })
                    break;
                case "Manager":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What is their offic enumber?",
                                name: "officeNumber"
                            }
                        ]).then(function (res) {
                            let newEmp = new Manager(response.name, response.id, response.email, res.officeNumber)
                            employeeList.push(newEmp)
                            console.log(employeeList)
                            start();
                        })
                    break;
            }
        })
}

function printOrQuit() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to print your employees or quit",
                choices: ["print", "quit"],
                name: "printOrQuit"
            }
            ]).then(function (response) {
                if (response.printOrQuit === "print") {
                    render(employeeList)
                } else {
                    console.log("\nGoodbye!");
                    process.exit(0);
                }
            })
}

start();