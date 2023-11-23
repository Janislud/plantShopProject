function myFunction() {
    var x = document.getElementById("myLinks");
    if (window.getComputedStyle(x).display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}