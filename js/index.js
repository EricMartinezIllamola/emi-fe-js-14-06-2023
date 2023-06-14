//$document.ready(inicializar);
$(inicializar);

//document.getElementById("boton").addEventListener("click", botonPulsado);
function inicializar() {
    $("#boton").on("click", botonPulsado);
}

function botonPulsado() {
    alert("Boton Pulsado");
}

function inicializar2() {
    $("#boton").click(function () {
        alert("Boton Pulsado");
    })
}

function inicializar3() {
    $("#boton").click( () => {alert("Boton Pulsado")})
}