


function signIn() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
  
    let err = document.getElementById("input-box");
    let err1 = document.getElementById("input-box1");
  
    if (username === "" || pass === "") {
      err.classList.add("err-input");
      err1.classList.add("err-input");
  
      setTimeout(() => {
        err.classList.remove("err-input");
        err1.classList.remove("err-input");
      }, 1000);
    } else {
    //   location.replace("index.html");
        window.location.replace("index.html");
        localStorage.setItem("User", JSON.stringify(username));
        user.innerHTML = `${username}`; // Remove the let keyword from this line
    }
  }
  

  // Get the user data from local storage
let userData = JSON.parse(localStorage.getItem("User"));

// Set the user name to the user element
let userElement = document.getElementById("userID").innerHTML = ` Hi ${userData}`;
userElement.innerHTML = userData;
  


  function Logout(){
    localStorage.remove("User");
  }

