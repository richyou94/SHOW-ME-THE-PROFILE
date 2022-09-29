const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, gender) {
        super(name, id, email);
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
