let input = document.querySelector(".input");
let nombre = document.querySelector(".nombre");
let tipo = document.querySelector(".tipo");
let imagen = document.querySelector(".imagen");

async function pokemon(id) {
    const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const datos = await rest.json()

    console.log(datos)

    imagen.src = datos.sprites.front_shiny;
    nombre.textContent = `NOMBRE: ${datos.name}`
    tipo.textContent = `TIPO: ${datos.types[0].type.name}`
}

input.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        pokemon(input.value)

        input.value = ""
    }
})