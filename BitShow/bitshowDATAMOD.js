class DataMOD {

    dataCarrierOnData() {

        let data = localStorage.getItem('shows');

        if (data === null) {

            const URL = 'http://api.tvmaze.com/shows';

            return fetch(URL).then(function (data) {

                return data.json()

            }).then(function (json) {

                localStorage.setItem('shows', JSON.stringify(json));

                return json;

            });
        } else {

            let promise = Promise.resolve(JSON.parse(data));

            return promise;

        }

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

        fetch(URL).then(function (seasonHandler) {

            return seasonHandler.json();

        }).then(function (seasonHandlerJson) {

            localStorage.setItem('season', JSON.stringify(seasonHandlerJson));

            singleShowSeasonHandler(seasonHandlerJson);

        })



    }

    getCast(id, singleShowCastHandler) {

        const URL = 'http://api.tvmaze.com/shows/' + id + '/cast';

        fetch(URL).then(function (castDetails) {

            return castDetails.json();

        }).then(function (castDetailsJson) {

            singleShowCastHandler(castDetailsJson);
        })
    }
}

export default DataMOD

