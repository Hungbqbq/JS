// checkproduct
// function checkproduct(id){
//     for( let i=0; i< products.length; i++ ){
//         if( products[i].id == id ){
//             return i;
//         }
//     }
//     return -1;
// }
//  // sessionStorage.getItem
//   var x = sessionStorage.getItem('id');
//   let check = checkproduct(x);
//   let text = "";
//   if( check == -1 ){
//       alert ('no item');
//   }else{
//     text += products[check].id +"<br>";
//     text += products[check].name +"<br>";
//     document.getElementById('showdetailproduct').innerHTML = text;
//   }

// checkproduct 
function checkproduct(id){
    for( let i=0; i< products.length; i++ ){
        if( products[i].id == id ){
            return i;
        }
    }
    return -1;
}
// sessionStorage.getItem id

var x = sessionStorage.getItem('id');
let check = checkproduct(x);
let text = "";
if( check == -1 ){
    alert ('no item');
}else{
    text += products[check].id +"<br>";
    text += products[check].name +"<br>";
    document.getElementById('showdetailproduct').innerHTML = text;
}