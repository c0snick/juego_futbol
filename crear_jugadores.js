function actualizar(){
    let cantidad = document.getElementById("miSelect")
    window.location.href = `file:///C:/Users/nico_/OneDrive/Escritorio/rosco/guardar_jugadores/index.html?jugadores=${cantidad.value}`;
}