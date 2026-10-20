const prompt = require('prompt-sync')()


//Array de objetos inicial
let campeones = [
    {

        id: 1,
        nombre: "Akali",
        dificultad: 8,
        rol: "Mid",
        fechaDeLanzamiento: "2010/05/10"


    },

    {
        id: 2,
        nombre: "Kayn",
        dificultad: 6,
        rol: "Jungla",
        fechaDeLanzamiento: "2017/06/12"

    },

    {
        id: 3,
        nombre: "Briar",
        dificultad: 3,
        rol: "Jungla",
        fechaDeLanzamiento: "2023/09/13"
    },

    {
        id: 4,
        nombre: "Caitlyn",
        dificultad: 4,
        rol: "Carry",
        fechaDeLanzamiento: "2011/01/04"
    }
]


    

//LÓGICA PRINCIPAL

let opcion


do {
    mostrarMenu()
    opcion = Number(prompt())

    switch(opcion){

        case 1:
            mostrarCampeones(campeones)
            break

        case 2:
            añadirCampeon(campeones)
            break    
        case 3:
            filtrarPorRol(campeones)   
            break 
    }


} while(opcion != 9) 



    //Mostar Entradas
//Mostramos una lista de los campeones

function mostrarCampeones(lista) {

    if(lista.length === 0){
        console.log("El listado esta vacio")
        return
    } 

    for (const campeon of lista){
        console.log(`${campeon.id}. ${campeon.nombre} - Rol: ${campeon.rol} | Dificultad: ${campeon.dificultad} | ${campeon.fechaDeLanzamiento}`)
    }
   
}

//Añadir campeon

function añadirCampeon(lista) {


    //Sacar el id mas alto de la lista
    let maxId = 0;
    for (const campeon of lista) {
        if(campeon.id > maxId) {
            maxId = campeon.id
        }
    }

    const id = maxId + 1
    
   const nombre = prompt("Introduce el nombre del Campeon: ")
   const dificultad = Number(prompt("Introduce la dificultad (1-10): "))

   //Validación de difcultad
   if(isNaN(dificultad) || dificultad <= 0 || dificultad > 10) {
    console.log("Introduce un numero valido")
    return
   }

   const rol = prompt("Introduce el rol: ")
   const fechaDeLanzamiento = prompt("Introduce la fecha de lanzamiento del campeon (AAAA/MM/DD): ")


   //Creamos el Objeto del nuevo Campeon
   const nuevoCampeon = {
    id,
    nombre,
    dificultad,
    rol,
    fechaDeLanzamiento
   }

   //Añadimos al nuevo campeon a la lista de campeones
   lista.push(nuevoCampeon)
   console.log(`${nuevoCampeon.nombre} añadido con id ${nuevoCampeon.id}`)

}


//Variables y validaciones para la función para filtrar por Rol

function filtrarPorRol(lista) {

const rolesValidos = ["jungla", "support", "carry", "top", "mid"]
const rol = prompt("Introduce el rol: ").toLowerCase()

//Validación para que sea un rol valido

if(!rolesValidos.includes(rol)) {
    console.log("Introduce un rol válido")
    return
}

   const filtrados = lista.filter(campeon => campeon.rol.toLowerCase() === rol)

   mostrarCampeones(filtrados)



}



//Función de mostrar el menú
function mostrarMenu() {
    console.log("=====MI COLECCIÓN=====")
    console.log("1. Listar Campeones")
    console.log("2. Añadir Campeon");
    console.log("3. Filtrar por Rol");
    console.log("4. Modificar Campeon");
    console.log("5. Eliminar Campeon");
    console.log("6. Buscar Por Nombre");
    console.log("7. Ordenar por ID")
    console.log("8. Ordenar por Fecha de Lanzamiento");
    console.log("9. Salir");
}