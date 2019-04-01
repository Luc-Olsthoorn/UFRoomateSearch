function toggleMenu() {
    var bar = document.getElementById("sidebar");
    if (bar.style.display == 'block') {
        bar.style.display = 'none';
    } else {
        bar.style.display = 'block';
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
