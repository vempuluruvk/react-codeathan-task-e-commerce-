function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   if (username === "vamsi" && password === "vamsi45") {
    alert("Login Success full ")
    window.location.assign("INDEX.HTML");
    } 
  else{
        alert("Invalid username or password")
   }
  }

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}