document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('bebidas.html')) {
        const añoActual = new Date().getFullYear();
        let añoNacimiento = prompt("Por favor, introduce tu año de nacimiento:");

        const edadAlerta = document.getElementById('edad-alerta');
        const bebidasNoAlcoholicasSection = document.getElementById('bebidas-no-alcoholicas');
        const bebidasAlcoholicasSection = document.getElementById('bebidas-alcoholicas');

        // Asegurar que la sección de no alcohólicas siempre se muestre
        bebidasNoAlcoholicasSection.style.display = 'grid'; // Manteniendo el display original

        if (añoNacimiento) {
            añoNacimiento = parseInt(añoNacimiento);
            if (!isNaN(añoNacimiento)) {
                const edad = añoActual - añoNacimiento;

                if (edad < 18) {
                    bebidasAlcoholicasSection.style.display = 'none';
                    edadAlerta.style.display = 'block';
                } else {
                    bebidasAlcoholicasSection.style.display = 'grid'; // Mostrar si es mayor de edad
                    edadAlerta.style.display = 'none';
                    alert("Eres mayor de edad. Mostrando todas las bebidas, incluido alcohólicas.")
                }
            } else {
                alert("Año de nacimiento inválido. Mostrando solo bebidas no alcohólicas.");
                bebidasAlcoholicasSection.style.display = 'none';
            }
        } else {
            alert("No ingresaste tu año de nacimiento. Mostrando solo bebidas no alcohólicas.");
            bebidasAlcoholicasSection.style.display = 'none';
        }
    }
});