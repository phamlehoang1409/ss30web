let shop=[];

let products={
    "Mông": [
        { id: 1, name: "mèn mén", price: 20000, quantity: 20 },
        { id: 3, name: "com lam", price: 40000, quantity: 15 },
      ],
      "Kinh": [
        { id: 2, name: "mứt", price: 80000, quantity: 21 },
        { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30 },
      ],
}

 function hienThi(){
    let hienThiSp=prompt("nhập danh mục(Kinh/Mông)");

    if(!products[hienThiSp]){
        console.log("không có danh mục");
        return;
    }
    console.log(`sản phẩm trong danh mục ${hienThiSp}`);
   products[hienThiSp].forEach((product)=>{
   console.log(`id  :${product.id},name:${product.name},price:${product.price},quantity:${product.quantity}`);
   });
 }
function nhapId(){
    let productId = parseInt(prompt("Nhập ID sản phẩm muốn mua:"));
  let quantity = parseInt(prompt("Nhập số lượng muốn mua:"));
  let found = null;
  let category = null;

  for (let cat in products) {
    let product = products[cat].find((p) => p.id === productId);
    if (product) {
      foundP = product;
      category = cat;
      break;
    }
  }
  if (!found) {
    console.log("Sản phẩm không có ");
    return;
  }
  if (quantity <= 0) {
    console.log("Số lượng không hợp lệ");
    return;
  }
  if (quantity > found.quantity) {
    console.log("Số lượng sản phẩm trong kho không đủ");
    return;
  }

  found.quantity -= quantity;
  cart.push({
    id: found.id,
    name: found.name,
    price: found.price,
    quantity: quantity,
    category: found.category,
  });
  console.log("Mua thành công");
}
function sort(com) {
    let all=[];
    for (let category in products) {
        all = all.concat(products[category]);
      }
      all.sort((a, b) => (com === "asc" ? a.price - b.price : b.price - a.price));
      console.log(`Sản phẩm đã được sắp xếp theo giá ${com === "asc" ? "tăng dần" : "giảm dần"}.`);
      console.log(all);
}
function sum(){
    let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  console.log(`Tổng tiền thanh toán: ${total}`);
}


 function menu(){
    while (true) {
        console.log(`
          ----- CỬA HÀNG CỦA TÔI -----
          1. Hiển thị các sản phẩm theo tên danh mục.
          2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm
          3. Sắp xếp các sản phẩm trong cửa hàng theo giá tăng dần
          4.Sắp xếp các sản phẩm trong cửa hàng theo giá giảm dần
          5. Tính số tiền thanh toán trong giỏ hàng
          6. Thoát
        `);
        let choice = prompt("Nhập lựa chọn của bạn:");
  
        switch (choice) {
          case "1":
           hienThi();
            break;
          case "2":
           nhapId();
            break;
          case "3":
          sort("asc");
            break;
          case "4":
          sort("desc");
            break;
          case "5":
            sum();
           break;
          case "6":
            console.log("thoát");
            return;
            
         
          default:
            console.log("Lựa chọn không hợp lệ");
        }
      }

    };



    menu();
 