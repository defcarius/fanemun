// DO NOT MODIFY!
document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme-select");

  applySavedTheme();

  if (window.location.pathname === "/settings") {
    themeSelect.addEventListener("change", function () {
      const selectedTheme = themeSelect.value;
      applyTheme(selectedTheme);
      saveTheme(selectedTheme);
    });
  }

  function applySavedTheme() {
    try {
      const savedTheme = localStorage.getItem("selectedTheme");
      if (savedTheme) {
        applyTheme(savedTheme);
        themeSelect.value = savedTheme;
      }
    } catch (error) {}
  }

  fetch("../package.json")
    .then((response) => response.json())
    .then((data) => {
      const versionEl = document.getElementById("version");
      if (versionEl) {
        versionEl.textContent = data.version;
      }
    });

  function applyTheme(theme) {
    document.body.removeAttribute("theme");
    document.body.setAttribute("theme", theme);
  }

  function saveTheme(theme) {
    localStorage.setItem("selectedTheme", theme);
  }
});

var navbarHTML = `
            <div class="nav">
            <a href="/./" class="nohov">
                <svg
   viewBox="0 0.587 494.972 413.945"
   version="1.1"
   id="svg5"
   inkscape:version="1.3.2 (091e20e, 2023-11-25)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview5"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="0.45235477"
     inkscape:cx="-63.003646"
     inkscape:cy="23.21187"
     inkscape:window-width="1920"
     inkscape:window-height="949"
     inkscape:window-x="1920"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg5" />

     transform="matrix(0.19536555,-0.08235951,0.08235951,0.19536555,191.47,189.14735)"
     id="g5"
     style="fill:#7711ff;fill-opacity:1">
    <g
       id="g4"
       style="fill:#7711ff;fill-opacity:1">
      <g
         transform="translate(660.61987,-430.64142)"
         id="g2"
         style="fill:#7711ff;fill-opacity:1">
        <path
           class="st0"
           d="m 331.9,56.7 32.6,79.8 c 2.5,6.2 8,10.1 14.6,10.6 l 86,6.4 c 14.2,1 25.7,10.1 30.1,23.6 4.4,13.5 0.4,27.6 -10.5,36.8 l -65.9,55.7 c -5.1,4.3 -7.2,10.7 -5.6,17.2 l 20.5,83.8 c 3.4,13.8 -1.6,27.6 -13.2,35.9 -11.5,8.4 -26.1,8.9 -38.2,1.4 l -82.4,-51 -82.4,51 c -12.1,7.5 -26.7,7 -38.2,-1.4 -11.5,-8.4 -16.5,-22.1 -13.2,-35.9 l 20.5,-83.8 c 1.6,-6.5 -0.5,-12.9 -5.6,-17.2 l -65.9,-55.7 c -10.9,-9.2 -14.9,-23.3 -10.5,-36.8 4.4,-13.5 15.9,-22.6 30.1,-23.6 l 86,-6.4 c 6.7,-0.5 12.1,-4.4 14.6,-10.6 l 32.6,-79.8 c 5.4,-13.2 17.5,-21.3 31.8,-21.3 14.7,-0.1 26.8,8.1 32.2,21.3 z"
           style="clip-rule:evenodd;fill:#7711ff;fill-opacity:1;fill-rule:evenodd"
           id="path2" />
      </g>
      <g
         transform="translate(627.2677,362.79053)"
         id="g3"
         style="fill:#7711ff;fill-opacity:1">
        <path
           class="st0"
           d="m 331.9,56.7 32.6,79.8 c 2.5,6.2 8,10.1 14.6,10.6 l 86,6.4 c 14.2,1 25.7,10.1 30.1,23.6 4.4,13.5 0.4,27.6 -10.5,36.8 l -65.9,55.7 c -5.1,4.3 -7.2,10.7 -5.6,17.2 l 20.5,83.8 c 3.4,13.8 -1.6,27.6 -13.2,35.9 -11.5,8.4 -26.1,8.9 -38.2,1.4 l -82.4,-51 -82.4,51 c -12.1,7.5 -26.7,7 -38.2,-1.4 -11.5,-8.4 -16.5,-22.1 -13.2,-35.9 l 20.5,-83.8 c 1.6,-6.5 -0.5,-12.9 -5.6,-17.2 l -65.9,-55.7 c -10.9,-9.2 -14.9,-23.3 -10.5,-36.8 4.4,-13.5 15.9,-22.6 30.1,-23.6 l 86,-6.4 c 6.7,-0.5 12.1,-4.4 14.6,-10.6 l 32.6,-79.8 c 5.4,-13.2 17.5,-21.3 31.8,-21.3 14.7,-0.1 26.8,8.1 32.2,21.3 z"
           style="clip-rule:evenodd;fill:#7711ff;fill-opacity:1;fill-rule:evenodd"
           id="path3" />
      </g>
      <path
         class="st0"
         d="m 331.9,56.7 32.6,79.8 c 2.5,6.2 8,10.1 14.6,10.6 l 86,6.4 c 14.2,1 25.7,10.1 30.1,23.6 4.4,13.5 0.4,27.6 -10.5,36.8 l -65.9,55.7 c -5.1,4.3 -7.2,10.7 -5.6,17.2 l 20.5,83.8 c 3.4,13.8 -1.6,27.6 -13.2,35.9 -11.5,8.4 -26.1,8.9 -38.2,1.4 l -82.4,-51 -82.4,51 c -12.1,7.5 -26.7,7 -38.2,-1.4 -11.5,-8.4 -16.5,-22.1 -13.2,-35.9 l 20.5,-83.8 c 1.6,-6.5 -0.5,-12.9 -5.6,-17.2 l -65.9,-55.7 c -10.9,-9.2 -14.9,-23.3 -10.5,-36.8 4.4,-13.5 15.9,-22.6 30.1,-23.6 l 86,-6.4 c 6.7,-0.5 12.1,-4.4 14.6,-10.6 l 32.6,-79.8 c 5.4,-13.2 17.5,-21.3 31.8,-21.3 14.7,-0.1 26.8,8.1 32.2,21.3 z"
         style="clip-rule:evenodd;fill:#7711ff;fill-opacity:1;fill-rule:evenodd"
         id="path4" />
    </g>
  </g>
</svg>
</a>
                    <a href="/./projects"><i class="ti ti-device-gamepad-2">&nbsp;</i>Games</a>
                    <a href="/./apps"><i class="ti ti-apps">&nbsp;</i>Apps</a>
                    <a href="/./settings"><i class="ti ti-settings">&nbsp;</i>Settings</a>
                    <a href="/./extra"><i class="ti ti-menu-2">&nbsp;</i>Extras</a>
                    <a href="DWWWWWW"><i class="ti ti-brand-discord">&nbsp;</i>Discord</a>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">

            </div>


        `;

var navbarDiv = document.createElement("div");
navbarDiv.innerHTML = navbarHTML;

var body = document.body;

body.insertBefore(navbarDiv, body.firstChild);


function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function displayRandomText() {
  if (window.location.pathname === "/") {
    const randomIndex = getRandomIndex(texts.length);
    const randomText = texts[randomIndex];
    document.getElementById("randomText").innerHTML = randomText;
  }
}

window.onload = displayRandomText;
document.addEventListener("DOMContentLoaded", function () {
  var originalTitle = document.title;

  var favicon = document.getElementById("favicon").href;

  var switchState = localStorage.getItem("toggleSwitchState");
  if (switchState === "enabled") {
    document.getElementById("clickoffcloak").checked = true;
    addTabEventListener();
  }

  document
    .getElementById("clickoffcloak")
    .addEventListener("change", function () {
      var isChecked = this.checked;
      if (isChecked) {
        localStorage.setItem("toggleSwitchState", "enabled");
        addTabEventListener();
      } else {
        localStorage.setItem("toggleSwitchState", "disabled");
        removeTabEventListener();
      }
    });

  function changeTabNameAndIcon(enabled) {
    var tabTitle = enabled ? "Inbox (162) - Gmail" : originalTitle;
    var tabIcon = enabled ? "media/cloaks/Gmail.ico" : favicon;
    document.title = tabTitle;
    document.getElementById("favicon").href = tabIcon;
  }

  function addTabEventListener() {
    window.addEventListener("blur", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(true);
      }
    });

    window.addEventListener("focus", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(false);
      }
    });
  }

  function removeTabEventListener() {
    window.removeEventListener("blur");
    window.removeEventListener("focus");
  }
});

function updateCustomTitle() {
  const customTitle = document.getElementById("customTitle").value;
  changeTabCloak(
    customTitle,
    document.querySelector("#favicon").getAttribute("href")
  );
}

function updateCustomFavicon() {
  const customFavicon = document.getElementById("customFavicon").value;
  changeTabCloak(document.title, customFavicon);
}

function changeTabCloak(title, favicon) {
  document.title = title;
  document.querySelector("#favicon").setAttribute("href", favicon);
}

window.addEventListener("load", function () {
  const savedTitle = sessionStorage.getItem("savedTitle");
  const savedFavicon = sessionStorage.getItem("savedFavicon");

  if (savedTitle && savedFavicon) {
    changeTabCloak(savedTitle, savedFavicon);
  }
});
