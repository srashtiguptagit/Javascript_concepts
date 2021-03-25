// AJAX follow the single origin policy ie, both the source and destination lie on the same origin.

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);  // 3rd argument is for ASYNC call
    xhttp.send();
  }