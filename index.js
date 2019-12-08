const Teacher = require("./teacher");
const Student = require("./student");
const Lesson = require("./lesson");

const teacher1 = new Teacher("Maths", "Paul");

const student1 = new Student("Jen");
const student2 = new Student("Eduardo");
const student3 = new Student("Allegra");

const mathsLesson = new Lesson(teacher1, [student1, student2, student3]);
mathsLesson.markOnTime([student1]);
mathsLesson.markLate([student2]);
mathsLesson.outputSummary();
