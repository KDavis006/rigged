// Get the modal
var modal = document.getElementById('field');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("ball").addEventListener("mouseenter", run);
function run() {
    var btn = document.getElementById("ball");
    if (!btn.style.left) {
        // Default to 500 to start
        btn.style.left = "500px";
    } else {
        var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}