//-----------------------------------Cambio de color------------------------------
// Seleccionamos el botón por su ID 
const buttonColor = document.getElementById("buttonColor"); 

// Creamos un arreglo con colores para el fondo 
const colors = ["#EF2BF3", "#F52992", "#F42A2D", "#F58B29", "#F6EF28"]; 

// Creamos un arreglo con colores para las letras 
const colorsFont=["#29F529", "#29F58F", "#29F5F1", "#298FF5", "#2626F7"]

let indexColor=0;

const h2Elements = document.querySelectorAll("h2");

// Agregamos un evento "click" al botón 
buttonColor.addEventListener("click", function() { 

    // Cambiamos el color de fondo del body 
    document.body.style.backgroundColor = colors[indexColor]; 

    // Cambiamos el color de las palabras 
    h2Elements.forEach(h2 => {
        h2.style.color = colorsFont[indexColor];
    });

    // Avanzamos al siguiente color 
    indexColor++; 

    // Si llegamos al final del arreglo, regresamos al inicio 
    if (indexColor >= colors.length) { 
    indexColor = 0; 
    } 
}); 

//-------------------------------Cambio de informacion de alumno--------------//
// Seleccionamos el botón por su ID 
const buttonChangeAlumno = document.getElementById("buttonChangeAlumno"); 

//Documento de informacion de alumnos
const informacionTxt=["alumno1.txt","alumno2.txt","alumno3.txt"]

//Imagenes de alumnos 
const nameImg = ["salvador.jpg", "jorge.jpg","fernanda.png"]; 

//Nombre de los alumnos
const nameAL = ["Salvador Juárez Morales", "Perez Manriquez Jorge Luis","Arreola García Vanessa Fernanda"]; 

//Numero de control de alumnos
const numControlAL= ["22030828","22030038","21031024"]

//Semestre de alumnos
const semestreAL=["7","7","9"]

let index=0

// Agregamos un evento "click" al botón 
buttonChangeAlumno.addEventListener("click", function() { 
    //Imagenes de alumnos 
    document.getElementById("alumnoImg").src ="src/images/"+ nameImg[index];

    //Nombre de los alumnos
    document.getElementById("alumnoNM").textContent = nameAL[index];

    //Nombre de los alumnos
    document.getElementById("alumnoNC").textContent = numControlAL[index];

    //Semestre de alumnos
    document.getElementById("alumnoSM").textContent = semestreAL[index];

    // Limpiar el contenedor antes de crear el nuevo QR
    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        //Documento de informacion de alumnos
        text: window.location.origin + "/src/document/" + informacionTxt[index],  // Aquí va la ruta o URL de tu archivo
        width: 100,
        height: 100
    });

    // Avanzamos al texto 
    index ++; 
    
    // Si llegamos al final del arreglo, regresamos al inicio 
    if (index >= nameImg.length) { 
    index = 0; 
    } 
});


//--------------- Cambio de Cancion ----------------
// Seleccionamos el botón por su ID 
const buttonChangeSong = document.getElementById("buttonSong"); 

//Documento de informacion de alumnos
const song=["Bad-Piggies-Theme.mp3","TV-Time-DELTARUNE-Soundtrack.mp3","Rick-Astley-Never-Gonna-Give-You-Up.mp3","Balatro-Theme.mp3"]

//Titulo de la cancion
const tittleSong=["Bad-Piggies-Theme","TV-Time-DELTARUNE-Soundtrack","Rick-Astley-Never-Gonna-Give-You-Up","Balatro-Theme"]

//Autores
const autorSong=["Angry-Birds","Toby-Fox","Rick-Astley","InstrumentManiac"]


let indexSong=0


// Agregamos un evento "click" al botón 
buttonChangeSong.addEventListener("click", function() { 
    //Titulo de la cancion
    document.getElementById("tittleSong").textContent = tittleSong[indexSong];

    //Autor de la cancion
    document.getElementById("autorSong").textContent = autorSong[indexSong];

    //Cancion 
    document.getElementById("songName").src ="src/song/"+ song[indexSong];


    // Avanzamos al texto 
    indexSong ++; 
    
    // Si llegamos al final del arreglo, regresamos al inicio 
    if (indexSong >= song.length) { 
    indexSong = 0; 
    } 
});
