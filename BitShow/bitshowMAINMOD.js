import UIMod from './bitshowUIMOD.js';
import DataMOD from './bitshowDATAMOD.js';

class MainMod {

    init() {

        $(document).ready(function () {

            var data = new DataMOD();
            let UI = new UIMod();

            let dataInterceptor = data.dataCarrierOnData();
            dataInterceptor.then(function (shows) {

                UI.dataCarrier(shows);
            })

            let dataInterceptorList = data.getListData(function (list) {

                UI.listBuilder(list);
            })
        })
    }

}

var program = new MainMod;
program.init();