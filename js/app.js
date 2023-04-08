let brightRange = document.getElementById('brightness');
let containerClass = document.querySelector('.container');

brightRange.addEventListener('change', changeBrighnessHandler);

function changeBrighnessHandler(event) {
    containerClass.style.filter = 'brightness(' + event.target.value + '%)'
}