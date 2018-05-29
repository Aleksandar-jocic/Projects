class DataMOD {

    dataCarrierOnData() {

        const URL = 'http://api.tvmaze.com/shows';

        return fetch(URL).then(function (data) {

            return data.json()

        }).then(function (json) {

            return json;
        });

    }

    getListData(data) {

        const URL = 'http://api.tvmaze.com/shows';

        fetch(URL).then(function (dataList) {

            return dataList.json()

        }).then(function (jsonList) {

            data(jsonList);

        })
    }

    getSingleShow(id, singleShowHandler) {

        const URL = 'http://api.tvmaze.com/shows/' + id;

        fetch(URL).then(function (singleShowData) {

            return singleShowData.json()

        }).then(function (jsonSingleData) {

            singleShowHandler(jsonSingleData)
            
        })

    }

    getSeason(id, singleShowSeasonHandler) {

      const URL = 'http://api.tvmaze.com/shows/' + id + '/seasons';

      fetch(URL).then(function(seasonHandler){

          return seasonHandler.json();

      }).then(function(seasonHandlerJson){

        singleShowSeasonHandler(seasonHandlerJson);

      })

    }

    getCast(id, singleShowCastHandler) {

        const URL = 'http://api.tvmaze.com/shows/' + id + '/cast';

        fetch(URL).then(function(castDetails){

            return castDetails.json();

        }).then(function(castDetailsJson){

            singleShowCastHandler(castDetailsJson);
        })
    }
}

export default DataMOD

