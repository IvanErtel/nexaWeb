document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        var isValid = true;
        var nameField = document.getElementById('name');
        var emailField = document.getElementById('email');
        var messageField = document.getElementById('message');
        
        if (!nameField.value.trim()) {
            alert('Por favor, introduce tu nombre.');
            isValid = false;
        }

        // Validación del formato de correo electrónico con expresión regular
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            alert('Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        if (messageField.value.trim().length <= 10) {
            alert('Tu mensaje debe tener más de 10 caracteres.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
