// require lesson = ('lesson');
// require student = ('student');
// require teacher = ('teacher')

class Teacher {
  constructor(subject, teacherName) {
    if (!subject) {
      throw new Error("Please provide a subject");
    }

    if (!teacherName) {
      throw new Error("Please provide a teacher name`");
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
    if (!teacherName) {
      throw new Error("Please provide a teacher name`");
    }

    if (!studentList) {
      throw new Error("Please provide a list of expected students");
    }

    this.teacherName = teacherName;
    this.studentList = studentList;

    console.log(this.studentList);
    this.onTime = [];
    this.late = [];
    this.absent = [];
  }

  markOnTime(studentsOnTime) {
    this.onTime = studentsOnTime;
    console.log(this.onTime);
  }

  markLate(studentsLate) {
    this.late = studentsLate;
    console.log(this.late);
  }

  // if no late or not on time mark as absent
  //   outputSummary(studentList) {
  //   }
}

const teacher1 = new Teacher("Maths", "Paul");

const student1 = new Student("Jen");
const student2 = new Student("Eduardo");
const mathsLesson = new Lesson(teacher1, [student1, student2]);
mathsLesson.markOnTime(student1);
mathsLesson.markLate(student2);
