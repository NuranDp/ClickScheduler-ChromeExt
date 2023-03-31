function goToActivityTab() {
    chrome.storage.sync.get((res) => {
        try {
            if (res.buttonXPathExt != null && res.buttonXPathExt != "" && res.timeExt != null && res.timeExt != "") {
                var sendButton = getElementByXpath(res.buttonXPathExt);
                if (sendButton != null) {

                    var clientType = res.clientType;
                    var extraTimeOut = 0;

                    switch (clientType) {
                        case 'skype':
                            extraTimeOut = 50
                            break;
                        case 'whatsapp':
                            extraTimeOut = 0
                            break;
                        default:
                            extraTimeOut = 0
                            break;
                    }

                    var time = res.timeExt.split(':');
                    var now = new Date();
                    var timeOut = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time[0], time[1], 0, 0) - now;
                    setTimeout(function () {
                        sendButton.click();
                    }, (timeOut - 50));

                    alert("এবার কাজে যান !");
                } else {
                    alert("আমাকে ভুল তথ্য দিয়ে বিব্রত করবেন না !");
                }
            }
            else {
                alert("আমাকে ভুল তথ্য দিয়ে বিব্রত করবেন না !");
            }
        } catch (error) {
            alert("আমাকে ভুল তথ্য দিয়ে বিব্রত করবেন না !");
        }

    });
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

goToActivityTab();