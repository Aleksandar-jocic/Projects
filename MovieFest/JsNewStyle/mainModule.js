var mainModule = (function(UIModule, dataModule){
    
    var createMovieButt = document.querySelector(UIModule.UISelectors.createMovieButtonSelector);

    createMovieButt.addEventListener('click', function(){

        var DEFINEME;
        var createdMovie;

        
        createdMovie = dataModule.createMovie(UIModule.values.title, UIModule.values.length, UIModule.values.genre);

        dataModule.database.push(createdMovie);

        DEFINEME = dataModule.listBuilder(createdMovie);



        
    })


    



})(UIModule, dataModule);