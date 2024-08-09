console.log('background.js running');
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// if needed realtime info from tabs on change
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ['foreground.css']
        }).then(() => {
            console.log('foreground.css injected');
        }).catch(err => console.log(err));
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['foreground.js']
        }).then(() => {
            console.log('foreground.js injected');
        }).catch(err => console.log(err));
    }
});