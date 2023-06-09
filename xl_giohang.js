document.getElementById('showcart').style.diproductlay = 'none'
function showcart(){
    var x = document.getElementById("showcart");
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
    showproductcart();
}
function checkcart(id){
    for(let i=0; i<carts.length; i++){
        if(carts[i].id == id){
            return i;
        }
    }
    return -1;
}
function choose(x){
    var card = x.parentElement;
    let img= card.children[0].children[0].src;
    let name = card.children[1].innerText;
    let price = card.children[2].children[0].innerText;
    let quantity = card.children[3].value;
    let id = card.children[4].innerText;
    let check = checkcart(id);
    if(check == -1){
        let gh = new cart.init(id, img, name, price, quantity);
        carts.push(gh);
    }
    else {
        let s1= Number(carts[check].quantity) + Number(quantity);
        carts[check].quantity= s1;
    }
    showproductcart();
    // save product sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(carts));
}
function showproductcart(){
    let gh = cart;
    document.getElementById('listproduct').innerHTML = gh.render(carts)
}

function clearproductcart(x){
    let card = x.parentElement.parentElement;
    let id = card.children[0].children[0].innerText;
    let check = checkcart(id);
    carts.splice(check, 1);
    card.remove();
}