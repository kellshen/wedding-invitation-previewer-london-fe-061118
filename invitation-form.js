document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('keypress', function(e) {
        document.getElementById("firstName").value = e.key;   
           console.log(e)
          
        })})