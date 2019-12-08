const boxen = require("boxen");

class Lesson {
  constructor(teacher, studentList) {
    if (!teacher) {
      throw new Error("Please provide a teacher name`");
    }

    if (!studentList) {
      throw new Error("Please provide a list of expected students");
    }

    this.teacher = teacher;
    this.studentList = studentList;

    this.onTime = [];
    this.late = [];
    this.absent = [];
  }

  markOnTime(studentsOnTime) {
    studentsOnTime.map(student => {
      if (!this.studentList.includes(student)) {
        throw new Error(`${student.name} is not registered in this class!`);
      }
    });
    this.onTime.push(...studentsOnTime);
  }

  markLate(studentsLate) {
    studentsLate.map(student => {
      if (!this.studentList.includes(student)) {
        throw new Error(`${student.name} is not registered in this class!`);
      }
    });
    this.late.push(...studentsLate);
  }

  outputSummary() {
    console.log(
      `The ${this.teacher.subject} lesson was conducted by ${this.teacher.name}.`
    );
    console.log(boxen("Attendance", { padding: 1, borderStyle: "double" }));
    this.onTime.map(({ name }) => console.log(`${name} was on time`));
    this.late.map(({ name }) => console.log(`${name} was late`));
    if (this.onTime.length + this.late.length !== this.studentList.length) {
      const absent = this.printAbsent();
      absent.map(({ name }) => console.log(`${name} was absent`));
    }
  }

  printAbsent() {
    const presentStudents = [...this.onTime, ...this.late];
    return this.studentList.filter(student => {
      return !presentStudents.includes(student);
    });
  }
}

module.exports = Lesson;
