var infoMainMOD = (function(infoUImod, dataMOD) {

    $(document).ready(function(){

        var locationOne = window.location.search;


        var res = locationOne.split('=');
    
        var idDetails = res[1];
    
    
        var dataForInfoMain = dataMOD.getSingleShow(idDetails, function(details) {
    
            infoUImod.dataBuilder(details);
        })
    
        var seasonData = dataMOD.getSeason(idDetails, function(seasonDetails) {
    
            infoUImod.seasonBuilder(seasonDetails)
        })
    
        var castData = dataMOD.getCast(idDetails, function(castDetails) {
    
            infoUImod.castBuilder(castDetails)
        })
    })
    
    


})(infoUImod, dataMOD)