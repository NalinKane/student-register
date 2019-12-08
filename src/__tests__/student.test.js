const Student = require("../student");

describe("Student tests", () => {
  const testName = "Anna";

  test("Assigns passed name internally", () => {
    const student = new Student(testName);
    expect(student.name).toBe("Anna");
  });

  test("Display error message if no name was provided", () => {
    expect(() => {
      new Student();
    }).toThrowError("Please provide a student name");
  });
});
