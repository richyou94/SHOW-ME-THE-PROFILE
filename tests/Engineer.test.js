const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should receive the github if provided valid arguments", () => {
            const testGithub = 1;
            const testEmployee = new Engineer('Richard', 1, 'email', testGithub);
            expect(testEmployee.github).toEqual(testGithub);
        });
        it("should check if 'github' is type of string", () => {
            const testEmployee = new Engineer('Richard', 1, 'email', 'github');

            expect(typeof(testEmployee.github)).toBe('string');
        });
    });
    describe('Get Item', () => {
        it("should get github using getGithub() function", () => {
            const testGithub = 'github';
            const testEmployee = new Engineer('Richard', 1, 'email', testGithub);
            expect(testEmployee.getGithub()).toBe(testGithub);
        });

        it("should get 'Engineer' role using getRole() function", () => {
            const testRole = 'Engineer';
            const testEmployee = new Engineer('Richard', 1, 'email', testRole);
            expect(testEmployee.getRole()).toBe(testRole);
        });
    });

});
