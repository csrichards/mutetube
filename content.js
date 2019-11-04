// Script for DOM manipulation
// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.message === 'loaded_channel_page') {
        // let s = document.createElement('script');
        // s.src = chrome.runtime.getURL('muteVideo.js');
        // s.onload = function() {
        //     this.remove();
        // };
        // (document.head || document.documentElement).appendChild(s);
        console.log('master branch: loaded channel page');
        //inPage(setVolume, 0);
        setTimeout(inPage, 2000, newVolume, 0);

        function newVolume(vol) {
            console.log('set volume');
            // let videoPlayer = document.getElementById('movie_player');
            let videoPlayer = document.getElementById('movie_player');
            let muteButton = document.querySelector('.ytp-mute-button');
            let muteButtonDiv = document.querySelector('.ytp-volume-panel');
            let videos = document.querySelectorAll('video')
            console.log(videos[0]);

            videos[0].volume = vol;
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
    }
});