let brightness = document.getElementById('brightness');
let page = document.querySelector('.container');

brightness.addEventListener('input', brightnessHandler)

function brightnessHandler() {
    page.style.filter = `brightness(${brightness.value}%)`
}