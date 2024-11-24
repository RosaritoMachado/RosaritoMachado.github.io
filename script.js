document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    
    alert(`Gracias, ${nombre}. Hemos recibido tu mensaje. Nos pondremos en contacto contigo a través de ${email}.`);
});
