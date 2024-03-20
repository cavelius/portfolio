document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var overlayFont = document.getElementById("overlay-font");

  // Zeige das Overlay an
  overlay.style.display = "block";

  // Füge eine Klasse hinzu, um die Animation zu starten, nachdem das Overlay 5 Sekunden angezeigt wurde
  setTimeout(function () {
    overlay.classList.add("fadeOut");
    overlayFont.classList.add("schriftGroesse");
  }, 1000); // Die Klasse wird nach 3 Sekunden hinzugefügt

  // Verstecke das Overlay nach 7 Sekunden (4 Sekunden Anzeige + 3 Sekunden Animation)
  setTimeout(function () {
    overlay.style.position = "absolute";
  }, 4000); // 7000 Millisekunden = 3 Sekunden Anzeige + 3 Sekunden Animation
});

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;
  var iAmSofia = document.getElementById("i-am-sofia");
  var someOfMyDesignns = document.getElementById("some-of-my-designs");
  var clickOnIt = document.getElementById("click-on-it");
  var aboutMe = document.getElementById("about-me");
  var letsConnect = document.getElementById("lets-connect");
  console.log(scrollY);

  if (scrollY >= -1 && scrollY < 110) {
    iAmSofia.style.display = "block"; // Bild anzeigen
  } else {
    iAmSofia.style.display = "none"; // Bild ausblenden
  }
  if (scrollY >= 219 && scrollY < 500) {
    someOfMyDesignns.style.display = "block"; // Bild anzeigen
  } else {
    someOfMyDesignns.style.display = "none"; // Bild ausblenden
  }
  if (scrollY >= 540 && scrollY < 1800) {
    clickOnIt.style.display = "block"; // Bild anzeigen
  } else {
    clickOnIt.style.display = "none"; // Bild ausblenden
  }
  if (scrollY >= 2350 && scrollY < 2983) {
    aboutMe.style.display = "block"; // Bild anzeigen
  } else {
    aboutMe.style.display = "none"; // Bild ausblenden
  }
  //   if (scrollY >= 2500 && scrollY < 3000) {
  //     letsConnect.style.display = "block"; // Bild anzeigen
  //   } else {
  //     letsConnect.style.display = "none"; // Bild ausblenden
  //   }
});
