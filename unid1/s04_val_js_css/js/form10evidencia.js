const fnValidar10 = () => {

	let xTexto = document.getElementById("txtNombre").value;
	if(xTexto=="" || /^\s+$/.test(xTexto)) {
		alert("Falta NOMBRES Y APELLIDOS...");
		return false;
	}
	
	let xNumero = document.getElementById("txtEdad").value; 
	if(xNumero=="") {
		alert("Falta EDAD...");
		return false;
	}

	var elementoPref = document.getElementsByName("chk2Prefer[]");
	var contador=0;
	for(var i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			contador++;
		}
	}

	if(contador != 2){
		alert("Debe elegir 2 opciones... NO (" + contador + ")");
		return false;
	}

	
	/// Caso contrario ///
	return true;
}