document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        
        // SET PATTERNS.
        const patterns = {
            nombre: /^[A-Z][a-zA-Z]{2,19}(\s[A-Z][a-zA-Z]{2,19}){0,4}$/, 
            apellidos: /^[A-Z][a-zA-Z]{2,19}(\s[A-Z][a-zA-Z]{2,19})?$/, 
            LocalPhone: /^871[1|7|5][0-9]{6}$/, 
            RFC: /^[A-Z]{4}([0-2]\d|3[01])([0]\d|[1][0-2])\d{2}([A-Z0-9]){3}$/, 
            CURP:/^[A-Z]{4}([0-2]\d|3[01])([0]\d|[1][0-2])\d{2}[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}\d{2}$/,
            CP: /^[1-9]\d{4}$/, 
            BDay: /^(0?[1-9]|[1-2]\d|3[0-1])[-\/](0?[1-9]|1[0-2])[-\/](\d{2}|\d{4})$/, 
            email: /^[a-z][a-z0-9]*(\.[a-z0-9]+)*@[a-z][a-z0-9]{2,9}(\.[a-z]{2,3})(\.[a-z]{2})?$/, 
            website:/^https?:\/\/(www\.)?([a-z][a-z0-9]{2,9}\.)?([a-z][a-z0-9]{2,9})\.[a-z]{2,3}(\.[a-z]{2})?\/?$/,
            numCard:/^[1-9][0-9][0-9][0-9]([ ]?|\/|-)([0-9][0-9][0-9][0-9]([ ]?|\/|-)){2}[0-9][0-9][0-9][0-9]$/,
            expCard: /^([0][1-9]|[1][0-2])\/([2][0-9]{3}|[0-9]{2})$/
        };
        
        //COLORES.
        Object.keys(patterns).forEach(field => {
            const input = document.getElementById(field);
            if (input && !patterns[field].test(input.value.trim())) {
                isValid = false;
                input.style.border = "2px solid red";
            } else if (input) {
                input.style.border = "2px solid green";
            }
        });

        // MOSTRAR DATOS DE PANTALLA SI REGEX ES VALDIO.
        if (isValid) {
            let output = "<h3>Datos ingresados:</h3>";
            Object.keys(patterns).forEach(field => 
            {
                const input = document.getElementById(field);
                output += `<p><strong>${field}:</strong> ${input.value}</p>`;
            });

            resultadoDiv.innerHTML = output;
            
        } else {
            alert("Revisa los campos en rojo");
        }
    });
});
