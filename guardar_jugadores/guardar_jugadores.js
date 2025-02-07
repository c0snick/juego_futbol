const params = new URLSearchParams(window.location.search);
const id = params.get("jugadores");

function agregar_jugador() {
    for (let i = 0; i < parseInt(id); i++) {
        jugadores = document.getElementById("jugadores");
        let div = document.createElement("div");
        let ingrese = document.createElement("h4");
        ingrese.textContent = "Ingrese un jugador";
        let input = document.createElement("input");
        input.name = "nombres";
        input.placeholder = "ingrese el nombre del jugador";
        div.appendChild(ingrese);
        div.appendChild(input);
        jugadores.appendChild(div);

    }
  }

function volver(){
    let jugadores = [] 
    const nombres = document.querySelectorAll('input[name="nombres"]');
    for (let i = 0; i < nombres.length; i++) {
        jugadores.push(nombres[i].value);
    }
    window.location.href = `file:///C:/Users/nico_/OneDrive/Escritorio/rosco/jugar/index.html?jugadores=${jugadores}`
}
agregar_jugador()