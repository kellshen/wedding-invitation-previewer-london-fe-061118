document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('input', function(e) {
        document.getElementById("firstName").innerHTML += e.key;   
    
          
        })})