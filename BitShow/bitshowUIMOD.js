var UIMod = (function () {

    var UISelectors = {
        textSelector: '#textInput',
        contentListArea: '#contentList'
    }


    var dataCarrier = function (data) {

        // Bob the builder

        for (var i = 0; i < 50; i++) {

            var img = data[i].image.medium;
            var name = data[i].name;

            var BobTheBuilder = '<div class="showCard">';

            BobTheBuilder += '<img src="' + img + '" alt="' + name + '">';
            BobTheBuilder += '<h4 class = "showName">' + name + '</h4>';
            BobTheBuilder += '</div>';

            document.querySelector(UISelectors.contentListArea).innerHTML += BobTheBuilder;

        }

        //my experimental shit

        var textValue = document.querySelector(UISelectors.textSelector);

        textValue.addEventListener("input", function (e) {

            var a, b, i, val = this.value;

            cancelInfinity();

            a = document.createElement("DIV");
            a.setAttribute("id", this.id);
            a.setAttribute("class", "autocomplete-items");

            this.parentNode.appendChild(a);

            var underTen = 0;

            for (i = 0; i < data.length; i++) {

                if (data[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase() && underTen < 10) {

                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + data[i].name.substr(0, val.length) + "</strong>";
                    b.innerHTML += data[i].name.substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + data[i].name + "'>";

                    a.appendChild(b);

                    underTen++;
                }
            }
        })

        function cancelInfinity(element) {

            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (element != x[i] && element != textValue) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        var hFourTrigger = document.getElementsByClassName('showName');

      

        //end of my experimental shit

    }


    return {
        UISelectors: UISelectors,
        dataCarrier: dataCarrier
    }
})();