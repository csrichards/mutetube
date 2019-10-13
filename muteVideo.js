console.log('in page');

inPage(setVolume, 0);

function setVolume(vol) {
    document.getElementById('movie_player').setVolume(vol);
}