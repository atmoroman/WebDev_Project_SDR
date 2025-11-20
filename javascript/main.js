function toggleMode() {
    var body = document.body;
    var btn = document.getElementById("modeBtn");

    if (body.className === "dark-mode") {
        body.className = "light-mode";
        btn.innerHTML = "DarkMode";
    } else {
        body.className = "dark-mode";
        btn.innerHTML = "LightMode";
    }
}


function darkMode() {
    var element = document.body;
    element.className = "dark-mode"; 
}
function lightMode() {
    var element = document.body;
    element.className = "light-mode";
}
    