// Script for DOM manipulation
// Listen for the message sent in background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    // Inject js file
    if (request.message === 'loaded_channel_page') {
        let s = document.createElement('script');
        s.src = chrome.runtime.getURL('muteVideo.js');
        s.onload = function() {
            this.remove();
        };
        console.log(s);
        document.documentElement.appendChild(s);
    }
});