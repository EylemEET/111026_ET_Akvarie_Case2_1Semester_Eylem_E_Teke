/**
 * fil: akvarie.js
 * formål: eksperiment - kan Js styre en Jitter-json?
 */

// Jeg anvender Copilot, som samarbejdspartner, til at skrive koden. Jeg har dog selv skrevet koden, og jeg har selv forstået og forklaret koden.
//CSS styrer udseende. JS styrer adfærd.


// --- LYD ---
const audio = new 
Audio("lyd/pixabay_indoor_nice_fish_tank_ambience_0031.mp3");
audio.loop = true; // Lydfilen afspilles i loop

// --- KNAPPER ---
const startBtn = document.getElementById("startBtn");
const lydløsBtn = document.getElementById("lydløsBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", () => {
    console.log("start klikket");
    audio.play();
});
// status på lyden
let lydAktiv = false;

// START
startBtn.addEventListener("click", () => {
    audio.play();
    lydAktiv = true;
    muteBtn.textContent = "Lydløs";
});
// lydløs/lyd
muteBtn.addEventListener("click", () => {
    if (lydAktiv) {
        audio.pause();
        lydAktiv = false;
        muteBtn.textContent = "Lyd";
    
} else{
    audio.play();
    lydAktiv = true;
    muteBtn.textContent = "Lydløs"
}
});
// STOP
stopBtn.addEventListener("click", ()=> {
    audio.pause();
    audio.currentTime = 0;
    muteBtn.textContent = "Lyd";
});














// START



// --- ONclick + onclick udenfor dialogboks med attributter/ på fisk: https://www.w3schools.com/jsref/event_onclick.asp ---

const fiskKara = document.getElementById("fisk_kara");
console.log(fiskKara);
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const indhold = document.getElementById("indhold");

const kara =`
<h2>🐟 Hej! Jeg hedder Kara</h2>
<p>🖤 Min farve er sort.</p>
<p>📏 Jeg kan blive ligeså lang som en lineal.</p>
<p>🌊 Jeg bor ved koralrev.</p>
<p>🍴 Jeg elsker at spise alger.</p>
<p>🎂 Jeg er 10 år gammel.</p>
<p>🌟 Min superkraft er, jeg kan lide at hjælpe andre fisk.</p>
<p>💭Jeg drømmer om at udforske hele verden.</p>
    `;
fiskKara.addEventListener("click", () => {
    indhold.innerHTML = kara;
    overlay.style.display = "flex";
});

// Åbn popup, når man klikker på fisken
fiskKara.addEventListener("click", () => {
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

