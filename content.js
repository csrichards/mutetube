// Script for DOM manipulation
// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.message === 'loaded_channel_page') {

        // console.log('Loaded channel');
        
        let video = document.querySelector('.html5-main-video');
        let newVolume = video.volume;
        // console.log(newVolume);

        video.addEventListener('loadeddata', (event) => {
            // console.log('fired');
            newVolume = 0;
            video.volume = newVolume;
        })
    }

})