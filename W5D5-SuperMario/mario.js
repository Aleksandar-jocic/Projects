var runningman = document.querySelector('#runningMario');
var mario = document.querySelector('#mario');
var value = 3;
var body = document.querySelector('body')
var handle;


body.style.backgroundPositionX = 0 + "px";
var step = 30;
var state = false;

function moveBack() {

    body.style.backgroundPositionX = (parseInt(body.style.backgroundPositionX) - step) + 'px';


}

document.addEventListener('keydown', function (e) {

    if (state === false) {


        var key = e.which || e.keyCode;
        if (key === 39) {
            handle = setInterval(moveBack, 100);

            runningman.classList.toggle('test');
            mario.classList.toggle('test');
            state = true;
        }


    }

});
document.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key === 39) {
        if (state === true) {


            var key = e.which || e.keyCode;
            if (key === 39) {
                // setInterval(moveBack, 100)
                clearInterval(handle);
                runningman.classList.toggle('test');
                mario.classList.toggle('test');
                state = false;
            }


        }

    }
});

document.addEventListener('keydown', function (e) {

    var key = e.which || e.keyCode;
    if (key === 32) {

        runningman.classList.add('jump');
        mario.classList.add('jump');
    }


})
document.addEventListener('keyup', function (e) {

    var key = e.which || e.keyCode;
    if (key === 32) {

        runningman.classList.remove('jump');
        mario.classList.remove('jump');
    }


})