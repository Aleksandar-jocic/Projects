//   In form.js file:
//       write a
//   function that collects all the data from the form
//   write a
//   function that validates all collected data
//   write a
//   function that updates the given list so it adds the new item at the end of the list
//   write a
//   function that updates the part of the page with the statistics

var totalStudents = 0;
var totalStudentsPassed = 0;
var totalStudentsFailed = 0;

document.querySelector('.add-btn').addEventListener('click', function () {

    //total number of students

    totalStudents++;
    document.querySelector('.exam-total').textContent = 'Total students: ' + totalStudents;


    //selecting inputs


    var selectedSubject = document.querySelector('.add-subject').value;
    //spilt name and surname - possible error
    var nameAndSurname = document.querySelector('.add-student-name').value;
    //end of split name and surname
    var givenGrade = document.querySelector('.add-grade').value;


    //validation
    var subjectObject = new Subject(selectedSubject);
    var nameAndSurnameObject = new Student(nameAndSurname);
    var givenGradeObject = new Exam(givenGrade);


    if (givenGradeObject.hasPassed() === true) {

        //total number of students that passed

        totalStudentsPassed++;
        document.querySelector('.exam-passed-count').textContent = totalStudentsPassed;

        //build additional list

        var builder = '<div class="item clearfix">';

        builder += '<div class="item-description">';
        builder += nameAndSurnameObject.getStudentData() + '</div>';
        builder += '<div class="right clearfix">';
        builder += '<div class="item-value">' + givenGradeObject.getGrade() + '</div>';
        builder += '<div class="item-delete">';
        builder += '<button class="item-delete-btn">x</i></button>';
        builder += '</div></div></div>';

        document.getElementById('passed-0').innerHTML += builder;

    } else {

        //total number of students that are failures
        totalStudentsFailed++;
        document.querySelector('.exam-failed-count').textContent = totalStudentsFailed;

        //build additional list for failures

        var builder = '<div class="item clearfix">';

        builder += '<div class="item-description">';
        builder += nameAndSurnameObject.getStudentData() + '</div>';
        builder += '<div class="right clearfix">';
        builder += '<div class="item-value">' + givenGradeObject.getGrade() + '</div>';
        builder += '<div class="item-delete"><button class="item-delete-btn">x</i></button></div>';
        builder += '</div></div>';

        document.getElementById('failed-0').innerHTML += builder;

    }

    //failed percentage

    document.querySelector('.exam-failed-percentage').textContent = parseInt((totalStudents - totalStudentsPassed) / totalStudents * 100) + '%';

    //reset inputs

    document.querySelector('.add-subject').value = 'Select';
    document.querySelector('.add-student-name').value = '';
    document.querySelector('.add-grade').value = '';
});

// gg

// document.querySelector('.item-delete-btn').addEventListener('click', function () {

//     this.remove(); ?????
    
// })