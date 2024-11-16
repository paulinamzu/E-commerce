const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const allContent = document.querySelector('.all');
const adminView = document.querySelector('.admin-view');
const userView = document.querySelector('.user-view');

const usuarios = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "usuario@example.com", password: "user123", role: "user" }
];

const forgotPasswordLink = document.getElementById('forgot-password');
const changePasswordContainer = document.querySelector('.change-password-container');
const changePasswordForm = document.getElementById('change-password-form');
const changePasswordError = document.getElementById('change-password-error');

forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    changePasswordContainer.style.display = 'block';
});

changePasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;


    const usuario = usuarios.find(u => u.email === "usuario@example.com"); 

    if (usuario) {
        if (usuario.password === currentPassword) {
            if (newPassword === confirmPassword) {
                usuario.password = newPassword; 
                changePasswordError.textContent = "Contraseña cambiada con éxito!";
                changePasswordError.style.color = "green";
            } else {
                changePasswordError.textContent = "Las contraseñas no coinciden.";
            }
        } else {
            changePasswordError.textContent = "Contraseña actual incorrecta.";
        }
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        errorMessage.textContent = ""; 
        allContent.style.display = 'block'; 
        document.querySelector('.login-container').style.display = 'none'; 

        if (usuario.role === 'admin') {
            adminView.style.display = 'block';
            userView.style.display = 'none';
        } else if (usuario.role === 'user') {
            userView.style.display = 'block';
            adminView.style.display = 'none';
        }
    } else {
        errorMessage.textContent = "Correo o contraseña incorrectos.";
    }
});
