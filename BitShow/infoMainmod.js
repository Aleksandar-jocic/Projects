import InfoUIMod from './infoUImod.js'
import DataMOD from './bitshowDATAMOD.js'

class infoMainMod {


    init() {

        $(document).ready(function () {


            let infoUI = new InfoUIMod();
            let data = new DataMOD();

            let locationOne = window.location.search;


            let res = locationOne.split('=');

            let idDetails = res[1];


            let dataForInfoMain = data.getSingleShow(idDetails, function (details) {

                infoUI.dataBuilder(details);
            })

            let seasonData = data.getSeason(idDetails, function (seasonDetails) {

                infoUI.seasonBuilder(seasonDetails)
            })

            let castData = data.getCast(idDetails, function (castDetails) {

                infoUI.castBuilder(castDetails)
            })
        })
    }
}


let program = new infoMainMod()
program.init();