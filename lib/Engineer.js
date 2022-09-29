const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, gender) {
        super(id, name, email);
        this.github = github;
        this.gender = gender;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    getGender() {
        return this.gender;
    }
}

module.exports = Engineer;
