function addToCard(event){
	
	var clickedButton=event.target; 
	var divElement=clickedButton.parentElement;
	var productElements=divElement.getElementsByClassName('product_item'); 
	var productElement=productElements[0];
	var productName=productElement.innerHTML; 
	
	var productImages=divElement.getElementsByClassName('product_image');
	var productImageElement=productImages[0];
	
		var productImage=productImageElement.src; 
		
		var imageElement=document.createElement('img');
		
		imageElement.src=productImage; 
		imageElement.style.width="80px";
		
		var productNameElement=document.createElement('p');
		
		var nameText=document.createTextNode(productName);
		
		productNameElement.appendChild(nameText); 
		
		
			var priceElement=document.createElement('p');
			var productPrices=divElement.getElementsByClassName('product_price');
	var productPriceElement=productPrices[0].innerHTML;
	
			priceElement.innerHTML=productPriceElement;
			
		var trElement=document.createElement('tr'); 
		
		var tdName=document.createElement('td');
		tdName.appendChild(productNameElement);
		trElement.appendChild(tdName);
		
			var tdImage=document.createElement('td');
			tdImage.appendChild(imageElement);
			trElement.appendChild(tdImage);
			
				var tdPrice=document.createElement('td');
			tdPrice.appendChild(priceElement);
			trElement.appendChild(tdPrice);
			
	 var quantityInput=document.createElement('input');
	 quantityInput.type="number";
	  
	 quantityInput.addEventListener("input", changeQuantity);
	 
	 
quantityInput.value="1";
quantityInput.min="0";
quantityInput.max="1000";

 	 var tdQuantity=document.createElement('td');
tdQuantity.appendChild(quantityInput);
			trElement.appendChild(tdQuantity);
		
		
		 var tdTotalPrice=document.createElement('td');
		var totalPriceParagraph=document.createElement('p');
		totalPriceParagraph.innerHTML=productPriceElement;
	tdTotalPrice.appendChild(totalPriceParagraph);
	trElement.appendChild(tdTotalPrice);
	
	var tableElement=document.getElementById('shopping_card');
		tableElement.appendChild(trElement);
		
}


function changeQuantity(event){
	
	var quantityInput=event.target;
	var quantity= parseInt(quantityInput.value);
	
	
	
	 
	var trElement=quantityInput.parentElement.parentElement;
	var price=parseFloat(trElement.childNodes[2].childNodes[0].innerHTML);
	var totalPrice=price*quantity;
	 trElement.childNodes[4].childNodes[0].innerHTML=""+totalPrice+" AZN";
	 
	
	
}


