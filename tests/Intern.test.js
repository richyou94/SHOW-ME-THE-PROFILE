const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should receive the school if provided valid arguments", () => {
            const testSchool = 'school';
            const testEmployee = new Intern('Richard', 1, 'email', testSchool, 'male');
            expect(testEmployee.school).toEqual(testSchool);
        });
        it("should check if 'school' is a type of string", () => {
            const testEmployee = new Intern('Richard', 1, 'email', 'school', 'male');

            expect(typeof(testEmployee.school)).toBe('string');
        });
    });
    describe('Get Item', () => {
        it("should get school using getSchool() function", () => {
            const testSchool = 'school';
            const testEmployee = new Intern('Richard', 1, 'email', testSchool, 'male');
            expect(testEmployee.getSchool()).toBe(testSchool);
        });
        it("should get gender using getGender() function", () => {
            const testGender = 'male';
            const testEmployee = new Intern('Richard', 1, 'email', 'school', testGender);
            expect(testEmployee.getGender()).toBe(testGender);
        });

        it("should get 'Intern' role using getRole() function", () => {
            const testRole = 'Intern';
            const testEmployee = new Intern('Richard', 1, 'email', 'school', 'male');
            expect(testEmployee.getRole()).toBe(testRole);
        });
    });

});
