var dataMOD = (function () {



    var dataCarrierOnData = function (dataCarrierOnMain) {

        // var inputButtonValue = document.getElementById('textInput');

        var URL = 'http://api.tvmaze.com/shows'; // + inputButtonValue;
        

        $.get(URL).done(dataCarrierOnMain);
        
    }

    var getSingleShow = function (id, singleShowHandler) {

        // var inputButtonValue = document.getElementById('textInput');

        var URL = 'http://api.tvmaze.com/shows/' + id; // + inputButtonValue;
        

        $.get(URL).done(singleShowHandler);
        
    }
    
    var getSeason = function (id, singleShowSeasonHandler) {


        var URL = 'http://api.tvmaze.com/shows/' + id + '/seasons' ;
        

        $.get(URL).done(singleShowSeasonHandler);
        
    }


    

    return {
        dataCarrierOnData: dataCarrierOnData,
        getSingleShow: getSingleShow,
        getSeason: getSeason
    }
})();




