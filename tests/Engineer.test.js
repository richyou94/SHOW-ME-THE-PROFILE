const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should receive the github if provided valid arguments", () => {
            const testGithub = 1;
            const testEmployee = new Engineer('Richard', 1, 'email', testGithub, 'male');
            expect(testEmployee.github).toEqual(testGithub);
        });
        it("should check if 'github' is type of string", () => {
            const testEmployee = new Engineer('Richard', 1, 'email', 'github', 'male');

            expect(typeof(testEmployee.github)).toBe('string');
        });
    });
    describe('Get Item', () => {
        it("should get github using getGithub() function", () => {
            const testGithub = 'github';
            const testEmployee = new Engineer('Richard', 1, 'email', testGithub, 'male');
            expect(testEmployee.getGithub()).toBe(testGithub);
        });
        
        it("should get gender using getGender() function", () => {
            const testGender = 'female';
            const testEmployee = new Engineer('Richard', 1, 'email', 'github', testGender);
            expect(testEmployee.getGender()).toBe(testGender);
        });

        it("should get 'Engineer' role using getRole() function", () => {
            const testRole = 'Engineer';
            const testEmployee = new Engineer('Richard', 1, 'email', 'github');
            expect(testEmployee.getRole()).toBe(testRole);
        });
    });

});
