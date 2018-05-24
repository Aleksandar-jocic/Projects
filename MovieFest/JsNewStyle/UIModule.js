var UIModule = (function(){
    
    var UISelectors = {
        titleInputSelector: '#title',
        lengthInputSelector: '#length',
        selectInputSelector: '#select',
        createMovieButtonSelector: '#addmovie',
        dateInputSelector: '#datelbl',
        createProgramButtonSelector: '#createprogram',
        selectMovieInputSelector: '#movlistdiv',
        selectProgramInputSelector: '#proglistdiv',
        addMovieToProgramSelector: '#addMovieToProgram'
    }

    var titleInput = document.querySelector(UISelectors.titleInputSelector);
    var lengthInput = document.querySelector(UISelectors.lengthInputSelector);
    var selectInput = document.querySelector(UISelectors.selectInputSelector);
    var createMovieButton = document.querySelector(UISelectors.createMovieButtonSelector);
    var dateInput = document.querySelector(UISelectors.dateInputSelector);
    var createProgramButton = document.querySelector(UISelectors.createProgramButtonSelector);
    var selectMovieInput = document.querySelector(UISelectors.selectMovieInputSelector);
    var selectProgramInput = document.querySelector(UISelectors.selectProgramInputSelector);
    var addMovieToProgram = document.querySelector(UISelectors.addMovieToProgramSelector);

    var error = {
        MISSING_INPUTS_TITLE: "Please fill out title field",
        MISSING_INPUTS_LENGTH: "Please fill out movie length",
        MISSING_INPUTS_GENRE: "Please select the genre",
        MISSING_INPUTS_DATE: "Please select the date",
        WRONG_DATE_INPUT: "Date cannot be in the past",
        MISSING_SELECT_MOVIE: "Please select a movie",
        MISSING_SELECT_PROGRAM: "Please select a program"
    }
    var values = {
        title: titleInput.value,
        length: lengthInput.value,
        genre: selectInput.value,
        date: dateInput.value,
        selectMovie: selectMovieInput.value,
        selectProgram: selectProgramInput.value
    }



    return {
        UISelectors: UISelectors,
        error: error,
        values: values
    }

})();