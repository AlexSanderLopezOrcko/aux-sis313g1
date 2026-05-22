async function pokemon(id) {
    const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datos =  await rest.json()

    console.log(datos);

    document.body.innerHTML += `
        <div class="contenedor">
            <div class="card">
                <img src="${datos.sprites.front_default}" alt="" />
                <div class="contenido">
                    <h3>NOMBRE: ${datos.name}</h3>
                    <p>TIPO:${datos.types[0].type.name}</p>
                </div>
            </div>
        </div>
    ` 
    
    // document.body.innerHTML = `
    //     <div class="contenedor">
    //         <div class="card">
    //             <img src="${datos.items[2].image}" alt="" />
    //             <div class="contenido">
    //                 <h3>NOMBRE: ${datos.items[2].name}</h3>
    //                 <p>TIPO:${datos.items[2].race}</p>
    //             </div>
    //         </div>
    //     </div>
    // ` 

    // document.body.innerHTML = `
    //     <div class="contenedor">
    //         <div class="card">
    //             <img src="${datos.results[5].image}" alt="" />
    //             <div class="contenido">
    //                 <h3>NOMBRE: ${datos.results[5].name}</h3>
    //                 <p>TIPO:${datos.results[5].species}</p>
    //             </div>
    //         </div>
    //     </div>
    // ` 
}
for (let index = 1; index <= 20; index++) {
    pokemon(index);
}