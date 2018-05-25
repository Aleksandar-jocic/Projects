var UImod = (function(){

    var UIselectors = {
    textSelector: '#textInput',
    }

    var dataCarrier = function (data) {
        console.log(data);
        
    }
    

    return {
        UIselectors: UIselectors,
        dataCarrier: dataCarrier
    }
})();