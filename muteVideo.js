// console.log('in page');

// inPage(setVolume, 0);

// function setVolume(vol) {
//     document.getElementById('movie_player').setVolume(vol);
// }
let wrapper = document.querySelector('iframe');
console.log(wrapper);

let tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// firstScriptTag.parentNode.appendChild(tag);

let player;
function onYouTubeIframeAPIReady() {
    console.log('on youtube iframe api ready');
    player = new YT.Player(wrapper, {
        events: {
            'onReady': function(event) {
                onPlayerReady(event.target)
            }
        }
    });
    console.log(player);
}

function onPlayerReady(event) {
    console.log('player is ready');
    console.log(event);
}

let vol = 0;

//let videoPlayer = document.getElementById('movie_player');
// let video = videoPlayer.querySelector('video');
//let video = document.querySelector('video');
//console.log(videoPlayer);
//console.log(video);
//console.log('volume1 ', videoPlayer.getVolume());
//console.log(video.volume);
//videoPlayer.setVolume(vol);
//video.volume = vol;
//console.log(video.volume);
//console.log('volume2 ', videoPlayer.getVolume());