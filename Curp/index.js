
var pronostico = function(){
    var curp = ["FOMM941123HSLNRR09","RIOK960901MSLVBR05","RIOE001115MSLVBLA0"]
    var jalate = function(){
        //var nombre = $("#texto").val();
        var nombre = $('#texto').val();
        $("#texto2").val("");    
        if(nombre === "mario" || nombre === "Mario" || nombre === " mario" || nombre === " Mario" || nombre === "mario " || nombre ==="Mario " || nombre === " Mario " || nombre === " mario "){
            $("#texto2").html(curp[0]); 
        }
        else if(nombre === "karla" || nombre === "Karla" || nombre === " karla" || nombre === " Karla" || nombre === "karla " || nombre ==="Karla " || nombre === " Karla " || nombre === " karla "){
            $("#texto2").html(curp[1]); 
        }
        else if(nombre === "elva" || nombre === "Elva" || nombre === " elva" || nombre === " Elva" || nombre === "elva " || nombre ==="Elva " || nombre === " Elva " || nombre === " elva "){
            $("#texto2").html(curp[2]); 
        }
        else{
            $("#texto2").html("No existes"); 
        }

        
    }

    $("#far").on("click",jalate);
    
}


$(document).ready(pronostico);