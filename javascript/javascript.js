 $(document).ready(function() {

var p;
var position;
var top;
var left;
var movimientos = 0;

        $("#miDiv1").position({
            my: "left top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv2").position({
            my: "left+100 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv3").position({
            my: "left+200 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv4").position({
             my: "left+300 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv5").position({
             my: "left+400 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv6").position({
            my: "left+500 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv7").position({
            my: "left+600 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv8").position({
            my: "left+700 top",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv9").position({
            my: "left top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv10").position({
           my: "left+100 top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv11").position({
           my: "left+200 top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv12").position({
            my: "left+300 top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv13").position({
             my: "left+400 top+100",
            at: "left top",
            of: "#tablero"
        });

         $("#miDiv14").position({
             my: "left+500 top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv15").position({
             my: "left+600 top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv16").position({
             my: "left+700 top+100",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv17").position({
             my: "left top+200",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv18").position({
             my: "left+100 top+200",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv19").position({
             my: "left+200 top+200",
            at: "left top",
            of: "#tablero"
        });

         $("#miDiv20").position({
             my: "left+300 top+200",
            at: "left top",
            of: "#tablero"
        });
         
         $("#miDiv21").position({
             my: "left+400 top+200",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv22").position({
             my: "left+500 top+200",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv23").position({
             my: "left+600 top+200",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv24").position({
             my: "left+700 top+200",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv25").position({
             my: "left top+300",
            at: "left top",
            of: "#tablero"
        });

         $("#miDiv26").position({
             my: "left+100 top+300",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv27").position({
             my: "left+200 top+300",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv28").position({
             my: "left+300 top+300",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv29").position({
             my: "left+400 top+300",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv30").position({
             my: "left+500 top+300",
            at: "left top",
            of: "#tablero"
        });

        $("#miDiv31").position({
             my: "left+600 top+300",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv32").position({
             my: "left+700 top+300",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv33").position({
             my: "left top+400",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv34").position({
             my: "left+100 top+400",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv35").position({
             my: "left+200 top+400",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv36").position({
             my: "left+300 top+400",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv37").position({
             my: "left+400 top+400",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv38").position({
             my: "left+500 top+400",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv39").position({
             my: "left+600 top+400",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv40").position({
             my: "left+700 top+400",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv41").position({
             my: "left top+500",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv42").position({
             my: "left+100 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv43").position({
             my: "left+200 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv44").position({
             my: "left+300 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv45").position({
             my: "left+400 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv46").position({
             my: "left+500 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv47").position({
             my: "left+600 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv48").position({
             my: "left+700 top+500",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv49").position({
             my: "left top+600",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv50").position({
             my: "left+100 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv51").position({
             my: "left+200 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv52").position({
             my: "left+300 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv53").position({
             my: "left+400 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv54").position({
             my: "left+500 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv55").position({
             my: "left+600 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv56").position({
             my: "left+700 top+600",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv57").position({
             my: "left top+700",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv58").position({
             my: "left+100 top+700",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv59").position({
             my: "left+200 top+700",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv60").position({
             my: "left+300 top+700",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv61").position({
             my: "left+400 top+700",
            at: "left top",
            of: "#tablero"
        });
         $("#miDiv62").position({
             my: "left+500 top+700",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv63").position({
             my: "left+600 top+700",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv64").position({
             my: "left+700 top+700",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv65").position({
             my: "left top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv66").position({
             my: "left+100 top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv67").position({
             my: "left+200 top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv68").position({
             my: "left+300 top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv69").position({
             my: "left+400 top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv70").position({
             my: "left+500 top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv71").position({
             my: "left+600 top+800",
            at: "left top",
            of: "#tablero"
        });
        $("#miDiv72").position({
             my: "left+700 top+800",
            at: "left top",
            of: "#tablero"
        });

         $("#ficha1R").position({
            my: "center",
            at: "center",
            of: "#miDiv2"
        });
         $("#ficha2R").position({
            my: "center",
            at: "center",
            of: "#miDiv4"
        });
         $("#ficha3R").position({
            my: "center",
            at: "center",
            of: "#miDiv6"
        });
        $("#ficha4R").position({
            my: "center",
            at: "center",
            of: "#miDiv8"
        });

        $("#ficha5R").position({
            my: "center",
            at: "center",
            of: "#miDiv9"
        });
         $("#ficha6R").position({
            my: "center",
            at: "center",
            of: "#miDiv11"
        });
         $("#ficha7R").position({
            my: "center",
            at: "center",
            of: "#miDiv13"
        });
         $("#ficha8R").position({
            my: "center",
            at: "center",
            of: "#miDiv15"
        });
         $("#ficha9R").position({
            my: "center",
            at: "center",
            of: "#miDiv18"
        });
         $("#ficha10R").position({
            my: "center",
            at: "center",
            of: "#miDiv20"
        });
         $("#ficha11R").position({
            my: "center",
            at: "center",
            of: "#miDiv22"
        });
         $("#ficha12R").position({
            my: "center",
            at: "center",
            of: "#miDiv24"
        });

        $("#ficha1A").position({
            my: "center",
            at: "center",
            of: "#miDiv50"
        });
        $("#ficha2A").position({
            my: "center",
            at: "center",
            of: "#miDiv52"
        });
        $("#ficha3A").position({
            my: "center",
            at: "center",
            of: "#miDiv54"
        });
        $("#ficha4A").position({
            my: "center",
            at: "center",
            of: "#miDiv56"
          
            
        });
        $("#ficha5A").position({
            my: "center",
            at: "center",
            of: "#miDiv57"
        });
        $("#ficha6A").position({
            my: "center",
            at: "center",
            of: "#miDiv59"
        });
        $("#ficha7A").position({
            my: "center",
            at: "center",
            of: "#miDiv61"
        });
        $("#ficha8A").position({
            my: "center",
            at: "center",
            of: "#miDiv63"
        });
        $("#ficha9A").position({
            my: "center",
            at: "center",
            of: "#miDiv66"
        });
        $("#ficha10A").position({
            my: "center",
            at: "center",
            of: "#miDiv68"
        });
        $("#ficha11A").position({
            my: "center",
            at: "center",
            of: "#miDiv70"
        });
       $("#ficha12A").position({
            my: "center",
            at: "center",
            of: "#miDiv72"
        });

$(".fichaR").draggable();     
$(".fichaA").draggable();
$(".fichaR").droppable({
	out: function() {
    $(this).effect("puff", 1000, function() {});
  }
});
$(".fichaA").droppable({
	out: function() {
    $(this).effect("puff", 1000, function() {});
  }
});

$(".negro").droppable({
	drop: function() {
    alert("Has Realizaso un moviemiento no permitido");
    p.css({top: top, left: left, position:'absolute'});
    },
    over: function(){
        ++movimientos;
    }
});

$(".blanco").droppable({
    drop: function() {
    if(movimientos>2){
    alert("Has Realizaso un moviemiento no permitido");
    p.css({top: top, left: left, position:'absolute'}); 
    movimientos = 0;}
    else{
    movimientos = 0;}
  },
   over: function(){
       ++movimientos;
   }
});



$( ".fichaA" ).mouseover(function() {
 p = $(this);
 position = p.position();
 top = position.top;
 left = position.left;

});

$( ".fichaR" ).mouseover(function() {
 p = $(this);
 position = p.position();
 top = position.top;
 left = position.left;
});


///Fin
});