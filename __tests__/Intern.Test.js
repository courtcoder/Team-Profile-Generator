const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates intern object", () => {
  const intern = new Intern(
    "Courtney",
    "44",
    "courtliest87@gmail.com",
    "University of Central Florida"
  );

  expect(intern.name).toBe("Courtney");
  expect(intern.id).toBe("44");
  expect(intern.email).toBe("courtliest87@gmail.com");
  expect(intern.school).toBe("University of Central Florida");
});

test("gets the interns school", () => {
  const intern = new Intern(
    "courtliest87@gmail.com",
    "Courtney",
    "44",
    "University of Central Florida"
  );

  expect(intern.getSchool()).toBe("School: University of Central Florida");
});

test("gets the interns role", () => {
  const intern = new Intern(
    "courtliest87@gmail.com",
    "Courtney",
    "44",
    "University of Central Florida"
  );

  expect(intern.getRole()).toBe("Role: Intern");
});
