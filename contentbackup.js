// Script for DOM manipulation
// Listen for the message sent in background.js

// chrome.webNavigation.onCompleted.addListener((e) => {
//     console.log('Web navigation completed');
//     let videoNav = document.querySelector('.html5-main-video');
//     console.log(vidNav);
//     console.log(e);
// })

/* Fix bug where video does not mute when the channel page is reached from / */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //document.addEventListener()
    
    // console.log(request);
    // console.log("document 1: ", document);
    // console.log(window);
    // console.log(document.readyState);
    //window.addEventListener('load', mainFunction, false);
    let vid = document.querySelector('.html5-main-video');
    console.log(vid);

    document.addEventListener('yt-navigate-finish', () => {
        setTimeout(muterino, 2000);
    })

    function muterino() {
        let videoTest = document.querySelector('.html5-main-video');
        console.log("video test", videoTest);
        console.log(videoTest.volume);
        videoTest.volume = 0;
        console.log(videoTest.volume);
    }

    // console.log('loaded event?');
    //function mainFunction() {
    console.log('inside main');
    if (request.message === 'loaded_channel_page' || document.readyState != 'loading') {
        
        //let video = document.querySelector('.html5-main-video');
        console.log('Loaded channel');
        console.log(vid);
        //console.log("document 2: ", document);
    
        let newVolume = 0;
        function muteVideo() {
            this.volume = newVolume;
            console.log('Bonkus');
            // console.log(this);
            // console.log(this.currentTime);

            if (this.currentTime > 1) {
                this.removeEventListener('timeupdate', muteVideo);
            }
        }
        function muteVid() {
            this.volume = newVolume;
            console.log(this.volume);
            console.log('Bonkus');
            // console.log(this);
            // console.log(this.currentTime);

            if (this.currentTime > 1) {
                this.removeEventListener('timeupdate', muteVid);
            }
        }
        if (vid) {
            console.log('vid exists');
            vid.addEventListener('timeupdate', muteVid);
            console.log(vid.volume);
        }
        //vid.addEventListener('timeupdate', muteVideo);
    };
    //}

})