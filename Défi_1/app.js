

var myButton=document.getElementById("button").addEventListener("click",loadData)
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("output").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "data.txt", true);
    xhttp.send();
  }
















