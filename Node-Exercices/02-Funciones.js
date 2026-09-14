function Alumno(nombre , apellido){
    const nombreCompleto = (nombre + " " + apellido).toUpperCase(); 
    const length = nombreCompleto.length
    return {nombreCompleto,length}
}

const alumno = Alumno("Luciano","Gonzalez")

console.log(alumno.nombreCompleto)
console.log(alumno.length)