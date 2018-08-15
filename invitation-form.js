document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('keypress', function(e) {
        document.getElementById("firstName").innerHTML += e.key;   
          
        })})
        
document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formSecondName"))
        document.getElementById("formSecondName").addEventListener('keypress', function(e) {
        document.getElementById("secondName").innerHTML += e.key;   
          
        })})      

        


