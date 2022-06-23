const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Courtney Casci', '44', 'courtliest87@gmail.com', 'UCF');

    expect(intern.name).toBe('Courtney Casci');
    expect(intern.id).toBe('44');
    expect(intern.email).toBe('courtliest87@gmail.com');
    expect(intern.school).toBe('UCF');
});

test('gets the interns school', () => {
    const intern = new Intern('Courtney Casci', '44', 'UCF');

    expect(intern.getSchool()).toBe('UCF');
});

test('gets the interns role', () => {
    const intern = new Intern('Courtney Casci', '44', 'UCF');

    expect(intern.getRole()).toBe('Role: Intern');
});
