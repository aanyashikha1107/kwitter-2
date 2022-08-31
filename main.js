function addUser(){
    username = document.getElementById("username").value ;
    localStorage.setItem("username" , username);
    window.location = "LetsChat_Room.html";
}