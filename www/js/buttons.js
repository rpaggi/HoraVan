document.getElementById('btnContaxDds').onclick = function(){
	$('#mainMenu').css('display', 'none');
	$('#content').css('display', 'block');
	var now = new Date();
	var minute = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString(); 
	var hour   = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString(); 
	var compare = hour+minute;	
	for(i in data.contaxdds){
		console.log(data.contaxdds[i].hora);
		if(compare<=data.contaxdds[i].hora){
			$('#content').append( "<div id='hora'>A próxima van é as "+ data.contaxdds[i].fhora +"</div>" );
			break;
		}
	}
	if(compare>data.contaxdds[i].hora){
		$('#content').append( "<div id='hora'>A próxima van é amanhã "+ data.contaxdds[0].fhora +"</div>" );
	}
}

document.getElementById('btnDdsContax').onclick = function(){
	$('#mainMenu').css('display', 'none');
	$('#content').css('display', 'block');
	var now = new Date();
	var minute = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString(); 
	var hour   = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString(); 
	var compare = hour+minute;	
	for(i in data.ddscontax){
		if(compare<=data.ddscontax[i].hora){
			$('#content').append( "<div id='hora'>A próxima van é as "+ data.ddscontax[i].fhora +"</div>" );
			break;
		}
	}
	if(compare>data.ddscontax[i].hora){
		$('#content').append( "<div id='hora'>A próxima van é amanhã "+ data.ddscontax[0].fhora +"</div>" );
	}
}

document.getElementById('btnContCentr').onclick = function(){
	$('#mainMenu').css('display', 'none');
	$('#content').css('display', 'block');
	var now = new Date();
	var minute = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString(); 
	var hour   = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString(); 
	var compare = hour+minute;	
	for(i in data.contcentr){
		if(compare<=data.contcentr[i].hora){
			$('#content').append( "<div id='hora'>A próxima van é as "+ data.contcentr[i].fhora +"</div>" );
			break;
		}
	}
	if(compare>data.contcentr[i].hora){
		$('#content').append( "<div id='hora'>A próxima van é amanhã "+ data.contcentr[0].fhora +"</div>" );
	}
}

document.getElementById('btnCentrCont').onclick = function(){
	$('#mainMenu').css('display', 'none');
	$('#content').css('display', 'block');
	var now = new Date();
	var minute = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString(); 
	var hour   = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString(); 
	var compare = hour+minute;	
	for(i in data.centrcont){
		if(compare<=data.centrcont[i].hora){
			$('#content').append( "<div id='hora'>A próxima van é as "+ data.centrcont[i].fhora +"</div>" );
			break;
		}
	}
	if(compare>data.centrcont[i].hora){
		$('#content').append( "<div id='hora'>A próxima van é amanhã "+ data.centrcont[0].fhora +"</div>" );
	}
}

document.getElementById('btnVoltar').onclick = function(){
	$('#mainMenu').css('display', 'block');
	$('#content').css('display', 'none');
	$("#hora").remove();
}

$(window).load(function() {
	window.resizeTo(350,240);
	$('#scrTxt').remove();
	$('#screenSize').append('<p id="scrTxt">'+ $(window).height() + ' X ' + $(window).width() + '</p>');
})
