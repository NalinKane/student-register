const Teacher = require("../teacher");

describe("Teacher tests", () => {
  const testName = "Anna";
  const testSubject = "Maths";

  test("Assigns passed name internally", () => {
    const teacher = new Teacher(testSubject, testName);
    expect(teacher.name).toBe("Anna");
  });

  test("Assigns passed subject internally", () => {
    const teacher = new Teacher(testSubject, testName);
    expect(teacher.subject).toBe("Maths");
  });

  test("Display error message if no subject was provided", () => {
    expect(() => {
      new Teacher("", "Anna");
    }).toThrowError("Please provide a subject");
  });

  test("Display error message if no name was provided", () => {
    expect(() => {
      new Teacher("Maths", "");
    }).toThrowError("Please provide a teacher name");
  });
});
