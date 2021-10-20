var inputAttribute = document.querySelector("#input");
var outputAttribute = document.querySelector("#output");
var btnAttribute = document.querySelector("#btn");
var url = "https://api.funtranslations.com/translate/minion.json";

btnAttribute.addEventListener("click", clickHandler);

function generateURL(text) {
  var newurl = url + "?text=" + text;
  fetch(newurl)
    .then((res) => res.json())
    .then((json) => (outputAttribute.value = json.contents.translated));
}

function clickHandler() {
  var text = inputAttribute.value;
  generateURL(text);
}
