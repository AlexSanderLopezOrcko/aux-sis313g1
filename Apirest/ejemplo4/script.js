let filas = document.getElementById("tabla");
let crear = document.getElementById("btncrear");
let editar = document.getElementById("btneditar");
let eliminar = document.getElementById("btneliminar");
let ventanacrear = document.getElementById("ventanaCrear");
let ventanaeditar = document.getElementById("ventanaEditar");
let ventanaeliminar = document.getElementById("ventanaEliminar");
let materia = document.getElementById("materia");
let sigla = document.getElementById("sigla");
let semestre = document.getElementById("semestre");
let guardarCrear = document.getElementById("guardarCrear");
let guardarEditar = document.getElementById("guardarEditar");
let materiaEditar = document.getElementById("materiaEditar");
let siglaEditar = document.getElementById("siglaEditar");
let semestreEditar = document.getElementById("semestreEditar");


let idseleccionado = null;

function EditarEliminar(id){
    console.log(id)
    idseleccionado = id;
}

/* GET - MOSTRAR */

async function MostrarDatos() {
    const rest = await fetch("https://6a0fdcdbd2a985707035efa5.mockapi.io/apiPrueba/sis313/asignaturas")
    const datos = await rest.json()

    console.log(datos)

    datos.forEach(element => {
        filas.innerHTML += `
            <tr onclick="EditarEliminar('${element.id}')">
                <td>${element.materia}</td>
                <td>${element.sigla}</td>
                <td>${element.semestre}</td>
            </tr>
        `
    });

}

MostrarDatos()

/* POST - CREATE - CREAR */

guardarCrear.addEventListener("click" , async ()=>{
    let nuevaAsignatura = {
        materia: materia.value,
        sigla: sigla.value,
        semestre: semestre.value
    };

    await fetch("https://6a0fdcdbd2a985707035efa5.mockapi.io/apiPrueba/sis313/asignaturas",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevaAsignatura)
    });

    ventanacrear.hidden = true;
});

/* PUT - EDITAR */

guardarEditar.addEventListener("click" , async ()=>{
    let actualizarAsignatura = {
        materia: materiaEditar.value,
        sigla: siglaEditar.value,
        semestre: semestreEditar.value
    };

    await fetch(`https://6a0fdcdbd2a985707035efa5.mockapi.io/apiPrueba/sis313/asignaturas/${idseleccionado}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(actualizarAsignatura)
    });

    ventanaeditar.hidden = true;
});


/*DELETE - ELIMINAR*/

eliminar.addEventListener("click", async()=>{
    await fetch(`https://6a0fdcdbd2a985707035efa5.mockapi.io/apiPrueba/sis313/asignaturas/${idseleccionado}`,{
        method:"DELETE",
    })
    ventanaeliminar.hidden = true;
})

crear.addEventListener("click", ()=>{
    ventanacrear.hidden = false;
})
editar.addEventListener("click", ()=>{
    ventanaeditar.hidden = false;
})
eliminar.addEventListener("click", ()=>{
    ventanaeliminar.hidden = false;
})
