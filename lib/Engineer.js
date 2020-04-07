// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

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
            githubUser = response.github
            return githubUser
        })

}
module.exports = Engineer