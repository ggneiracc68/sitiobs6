function fnValidar02()
{
	var xNombre = document.getElementById("txtNombres").value;
	if(xNombre=="" || /^\s$/.test(xNombre))
	{
		alert("Escriba NOMBRES...");
		return false;
	}
	
	var xApellidos = document.getElementById("txtApellidos").value;
	if(xApellidos=="" || /^\s$/.test(xApellidos))
	{
		alert("Escriba APELLIDOS...");
		return false;
	}

	var xDireccion = document.getElementById("txtDireccion").value;
	if(xDireccion=="" || /^\s$/.test(xDireccion))
	{
		alert("Escriba DIRECCIÓN...");
		return false;
	}

	var xEdad = document.getElementById("txtEdad").value;
	if(xEdad=="" || /^\s$/.test(xEdad))
	{
		alert("Escriba EDAD...");
		return false;
	}

	var xFechaNac = document.getElementById("fecNac").value;
	if(xFechaNac=="" || /^\s$/.test(xFechaNac))
	{
		alert("Escriba FECHA NACIMIENTO...");
		return false;
	}

	var elementoGenero = document.getElementsByName("rdGenero");
	var seleccionado = false; 
	for(var i=0; i < elementoGenero.length; i++)
	{
		if(elementoGenero[i].checked)
		{
			seleccionado = true;
		}
	}
	
	if(!seleccionado){
		alert("Elija GÉNERO");
		return false;
	}

	var xEstado = document.getElementById("lstEstado").value;
	if(xEstado=="" || /^\s$/.test(xEstado))
	{
		alert("Seleccione ESTADO CIVIL...");
		return false;
	}

	/// Caso contrario ///
	return true;
}