// In exam.js file:
//     write a constructor
// function with three arguments that represent a subject, a student, and a grade.
// add to its prototype a method getExamInfo that returns the name of the subject and the name and surname of the student.
// add to its prototype a method hasPassed that checks
// if the student has passed the exam.A student has passed the exam
// if their grade is greater than 5.



function Exam(subject, student, grade) {

    this.grade = grade;

}

Exam.prototype.getExamInfo = function () {

    var studentAndExam;

    studentAndExam = Subject.getSubjectName() + " " + Student.getStudentData();
}

Exam.prototype.hasPassed = function () {

    var passedOrFailed;

    if (this.grade > 5) {
        passedOrFailed = true;
    } else {
        passedOrFailed = false;
    }
    return passedOrFailed
}