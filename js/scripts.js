import { loginContent } from './login_scripts.js';

function showContent(id, btn) {
    var content = document.getElementById('lt-globalization');

    if (id === 'lt-Login') {
        content.innerHTML = loginContent();
    } else if (id === 'lt-Account-Overview') {
        content.innerHTML = `<div class="content"><h2>Account Overview</h2><p>This is the account overview page.</p></div>`;
    } else if (id === 'lt-Raw-Feed') {
        content.innerHTML = `<div class="content"><h2>Raw Feed</h2><p>This is the raw feed page.</p></div>`;
    } else if (id === 'lt-Settings') {
        content.innerHTML = `<div class="content"><h2>Settings</h2><p>This is the settings page.</p></div>`;
    }

    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    if (btn) {
        btn.classList.add('active');
    }
}

export { showContent };

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (event) => {
            showContent(event.target.getAttribute('data-id'), event.target);
        });
    });
});