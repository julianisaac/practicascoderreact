formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    let datos = `Nombre: ${fname.value} - Apellido: ${lname.value} - Descripcion: ${task.value}`
    console.log(datos);
})