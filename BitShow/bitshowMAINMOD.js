var MainMod = (function (UIMod, dataMOD) {

    $(document).ready(function () {

        var dataInterceptor = dataMOD.dataCarrierOnData(function (shows) {

            UIMod.dataCarrier(shows);
        })
    })

})(UIMod, dataMOD);