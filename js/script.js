let productName = ["product1","product2","product3","product4"]
let productPrice = [100,200,50,300]
function calculateTotal(price){
return (price * 0.14 )+price
}
let answer = document.getElementById('answer')
for(var i=0;i<productName.length;i++){
answer.innerHTML +=`<li><h3>${productName[i]}</h3> <p>the real price: ${productPrice[i]}</p> <p>the price after tax calculation: ${calculateTotal(productPrice[i])}</p></li>`

}