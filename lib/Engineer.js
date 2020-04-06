// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

class Engineer{
    constructor(name, id, email, github){
        this.name = name
        this.id = id
        this.email = email
        this.github = github
    }

    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer