// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // console.log(tabId);
    // console.log(changeInfo);
    // console.log(tab);
    if (changeInfo.status == 'complete') {
        // console.log(tab.url);
        // console.log(tab.)
        const site = tab.url;
        console.log(site);
        console.log(site.slice(0, 31));
        
        if (site.slice(0, 32) === 'https://www.youtube.com/channel/') {
            console.log('awww yeaahhhh');
        }
    };
});