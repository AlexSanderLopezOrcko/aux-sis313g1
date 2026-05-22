let contenedor = document.getElementById("contenedor");

async function obtenerdatos(){
    const rest = await fetch("./nombres.json");
    const datos = await rest.json();

    console.log(datos)

    datos.forEach((persona)=>{
        contenedor.innerHTML += `
            <div>
                <h2>${persona.nombre}</h2>
                <h2>${persona.apellido}</h2>
                <h2>${persona.ci}</h2>
            </div>
        `
    })
}

obtenerdatos()