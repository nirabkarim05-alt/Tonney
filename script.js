// -------------------------------
// Typewriter Effect
// -------------------------------

const typing = document.getElementById("typing");

const message =
"My heart has only one home... and it is with you, Tahura. ❤️";

let index = 0;

function typeWriter() {
    if (!typing) return;

    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

setTimeout(typeWriter, 6200);

// -------------------------------
// Open Letter Button
// -------------------------------

const openBtn = document.getElementById("openBtn");
const letterSection = document.getElementById("letterSection");

if (openBtn) {
    openBtn.addEventListener("click", () => {

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    });
}

// -------------------------------
// Relationship Counter
// -------------------------------

const counter = document.getElementById("counter");

const togetherDate = new Date("2026-01-23T00:00:00");

function updateCounter() {

    if (!counter) return;

    const now = new Date();

    let diff = now - togetherDate;

    if (diff < 0) {
        counter.innerHTML = "Our journey begins soon ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));

    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    counter.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCounter, 1000);

updateCounter();

// -------------------------------
// Floating Hearts
// -------------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floatingHeart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 350);

// -------------------------------
// Rose Petals
// -------------------------------

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    petal.style.fontSize =
        (18 + Math.random() * 14) + "px";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);

}

setInterval(createPetal, 700);

// -------------------------------
// Shooting Star
// -------------------------------

function shootingStar() {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "2px";
    star.style.height = "120px";
    star.style.background =
        "linear-gradient(white, transparent)";
    star.style.transform = "rotate(45deg)";
    star.style.top = "-100px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.zIndex = "3";

    document.body.appendChild(star);

    let topPos = -100;
    let leftPos = parseFloat(star.style.left);

    const move = setInterval(() => {

        topPos += 15;
        leftPos += 15;

        star.style.top = topPos + "px";
        star.style.left = leftPos + "px";

        if (topPos > window.innerHeight + 150) {

            clearInterval(move);

            star.remove();

        }

    }, 20);

}

setInterval(shootingStar, 7000);

// -------------------------------
// Music
// -------------------------------

const music = document.getElementById("bgMusic");

if (music) {

    document.body.addEventListener("click", () => {

        music.play().catch(() => {
            // Browser blocked autoplay until interaction.
        });

    }, { once: true });

}

// -------------------------------
// Fade-in Sections
// -------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([
                {
                    opacity: 0,
                    transform: "translateY(50px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }
            ], {
                duration: 900,
                fill: "forwards"
            });

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    observer.observe(section);

});
