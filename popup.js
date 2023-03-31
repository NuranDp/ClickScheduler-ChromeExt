
document.addEventListener('DOMContentLoaded', documentEvents, false);

function injectTheScript(buttonXPathExt, timeExt, clientType) {
    chrome.storage.sync.set({
        buttonXPathExt: buttonXPathExt,
        timeExt: timeExt,
        clientType: clientType,
    });
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { file: "utilities.js" });
        });
}

function documentEvents() {
    document.getElementById('press').addEventListener('click',
        function () {
            var clientType = document.querySelector('input[name = clientType]:checked').value;
            injectTheScript(document.getElementById('buttonXPathExt').value, document.getElementById('timeExt').value, clientType);
        });
}