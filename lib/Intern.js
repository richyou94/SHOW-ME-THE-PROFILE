const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, gender) {
        super(id, name, email);
        this.school = school;
        this.gender = gender;
    }

    getSchool() {
        return this.school;
    }

    getGender() {
        return this.gender;
    }
    
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;