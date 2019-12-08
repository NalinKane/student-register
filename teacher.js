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

module.exports = Teacher;
