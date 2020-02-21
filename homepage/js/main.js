setTimeout(function (){
	document.querySelector('html').classList.remove('no-transition');
},100)
//  viết 
// var listProducts= Array.from(document.querySelectorAll('.product'));
// function setHeightProduct(){
// 	listProducts.forEach(function (product) {
// 		product.querySelector('.product-image').style.height = product.offsetWidth + 'px';
// 	})
// }
// setHeightProduct();
// window.addEventListener('resize',function(e){
// 	console.log("resize run");
// 	setHeightProduct();
// })