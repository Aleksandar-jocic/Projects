class UIMod {
    
    constructor() {
        this.UISelectors = {
            textSelector: '#textInput',
            contentListArea: '#contentList'
        }
    }


    dataCarrier(data) {

        // Bob the builder

        for (var i = 0; i < 50; i++) {

            var img = data[i].image.original;
            var name = data[i].name;

            var BobTheBuilder = '<div class="showCard">';

            BobTheBuilder += '<img src="' + img + '" alt="' + name + '">';
            BobTheBuilder += '<a href="./showInfo.html?id=' + data[i].id + '" target="_blank"><h4 class = "showName">' + name + '</h4></a>';
            BobTheBuilder += '</div>';

            document.querySelector(this.UISelectors.contentListArea).innerHTML += BobTheBuilder;

        }

    }

    //list suggestion

    listBuilder(listData) {

        let textValue = document.querySelector(this.UISelectors.textSelector);

        textValue.addEventListener("input", function (e) {

            var a, b, i, val = this.value;

            // console.log(listData[0].name);            

            // this.cancelInfinity();

            a = document.createElement("DIV");
            a.setAttribute("id", listData.id);
            a.setAttribute("class", "autocomplete-items");

            this.parentNode.appendChild(a);

            var underTen = 0;

            for (var i = 0; i < listData.length; i++) {

                if (listData[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase() && underTen < 10) {
                    // console.log(val);
                    

                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + listData[i].name.substr(0, val.length) + "</strong>";
                    b.innerHTML += listData[i].name.substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + listData[i].name + "'>";

                    a.appendChild(b);

                    underTen++;
                }
            }
        })
    }
    // cancelInfinity(element) {

    //     var x = document.getElementsByClassName("autocomplete-items");
    //     for (var i = 0; i < x.length; i++) {
    //         if (element != x[i] && element != textValue) {
    //             x[i].parentNode.removeChild(x[i]);
    //         }
    //     }
    // }


    //end of list suggestion




};

export default UIMod;