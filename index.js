// require lesson = ('lesson');
// require student = ('student');
// require teacher = ('teacher')

class Teacher {
  constructor(subject, teacherName) {
    if (!subject) {
      throw new Error("Please provide a subject");
    }

    if (!teacherName) {
      throw new Error("Please provide a teacher name");
    }

    this.subject = subject;
    this.teacherName = teacherName;
  }
}

class Student {
  constructor(studentName) {
    if (!studentName) {
      throw new Error("Please provide a student name");
    }

    this.studentName = studentName;
  }
}

class Lesson {
  constructor(teacherName, studentList) {
    // error handling
    // ...

    this.teacherName = teacherName;
    this.studentList = studentList;
  }

  markOnTime(studentList) {}

  //   markLate(studentList) {}
  //   outputSummary(studentList) {
  //   }
}

const studentList = [];
const addStudent = studentList.push(studentList);

const teacher1 = new Teacher("Maths", "Paul");

const student1 = new Student("Jen");
const student2 = new Student("Eduardo");
const mathsLesson = new Lesson(teacher1);
