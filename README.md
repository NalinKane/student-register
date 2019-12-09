# Student Register

Node.js application for managing teachers assigned to a given lesson, together with student attendance.

## Classes

There are 3 classes in the programme: Teacher, Student and Lesson, each with their unique properties. The Lesson class has methods for marking students attending on time, late and absent.

## Summary

outputSummary() method creates a report telling the user who conducted a given class and which students were present (on time and late) and absent.

An example of a summary would be:

```
The Maths lesson was conducted by Paul.

---------------
|  Attendance |
|             |
---------------

Jen was on time

Eduardo was late

Allegra was absent
```

## Tests

Some basic tests checking the program's functionality can be found in _tests_. These were written using jest.
