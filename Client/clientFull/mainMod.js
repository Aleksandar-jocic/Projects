import DataModule from "./dataMod.js";
import UIMod from "./UIMod.js";

class MainModule {

    init() {
        $(document).ready(function () {

            let Data = new DataModule;
            let UI = new UIMod;

            let interceptedData = Data.getData(function (data) {
                UI.blogBuilder(data)
            })


        })
    }
}

var application = new MainModule;
application.init()

