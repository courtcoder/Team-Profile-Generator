const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Create new engineer object', () => {
    const engineer = new Engineer('Courtney Casci', '44', 'courtliest87@gmail.com', 'CourtCoder');

    expect(engineer.name).toBe('Courtney Casci');
    expect(engineer.id).toBe('44');
    expect(engineer.email).toBe('courtliest87@gmail.com');
    expect(engineer.github).toBe('CourtCoder');
});

test('gets engineers github', () => {
    const engineer = new Engineer('Courtney Casci', '44', 'courtliest87@gmail.com', 'CourtCoder');
        
expect(engineer.getGithub()).toBe('https://github.com/courtcoder')  
});

test('gets engineers role', () => {
    const engineer = new Engineer('Courtney Casci', '44', 'courtliest87@gmail.com', 'CourtCoder');

    expect(engineer.getRole()).toBe('Role: Engineer');
});

