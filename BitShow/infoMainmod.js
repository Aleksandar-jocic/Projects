var infoMainMOD = (function(infoUImod, dataMOD) {

    var locationOne = window.location.search;


    var res = locationOne.split('=');

    var idDetails = res[1];


    var dataForInfoMain = dataMOD.getSingleShow(idDetails, function(details) {

        infoUImod.dataBuilder(details);
    })

    var seasonData = dataMOD.getSeason(idDetails, function(seasonDetails) {
        infoUImod.seasonBuilder(seasonDetails)
    })


})(infoUImod, dataMOD)