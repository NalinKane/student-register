class Student {
  constructor(name) {
    if (!name) {
      throw new Error("Please provide a student name");
    }

    this.name = name;
  }
}

module.exports = Student;
