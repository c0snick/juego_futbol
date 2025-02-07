const N = 26; 
const svg = document.getElementById("svg");
const radius = 315; 

const params = new URLSearchParams(window.location.search);
const id = params.get("jugadores").split(",");


function polarToCartesian(r, angle) {
    return {
        x: r * Math.cos(angle),
        y: r * Math.sin(angle),
    };
}

function generar_rosco(){
    var alineador = 72
    for (let i = 0; i < N; i++) {
    const angle1 = (i * 2 * Math.PI) / N;
    const angle2 = ((i + 1) * 2 * Math.PI) / N;
    const p1 = polarToCartesian(radius, angle1);
    const p2 = polarToCartesian(radius, angle2);


    let prueba = document.getElementById("prueba")
    const borderElement = document.createElement("div");
    borderElement.style.background = "white"
    const l = document.createElement("h1")
    
    if(alineador + i == 91){
        alineador = 46
    }
    l.innerText = String.fromCharCode(alineador + i)
    borderElement.id = String.fromCharCode(alineador + i)
    borderElement.appendChild(l)
    borderElement.classList.add("border-element");
    prueba.appendChild(borderElement);


    const borderPos = polarToCartesian(radius + 20, (angle1 + angle2) / 2);
    borderElement.style.left = `${window.innerWidth / 2 + borderPos.x}px`;
    borderElement.style.top = `${window.innerHeight / 2 + borderPos.y}px`;
}
}


var mapa1 = new Map();
mapa1.set("A",["Primer nombre de Di Stefano","alfredo"])
mapa1.set("B",["(Dos palabras) Último subcampéon de Champions","borussia dortmund"])
mapa1.set("C",["Apellido del ex jugador retirado del Manchester United que le pegó una patada voladora a un hincha", "cantona"])
mapa1.set("D",["País de Christian Eriksen","dinamarca"])
mapa1.set("E",["Selección con más eurocopas","españa"])
mapa1.set("F",["Apellido del actual carrilero derecho holandes del Bayer Leverkusen","frimpong"])
mapa1.set("G",["País de Gareth Bale","gales"])
mapa1.set("H",["Contiene H. Apodo del único jugador que ganó balón de oro, mundial, libertadores y champions","ronaldinho"])
mapa1.set("I",["Selección campeona mundial 1966","inglaterra"])
mapa1.set("J",["Máximo ganador de ligas italianas","juventus"])
mapa1.set("K",["Apellido del delantero inglés que juega actualmente en el Bayern Munich","kane"])
mapa1.set("L",["Equipo campeón de la premier league 2016","leicester"])
mapa1.set("M",["(Dos palabras) Apellidos del máximo goleador histórico de bolivia","moreno martins"])
mapa1.set("N",["Equipo argentino en el que juega actualmente Keylor Navas","newells"])
mapa1.set("O",["Apellido del actual arquero del Manchester United","onana"])
mapa1.set("P",["Equipo con más ligas brasileñas","palmeiras"])
mapa1.set("Q",["Apellido del ex jugador portugues recordado por sus tiros de 3 dedos","quaresma"])
mapa1.set("R",["Apellido del primer ganador del premio puskas","ronaldo"])
mapa1.set("S",["Apellido del máximo goleador de la premier actual","salah"])
mapa1.set("T",["Apodo en español de Gerd Muller","torpedo"])
mapa1.set("U",["Primer nombre del arquero titular de la selección española actualmente","unai"])
mapa1.set("V",["Apellido del ex arquero español del barcelona de nombre Victor","valdes"])
mapa1.set("W",["Apellido de los hermanos del Athletic de Bilbao que juegan para distintas selecciones","williams"])
mapa1.set("X",["Apellido del mediocampista suizo ex Arsenal que juega actualmente en el Leverkusen","xhaka"])
mapa1.set("Y",["Contiene Y. Apellido del ex extremo frances del Bayern Munich que quedó tercero en el balon de oro 2013","ribery"])
mapa1.set("Z",["Primer nombre de Zidane","zinedine"])

var mapa2 = new Map();
mapa2.set("A",["Último campeón de la Europa League","atalanta"])
mapa2.set("B",["Máximo ganador de ligas portuguesas","benfica"])
mapa2.set("C",["(Dos palabras) Selección revelación que salió primera en el grupo de la muerte del mundial 2014","costa rica"])
mapa2.set("D",["(Dos palabras) Contiene D, Apellido del central holandés que actualmente juega en el Liverpool","van dijk"])
mapa2.set("E",["Primer nombre de Pele","edson"])
mapa2.set("F",["Jugador portugués ganador del balón de oro que jugó en el Madrid y el Barcelona","figo"])
mapa2.set("G",["Apellido del máximo goleador histórico de la selección peruana","guerrero"])
mapa2.set("H",["Apellido del arquero colombiano que realizó el escorpión","higuita"])
mapa2.set("I",["Equipo con más libertadores","independiente"])
mapa2.set("J",["Primer nombre del ganador del puskas 2014","james"])
mapa2.set("K",["Apodo del ganador del balón de oro 2007","kaka"])
mapa2.set("L",["Primer nombre de Messi","lionel"])
mapa2.set("M",["Ganador del balón de oro 2018","modric"])
mapa2.set("N",["Apellido del arquero actual del Bayern Munich","neuer"])
mapa2.set("O",["Apellido del ganador del balón de oro 2001 que jugó en el Liverpool y el Manchester United","owen"])
mapa2.set("P",["Apodo del jugador argentino Alejandro Gomez","papu"])
mapa2.set("Q",["Apellido del autor del segundo gol de River en la final de Madrid contra Boca","quintero"])
mapa2.set("R",["Nombre del jugador brasileño que metió dos goles en la final del mundo 2002","ronaldo"])
mapa2.set("S",["Apellido del máximo goleador histórico de la Premier League","shearer"])
mapa2.set("T",["Apellido del jugador francés que juega actualmente en el Inter y es hijo de un ex jugador histórico","thuram"])
mapa2.set("U",["Contiene U. Apellido del jugador turco del Real Madrid de 19 años","guler"])
mapa2.set("V",["Contiene V. Único equipo boliviano subcampeón de copa sudamericana","bolivar"])
mapa2.set("W",["Contiene W. Delantero polaco que juega actualmente en el Barcelona","lewandowski"])
mapa2.set("X",["Apodo de Boca Juniors","xeneize"])
mapa2.set("Y",["Apellido del último ganador del golden boy","yamal"])
mapa2.set("Z",["Primer nombre de Ibrahimovic","zlatan"])

var mapa3 = new Map()
mapa3.set("A",["(Dos palabras) Equipo en el que juega actualmente Cristiano Ronaldo","al nassr"])
mapa3.set("B",["Último campeón de libertadores","botafogo"])
mapa3.set("C",["Apellido del mediocampista brasileño ex real madrid que ganó 5 champions","casemiro"])
mapa3.set("D",["Apellido del delantero escoces histórico del Liverpool","dalglish"])
mapa3.set("E",["Selección sudamericana que jugó el partido inaugural de Qatar 2022","ecuador"])
mapa3.set("F",["Apellido del jugador del Manchester City elegido mejor jugador de la Premier 2024","foden"])
mapa3.set("G",["Apellido del carrilero izquierdo español del Bayer Leverkusen","grimaldo"])
mapa3.set("H",["Apellido del máximo goleador del Arsenal","henry"])
mapa3.set("I",["Apellido del delantero sueco retirado que tiene más de 500 goles","ibrahimovic"])
mapa3.set("J",["(Tres palabras) Contiene J. Campeón argentino de la copa sudamericana 2020 que además ganó la recopa contra el Palmeiras","defensa y justicia"])
mapa3.set("K",["Apodo del jugador argentino Sergio Aguero","kun"])
mapa3.set("L",["Apellido del máximo goleador de la historia del chelsea","lampard"])
mapa3.set("M",["Apellido del jugador que metió el último penal para Argentina en Qatar 2022","montiel"])
mapa3.set("N",["Apellido del delantero uruguayo del Livepool","nuñez"])
mapa3.set("O",["Apellido del central argentino del Benfica","otamendi"])
mapa3.set("P",["Apellido del mediocampista italiano que jugó en el inter, el milán y la juventus","pirlo"])
mapa3.set("Q",["Siglas del equipo inglés actualmente en segunda division al que derrota el manchester city para ganar su primer premier league","qpr"])
mapa3.set("R",["(Dos palabras) Máximo ganados de ligas argentinas","river plate"])
mapa3.set("S",["Equipo en el que juega actualmente Neymar","santos"])
mapa3.set("T",["Apellido de los hermano Yaya y Kolo","toure"])
mapa3.set("U",["Selección del ganador del balón de oro Shevchenko","ucrania"])
mapa3.set("V",["Equipo español que perdió dos finales de champions seguidas (2000 y 2001)","valencia"])
mapa3.set("W",["Apellido del mediocampista ofensivo de 21 años del Leverkusen","wirtz"])
mapa3.set("X",["Diminutivo del primer nombre del técnico del Leverkusen","xabi"])
mapa3.set("Y",["Apellido del único arquero que ganó un balón de oro","yashin"])
mapa3.set("Z",["Contiene Z. Nombre de la pelota del mundial Brasil 2014","brazuca"])

var mapa4 = new Map()
mapa4.set("A",["Apodo de Carlos Tevez","apache"])
mapa4.set("B",["Apellido del ex jugador del Manchester City que mostró una remera que decía 'why always me?'","balotelli"])
mapa4.set("C",["Último campeón sudamericano del Mundial de Clubes","corinthians"])
mapa4.set("D",["Primer nombre de Maradona","diego"])
mapa4.set("E",["Apellido del lateral ecuatoriano que juega actualmente en el Brighton","estupiñan"])
mapa4.set("F",["Apellido del técnico con más premier league ganadas","ferguson"])
mapa4.set("G",["Apellido del delantero mexicano que juega actualmente en el milan","gimenez"])
mapa4.set("H",["Contiene H. País sede del mundial 1962","chile"])
mapa4.set("I",["Selección 4 veces campeona del mundo que no clasificó al mundial de Qatar","italia"])
mapa4.set("J",["Apellido del delantero portugues que juega actualmente en el Liverpool","jota"])
mapa4.set("K",["Contiene K. Apellido del delantero hungaro retirado del Real Madrid el cual tiene un premio con su apellido","puskas"])
mapa4.set("L",["Apellido del delantero nigeriano que metió un hattrick en la última final de Europa League","lookman"])
mapa4.set("M",["Apellido del jugador italiano que recibió el cabezazo de Zidane","materazzi"])
mapa4.set("N",["Equipo italiano en el que jugó Maradona","napoli"])
mapa4.set("O",["Apellido del arquero mexicano que disputó 5 mundiales","ochoa"])
mapa4.set("P",["Apodo del jugador Uruguayo Luis Suarez","pistolero"])
mapa4.set("Q",["Contiene Q. Apellido del mediocampista ex Barcelona que juega actualmente en el Inter Miami","busquets"])
mapa4.set("R",["Contiene R. Primer nombre del mediocampista chileno de apellido Vidal","arturo"])
mapa4.set("S",["Apellido del DT actual del Liverpool","slot"])
mapa4.set("T",["Apodo de Radamel Falcao","tigre"])
mapa4.set("U",["Ganador del mundial 1950","uruguay"])
mapa4.set("V",["Apellido del defensor central serbio histórico del Manchester United","vidic"])
mapa4.set("W",["Apellido del técnico del Arsenal de los invencibles","wenger"])
mapa4.set("X",["Contiene X. Máximo ganador de copas oro","mexico"])
mapa4.set("Y",["Contiene Y. Ex jugador holandés histórico, leyenda del Barcelona y Ajax y ganador de 3 balones de oro","cruyff"])
mapa4.set("Z",["Contiene Z. Nombre del estadio que mexicano que en el mundial 2026 será el primero en hospedar 3 mundiales","azteca"])

var mapa5 = new Map()
mapa5.set("A",["Apellido del jugador español Thiago","alcantara"])
mapa5.set("B",["Apellido del ganador del balón de oro 2022","benzema"])
mapa5.set("C",["Selección sudamericana que eliminó a Uruguay del mundial Brasil 2014","colombia"])
mapa5.set("D",["(Dos palabras) Apellido del jugador argentino que metió el gol en la final de la copa américa 2021","di maria"])
mapa5.set("E",["Primer nombre de Hazard","eden"])
mapa5.set("F",["Equipo que le ganó la final de la libertadores a Boca Juniors en 2023","fluminense"])
mapa5.set("G",["Contiene G.País que tiene más campeones de copa libertadores y sudamericana","argentina"])
mapa5.set("H",["Selección no campeona del mundo que perdió más finales","holanda"])
mapa5.set("I",["Contiene I. Apellido del ex delantero argentino recordado por sus fallos en finales","higuain"])
mapa5.set("J",["Nombre de la pelota del mundial 2010","jabulani"])
mapa5.set("K",["Contiene K. Apellido del delantero croata histórico de la década del 90 que jugó en el Real Madrid y en el Sevilla","suker"])
mapa5.set("L",["Primer nombre del delantero argentino del inter de apellido Martinez","lautaro"])
mapa5.set("M",["(Dos palabras) Contiene M. Nombre de la cantera del Barcelona","la masia"])
mapa5.set("N",["(Dos palabras) Contiene N. Máximo ganador de copas libertadores colombiano","atletico nacional"])
mapa5.set("O",["(Tres palabras) Único equipo francés campeón de champions","olympique de marsella"])
mapa5.set("P",["Apellido del máximo goleador del chelsea está temporada","palmer"])
mapa5.set("Q",["Apellido del lateral derecho que juega en el Real Madrid de nombre Lucas","vazquez"])
mapa5.set("R",["(Dos palabras) Equipo con más ligas españolas","real madrid"])
mapa5.set("S",["Sede del mundial 2010","sudafrica"])
mapa5.set("T",["Único equipo del big six que no ganó una premier league","tottenham"])
mapa5.set("U",["Apellido del mediocampista uruguayo que juega actualmente en el Manchester United","ugarte"])
mapa5.set("V",["Contiene V. Lateral peruano que actualmente juega en Boca Juniors","advincula"])
mapa5.set("W",["Apodo del club inglés Wolverhampton","wolves"])
mapa5.set("X",["Nombre del jugador holandés canterano del barcelona que pasó por el psg y actualmente juega en el leipzig","xavi"])
mapa5.set("Y",["Contiene Y. Apellido del jugador checo retirado que jugó desde el 2006 al 2016 en el Arsenal","rosicky"])
mapa5.set("Z",["Apellido del jugador chileno apodado bam bam","zamorano"])

var mapa6 = new Map()
mapa6.set("A",["Selección que le metió 7 goles a Brasil en el mundial 2014","alemania"])
mapa6.set("B",["Selección que actualmente está en puesto de repechaje de las eliminatorias sudamericanas","bolivia"])
mapa6.set("C",["Apellido del delantero uruguayo que juega actualmente en Boca Juniors","cavani"])
mapa6.set("D",["Apellido del delantero marfileño retirado leyenda del Chelsea","drogba"])
mapa6.set("E",["Nombre por el que es conocido el arquero del Manchester City","ederson"])
mapa6.set("F",["Equipo que le ganó la final de la libertadores a River en 2019","flamengo"])
mapa6.set("G",["Apellido del fichaje más caro de la historia del Manchester City","grealish"])
mapa6.set("H",["Contiene H. Apellido del mejor arquero de la historia de Paraguay","chilavert"])
mapa6.set("I",["Único club italiano con 3 Champions","inter"])
mapa6.set("J",["Primer nombre del portugues el cual es el fichaje más caro de la historia del Atlético de Madrid","joao"])
mapa6.set("K",["Contiene K. Apellido del delantero croata retirado que metió un gol en la final del mundial 2018","mandzukic"])
mapa6.set("L",["Primer nombre de Modric","luka"])
mapa6.set("M",["Contiene M. Equipo con más ligas mx","america"])
mapa6.set("N",["Apellido del arquero histórico de Costa Rica","navas"])
mapa6.set("O",["Apellido del jugador noruego del Arsenal","odegaard"])
mapa6.set("P",["Tercer máximo ganador de copas libertadores","peñarol"])
mapa6.set("Q",["(Tres palabras) Contiene Q. Único campeón de libertadores ecuatoriano","liga de quito"])
mapa6.set("R",["Sede del mundial 2018","rusia"])
mapa6.set("S",["Apellido del máximo ganador de botas de oro","messi"])
mapa6.set("T",["(Dos palabras) Apellido del arquero aleman del Barcelona que está actualmente lesionado","ter stegen"])
mapa6.set("U",["Contiene U. Apellido del central uruguayo que juega actualmente en el Barcelona","araujo"])
mapa6.set("V",["Selección sudamericana que nunca clasificó al mundial","venezuela"])
mapa6.set("W",["Primer nombre de Rooney","wayne"])
mapa6.set("X",["Contiene X. Nombre del equipo gales el cual Ryan Reynolds es uno de sus dueños","wrexham"])
mapa6.set("Y",["Contiene Y. Apellido del defensor histórico español que metió el gol en la semifinal del mundial 2010","puyol"])
mapa6.set("Z",["(Dos palabras) Contiene Z. Apellido del máximo goleador de la selección paraguaya","santa cruz"])

var mapa7 = new Map()
mapa7.set("A",["Equipo holandes con más champions","ajax"])
mapa7.set("B",["Nombre de la liga alemana","bundesliga"])
mapa7.set("C",["Apellido del último defensor central en ganar un balón de oro","cannavaro"])
mapa7.set("D",["Apodo de Emiliano Martinez","dibu"])
mapa7.set("E",["Pais de McTominay y Robertson","escocia"])
mapa7.set("F",["Primer nombre de Valverde","federico"])
mapa7.set("G",["Apodo de la leyenda brasileña que tenía una pierna más corta que la otra","garrincha"])
mapa7.set("H",["Apellido del jugador al que apodaban Chicharito","hernandez"])
mapa7.set("I",["Primer nombre de Casillas","iker"])
mapa7.set("J",["Apodo por el que es conocido el jugador italiano que quedó tercero en el balón de oro 2021","jorginho"])
mapa7.set("K",["Apellido del máximo goleador de la historia de los mundiales","klose"])
mapa7.set("L",["(Dos palabras) Contiene L. Único campeón de libertadores chileno","colo colo"])
mapa7.set("M",["Apodo del jugador Uruguayo Edinson Cavani","matador"])
mapa7.set("N",["Nombre del equipo uruguayo que ganó 3 libertadores","nacional"])
mapa7.set("O",["Nombre del único equipo paraguayo que ganó copa libertadores","olimpia"])
mapa7.set("P",["Único equipo mexicano que ganó la copa sudamericana","pachuca"])
mapa7.set("Q",["Contiene Q. Apellido del actual presidente de Boca Juniors","riquelme"])
mapa7.set("R",["Último campeón de la copa sudamericana","racing"])
mapa7.set("S",["Nombre del estadio que comparten el inter y el milan cuando juega el milan de local","san siro"])
mapa7.set("T",["Primer nombre del jugador aleman Kroos","toni"])
mapa7.set("U",["(Dos palabras) Contiene U. País de Christian Pulisic","Estados Unidos"])
mapa7.set("V",["Ganador del último The Best","vinicius"])
mapa7.set("W",["(Dos palabras) Nombre de la canción del mundial 2010 interpretada por Shakira","waka waka"])
mapa7.set("X",["Primer nombre del jugador suizo Shaqiri","xherdan"])
mapa7.set("Y",["Contiene Y. Nombre por el que es conocido el extremo brasileño del manchester united actualmente cedido al betis","antony"])
mapa7.set("Z",["Apodo del jugador brasileño que era llamado 'el Pele blanco'","zico"])

var mapa8 = new Map()
mapa8.set("A",["Primer nombre del histórico ex lateral ecuatoriano del Manchester United","antonio"])
mapa8.set("B",["Segundo equipo español con más champions","barcelona"])
mapa8.set("C",["Apodo del jugador Uruguayo Diego Forlán","cachavacha"])
mapa8.set("D",["Apellido del jugador colombiano del Liverpool","diaz"])
mapa8.set("E",["Rival del derbi de ciudad del FC Barcelona","espanyol"])
mapa8.set("F",["Apellido del ex mediocampista español actualmente técnico del Como de Italia","fabregas"])
mapa8.set("G",["Apellido del último ganador del premio puskas","garnacho"])
mapa8.set("H",["Nombre del histórico jugador retirado mexicano de apellido Sanchéz, el cual jugó en el Real Madrid","hugo"])
mapa8.set("I",["Apellido del jugador español que metió el gol en la final del mundial 2010","iniesta"])
mapa8.set("J",["Primer nombre del delantero argentino del Atlético de Madrid apodado araña","julian"])
mapa8.set("K",["Apellido del arquero de la selección alemana en el mundial 2002","kahn"])
mapa8.set("L",["Apellido del jugador belga que actualmente es el segundo que más dinero movió en fichajes","lukaku"])
mapa8.set("M",["Apodo de River Plate","millonario"])
mapa8.set("N",["Apellido del jugador histórico checo que fue leyenda de la juventus y ganó el balón de oro","nedved"])
mapa8.set("O",["Apellido del arquero titular del Atletico de Madrid","oblak"])
mapa8.set("P",["Siglas del máximo ganador de ligas francesas","psg"])
mapa8.set("Q",["Contiene Q. Apellido del histórico central mexicano que jugó en el Barcelona","marquez"])
mapa8.set("R",["Único equipo en el que jugó Totti","roma"])
mapa8.set("S",["Primer nombre de la leyenda del Liverpool Gerrard","steven"])
mapa8.set("T",["Primer nombre de Alexander Arnold","trent"])
mapa8.set("U",["(Tres palabras) Único equipo chileno que ganó la copa sudamericana","u de chile"])
mapa8.set("V",["(Dos palabras) Contiene V. Nombre del equipo de la liga española del cual Ronaldo Nazario es propietario","real valladolid"])
mapa8.set("W",["Apellido del único africano ganador del balon de oro","weah"])
mapa8.set("X",["Contiene X. Primer nombre del máximo goleador de la Selección de Chile","alexis"])
mapa8.set("Y",["Contiene Y. Apellido del central senegales ex Napoli que juega actualmente en el Al Hilal","koulibaly"])
mapa8.set("Z",["Contiene Z. Apellido del jugador francés, máximo goleador del Atletico de Madrid","griezmann"])


var mapas = [mapa1,mapa2,mapa3,mapa4,mapa5,mapa6,mapa7,mapa8]

let jugadores = []
let letra
let respuesta_actual
let jugador
let parrafo = document.getElementById("pregunta")
let tiempo_maximo = 3

function mostrarPopup() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}

function seleccionarOpcion(opcion) {
    if (opcion == "No"){
        jugador.erradas.push(letra)
         jugadores.push(jugadores.shift())
         verificar_juego()
     } else {
         jugador.acertadas.push(letra)
         verificar_juego()
     }
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
}

function responder(){
    jugador.pausar()
    if (respuesta_actual == document.getElementById("respuesta_actual").value){
        jugador.acertadas.push(letra)
        verificar_juego()
        
    } else {
        document.getElementById("respuesta-incorrecta").innerText = "La respuesta era " + respuesta_actual + " ¿" +  document.getElementById("respuesta_actual").value+ " es una respuesta válida?"
        mostrarPopup()
    }
}

function colorear_rosco(){
    jugador.acertadas.forEach(element => {
        document.getElementById(element).style.background = "green"
    });
    jugador.erradas.forEach(element => {
        document.getElementById(element).style.background = "red"
    });
    jugador.saltadas.forEach(element => {
        document.getElementById(element).style.background = "yellow"
    });
    jugador.orden.forEach(element => {
        document.getElementById(element).style.background = "white"
    });
    document.getElementById(letra).style.background = "cyan"
}

function verificar_juego(){
    if (jugadores.length === 0){
        alert("listo")
    }
    jugador = jugadores[0]
    if (jugador.orden.length === 0){
        if (jugador.saltadas.length !== 0){
            jugador.orden = jugador.saltadas
            jugador.saltadas = []
            recorrer_roscos()
        } else {
            jugadores.shift()
            verificar_juego()
        }
    } else {
        recorrer_roscos()
    }
    
}

function recorrer_roscos(){
    jugador.iniciar()
    letra = jugador.orden.shift()
    colorear_rosco()
    if (jugadores.length > 1){
        document.getElementById("sigue").innerText = "Sigue " + jugadores[1].nombre
    } else {
        document.getElementById("sigue").innerText = "Sigue " + jugadores[0].nombre
    }
    parrafo.innerText = jugador.preguntas.get(letra)[0]
    respuesta_actual = jugador.preguntas.get(letra)[1]
    let div = document.createElement("div")
    div.id = "respuesta"
    let respuesta = document.createElement("input")
    respuesta.placeholder = "Respuesta..."
    respuesta.id = "respuesta_actual"
    respuesta.onkeydown = function(event) {
        enviarConEnter(event);
    };
    let boton = document.createElement("button")
    boton.className += "botones"
    boton.innerText = "Responder"
    boton.id = "boton"
    boton.onclick = responder
    div.appendChild(respuesta)
    div.appendChild(boton)
    parrafo.appendChild(div)
    respuesta.focus()
}

function enviarConEnter(event) {
    if (event.key === "Enter") {
      responder()
    }
  }


function derrota_automatica(){
    jugador.orden = []
    jugador.saltadas = []
    verificar_juego()
}  

class Jugador {
    constructor(nombre,preguntas) {
        this.nombre = nombre;
      this.orden = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      this.preguntas = preguntas;
      this.acertadas = []
      this.erradas = []
      this.saltadas = []
      this.tiempo = 0;
      this.interval = null;
    }
        iniciar() {
            if (this.interval) return; 
    
            this.interval = setInterval(() => {
                this.tiempo++;
                document.getElementById("nombre_jugador").innerText = jugador.nombre + " " + Math.trunc(this.tiempo/60) + ":"  + this.tiempo%60
                if(Math.trunc(this.tiempo/60) == tiempo_maximo){
                    this.pausar()
                    derrota_automatica()
                }
            }, 1000);
        }
    
        pausar() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
  }
  
function pasar(){
    jugador.pausar()
    jugador.saltadas.push(letra)
    jugadores.push(jugadores.shift())
    verificar_juego()
}

function crear_jugadores(){
    for (let jugador in id){
        let nuevo_jugador = new Jugador(id[jugador],mapas[jugador])
        jugadores.push(nuevo_jugador)
    }
    console.log(jugadores)
}

crear_jugadores()
generar_rosco()

verificar_juego()