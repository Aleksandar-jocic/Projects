class DataModule {
    
    getData(objects){

        const URL = 'http://127.0.0.1:3000';

        fetch(URL).then(function(data){

            return data.json();

        }).then(function(jsonData){

            objects(jsonData)
        })
    }
}

export default DataModule