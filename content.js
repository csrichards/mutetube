// Script for DOM manipulation
// Listen for the message sent in background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.message === 'loaded_channel_page') {
        let s = document.createElement('script');
        s.src = chrome.runtime.getURL('muteVideo.js');
        s.onload = function() {
            this.remove();
        };
        console.log(s);
        document.documentElement.appendChild(s);

        /*

        console.log('loaded channel page');
        // inPage(setVolume, 0);
        setTimeout(inPage, 5000, setVolume, 0);
        // document.addEventListener('yt-navigate-finish', () => {
        //     console.log("navigation finished");
        //     setTimeout(inPage, 2000, setVolume, 0);
        // });

        // function setVolume(vol) {
        //     console.log('set volume');
        //     let videoPlayer = document.getElementById('movie_player');
        //     // let video = videoPlayer.querySelector('video');
        //     //let video = document.querySelector('video');
        //     console.log(videoPlayer);
        //     //console.log(video);
        //     console.log('volume1 ', videoPlayer.getVolume());
        //     //console.log(video.volume);
        //     videoPlayer.setVolume(vol);
        //     //video.volume = vol;
        //     //console.log(video.volume);
        //     console.log('volume2 ', videoPlayer.getVolume());
        // }

        function setVolume(vol) {
            let tag = document.createElement('script');
            tag.id = 'iframe-demo';
            tag.src = 'https://www.youtube.com/iframe_api';
            let firstScriptTag = document.getElementsByTagName('script')[0];
            //Insert tag before the first script tag
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            console.log('tag ', tag);
            let player;
            function onYouTubeIframeAPIReady() {
                console.log('on youtube iframe api ready');
                player = new YT.Player('existing-iframe-example', {
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }

            function onPlayerReady(event) {
                console.log('on player ready');
                console.log(event.target);
            }
        }

        function inPage(fn, ...args) {
            console.log('in page');
            const s = document.createElement('script');
            console.log(s);
            s.textContent = `(${fn})(${JSON.stringify(args).slice(1, -1)})`;
            s.type = 'text/javascript';
            document.documentElement.appendChild(s);
            //document.body.appendChild(s);
            console.log(document.documentElement);
            s.remove();
        }
        */
    }
});