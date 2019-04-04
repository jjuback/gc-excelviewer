var gcLocalServer = "http://localhost";

function loadFile(server, callback) {
    gcLocalServer = server;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        var storage = JSON.parse(this.response);
        processFile(storage, callback);
    });
    xhr.open("GET", server + "/state");
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
