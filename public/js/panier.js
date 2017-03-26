var list = JSON.parse(sessionStorage.listPanier);
var api = "https://pure-tundra-14882.herokuapp.com";//"http://localhost:3001";

$().ready(function () {

    renderPanier();
    renderPanierInfo();
    
    $('#valider').on('click', function(){
        $('#myTabs a[href="#profile"]').tab('show')
    });

    $('#formConfirmation').submit(function(event){
        event.preventDefault();
        $('#myTabs a[href="#messages"]').tab('show')
        
    });    
    
});

function deleteArticulo(id){
    list.splice(id,1);
    console.log(id);
    renderPanierInfo();
    renderPanier();
    if(sessionStorage.listPanier){
        sessionStorage.removeItem('listPanier');
        sessionStorage['listPanier'] = JSON.stringify(list);
    }else{
        sessionStorage['listPanier'] = JSON.stringify(list);
    }
}

function renderPanierInfo(){
    var $badge = $('span#badgePanier');

    $badge.empty();
    $badge.append(list.length);
    console.log(list.length);

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

function renderPanier(){

    var templatePanier = `<tr>
                            <td><img class="ip" src=":img:" alt=""</td>
                            <td>
                                <dl>
                                <dt>Description</dt>
                                <dd>:description:</dd>
                                </dl>
                            </td>
                            <td>
                                <select class="form-control cuadrado qte-size">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                            </td>
                            <td><p class="prix-size">:precio: €</p></td>
                            <td><button class="btn btn-default btn-xs btn-table-delete" onclick="deleteArticulo(':id:');"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>
                        </tr>`;
    var subTotal = 0;

    var $panier = $('#panier');
    $('#header-table').siblings('tr').remove();

    $(list).each(function (index, element){
        //console.log('index : ', index, ' elemt : ',element);
        $.ajax(`${api}/api/product/${element}`, {
            success : function (data){
                var article = templatePanier 
                    .replace(':img:', data.product.picture)
                    .replace(':description:', data.product.description)  
                    .replace(':id:', data.product._id)
                    .replace(':precio:', data.product.price) 

                subTotal = subTotal + parseFloat(data.product.price);
                console.log(data.product.price);
                renderInfo(subTotal);
                $panier.append(article);         
            }
        });
    });
}

function renderInfo(subTotal){

    var $sousTotal = $('dd.sous-total').empty();
    $sousTotal.append(`${subTotal.toFixed(2)} €`);
    console.log(subTotal);
    var $ttc = $('h4.ttc').empty();
    $ttc.append(`${subTotal.toFixed(2)} €`)

}