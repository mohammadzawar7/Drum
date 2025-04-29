const drumSounds = {
    w: { sound: "crash", image: "crash" },
    a: { sound: "kick-bass", image: "kick" },
    s: { sound: "snare", image: "snare" },
    d: { sound: "tom-1", image: "tom1" },
    j: { sound: "tom-2", image: "tom2" },
    k: { sound: "tom-3", image: "tom3" },
    l: { sound: "tom-4", image: "tom4" }
  };
  
  function playDrumSound(fileName) {
    let sound = new Audio("sounds/" + fileName + ".mp3");
    sound.play();
  }
  
  function showImageInButton(key, imageName) {
    let button = document.querySelector("." + key);
    if (button) {
      let originalText = button.innerHTML;
  
      button.innerHTML = `<img src="images/${imageName}.png" alt="${imageName}" class="button-image">`;
  
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 300);
    }
  }
  
  function animateDrumButton(key) {
    let button = document.querySelector("." + key);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => button.classList.remove("pressed"), 100);
    }
  }
  
  function handleDrum(key) {
    let drum = drumSounds[key];
    if (drum) {
      playDrumSound(drum.sound);
      showImageInButton(key, drum.image);
      animateDrumButton(key);
    }
  }
  
  document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
      let key = this.innerHTML;
      handleDrum(key);
    });
  });
  
  document.addEventListener("keydown", function (event) {
    handleDrum(event.key);
  });