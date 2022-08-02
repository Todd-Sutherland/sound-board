// create our array of sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// loop through each sound in our sounds array
sounds.forEach((sound) => {
  const btn = document.createElement("button"); // create a button element for each sound
  btn.classList.add("btn"); // give each button a class

  btn.innerText = sound; // set innerText to the sound

  // for every button, we want to listen for a click. On that click, we want to get the button element by ID, and use audio element method, play()
  btn.addEventListener("click", () => {
    stopSounds();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn); // get the buttons container and append each btn to it
});

function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
