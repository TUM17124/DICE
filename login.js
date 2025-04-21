
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

       
        let messageElement = document.getElementById("message");

       
        let validUsers = {
            "Ujuzi": "Ujuzi@2025",
            
        };

       
        if (validUsers[username] == password) {
            messageElement.innerHTML = "✅ Login successful!";
            messageElement.style.color = "green";
        }
        if(validUsers[username] ==password){
            
               // Delay showing the home section for 2 seconds
            setTimeout(function() {
                $(".home").show();
                $(".login").hide();
            }, 2000); // 2000 milliseconds = 2 seconds 
                
    
        }
       
         else {
            messageElement.innerHTML = "❌ Login failed! Incorrect username or password.";
            messageElement.style.color = "red";
        }
    });
});
$(document).ready(function(){ 
    $("#logout").click(function(){
        setTimeout(function(){
        $(".home").hide();
        $(".login").show();
    },1000);
    });
});
