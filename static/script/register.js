function checkPasswordStrength(password) {
            let checkNumber = 0;
            if (/[A-Z]/.test(password)) checkNumber++; // Verifica se tem maiúscula
            if (/\d/.test(password)) checkNumber++; // Verifica se tem número
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) checkNumber++; // Verifica se tem caractere especial

            // Atualiza a cor dos indicadores de força da senha
            document.getElementById('strong1').style.backgroundColor = checkNumber >= 1 ? 'green' : 'gray';
            document.getElementById('strong2').style.backgroundColor = checkNumber >= 2 ? 'green' : 'gray';
            document.getElementById('strong3').style.backgroundColor = checkNumber === 3 ? 'green' : 'gray';

            return checkNumber;
        }

        function saveToLocalStorage(event) {
            event.preventDefault();
            const username = document.querySelector('input[name="username"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

            const storedUsername = localStorage.getItem('username');
            const storedEmail = localStorage.getItem('email');

            if (username === storedUsername) {
                alert('O nome de usuário já está em uso. Por favor, escolha outro.');
                return;
            }

            if (email === storedEmail) {
                alert('Este e-mail já está registrado. Por favor, use outro e-mail.');
                return;
            }

            // Verifica se as senhas coincidem
            if (password !== confirmPassword) {
                alert('As senhas não coincidem. Tente novamente.');
                return;
            }

            // Chama a função de verificação de força da senha
            const passwordStrength = checkPasswordStrength(password);

            if (passwordStrength < 3) {
                alert('A senha não é forte o suficiente. Certifique-se de que contém uma letra maiúscula, um número e um caractere especial.');
                return;
            }

            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Dados salvos no Local Storage!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        }
