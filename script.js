var r = document.querySelector(':root');

function colorChange() {
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        x = Math.floor(Math.random()*16);
        
        randomColor += hex[x];
    }
    
    r.style.setProperty("--accent", randomColor);
}

setInterval(colorChange, 3000);

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typingText", {
        speed: 100,
        afterComplete: function (instance) {
            instance.destroy();
        }
    })
    .type("Hellllllllooo")
    .pause(1000)
    .delete(2)
    .pause(500)
    .move(-1)
    .delete(6)
    .pause(500)
    .move(null, { to: "END" })
    .type(".")
    .go();
});