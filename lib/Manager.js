const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // override to return 'manager'
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;