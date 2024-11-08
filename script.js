const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const allContent = document.querySelector('.all');
const adminView = document.querySelector('.admin-view');
const userView = document.querySelector('.user-view');

const usuarios = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "usuario@example.com", password: "user123", role: "user" }
];

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar credenciales y obtener rol
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        errorMessage.textContent = ""; 
        allContent.style.display = 'block'; 
        document.querySelector('.login-container').style.display = 'none'; 

        // Mostrar vista según rol
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

document.getElementById('save-changes')?.addEventListener('click', function() {
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
  
    if (productName && productPrice) {
        document.getElementById('product-name-display').textContent = productName;
        document.getElementById('product-price-display').textContent = `$${productPrice}`;
        alert('Cambios guardados con éxito');
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
