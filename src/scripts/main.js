document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultadoValor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})