const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should receive the office number if provided valid arguments", () => {
            const testOfficeNumber = 1;
            const testEmployee = new Manager('Richard', 1, 'email', testOfficeNumber);
            expect(testEmployee.officeNumber).toEqual(testOfficeNumber);
        });
        it("should check if 'officeNumber' is a type of number", () => {
            const testEmployee = new Manager('Richard', 1, 'email', 3);

            expect(typeof(testEmployee.officeNumber)).toBe('number');
        });
    });
    describe('Get Item', () => {
        it("should get officeNumber using getOfficeNumber() function", () => {
            const testOfficeNumber = 100;
            const testEmployee = new Manager('Richard', 1, 'email',  testOfficeNumber);
            expect(testEmployee.getOfficeNumber()).toBe(testOfficeNumber);
        });

        it("should get 'Manager' role using getRole() function", () => {
            const testRole = 'Manager';
            const testEmployee = new Manager('Richard', 1, 'email', testRole);
            expect(testEmployee.getRole()).toBe(testRole);
        });
    });

});
