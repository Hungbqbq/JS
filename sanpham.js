  // create array
  var products = [];
  let product = {
    id: "",
    name: "",
    price: "",
    detailproduct:"",
    img: "",
    // initialize function
    init: function(id, name, price,detailproduct, img) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.detailproduct = detailproduct;
      this.img = img;
    },
    // render function
    render: function(products) {
      let text = "";
      for (let i = 0; i < products.length; i++) {
        text += '<div class="product">';
        text += this.one_product(products[i]);
        text += '</div>';
      }
      return text;
    },
    // one_product function
    one_product: function(product) {
          let text ="";
          text += ' <div><img src="./img/'+ product.img +'" > </div>';
          text += ' <p>'+ product.id +''+ product.name +'</p>'
          text += '<p>$<span>'+product.price+'</span></p>';
          text += '<input name="quantity" value="1" min="1" type="number">'
          text += '<lable hidden>'+product.id+'</lable><br>';
          text += '<button onclick="choose(this)">Choose</button><button onclick="detailproduct(this)">Detail</button>';
          return text;
    }
  };

  // create new products
  let sp1 = new product.init("1","Gấu Bông","9999","Diamond","gau3.jpg");
  products.push(sp1);
  let sp2 = new product.init("2","Gấu Bông","9999","Diamond","gau3.jpg");
  products.push(sp2);
  let sp3 = new product.init("3","Gấu Bông","9999","Diamond","gau3.jpg");
  products.push(sp3);

  let sp = product;
  document.getElementById("showproduct").innerHTML = sp.render(products);


  function detailproduct(x) {
      var card = x.parentElement;
      let id = card.children[4].innerText;
      sessionStorage.setItem("id",JSON.stringify(id))
      window.location ='detailproduct.html' 
  }

      //Change product

  // var listpro = document.querySelectorAll('div.product');
  // for (var i = 0; i < listpro.length; i++) {
  //   listpro[i].addEventListener("mouseover",change);
  //   listpro[i].addEventListener("mouseout", trave);
    
  //   function change() {
  //     this.className = "productchange";
  //   }
    
  //   function trave() {
  //     this.className = "product";
  //   }
  // }
  var danhsachsp = document.querySelectorAll('div.product');
  for( let i = 0; i<danhsachsp.length; i++ ){
      danhsachsp[i].addEventListener("mouseover",change);
      danhsachsp[i].addEventListener("mouseout",trave)
      function change(){
          danhsachsp[i] = document.querySelectorAll('div.product');
          danhsachsp[i].className = "productchange";
      }
      function trave(){
          danhsachsp[i] = document.querySelectorAll('div.productchange');
          danhsachsp[i].className = "product";
      }
  }

