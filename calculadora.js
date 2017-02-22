$(
function () {

var valorActual="";
var valorMemoria="";
var operacion="";

$(".botonnum").click(function () {

	if(valorActual!="0")
		valorActual= valorActual+this.value;
	else
		valorActual=this.value;	

	$("#resultado").text(valorActual);
	$("#mem").text(valorMemoria);

 });
$(".botonIgual").click (function () {
	//alert (this.value);
	if (operacion!="") {
	switch (operacion) {
		case "+": 
				
			valorActual=parseInt(valorActual)+parseInt(valorMemoria);
			break;
		case "-": 
			valorActual=parseInt(valorMemoria)-parseInt(valorActual);
			break;

			}
			valorMemoria="";
			operacion="";
			$("#resultado").text(valorActual);
			$("#mem").text(valorMemoria);
			
	}
});

$(".botonop").click (function() {
	if (operacion==""){
	valorMemoria= valorActual;
	valorActual="";
	$("#resultado").text(valorActual);
$("#mem").text(valorMemoria);
	switch (this.value) {
		case "+": 
			operacion="+";
			break;
		case "-": 
			operacion="-";	
			break;
}	}
});

	

$(".botonCE").click (function() {

valorActual="0";
valorMemoria="0";
operacion="";
$("#resultado").text(valorActual);
$("#mem").text(valorMemoria);
	
});

$(".botonC").click (function() {

valorActual="0";
$("#resultado").text(valorActual);

});
});
