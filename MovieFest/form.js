var movieList = [];
var programList = [];

//movie click

document.getElementById('addmovie').addEventListener('click', function () {


    var title = document.getElementById('title').value;
    var movieLength = document.getElementById('length').value;
    var genre = document.getElementById('select').value;


    // validation
    var movie = new Movie(title, movieLength, genre);

    movieList.push(movie);


    var result = '<ul>';

    for (var i = 0; i < movieList.length; i++) {

        result += '<li>';
        result += movieList[i].getData();
        result += '</li>';
    }
    result += '</ul>';

    document.getElementById('resdiv').innerHTML = result;


    var title = document.getElementById('title').value = '';
    var length = document.getElementById('length').value = '';
    var genre = document.getElementById('select').value = '';

        // program movie list 

    var mvlst = '<select>';

    for (var k = 0; k < movieList.length; k++) {

    mvlst += '<option>';
    mvlst += movieList[k].getData();
    mvlst += '</option>';
}
    mvlst += '</select>';

document.getElementById('movlistdiv').innerHTML = mvlst;
})


//program click

document.getElementById('createprogram').addEventListener('click', function () {
    
    var inputdate = document.getElementById('datelbl').value;

    //validation

    var program  = new Program(inputdate);

    programList.push(program);

    var list = '<ul>';

    for (var j = 0; j < programList.length; j++) {

        list += '<li>';
        list += programList[j].getData();
        list += '</li>';
    }
    list += '</ul>';

    document.getElementById('progdiv').innerHTML = list;

    //push to program list

    var pglist =  '<option value="">-</option>'
    for (var k = 0; k < programList.length; k++) {

    pglist += '<option>' + programList[k].getData()+ '</option>';
}

document.getElementById('proglistdiv').innerHTML = pglist;

})

//add movie to program click

var realMovieobj;
var realProgramobj; 

document.getElementById('addMovieToProgram').addEventListener('click', function() {

    var movieValue = document.getElementById('movlistdiv').value;
    var programValue = document.getElementById('proglistdiv').value;
    

    for (var i =0; i < movieList.length; i++) {
        if (movieValue === movieList[i].getData()) {
             var realMovieobj = movieList[i];
        }
    }

    for (var j =0; j < programList.length; j++) {
        if (programValue === programList[j].getData()) {
            realProgramobj = programList[j];
        }
    }

    realProgramobj.addMovie(realMovieobj);


    //overwriting program list

    var list = '<ul>';

    for (var j = 0; j < programList.length; j++) {

        list += '<li>';
        list += programList[j].getData();
        list += '</li>';
    }
    list += '</ul>';

    document.getElementById('progdiv').innerHTML = list;

})




 
