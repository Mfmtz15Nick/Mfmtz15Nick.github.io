
var pronostico = function(){
    var curp = ["FOMM941123HSLNRR09","GOBC211196HSLRSR00","MICK971122MSLRRR07"]
    var jalate = function(){
        //var nombre = $("#texto").val();
        var nombre = $('#texto').val();
        $("#texto2").val("");    
        if(nombre === "mario" || nombre === "Mario" || nombre === " mario" || nombre === " Mario" || nombre === "mario " || nombre ==="Mario " || nombre === " Mario " || nombre === " mario "){
            $("#texto2").html(curp[0]); 
        }
        else if(nombre === "gorgo" || nombre === "Gorgo" || nombre === "gorgots" || nombre === "Gorgots" || nombre === "Gordoa" || nombre ==="gordoa" || nombre === "carlos" || nombre === "Carlos"){
            $("#texto2").html(curp[1]); 
        }
        else if(nombre === "kaira" || nombre === "Kaira" || nombre === "kaira " || nombre === " kaira" || nombre === " kaira " || nombre ==="kaira" || nombre === "kaira" || nombre === "kaira"){
            $("#texto2").html(curp[1]); 
        }
        
        else{
            $("#texto2").html("No existes paps"); 
        }

        
    }

    $("#far").on("click",jalate);
    
}


$(document).ready(pronostico);
