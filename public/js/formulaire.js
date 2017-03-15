$(document).ready(function(){
	
	var valide=false;
		 	var name="";
			var prenom="";
			var email="";
			
			
     $("#btn_etape01").click(function(){
			  valide= true;
			  if($("#name").val() == ""){
				  $("#name").next(".erreur").fadeIn().text("Veuillez entrer votre nom");
				 
				  valide =false;
				  }
				  else if(!$("#name").val().match(/^[a-z]+$/i)){
					  $("#name").next(".erreur").fadeIn().text("Veuillez entrer votre nom valide");
				  		valide =false;
					  }
				  else{
					  $("#name").next(".erreur").fadeOut();
					  
					  name = $("#name").val();
					  }
					  
				if($("#prenom").val() == ""){
				  $("#prenom").next(".erreur").fadeIn().text("Veuillez entrer votre nom");
				 
				  valide =false;
				  }
				  else if(!$("#prenom").val().match(/^[a-z]+$/i)){
					  $("#prenom").next(".erreur").fadeIn().text("Veuillez entrer votre nom valide");
				  		valide =false;
					  }
				  else{
					  $("#prenom").next(".erreur").fadeOut();
					 
					  prenom = $("#prenom").val();
					  }
				if($("#email").val() == ""){
				  $("#email").next(".erreur").fadeIn().text("Veuillez entrer votre emal");
				 
				  valide =false;
				  }
				  else if(!$("#email").val().match('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i')){
					  $("#email").next(".erreur").fadeIn().text("Veuillez entrer votre email valide");
				  		valide =false;
					  }
				  else{
					  $("#email").next(".erreur").fadeOut();
					  
					  email = $("#email").val();
					  }
								  
					  if(valide==true){
						  $("#page #message #etap01").css('display', 'none');
						  $("#commande").css('display', 'block');
						  $("#saisie").css('display', 'block');
						  $("#saisie").html("Votre nom: "+name+'<br />'+"Votre prénom: "+prenom+'<br />'+"Votre email: "+email);
						 
						  }
			
		  } );
		  
		 $("#modifier").click(function(){
			 $("#page #message #etap01").css('display', 'block');
			$("#name").val(name);
			$("#prenom").val(prenom);
			$("#email").val(email);
			$("#commande").css('display', 'none');
			
		  } ); 
		  
		   
		
});

