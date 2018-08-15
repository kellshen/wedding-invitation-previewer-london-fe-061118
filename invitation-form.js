document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('keypress', function() {
        document.getElementById("firstName").value = document.value;   
           console.log("Here")
          
        })})