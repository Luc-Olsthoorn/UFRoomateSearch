function toggleMenu() {
    var bar = document.getElementById("sidebar");
    if (bar.style.display == 'block') {
        bar.style.display = 'none';
        document.getElementById("body").classList.add("moved");
        document.getElementById("body").style.width = "100%";
    } else {
        bar.style.display = 'block';
        document.getElementById("body").classList.remove("moved");
        document.getElementById("body").style.width = "calc(100% - 319px)";
    }
}

function toggleUser() {
    var drop = document.getElementById("uDrop");
    if (drop.style.display == 'block') {
        drop.style.display = 'none';
    } else {
        drop.style.display = 'block';
    }
}
