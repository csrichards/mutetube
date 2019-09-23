// Script for DOM manipulation
// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    let video = document.querySelector('.html5-main-video');
    //console.log(video.properties);

    if (!video.muted) {
        video.muted = true;
        console.log(video.muted);
        video.mute();
    }

    if (request.message === 'loaded_channel_page') {
        console.log('Loaded channel');
    }
})
// console.log('content.js working');