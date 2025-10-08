const messages = [
    "🚀 Take the plunge, trust your abilities, and unlock your true potential!"
];
let index = 0;
function animateText() {
    let textElement = document.getElementById("liveText");
    let container = document.getElementById("liveTextContainer");
    let containerWidth = container.offsetWidth;
    let textWidth = textElement.offsetWidth;

    // Always start from the left
    let startPos = -textWidth;
    let endPos = containerWidth;

    textElement.style.left = startPos + "px";
    textElement.innerText = messages[index];

    let speed = 2; // Adjust speed here
    let pos = startPos;

    function moveText() {
        pos += speed;
        textElement.style.left = pos + "px";

        if (pos >= endPos) {
            index = (index + 1) % messages.length; // Change message
            setTimeout(animateText, 1000); // Pause before switching
        } else {
            requestAnimationFrame(moveText);
        }
    }

    moveText();
}
function typeWriter(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}