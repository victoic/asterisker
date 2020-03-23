function asterisker(){
  string = document.getElementById('input_text').value
  keep_string = " \n!@#$%¨&*()¹²³£¢¬´`{[ª~^]}º,<.>;:/?°\\|1234567890-_=+§"
  for (var i = 0; i < string.length; i++){
    char = string.charAt(i)
    if (keep_string.indexOf(char) < 0){
      string = string.replace(char,'*')
    }
  }
  document.getElementById('asterisked').value = string
  document.getElementById('asterisked-info').style.visibility='visible'
  $('#copy-button').popover(); 
}

function copyText(){
  var copyText = document.getElementById("asterisked");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}