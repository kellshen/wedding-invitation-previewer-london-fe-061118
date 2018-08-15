document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('keydown', function(e) {
        document.getElementById("firstName").innerHTML += e.key;   
          
        })})
        
        


function lettersOnly() {
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

                return true;
            else
                return false;
}
