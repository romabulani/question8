var inputName = document.querySelector("#name");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

btnSubmit.addEventListener('click',clickHandler);

function clickHandler(){
    console.log("clicked");
    var serverUrl = 'https://lessonfourapi.romabulani.repl.co/translate/yoda.json' + "?text=" + inputName.value;
    fetch(serverUrl)
    .then(response => response.json())
    .then(json => {
        output.innerHTML = json.name.message;
    })
}