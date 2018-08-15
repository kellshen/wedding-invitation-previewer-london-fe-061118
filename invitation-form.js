document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('onkeyup', function() {
   console.log("Here")
   document.getElementById("firstName").value = this.value;   
})})