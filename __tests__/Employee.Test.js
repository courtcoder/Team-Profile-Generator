const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Create new employee object', () => {
    const employee = new Employee('Courtney Casci', '44', 'courtliest87@gmail.com');

    expect(employee.name).toBe('Courtney Casci');
    expect(employee.id).toBe('44');
    expect(employee.email).toBe('courtliest87@gmail.com');
});

test('gets employees name', () => {
    const employee = new Employee('Courtney Casci', '44', 'courtliest87@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employees id', () => {
    const employee = new Employee('Courtney Casci', '44', 'courtliest87@gmail.com');

    expect(employee.getID()).toEqual(expect.any(String));
});

test('gets employees email', () => {
    const employee = new Employee('Courtney Casci', '44', 'courtliest87@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
}); 

test('gets employees role', () => {
    const employee = new Employee('Courtney Casci', '44', 'courtliest87@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});