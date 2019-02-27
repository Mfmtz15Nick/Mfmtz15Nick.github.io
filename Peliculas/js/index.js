
var pelicula = new Object();
    pelicula.nombre = "Capitan America: El Primer Vengador";
    pelicula.imagen = "img/CapitanAmerica1.jpg";
    pelicula.anio = "2011";
    pelicula.descripcion = "Muestra los orígenes del miembro más antiguo del grupo de superhéroes. 50 años antes del Universo."


const peliculas = () =>{
    var url = "http://api.apixu.com/v1/current.json?key=9cc0046b008947b5ba351438190201&q=Navolato";

    $.ajax({
        type:"POST",
        dataType:"json",
        url: url,
        success:function(response){
            if (!response.error) {
                alert("si hubo respuesta");
            }
        }
    });
    
    $("#row").html("<div class='col-md-3'>"+
    "<div class='card mb-3 box-shadow'>"+
       "<a target='_blank' href='https://openload.co/f/fzAqRNdlWm4/Captain.america.the.first.avenger.2011.720.bdrip.lat.mp4'>"+
        "<img class='card-img-top imagen' src="+pelicula.imagen+" alt='Card image cap'></a>"+
      "<div class='card-body'>"+
        "<h3>"+pelicula.nombre+"</h3>"+
        "<p class='card-text'>"+pelicula.descripcion+"</p>"+
        "<div class='d-flex justify-content-between align-items-center'>"+
            "<small class='text-info nito'>"+pelicula.anio+"</small>"+
        "</div>"+
      "</div>"+
    "</div>"+
"</div>");    
}


$(document).ready(peliculas);
