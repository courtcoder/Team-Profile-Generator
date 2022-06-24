const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates manager object", () => {
  manager = new Manager("Courtney", "44", "courtliest87@gmail.com", "150");

  expect(manager.name).toBe("Courtney");
  expect(manager.id).toBe("44");
  expect(manager.email).toBe("courtliest87@gmail.com");
  expect(manager.officeNumber).toBe("150");
});

test("gets managers office number", () => {
  manager = new Manager("Courtney", "44", "courtliest87@gmail.com", "150");

  expect(manager.getOfficeNumber()).toBe("Office Number: 150");
});

test("gets managers role", () => {
  manager = new Manager("Courtney", "44", "courtliest87@gmail.com", "150");

  expect(manager.getRole()).toBe("Role: Manager");
});
