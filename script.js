function mouseDentro(id)  	{	

	document.getElementById(id).src = "imagem/robo.png"   
}
     
function mouseFora(id)   {	

	document.getElementById(id).src = "imagem/raspberry.jpg"   
}

function login(id)   {	

	window.location.href = "logado.html";
}

function esqueceuSenha(id)   {	

	window.location.href = "esqueceu_senha.html";
}

function registro(id)   {	

	window.location.href = "registro.html";
}

function sair(id)   {	

	window.location.href = "principal.html";
}

function voltar(id)   {	

	window.location.href = "contribuir.html";
}

function bomDia(){
	
	var data=new Date();
	
	var hora=data.getHours();
	
	if (hora < 10) 
	{
		alert("Bom dia!");
	}
	else if (hora < 18) 
	{
		alert("Boa tarde!");
	}
	else 
	{
		alert("Boa noite!");
	}
}