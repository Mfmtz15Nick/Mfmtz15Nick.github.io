
$("#btn-enviar").on("click",mandarCorreo);


function mandarCorreo(){
    var nombre = $("#txt-nombre").val();
    var correo = $("#txt-correo").val();
    var celular = $("#txt-celular").val();
    var mensaje = $("#txt-mensaje").val();
    
    subject="Estoy interesado en un sitio web para mi empresa.";
    window.open('mailto:hola@angusvisual.com?subject='+subject+'&body= %0A %20Nombre: '+nombre+
    '%0A  Correo: '+correo+
    '%0A  Celular: '+celular+
    '%0A  Mensaje: '+mensaje+'');
    
}

