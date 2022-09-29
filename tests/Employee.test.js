const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            const testEmployee = new Employee('Richard', 1, 'test@gmail.com');

            expect(testEmployee.name).toEqual('Richard');
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual('test@gmail.com');
        });

        it('should check if the new Employee is object', () => {
            const testEmployee = new Employee('Richard', 1, 'email');
            expect(typeof(testEmployee)).toBe('object');
        });

        it('should check if there is a missing argument', () => {
            const testEmployee = new Employee();
            expect(typeof(testEmployee.name)).toBe('undefined');
            expect(typeof(testEmployee.id)).toBe('undefined');
            expect(typeof(testEmployee.email)).toBe('undefined');
        });

        it("should check if 'name' is type of string", () => {
            const testEmployee = new Employee('Richard',2,'something@email');

            expect(typeof(testEmployee.name)).toBe('string');
        });

        it("should check if 'id' is type of number", () => {
            const testEmployee =  new Employee('Richard', 2, 'email');

            expect(typeof(testEmployee.id)).toBe('number');
        });

        it("should check if 'email' is type of string", () => {
            const testEmployee = new Employee('Richard', 2, 'email');

            expect(typeof(testEmployee.email)).toBe('string');
        });
    });
    
    describe('Get item', () => {
        it("should get name using getName() function", () => {
            const testName = 'Richard';
            const testEmployee = new Employee(testName, 1, 'email');
            expect(testEmployee.getName()).toBe(testName);
        });

        it("should get id using getId() function", () => {
            const testId = 1;
            const testEmployee = new Employee('Richard', testId, 'email');
            expect(testEmployee.getId()).toBe(testId);
        });

        it("should get email using getEmail() function", () => {
            const testEmail = 'email';
            const testEmployee = new Employee('Richard', 1, testEmail);
            expect(testEmployee.getEmail()).toBe(testEmail);
        });

        it("should get 'Employee' as a result of getRole() function", () => {
            const testRole = 'Employee';
            const testEmployee = new Employee('Richard', 1, 'email');
            expect(testEmployee.getRole()).toBe(testRole);
        });
    })

});