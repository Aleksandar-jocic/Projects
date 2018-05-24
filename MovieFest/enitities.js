//constructors
//                  GENRE


function Genre(genreName) {
    this.genre = genreName;
   
}
Genre.prototype.getData = function (genre) {
    var genreRes = '';
    genreRes = this.genre[0] + this.genre[this.genre.length - 1].toUpperCase();
    return genreRes
}

//                  MOVIE

function Movie(title, movieLength, genre) {
    this.title = title;
    this.genre = new Genre(genre);
    this.movieLength = parseInt(movieLength);
}
Movie.prototype.getData = function () {
    var movieRes = '';
    movieRes = this.title + ', ' + this.movieLength + ', ' + this.genre.getData();
    return movieRes
}


//                  PROGRAM


function Program(date) {
    this.date = new Date(date).toDateString();
    this.movieList = [];
    this.totalNumMovies = 0;  
}

Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);
    this.totalNumMovies++;
}

Program.prototype.getData = function () {
    var programRes = '';
    var totalLength = 0;
   
    for (var i = 0; i < this.movieList.length; i++) {
        totalLength += this.movieList[i].movieLength;
    }  

    if (this.totalNumMovies > 1) {
        programRes = this.date + ', ' +  this.totalNumMovies + " movies, " + totalLength + " minutes";
    }  else if (this.totalNumMovies === 1)  {
        programRes = this.date + ', ' +  this.totalNumMovies + " movie, " + totalLength + " minutes";
    }  else {
        programRes = this.date + ' movies and duration TBA.';
    }
    return programRes;
}





