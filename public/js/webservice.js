

$(document).ready(function() {
        
       var template=`
      <div class="article"><img src=":img:" width="350" height="350">
          
          <h3 class="centrer" itemprop="name">:name:</h3>
        <h4 class="centrer">:price: EUR</h4>
          <p>:description:</p>
				<a class="details" href="#">Afficher les détails</a>
                <a class="vers_panier" href="#">Ajoutrer au panier</a>
        `;
		
		var templateHome = `
		  <div class="homepage_article">
          <h2>Vélo :category:</h2>
                <img src=":img:" width="200" height="150">
          
          <h3 class="centrer" itemprop="name">:name:</h3>
        <h4 class="centrer">:price: EUR</h4>
                <a class="vers_panier" href="#">Ajoutrer au panier </a>
            </div>`;
		
		var $articleContainer = $("#produits");
		var $articleHome = $("#produitsHome");
		
		$("#homme").click(function(){ 
			  console.log('test');		
		});
		
	
        $.ajax("http://localhost:3001/api/product",{
				success: function(data){
					$(data.products).each(function(index, product){
						var homme='homme';
						var category=product.category;
						
						if (homme === category){
									var article = template
									.replace(':name:', product.name)
									.replace(':img:', product.picture)
									.replace(':price:', product.price)
									.replace(':description:', product.description)
									
									var $article = $(article);
									$articleContainer.append($article);
									
						}
					});
				}
		});
    
	
	 $.ajax("http://localhost:3001/api/product",{
				success: function(data){
					var boucle=3;
					$(data.products).each(function(index, product){
						var critere=300;
						var prix=product.price;
						
									
						if (prix<300 && boucle<3){			
									
									var article = templateHome
									.replace(':category:', product.category)
									.replace(':name:', product.name)
									.replace(':img:', product.picture)
									.replace(':price:', product.price)
						
						
									var $article = $(article);
									$articleHome.append($article);
									boucle= boucle+1;
									
						}
					});
				}
		});
    
	
	
});