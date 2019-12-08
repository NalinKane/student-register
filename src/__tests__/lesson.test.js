const Lesson = require("../lesson");
const Student = require("../student");
const Teacher = require("../teacher");

describe("Lesson tests", () => {
  const student1 = new Student("Jen");
  const student2 = new Student("Eduardo");
  const student3 = new Student("Allegra");
  const testTeacher = new Teacher("Maths", "Lily");
  const testStudentList = [student1, student2, student3];

  test("Assigns passed teacher internally", () => {
    const lesson = new Lesson(testTeacher, testStudentList);
    expect(lesson.teacher).toBe(testTeacher);
  });

  test("Display error message if no teacher was provided", () => {
    expect(() => {
      new Lesson(null, testStudentList);
    }).toThrowError("Please provide a teacher");
  });

  test("Assigns passed student list internally", () => {
    const lesson = new Lesson(testTeacher, testStudentList);
    expect(lesson.studentList).toBe(testStudentList);
  });

  test("Display error message if no student list was provided", () => {
    expect(() => {
      new Lesson(testTeacher, null);
    }).toThrowError("Please provide a list of expected students");
  });

  test("Do not accept people who are not on the student list when marking on time", () => {
    // Arrange
    const rogueStudent = new Student("Luna");
    const mathStudents = [rogueStudent, ...testStudentList];

    // Act
    const lesson = new Lesson(testTeacher, testStudentList);

    // Assert
    expect(() => {
      lesson.markOnTime(mathStudents);
    }).toThrowError("Luna is not registered in this class!");
  });

  test("Accept people who are on the student list when marking on time", () => {
    // Arrange
    const lesson = new Lesson(testTeacher, testStudentList);

    // Act
    lesson.markOnTime([student1]);

    // Assert
    expect(lesson.onTime.length).toBe(1);
    expect(lesson.onTime[0]).toBe(student1);
  });
});
