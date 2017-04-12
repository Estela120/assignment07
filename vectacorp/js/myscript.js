
//Heading
$(document).ready (function(){
	$("h2").css("border","solid black 1px");
	$("section h2").css({
		color: "#CC1C0D",
		padding: "3px 0 3px 20px",
		borderRadius: "5px",
		backgroundColor: "#DFE3E6"
	})
	$("aside h2").css({
		color: "#CC1C0D",
		padding: "3px 0 3px 20px",
		borderRadius: "5px",
		backgroundColor: "#DFE3E6"
	})	

//Navegation Menue
$("nav ul li a").addClass("navigation");
$("nav ul li a.navigation").css({
		border:"solid #929CA4 1px",
		color: "#CC1C0D",
		padding: "3px 0 3px 20px",
		backgroundColor: "#DFE3E6"
	});

//Main Content
//
$("main section p").removeClass("vprospect vconvert vretain");
	
$("aside p:last-child").append("<br>Chevy Dealers Association</br>" );
//
$("aside p:first").wrapInner("<q></q>").wrapInner("<i></i>");
//	
$("section b").replaceWith("<a href= http://www.vec tacorp.com>Vecta Corporation</a>");		
}); 