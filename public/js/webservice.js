// 
var list = new Array();

$().ready(function(){

	if(sessionStorage.listPanier){
		list = JSON.parse(sessionStorage.listPanier);
		renderPanierInfo();
	}

	$('[data-toggle="popover"]').popover()

	$('#menu a[href="#homme"]').on('click', function(){
		renderArticle('homme');
	});
	$('#menu a[href="#femme"]').on('click', function(){
		renderArticle('femme');
	});
	$('#menu a[href="#enfant"]').on('click', function(){
		renderArticle('enfant');
	});

});

function renderArticle(category){
	var $articleContainer = $("#produits");

	var thumbnail = `<div class="col-sm-6 col-md-4">
					    <div class="thumbnail">
					      <img src=":img:" alt=":nameAlt:">
					      <div class="caption">
					        <h3>:name:</h3>
					        <p>:description:</p>
					        <div class="row">
					        	<div class="col-md-8">
					        		<a href="#" class="btn btn-default" role="button"><span class="glyphicon glyphicon-star-empty"></span></a>
					        		<span class="badge">42</span>
					        	</div>
					        	<div class="col-md-4">
					        		<h4 class="centrer">:price:  €</h4>
					        	</div>
					        </div>
					        <p>
					        	<button type="button" class="btn btn-primary btn-lg btn-block" onclick="ajouterPanier(':id:');">Ajouter au panier</button> 
					        </p>
					      </div>
					    </div>
					</div>`;

	$articleContainer.empty();
	$.ajax(`http://localhost:3001/api/product/${category}`,{
		success: function(data){
			$(data.products).each(function(index, product){
				var article = thumbnail
					.replace(':name:', product.name)
					.replace(':img:', product.picture)
					.replace(':price:', product.price)
					.replace(':description:', product.description)
					.replace(':id:', product._id)
					.replace(':nameAlt:', product.name)
								
				var $article = $(article);
				$articleContainer.append($article);		
			});
		}
	});
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
                                <td><a href="#" class="btn btn-default btn-xs" role="button"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
                            </tr>`;

    var $listInfo = $('#listInfo');
    $listInfo.empty();

    $(list).each(function (index, element){
        console.log('index : ', index, ' elemt : ',element);
        $.ajax(`http://localhost:3001/api/product/${element}`, {
            success : function (data){
                var articleList = templateListInfo
                    .replace(':img:', data.product.picture)
                    .replace(':name:', data.product.name)
                    .replace(':price:', data.product.price)

                $listInfo.append(articleList)       
            }
        }); 
    });                           
}

function ajouterPanier(article){
	list.push(article);
	renderPanierInfo();
	alert('Article ajouté avec success!');
	
	if(sessionStorage.listPanier){
		sessionStorage.removeItem('listPanier');
		sessionStorage['listPanier'] = JSON.stringify(list);
	}else{
		sessionStorage['listPanier'] = JSON.stringify(list);
	}
}
