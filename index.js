let ball  = document.getElementById("ball")
function moveButton() {
let randX = Math.floor(Math.random() * (window.innerWidth - 100));
ball.animate({ "left": randX + "px" }, { duration: 1500 });

}

ball.addEventListener('mousemove', moveButton);
let nVotes = 40567899
let lVotes = 40567898
document.getElementById("nVotes").innerHTML = nVotes
document.getElementById("lVotes").innerHTML = lVotes
function no(){
        let soundSource = "./bing-chilling.mp3";
        let sound = new Audio(soundSource);
        sound.play();
        nVotes++
        lVotes--
        document.getElementById("nVotes").innerHTML = nVotes
        document.getElementById("lVotes").innerHTML = lVotes
}

function yes(){
        nVotes++
        lVotes--
        document.getElementById("nVotes").innerHTML = nVotes
        document.getElementById("lVotes").innerHTML = lVotes
}
let v = document.getElementById("v")
let o = document.getElementById("o")
let t = document.getElementById("t")
let e = document.getElementById("e")
function spin(){
        v.style.left = "32vw"
        v.style.top = "20vh"
        v.style.transform = 'rotate(1080deg)';
        o.style.left = "42vw"
        o.style.top = "20vh"
        o.style.transform = 'rotate(1080deg)';
        t.style.left = "52vw"
        t.style.top = "20vh"
        t.style.transform = 'rotate(1080deg)';
        e.style.left = "62vw"
        e.style.top = "20vh"
        e.style.transform = 'rotate(1080deg)';
}