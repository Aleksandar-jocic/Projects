

document.getElementById('buttonadd').addEventListener('click', function () {

    var textInput = document.getElementById('textinput').value;

     
    var build = '<li>' + textInput + '<span class="xbutton">x</span></li>';

    

    document.getElementById('listdiv').innerHTML += build;




    document.getElementById('textinput').value = '';


}) 