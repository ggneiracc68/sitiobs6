function fnValidar02()
{
	var xNumero = document.getElementById("txtNumero").value;
	if(xNumero=="" || /^\s+$/.test(xNumero))
	{
		alert("Escriba NUMERO...");
		return false;
	}

	var xGenero = document.getElementById("lstGenero").value;
	if(xGenero=="" || /^\s+$/.test(xGenero))
	{
		alert("Seleccione GENERO...");
		return false;
	}

	var elementoPreferencias = document.getElementsByName("chkPref[]");
	var contadorPreferencias = 0; 
	for(var i=0; i < elementoPreferencias.length; i++)
	{
		if(elementoPreferencias[i].checked)
		{
			contadorPreferencias++;
		}
	}

	if(contadorPreferencias != 3 ){
		alert("Elija TRES PREFERENCIAS... ha elegido "+contadorPreferencias);
		return false;
	}

	/// Caso contrario ///
	return true;
}