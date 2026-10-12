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