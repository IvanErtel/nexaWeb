document.addEventListener("DOMContentLoaded", () => {
    // Mostrar el banner si no se ha dado el consentimiento
    if (!getCookie("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
});

// Función para aceptar todas las cookies
function acceptAllCookies() {
    setCookie("cookiesAccepted", "true", 365);
    document.getElementById("cookie-banner").style.display = "none";
    console.log("Todas las cookies aceptadas.");
}

// Función para configurar las cookies (puedes expandirla según los tipos de cookies)
function showCookieSettings() {
    alert("Aquí podrías mostrar un modal con configuraciones de cookies.");
}

// Función para crear cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Función para leer cookies
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, val] = cookie.split("=");
        if (key === name) return val;
    }
    return null;
}

// Mostrar el modal
function showCookieSettings() {
    document.getElementById('cookieModal').style.display = 'flex';
}

// Cerrar el modal
function closeModal() {
    document.getElementById('cookieModal').style.display = 'none';
}

// Guardar preferencias
function savePreferences() {
    const form = document.getElementById('cookieForm');
    const preferences = {
        analytics: form.analytics.checked,
        ads: form.ads.checked,
    };

    // Guardar en localStorage (puedes usar cookies si prefieres)
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

    // Cerrar el modal
    closeModal();

    // Mostrar un mensaje de confirmación
    alert('Tus preferencias de cookies han sido guardadas.');
}

// Cargar preferencias al cargar la página (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));

    if (savedPreferences) {
        const form = document.getElementById('cookieForm');
        form.analytics.checked = savedPreferences.analytics;
        form.ads.checked = savedPreferences.ads;
    }
});
