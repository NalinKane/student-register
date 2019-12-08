// require lesson = ('lesson');
// require student = ('student');
// require teacher = ('teacher')
const boxen = require("boxen");
class Teacher {
  constructor(subject, name) {
    if (!subject) {
      throw new Error("Please provide a subject");
    }

    if (!name) {
      throw new Error("Please provide a teacher name`");
    }

    this.subject = subject;
    this.name = name;
  }
}

class Student {
  constructor(name) {
    if (!name) {
      throw new Error("Please provide a student name");
    }

    this.name = name;
  }
}

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

    // console.log(this.studentList);
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
      `The ${this.teacher.subject} was conducted by ${this.teacher.name}.`
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

const teacher1 = new Teacher("Maths", "Paul");

const student1 = new Student("Jen");
const student2 = new Student("Eduardo");
const student3 = new Student("Allegra");

const mathsLesson = new Lesson(teacher1, [student1, student2, student3]);
mathsLesson.markOnTime([student1]);
mathsLesson.markLate([student2]);
mathsLesson.outputSummary();
