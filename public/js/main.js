// 
var list = new Array();
var api = "https://pure-tundra-14882.herokuapp.com";

$().ready(function(){

	if(sessionStorage.listPanier){
		list = JSON.parse(sessionStorage.listPanier);
		renderPanierInfo();
	}

	renderMoinCher();

	// $('#myModal').modal({
	// 	show: true,
	// })

	$('[data-toggle="popover"]').popover()

	$('#menu a[href="#homme"]').on('click', function(){
		$( this ).parent().toggleClass('active');
		$('#menu a[href="#femme"]').parent().removeClass('active');
		$('#menu a[href="#enfant"]').parent().removeClass('active');
		$('#menu a[href="index.html"]').parent().removeClass('active');
		renderArticle('homme');
	});
	$('#menu a[href="#femme"]').on('click', function(){
		$( this ).parent().toggleClass('active');
		$('#menu a[href="#homme"]').parent().removeClass('active');
		$('#menu a[href="#enfant"]').parent().removeClass('active');
		$('#menu a[href="index.html"]').parent().removeClass('active');
		renderArticle('femme');
	});
	$('#menu a[href="#enfant"]').on('click', function(){
		$( this ).parent().toggleClass('active');
		$('#menu a[href="#femme"]').parent().removeClass('active');
		$('#menu a[href="#homme"]').parent().removeClass('active');
		$('#menu a[href="index.html"]').parent().removeClass('active');
		renderArticle('enfant');
	});

});

function renderArticle(category){
	var $articleContainer = $("#produits");

	var titleHeader = `<div class="page-header">
						  <h2>Vélos ${category}</h2>
						</div>`;

	var thumbnail = `
					<div class="col-sm-6 col-md-4">
						<div class="thumbnail cuadrado">
					      <img src=":img:" alt=":alt:">
					      <div class="caption">
					        <h3>:name:</h3>
					        <div class="dotdotdot">:description:</div>
					        <div class="row">
					        	<div class="col-md-8">
					        		<a href="#" class="btn btn-default cuadrado" role="button" data-toggle="modal" data-target="#myModal"> Afficher produit</a>
					        	</div>
					        	<div class="col-md-4">
					        		<h4 class="centrer">:price:  €</h4>
					        	</div>
					        </div>
					        <p><button type="submit" class="btn btn-primary btn-lg btn-block cuadrado" onclick="ajouterPanier(':id:');">Ajouter au panier</button></p>
					      </div>
					    </div>
					</div>`;

	$articleContainer.empty();
	$articleContainer.append(titleHeader);
	$.ajax(`${api}/api/product/${category}`,{
		success: function(data){
			$(data.products).each(function(index, product){
				var article = thumbnail
					.replace(':name:', product.name)
					.replace(':img:', product.picture)					
					.replace(':alt:', product.name)
					.replace(':price:', product.price)
					.replace(':description:', product.description)
					.replace(':id:', product._id)
								
				var $article = $(article);
				$articleContainer.append($article);		
			});
		}
	});

	setTimeout(function(){
	  	$('div.dotdotdot').dotdotdot({
			after: "a.readmore"
		});
	}, 1000);
}

function renderPanierInfo(){

	var $badge = $('span#badgePanier');

	$badge.empty();
    $badge.append(list.length);

	var templateListInfo = `<tr>
                                <td rowspan="2"><img class="i" src=":img:" alt=""></td>
                            	<td colspan="3"><p class="text-capitalize">:name:</p></td>
                            </tr>
                            <tr>
                            	<td>x 1</td>
                                <td>:price:  €</td>
                                <td><button class="btn btn-default btn-xs" onclick="deleteArticulo(':id:');"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>
                            </tr>`;

    var $listInfo = $('#listInfo');
    $listInfo.empty();

    $(list).each(function (index, element){
        console.log('index : ', index, ' elemt : ',element);
        $.ajax(`${api}/api/product/${element}`, {
            success : function (data){
                var articleList = templateListInfo
                	.replace(':id:', index)
                    .replace(':img:', data.product.picture)
                    .replace(':name:', data.product.name)
                    .replace(':price:', data.product.price)

                $listInfo.append(articleList)       
            }
        }); 
    });                           
}

// Funciones para la lista de articulos en el carrito

// Agregar
function ajouterPanier(id){
	
	if(list.indexOf(id) == -1){
		list.push(id);
		renderPanierInfo();
		//alert('Article ajouté avec success!');
		
		$('#alert').modal({
			show: true
		})

		if(sessionStorage.listPanier){
			sessionStorage.removeItem('listPanier');
			sessionStorage['listPanier'] = JSON.stringify(list);
		}else{
			sessionStorage['listPanier'] = JSON.stringify(list);
		}
	}
}
// Eliminar
function deleteArticulo(id){
	list.splice(id,1);
	console.log(id);
	renderPanierInfo();
	if(sessionStorage.listPanier){
		sessionStorage.removeItem('listPanier');
		sessionStorage['listPanier'] = JSON.stringify(list);
	}else{
		sessionStorage['listPanier'] = JSON.stringify(list);
	}
}

function renderMoinCher(){
	var $articleContainer = $("#produits");

	var titleHeader = `<div class="page-header">
						  <h2>Les moins chers</h2>
						</div>`;

	var thumbnail = `<div class="col-sm-6 col-md-4">
						<div class="thumbnail cuadrado">
					      <img src=":img:" alt=":alt:">
					      <div class="caption">
					        <h3>:name:</h3>
					        <div class="dotdotdot">:description:</div>
					        <div class="row">
					        	<div class="col-md-8">
					        		<a href="#" class="btn btn-default cuadrado" role="button" data-toggle="modal" data-target="#myModal"> Afficher produit</a>
					        	</div>
					        	<div class="col-md-4">
					        		<h4 class="centrer">:price:  €</h4>
					        	</div>
					        </div>
					        <p><button type="submit" class="btn btn-primary btn-lg btn-block cuadrado" onclick="ajouterPanier(':id:');">Ajouter au panier</button></p>
					      </div>
					    </div>
					</div>`;

	$articleContainer.empty();
	$articleContainer.append(titleHeader);
	$.ajax(`${api}/api/product/moinCher`,{
		success: function(data){
			$(data.products).each(function(index, product){
				var article = thumbnail
					.replace(':name:', product.name)
					.replace(':img:', product.picture)					
					.replace(':alt:', product.name)
					.replace(':price:', product.price)
					.replace(':description:', product.description)
					.replace(':id:', product._id)
								
				var $article = $(article);
				$articleContainer.append($article);		
			});
		}
	});

	setTimeout(function(){
	  	$('div.dotdotdot').dotdotdot({
			after: "a.readmore"
		});
	}, 1000);
}