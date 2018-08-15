document.addEventListener("DOMContentLoaded", 
    function() {
        document.getElementById("formFirstName").addEventListener('onkeyup', function() {
   console.log("Here")
   document.getElementById("firstName").value = this.value;   
})})