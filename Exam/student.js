// In student.js file:
//     write a constructor
// function with two arguments that represent name and surname of a student
// add to its prototype a method getStudentData that returns the name and surname of the student



function Student(nameSurname) {

    this.nameSurname = nameSurname;
    // this.surname = surname;



}

Student.prototype.getStudentData = function () {

    // var fullName = this.name + " " + this.surname;


    return this.nameSurname;
}