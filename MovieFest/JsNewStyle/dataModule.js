var dataModule = (function () {

    //movie

    var CreateMovie = function (title, length, genre) {
        this.title = title;
        this.genre = genre;
        this.length = parseInt(length);
    }
    Movie.prototype.getData = function (genre) {
        var genreRes = '';
        genreRes = this.genre[0] + this.genre[this.genre.length - 1].toUpperCase();
        return genreRes
    }
    Movie.prototype.getData = function () {
        var movieRes = '';
        movieRes = this.title + ', ' + this.movieLength + ', ' + this.genre.getData();
        return movieRes
    }


    var listBuilder = function (createdMovie) {

        var result = '<ul>';

        result += '<li>';
        result += createdMovie;
        result += '</li>';

        result += '</ul>';
        
        return result
    }
    var database = [];

    //program


    // function Program(date) {
    //     this.date = new Date(date).toDateString();
    //     this.movieList = [];
    //     this.totalNumMovies = 0;
    // }

    // Program.prototype.addMovie = function (movie) {
    //     this.movieList.push(movie);
    //     this.totalNumMovies++;
    // }

    // Program.prototype.getData = function () {
    //     var programRes = '';
    //     var totalLength = 0;

    //     for (var i = 0; i < this.movieList.length; i++) {
    //         totalLength += this.movieList[i].movieLength;
    //     }

    //     if (this.totalNumMovies > 1) {
    //         programRes = this.date + ', ' + this.totalNumMovies + " movies, " + totalLength + " minutes";
    //     } else if (this.totalNumMovies === 1) {
    //         programRes = this.date + ', ' + this.totalNumMovies + " movie, " + totalLength + " minutes";
    //     } else {
    //         programRes = this.date + ' movies and duration TBA.';
    //     }
    //     return programRes;
    // }


    return {
        createMovie: createMovie,
        database: database,
        listBuilder: listBuilder,
        

    }



})();



    // var CreateMovie = function (title, length, genre) {
    //     this.title = title;
    //     this.genre = genre
    //     this.movieLength = parseInt(movieLength);
    //     this.genre = genre[0].toUpperCase() + genre[genre.length - 1].toUpperCase();

    //     return this.title + ', ' + this.movieLength + ', ' + this.genre;
    // }
