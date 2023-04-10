// add index img
var index = 1;
changeImage = function(){
    var imgs = ["gau5.jpg", "gau6.jpg", "gau7.webp"];
    document.getElementById("img").src = "./img/"+imgs[index];
    index++;
    if(index == 3){
        index = 0;
    }
}
// setinterval 3000
setInterval(changeImage, 3000);

// getItem
var index = 1;
changeImage = function(){
    var imgs = ["gau5.jpg", "gau6.jpg", "gau7.webp"];
    document.getElementById("img").src = "./img/"+imgs[index];
    index++;
    if(index == 3){
        index = 0;
    }
}