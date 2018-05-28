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
        // BobTheBuilder += '<h5>Season(' + assets.numOfSeasons.length + ')</h5>';


        div.innerHTML = BobTheBuilder;


    }

    var seasonBuilder = function (seasonDetails) {



        var BobTheBuilder = '<div class="seasonList">';
        BobTheBuilder += '<h3>Season (' + seasonDetails.length + ')</h3>'
        BobTheBuilder += '<ul class = "lister">';
        var seasonQty = seasonDetails.length;
        

        for (var i = 0; i < seasonDetails.length; i++) {
            BobTheBuilder += '<li>' + seasonDetails[i].premiereDate + '-' + seasonDetails[i].endDate + '</li>';


        }
            // console.log(seasonDetails[]);
        BobTheBuilder += '</ul>';
        BobTheBuilder += '</div>';

        $('#append-info > img').after(BobTheBuilder)
    }


    return {
        dataBuilder: dataBuilder,
        seasonBuilder: seasonBuilder
    }
})();