var infoUImod = (function () {

    var dataBuilder = function (singleShow) {

        var div = document.querySelector('#append-info');

        var assets = {
            name: singleShow.name,
            image: singleShow.image.original,
            showDetails: singleShow.summary,
        }

        var BobTheBuilder = '';

        BobTheBuilder += '<h1>' + assets.name + '</h1>';
        BobTheBuilder += '<img src="' + assets.image + '" >';

        BobTheBuilder += '<h4>Show Details</h4>';
        BobTheBuilder += '<p>' + assets.showDetails + '</p>';

        div.innerHTML = BobTheBuilder;
    }

    var seasonBuilder = function (seasonDetails) {

        var counter = 0;
        var BobTheBuilder = '<div class="seasonList">';
        BobTheBuilder += '<h3>Season (' + seasonDetails.length + ')</h3>'
        BobTheBuilder += '<ul class = "lister">';
        var seasonQty = seasonDetails.length;

        for (var i = 0; i < seasonDetails.length; i++) {

            if (counter < 10 && seasonDetails[i].premiereDate !== null)   {
                BobTheBuilder += '<li>' + seasonDetails[i].premiereDate + '   -   ' + seasonDetails[i].endDate + '</li>';
            }
            if (seasonDetails[i].premiereDate == null) {
                BobTheBuilder += '<li>TBA</li>';                
            }  
        }
        
        BobTheBuilder += '</ul>';
        BobTheBuilder += '</div>';

        $('#append-info > img').after(BobTheBuilder)
    }
    var castBuilder = function (castDetails) {

        var counter = 0;
        var BobTheBuilder = '<div class="castList">';
        BobTheBuilder += '<h3>Cast</h3>';
        BobTheBuilder += '<div>'
        BobTheBuilder += '<ul>';

        for (var i = 0; i < castDetails.length; i++) {

            if (counter < 10) {
                BobTheBuilder += '<li>' + castDetails[i].person.name + '</li>';
                counter++;
            }
        }

        BobTheBuilder += '</ul>';
        BobTheBuilder += '</div>';
        BobTheBuilder += '</div>';

        $('.seasonList').after(BobTheBuilder);
    }

    return {
        dataBuilder: dataBuilder,
        seasonBuilder: seasonBuilder,
        castBuilder: castBuilder
    }
})();