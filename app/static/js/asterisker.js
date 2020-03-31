function asterisker(){
  string = document.getElementById('input_text').value
  keep_string = " \n!@#$%¨&*()¹²³£¢¬´`\"'{[ª~^]}º,<.>;:/?°\\|1234567890-_=+§"
  url_enconding = {
    "%":"%25",
    "\n":"%0A",
    "!":"%21",
    "#":"%23",
    "$":"%24",
    "&":"%26",
    "'":"%27",
    "(":"%28",
    ")":"%29",
    "+":"%2B",
    "/":"%2F",
    ";":"%3B",
    "?":"%3F",
    "\"":"%22",
    "\\":"%5C",
    "^":"%5E",
    "{":"%7B",
    "}":"%7C",
    "|":"%7C",
    "°":"%C2%BA",
    "º":"%C2%B0",
    "ª":"%C2%AA",
    "´":"%C2%B4",
    "`":"%60"
  }

  for (var i = 0; i < string.length; i++){
    char = string.charAt(i)
    if (keep_string.indexOf(char) < 0){
      string = string.replace(char,'*')
    }
  }

  var url_string = string
  for (var key in url_enconding){
    if (string.indexOf(key) > -1) {
      url_string = url_string.split(key).join(url_enconding[key])
    }
  }

  document.getElementById('asterisked').value = string
  document.getElementById('asterisked-info').style.visibility='visible'

  charCounter()
  
  var url = "https://twitter.com/intent/tweet?button_hashtag=asterisker&ref_src=twsrc%5Etfw&text=" + url_string + "%0A"
  document.getElementById("tweet_btn").href = url
  $('#copy-button').popover(); 
}

function charCounter(){
  small = document.getElementById('tweetCounter')
  counter = document.getElementById('asterisked').value.length
  small.innerHTML ="Limite do Twitter: "+counter+"/267"
  if (counter > 267 && !small.classList.contains("text-warning")){
    small.classList.add("text-warning")
    small.classList.remove("text-muted")
  } else if (counter <= 267 && document.getElementById('tweetCounter').classList.contains("text-warning")){
    small.classList.remove("text-warning")
    small.classList.add("text-muted")
  }
}

function copyText(){
  var copyText = document.getElementById("asterisked");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

window.onload = function() {
  charCounter()
};