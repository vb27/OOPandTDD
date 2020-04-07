// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")
const inquirer = require("inquirer");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}
Engineer.prototype.newEngi = function(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github"
            }
        ]).then(function(response){
            console.log(this.github)
            this.github = response.github
        })

}
module.exports = Engineer