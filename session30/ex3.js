let phones = [
    { id: 1, name: "iPhone 13Prm", price: 999, quantity: 10, company: "Apple" },
    { id: 2, name: "Galaxy S22Ultra", price: 899, quantity: 5, company: "Samsung" },
    { id: 3, name: "Redmi Note 30", price: 299, quantity: 15, company: "Xiaomi" },
    { id: 4, name: "Pixel 50", price: 799, quantity: 8, company: "Google" },
    { id: 5, name: "Cannon 5d3", price: 2000000, quantity: 8, company: "Cannon" },
  ];
  
  let cart = [];
  let nextPhoneId = 5;
  
  function hienThi() {
    let company = prompt("Nhập tên hãng điện thoại:");
    let filteredPhones = phones.filter((phone) => phone.company === company);
  
    if (filteredPhones.length === 0) {
      console.log("Không tìm thấy điện thoại của hãng này");
      return;
    }
  
    console.log(`Danh sách điện thoại hãng "${company}":`);
    filteredPhones.forEach((phone) => {
      console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
    });
  }
  
  function themDienThoai() {
    let name = prompt("Nhập tên điện thoại:");
    let price = parseFloat(prompt("Nhập giá điện thoại:"));
    let quantity = parseInt(prompt("Nhập số lượng điện thoại:"));
    let company = prompt("Nhập tên hãng điện thoại:");
  
    if (!name || isNaN(price) || isNaN(quantity) || !company) {
      console.log("Vui lòng nhập đầy đủ thông tin hợp lệ");
      return;
    }
  
    phones.push({ id: nextPhoneId++, name, price, quantity, company });
    console.log("Thêm điện thoại thành công");
  }
  
  function timKiem() {
    let searchTerm = prompt("Nhập tên điện thoại hoặc ID điện thoại cần tìm:");
    let foundPhone = phones.find((phone) => phone.name.toLowerCase() === searchTerm.toLowerCase() || phone.id === parseInt(searchTerm));
  
    if (!foundPhone) {
      console.log("Không tìm thấy điện thoại nào phù hợp");
      return;
    }
  
    console.log("Điện thoại tìm thấy:");
    console.log(`ID: ${foundPhone.id}, Tên: ${foundPhone.name}, Giá: ${foundPhone.price}, Số lượng: ${foundPhone.quantity}, Hãng: ${foundPhone.company}`);
  }
  
  function muaDienthoai() {
    let phoneId = parseInt(prompt("Nhập ID điện thoại cần mua:"));
    let quantity = parseInt(prompt("Nhập số lượng điện thoại cần mua:"));
    let phone = phones.find((phone) => phone.id === phoneId);
  
    if (!phone) {
      console.log("Không tìm thấy điện thoại có ID này.");
      return;
    }
  
    if (quantity <= 0 || quantity > phone.quantity) {
      console.log("Số lượng không hợp lệ hoặc không đủ.");
      return;
    }
  
    phone.quantity -= quantity;
    cart.push({ ...phone, quantity });
    console.log("Mua điện thoại thành công!");
  }
  
  function tinhTien() {
    let total = 0;
    cart.forEach((phone) => {
      total += phone.price * phone.quantity;
    });
  
    console.log(`Thanh toán thành công Tổng tiền: ${total}`);
    cart = [];
  }
  
  function sapXep(order) {
    phones.sort((a, b) => (order === "asc" ? a.price - b.price : b.price - a.price));
    console.log(`Điện thoại đã được sắp xếp theo giá ${order === "asc" ? "tăng dần" : "giảm dần"}.`);
  }
  
  function tongKho() {
    let total = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Tổng giá trị điện thoại trong kho: ${total}`);
  }
  
  function soLuong() {
    let companyCounts = {};
    phones.forEach((phone) => {
      if (companyCounts[phone.company]) {
        companyCounts[phone.company] += phone.quantity;
      } else {
        companyCounts[phone.company] = phone.quantity;
      }
    });
  
    console.log("Tổng số lượng điện thoại theo hãng:");
    for (let company in companyCounts) {
      console.log(`${company} - ${companyCounts[company]}`);
    }
  }
  
  function menu() {
    while (true) {
      console.log(`
        ----- MENU QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI -----
        1. Hiển thị điện thoại theo hãng
        2. Thêm điện thoại mới
        3. Tìm kiếm điện thoại
        4. Mua điện thoại
        5. Thanh toán giỏ hàng
        6. Sắp xếp điện thoại theo giá tăng dần
        7. Sắp xếp điện thoại theo giá giảm dần
        8. Hiển thị tổng giá trị điện thoại trong kho
        9. Hiển thị tổng số lượng điện thoại theo hãng
        10. Thoát
      `);
  
      let choice = prompt("Nhập lựa chọn của bạn:");
  
      switch (choice) {
        case "1":
          hienThi();
          break;
        case "2":
        
        themDienThoai();
          break;
        case "3":
          timKiem();
          break;
        case "4":
          muaDienthoai();
          break;
        case "5":
          tinhTien();
          break;
        case "6":
         sapXep("asc");
          break;
        case "7":
         sapXep("desc");
          break;
        case "8":
          tongKho();
          break;
        case "9":
        soLuong();
          break;
        case "10":
          console.log("Thoát");
          return;
        default:
          console.log("Lựa chọn không hợp lệ");
      }
    }
  }
  
 
  menu();
