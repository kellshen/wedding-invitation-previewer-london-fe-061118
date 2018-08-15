document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('oninput', function() {
   console.log("Here")
   document.getElementById("firstName").value = this.value;   
})})