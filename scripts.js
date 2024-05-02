// rain animation 
function rain(){
    let heart = document.querySelector('.heart-container');
    let e = document.createElement('div');
    e.classList.add('drop')
    heart.appendChild(e);

    let left = Math.floor(Math.random() * 200);
    let duration = Math.random() * 0.5;

    e.style.left = left + 'px';
    e.style.animationDuration = 1 + duration;

    setTimeout(function(){
        heart.removeChild(e)
    }, 5000)
}
setInterval(function(){
    rain()
},400);

// wring part
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Hey Raya!", "Look here!","I am in a hurry, but...","I want to tell you something!", "\'When I saw you I stopped using Google\'", "Do you know why?", "\'Because I knew the search was over\'", "Haha! Now, you might be thinking \'Rahul googled this cheesy line\'","But how can I? I already stopped using Google! xD", "Ok Bye! you continue smiling!","eta rakho <3"];
const typingDelay = 50;
const erasingDelay = 25;
const newTextDelay = 4000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});