function actualizar(){
    let cantidad = document.getElementById("miSelect")
    window.location.href = `https://c0snick.github.io/juego_futbol/guardar_jugadores?jugadores=${cantidad.value}`;
}