


window.login = async function() {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;
    const response = await sendRequest('/login', 'POST', { email, password });
    alert(response.message || response.error);
}

window.signUp = async function() {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;
    const response = await sendRequest('/register', 'POST', { email, password });
    alert(response.message || response.error);
}

async function sendRequest(url, method, data) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
