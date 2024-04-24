document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var overlayFont = document.getElementById("overlay-font");

  // Füge eine Klasse hinzu, um die Animation zu starten, nachdem das Overlay 5 Sekunden angezeigt wurde
  setTimeout(function () {
    overlay.classList.add("fadeOut");
    overlayFont.classList.add("schriftGroesse");
  }, 1000); // Die Klasse wird nach 3 Sekunden hinzugefügt

  // Verstecke das Overlay nach 7 Sekunden (4 Sekunden Anzeige + 3 Sekunden Animation)
  setTimeout(function () {
    overlay.style.position = "absolute";
    overlay.style.zIndex = "100";
  }, 3000); // 7000 Millisekunden = 3 Sekunden Anzeige + 3 Sekunden Animation
});

function calculateScrollPercentage() {
  const yPosition = window.scrollY;
  const viewPortHeight = document.body.clientHeight - window.innerHeight;
  const percentage = (yPosition / viewPortHeight) * 100;
  return percentage;
}

document.addEventListener("scroll", () => {
  console.log(window.scrollY, document.body.clientHeight, window.innerHeight);

  const percentage = calculateScrollPercentage();
  console.log("Percentage", percentage);

  var iAmSofia = document.getElementById("i-am-sofia");
  var someOfMyDesignns = document.getElementById("some-of-my-designs");
  var clickOnIt = document.getElementById("click-on-it");
  var aboutMe = document.getElementById("about-me");
  var letsConnect = document.getElementById("lets-connect");

  if (percentage >= 0 && percentage < 10.870610870610872) {
    iAmSofia.style.display = "block"; // Bild anzeigen
  } else {
    iAmSofia.style.display = "none"; // Bild ausblenden
  }
  if (percentage >= 12.68976255352277 && percentage < 42.78676988036594) {
    someOfMyDesignns.style.display = "block"; // Bild anzeigen
  } else {
    someOfMyDesignns.style.display = "none"; // Bild ausblenden
  }
  if (percentage >= 48.55328158080452 && percentage < 62.797747942832395) {
    clickOnIt.style.display = "block"; // Bild anzeigen
  } else {
    clickOnIt.style.display = "none"; // Bild ausblenden
  }
  if (percentage >= 76.91641403204851 && percentage < 90) {
    aboutMe.style.display = "block"; // Bild anzeigen
  } else {
    aboutMe.style.display = "none"; // Bild ausblenden
  }
  if (percentage >= 98) {
    letsConnect.style.display = "block"; // Bild anzeigen
  } else {
    letsConnect.style.display = "none"; // Bild ausblenden
  }
});

// Mobile menu

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const linkWork = document.querySelector(".menu-text-work");
  const linkAbout = document.querySelector(".menu-text-about");
  const linkContact = document.querySelector(".menu-text-contact");
  const menuText = document.querySelector(".menu-text-about");

  linkWork.addEventListener("click", () => {
    setTimeout(() => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
      menuText.classList.toggle("active");
    }, 300);
  });

  linkAbout.addEventListener("click", () => {
    setTimeout(() => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
      menuText.classList.toggle("active");
    }, 300);
  });

  linkContact.addEventListener("click", () => {
    setTimeout(() => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
      menuText.classList.toggle("active");
    }, 300);
  });

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    menuText.classList.toggle("active");
  });
});

// Übergang zu den Subpages

document.addEventListener("DOMContentLoaded", function () {
  const linkSubpage = document.querySelector(".container-img-and-text");
  const mainElement = document.querySelector("main");
  const footerElement = document.querySelector("footer");

  linkSubpage.addEventListener("click", (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links

    // Füge die Klasse "transition-opacity" hinzu, um den Übergang der Opazität zu aktivieren
    mainElement.classList.add("transition-opacity");
    footerElement.classList.add("transition-opacity");

    // Setze die Opazität der Elemente auf 0, was den Fadeneffekt auslöst
    setTimeout(() => {
      mainElement.style.opacity = 0;
      footerElement.style.opacity = 0;
    }, 0);

    // Navigiere zur Seite "things-we-write.html" nach einer Sekunde
    setTimeout(() => {
      window.location.href = "things-we-write.html";
    }, 500);
  });
});

// Laden der Unterseiten

document.addEventListener("DOMContentLoaded", function () {
  const subOverlayFont = document.getElementById("subpage-overlay-font");
  const subImages = document.querySelector(".subpage-images");
  const subTilte = document.querySelector(".subpage-title-ul");
  const subText = document.querySelector(".subpage-title-long-text");

  subOverlayFont.classList.add("fontchangeposition");
  subImages.classList.add("imagesAnimation");
  // animation der Schrift
  subTilte.classList.add("fontAnimation");
  subText.classList.add("fontAnimation");
});

// animation der Elemente

const subImage = document.querySelector(".img-container-two");

// Eventlistener für das Scroll-Event hinzufügen
window.addEventListener("scroll", function () {
  // Höhe des Viewports
  const viewportHeight = window.innerHeight;

  // Position des Elements relativ zum Viewport
  const elementPosition = subImage.getBoundingClientRect().top;

  // Wenn das Element 30% oder mehr der Browserhöhe erreicht hat
  if (elementPosition < viewportHeight * 0.3) {
    // CSS-Klasse hinzufügen, um die Animation zu starten
    subImage.classList.add("imgAnimation");
  } else {
    // CSS-Klasse entfernen, falls das Element weniger als 30% der Browserhöhe hat
    subImage.classList.remove("imgAnimation");
  }
});
