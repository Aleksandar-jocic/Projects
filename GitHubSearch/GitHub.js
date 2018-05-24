var button = document.querySelector('#search');


button.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {

        $('#result').children('.bigdiv').remove();

        var text = document.getElementById('search').value;
        var URL = "https://api.github.com/search/users?q=" + text;

        $.get(URL).done(function (data) {
          
            for (var i = 0; i < data.items.length; i++) {

                var name = '';
                var url = '';

                name = data.items[i].login;
                url = data.items[i].avatar_url;

                
                var builder = '<div class="bigdiv">';
                builder += '<h3 class="h3">' + name + '</h3>';
                builder += '<img src="' + url + '">';
                builder += '</div>';

                document.getElementById('result').innerHTML += builder;              
            }
            console.log(data);

            text = document.getElementById('search').value = '';
        })
    }
})