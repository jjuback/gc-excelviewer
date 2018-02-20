var gcLocalServer = "http://localhost";

function loadFile(server, callback) {
    gcLocalServer = server;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        var storage = JSON.parse(this.response);
        processFile(storage, callback);
    });
    xhr.open("GET", server + "/storage");
    xhr.send();
}

function postState(server, state, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", server + "/state");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            callback();
        }
    };
    xhr.send(JSON.stringify(state));
}

function getNagLink() {
    var links = document.querySelectorAll("a[href*='wijmo.com']");
    for (var i = 0; i < links.length; i++) {
        var parent = links[i].parentElement;
        if (parent.style.display !== "none") {
            parent.style.display = "none";
            wijmo.Control["_updateWme"] = function() {};
            return links[i];
        }
    }
    return null;
}
