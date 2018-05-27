var MainMod = (function (UIMod, dataMOD) {

    // var textTrigger = document.querySelector('#textInput');

    // textTrigger.addEventListener('keypress', function (e) {

    //     var key = e.which || e.keyCode;
    //     if (key === 13) {




    //         var dataCarrierOnMain = function (dataCarrier) {
    //             dataMOD.dataCarrierToMain(UImod.dataCarrier);
    //         }




    //     }
    // })

    var dataInterceptor = dataMOD.dataCarrierOnData(function (shows) {
        UIMod.dataCarrier(shows);
    })

})(UIMod, dataMOD);