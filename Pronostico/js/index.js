
var pronostico = function(){
        var temperatura_c, temperatura_f;
        var grados = cen;
        var ciudad = "Navolato";
        var url = "http://api.apixu.com/v1/current.json?key=9cc0046b008947b5ba351438190201&q=" + ciudad;
        
        $.ajax({
            dataType:"json",
            url: url,
            success:function(response){
                if (!response.error) {
                    console.log(response.location.name);
                    var localidad = response.location.name + ", " + 
                        response.location.region + ", " +
                        response.location.country + ". ";

                    var foto = (response.current.condition.icon);
                    $("#foto").attr("src","https:" + foto);
                    $("#localidad").html(localidad);
                    temperatura_c = response.current.temp_c;
                    temperatura_f = response.current.temp_f;
                    if(grados === cen){
                        $("#temperatura").html(temperatura_c + "°"); 
                    }
                    else
                        $("#temperatura").html(temperatura_f + "°");                      

                    var condicion = response.current.condition.text;
                    if(condicion === "Overcast"){
                        $("#condicion").html("Nublado");
                    }
                    else
                        $("#condicion").html("Fue else");
                              
                }
              
            }
        })
        var actualizaGrados = function(){
            if(grados === cen){
                $("#temperatura").html(temperatura_c + "°"); 
            }
            else
                $("#temperatura").html(temperatura_f + "°");                      

            
        }
        var estadoGradosFar = function(){
            grados = far;
            actualizaGrados()

        }
        
        var estadoGradosCen = function(){
            grados = cen;
            actualizaGrados()

        }


    $("#far").on("click",estadoGradosFar);
    $("#cen").on("click",estadoGradosCen);
    

}
$(document).ready(pronostico);