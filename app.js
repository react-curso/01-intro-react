const informacion = {
     nombres: 'kevin',
     apellido: 'cuadros',
     telefono: 23331
}

verInfo();
function verInfo() {
     const { nombres, apellido, telefono } = informacion;

     console.log(nombres);
     console.log(apellido);
     console.log(telefono);
}