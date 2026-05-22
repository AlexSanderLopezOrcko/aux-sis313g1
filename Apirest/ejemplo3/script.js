let btn = document.querySelector(".button");
let nombre = document.querySelector(".nombre");
let tipo = document.querySelector(".tipo");
let imagen = document.querySelector(".imagen");

let cont = 1;

async function pokemon(id) {
    const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const datos = await rest.json()

    console.log(datos)

    imagen.src = datos.sprites.front_shiny;
    nombre.textContent = `NOMBRE: ${datos.name}`
    tipo.textContent = `TIPO: ${datos.types[0].type.name}`
}

pokemon(cont)

btn.addEventListener("click", ()=>{
    cont++
    pokemon(cont)
})