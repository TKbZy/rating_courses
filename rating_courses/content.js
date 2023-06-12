chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message == "go") {
            const flag = document.getElementById("answerDiv0");
            if (flag) {
                rating();
            } else {
                alert("请进入填写页面");
            }
        } else {
            alert("请进入填写页面");
        }
    }
);

function rating() {
    const id = "answerDiv";
    let i = 0;
    for (let answerDiv = document.getElementById(id + String(i)); answerDiv != null; i++, answerDiv = document.getElementById(id + String(i))) {
        if (answerDiv.childElementCount > 4) {
            let firstRadio = answerDiv.firstElementChild.firstElementChild;
            console.log(firstRadio);
            firstRadio.click();
        } else {
            answerDiv.firstElementChild.value = "无";
        }
    }
    let file = chrome.runtime.getURL("tmp.js");
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = file;
    document.documentElement.appendChild(s);
}
