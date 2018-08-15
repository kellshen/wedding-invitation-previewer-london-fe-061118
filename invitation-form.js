document.addEventListener("DOMContentLoaded", 
    function() {
      console.log("LOADED")
        document.getElementById("formFirstName").addEventListener('onkeyup', function() {
   console.log("Here")
   document.getElementById("firstName").value = this.value;   
})})