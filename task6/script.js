const trafficLightEl = document.querySelector('#trafficLight');
const trafficLight1El = document.querySelector('#trafficLight1');
const trafficLight2El = document.querySelector('#trafficLight2');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLight1El.style.background = ('black');
    trafficLight2El.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLight1El.removeEventListener('click', makeGreen);
    trafficLight2El.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLight1El.addEventListener('click', makeYellow);
    trafficLight2El.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLight1El.style.background = ('yellow');
    trafficLight2El.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLight1El.removeEventListener('click', makeYellow);
    trafficLight2El.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLight1El.addEventListener('click', makeRed);
    trafficLight2El.addEventListener('click', makeRed);
}

trafficLight1El.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLight1El.style.background = ('black');
    trafficLight2El.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLight1El.removeEventListener('click', makeRed);
    trafficLight2El.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLight1El.addEventListener('click', makeGreen);
    trafficLight2El.addEventListener('click', makeGreen);
}

trafficLight2El.addEventListener('click', makeRed);