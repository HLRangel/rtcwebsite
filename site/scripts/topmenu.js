function topmenuToggle() {
    let mobimenu = document.getElementById("mobimenu");

    if(mobimenu.style.display == "block") {
        mobimenu.style.display = "none";
    } else if (mobimenu.style.display == "none") {
        mobimenu.style.display = "block";
    }
}