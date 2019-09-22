// Script for DOM manipulation
// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender);
    if (request.message === 'loaded_channel_page') {
        console.log('Loaded channel');
    }
})
console.log('content.js working');