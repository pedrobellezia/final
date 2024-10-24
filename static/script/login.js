function validateLogin(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const errorMessage = document.querySelector('.error-message');

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    errorMessage.textContent = '';

    if (username !== storedUsername || password !== storedPassword) {
        passwordInput.value = '';
        errorMessage.textContent = 'Usuário ou senha incorretos.';
        return;
    }

    
    window.location.href = 'index.html'; 
    alert('Login bem-sucedido!');
}
