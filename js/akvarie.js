/**
 * fil: akvarie.js
 * formål: eksperiment - kan Js styre en Jitter-json?
 */

// Jeg anvender Copilot, som samarbejdspartner, til at skrive koden. Jeg har dog selv skrevet koden, og jeg har selv forstået og forklaret koden.
//CSS styrer udseende. JS styrer adfærd.


// --- LYD ---
const audio = new Audio("lyd/pixabay_indoor_nice_fish_tank_ambience_0031.mp3");
audio.loop = true;
let lydAktiv = false; // vores egen status

// --- KNAPPER ---
const startBtn = document.getElementById("startBtn");
const muteBtn = document.getElementById("muteBtn");
const stopBtn = document.getElementById("stopBtn");

// START
startBtn.addEventListener("click", () => {
    animation.play();
    audio.play();
    lydAktiv = true;
    muteBtn.textContent = "Lydløs"; // fordi lyden nu er aktiv
});

// LYD / LYDLØS (toggle/skifter mellem to tilstande on off)
muteBtn.addEventListener("click", () => {
    if (lydAktiv) {
        audio.pause(); //LYDEN MUTES
        lydAktiv = false;
        muteBtn.textContent = "Lyd";
    } else {
        audio.play(); //STARTER/FORTSÆTTER LYD
        lydAktiv = true;
        muteBtn.textContent = "Lydløs";
    }
});

// STOP
stopBtn.addEventListener("click", () => {
    animation.stop();
    audio.pause();
    audio.currentTime = 0;

    // VIGTIGT: Stop må IKKE ændre teksten på mute-knappen!
    // lydAktiv = false;  <-- denne linje skal FJERNES
});
// --- ONclick + onclick udenfor dialogboks med attributter/ på fisk: https://www.w3schools.com/jsref/event_onclick.asp ---

const fiskAntias = document.getElementById("fisk_antias");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const indhold = document.getElementById("indhold");

const antias =`
        <h2>🐟 Hej! Jeg hedder Kara</h2>
        <p>💛 Min farve er gul og orange.</p>
        <p>📏 Jeg kan blive 20 cm lang.</p>
        <p>🏠 Jeg bor ved koralrev.</p>
        <p>🍴 Jeg elsker at spise alger.</p>
        <p>🎂 Jeg er 10 år gammel.</p>
        <p>⭐ Mit særlige talent er at gemme mig mellem koraller.</p>
        <p>🤓 Vidste du at jeg har giftige pigge?</p>
    `;
fiskAntias.addEventListener("click", () => {
    indhold.innerHTML = antias;
    overlay.style.display = "flex";
});

// Åbn popup, når man klikker på fisken
fiskAntias.addEventListener("click", () => {
    overlay.style.display = "flex";
});

// Luk popup, med knap
closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});
// Luk popup, når man klikker udenfor popup
overlay.addEventListener("click", (event) => { //Når der klikkes på overlayet, skal denne funktion køre.
    if (event.target === overlay) {
        overlay.style.display = "none";
    }
});
