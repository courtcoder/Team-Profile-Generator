const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('create manager object', () => {
    manager = new Manager('Courtney Casci', '44', 'courtliest87@gmail.com', '150');

    expect(manager.name).toBe('Courtney Casci');
    expect(manager.id).toBe('44');
    expect(manager.email).toBe('courtliest87@gmail.com');
    expect(manager.officeNumber).toBe('150');
});

test('get managers office number', () => {
    manager = new Manager('Courtney Casci', '44', 'courtliest87@gmail.com', '150');

    expect(manager.getOfficeNumber()).toBe('150');
});

test('get managers name', () => {
    manager = new Manager('Courtney Casci', '44', 'courtliest87@gmail.com', '150');

    expect(manager.getRole()).toBe('Role: Manager');
});

