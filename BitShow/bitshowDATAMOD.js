var dataMOD = (function () {



    var dataCarrierOnData = function (dataCarrierOnMain) {

        // var inputButtonValue = document.getElementById('textInput');

        var URL = 'http://api.tvmaze.com/shows'; // + inputButtonValue;
        

        $.get(URL).done(dataCarrierOnMain);
        
    }


    

    return {
        dataCarrierOnData: dataCarrierOnData
    }
})();




