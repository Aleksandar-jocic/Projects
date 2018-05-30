class UIMod {

    blogBuilder(data) {
        
        console.log(data);
        for(var i =0;i <data.length; i++){
            // $('<div>').attr("id", )
        var BobTheBuilder = '';
            BobTheBuilder += '<div id="'+ data[i].id + '">';
            BobTheBuilder += '<h3>'+ data[i].title + '</h3>';
            BobTheBuilder +=  '<p>' + data[i].intro + '</p>';
            BobTheBuilder += '</div>';
            $('#content').append(BobTheBuilder);
        }



    }

}
export default UIMod
