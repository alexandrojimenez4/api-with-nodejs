$().ready(function (){
	console.log('jquery entro');
	$.ajax('http://localhost:3001/api/product', {
    success: function (products, textStatus, xhr) {
      console.log('textStatus : ',textStatus);
      console.log('xhr : ',xhr);
      console.log('products : ', products.products.length);

      $(products.products).each(function(index, elem) {
      		console.log('index : ', index, 'elem : ', elem.name);
      		 
      });
    }
  })


	var articule = `<div>
						
					</div>`;
})