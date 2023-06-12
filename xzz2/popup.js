let button = document.getElementById("go");

button.onclick =  () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        const activeTab = tabs[0];
        const url = String(tabs[0].url);
        if (url.startsWith("http://jwc.swjtu.edu.cn/")) {
            chrome.tabs.sendMessage(activeTab.id, { "message": "go" });
        } else {
            chrome.tabs.sendMessage(activeTab.id, { "message": "error" });
        }
    });
};