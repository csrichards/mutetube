// Script for DOM manipulation
// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //document.addEventListener()
    
    // console.log(request);
    // console.log("document 1: ", document);
    // console.log(window);
    // console.log(document.readyState);

    console.log('inside main');
    if (request.message === 'loaded_channel_page' || document.readyState != 'loading') {
        console.log(request.message);
        
        document.addEventListener('yt-navigate-finish', () => {
            console.log("navigation finished");
            setTimeout(mute, 2000);
        });
    
        function mute() {
            let videoTest = document.querySelector('.html5-main-video');
            console.log("video test", videoTest);
            console.log(videoTest.volume);
            videoTest.volume = 0;
            console.log(videoTest.volume);
        }
    }
})