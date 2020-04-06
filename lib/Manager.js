// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

class Manager{
    constructor(name, id, email, officeNumber){
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }

    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager