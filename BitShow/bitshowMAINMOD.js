var MainMod = (function (UImod, dataMOD) {

    // var textTrigger = document.querySelector('#textInput');

    // textTrigger.addEventListener('keypress', function (e) {

    //     var key = e.which || e.keyCode;
    //     if (key === 13) {

          
          
          
    //         var dataCarrierOnMain = function (dataCarrier) {
    //             dataMOD.dataCarrierToMain(UImod.dataCarrier);
    //         }
            


            
    //     }
    // })

    dataMOD.dataCarrierOnData(function(shows){
        UImod.dataCarrier(shows);
    })

})(UImod, dataMOD);