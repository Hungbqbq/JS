// showcart_pay()
showcart_pay();
var pay = [];
function showcart_pay(){
    var card = sessionStorage.getItem("cart");
    pay = JSON.parse(card);
    // console.log(carts);
    var gh = cart;
    document.getElementById('showcart_pay').innerHTML = gh.render(pay);
}