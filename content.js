// Script for DOM manipulation
// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.message === 'loaded_channel_page') {
        console.log('continual_check branch: loaded channel page');
        //inPage(setVolume, 0);
        // let tries = 0;
        // console.log('tries: ', tries);

        setTimeout(inPage, 1000, newVolume, 0, 0);

        function newVolume(vol, tries) {
            console.log('set volume');
            // console.log(tries);
            // let videoPlayer = document.getElementById('movie_player');
            // console.log(videos);
            let videoPlayer = document.getElementById('movie_player');
            let muteButton = document.querySelector('.ytp-mute-button');
            let muteButtonDiv = document.querySelector('.ytp-volume-panel');
            let videos = document.querySelectorAll('video');
            // console.log(videos);
            console.log(tries);
            vidSrc = [...videos].filter((vid) => vid.hasAttribute('src'));
            console.log('vidSrc', vidSrc);
            if (vidSrc.length > 0 && tries <= 5) {
                console.log('muting videos...');
                // vidSrc.forEach((vid) => {
                //     console.log('muted video');
                //     vid.volume = vol;
                // })
                videos.forEach((vid) => {
                        console.log('muted video ', vid);
                        vid.volume = vol;
                })
                s.remove();
            }
            else if (tries > 5) {
                s.remove();
            }
            else {
                // If video src's are not loaded, wait X seconds and call newVolume again
                console.log('no videos ', vidSrc);
                tries += 1;
                setTimeout(newVolume, 1000, 0, tries);
            }
        }
        

        function inPage(fn, ...args) {
            console.log('in page');
            const s = document.createElement('script');
            console.log(s);
            s.textContent = `(${fn})(${JSON.stringify(args).slice(1, -1)})`;
            s.type = 'text/javascript';
            document.documentElement.appendChild(s);
            //console.log(document.documentElement);
            //s.remove();
        }
    }
});