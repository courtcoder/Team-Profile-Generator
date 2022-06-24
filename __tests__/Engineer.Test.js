const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Creates enginineer object", () => {
  const engineer = new Engineer(
    "Courtney",
    "44",
    "courtliest87@gmail.com",
    "courtcoder"
  );

  expect(engineer.name).toBe("Courtney");
  expect(engineer.id).toBe("44");
  expect(engineer.email).toBe("courtliest87@gmail.com");
  expect(engineer.github).toBe("courtcoder");
});

test("gets engineers github", () => {
  const engineer = new Engineer(
    "Courtney",
    "44",
    "courtliest87@gmail.com",
    "courtcoder"
  );

  expect(engineer.getGithub()).toBe("https://github.com/courtcoder/");
});

test("gets role of engineer", () => {
  const engineer = new Engineer(
    "Courtney",
    "44",
    "courtliest87@gmail.com",
    "courtcoder"
  );

  expect(engineer.getRole()).toBe("Role: Engineer");
});
