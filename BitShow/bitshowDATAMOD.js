var dataMOD = (function () {



    var dataCarrierOnData = function (dataCarrierOnMain) {

        var URL = 'http://api.tvmaze.com/shows';        

        $.get(URL).done(dataCarrierOnMain);
        
    }

    var getSingleShow = function (id, singleShowHandler) {

        var URL = 'http://api.tvmaze.com/shows/' + id; 

        $.get(URL).done(singleShowHandler);
        
    }
    
    var getSeason = function (id, singleShowSeasonHandler) {

        var URL = 'http://api.tvmaze.com/shows/' + id + '/seasons' ;        

        $.get(URL).done(singleShowSeasonHandler);
        
    }

    var getCast = function (id, singleShowCastHandler) {

        var URL = 'http://api.tvmaze.com/shows/' + id + '/cast' ;

        $.get(URL).done(singleShowCastHandler)
    }    

    return {
        dataCarrierOnData: dataCarrierOnData,
        getSingleShow: getSingleShow,
        getSeason: getSeason,
        getCast: getCast
    }
})();




