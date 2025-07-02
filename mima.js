function mima() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Yi" && password == "0823") {
     window.location.href = "guoqin.html"
    } else {
        alert("非法")
        event.preventDefault();
    }

}
