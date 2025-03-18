let smatsPhone = [
    {
      id: 1,
      name: "Redmi note 7",
      price: 3000000,
      quantity: 30,
      company: "Xiaomi",
    },
  ];
  let card = [];
  let choice;
  let menu = `
  1.Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
  2.Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
  3.Tìm kiếm điện thoại theo tên hoặc id
  4.Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
  5.Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
  6.Sắp xếp điện thoại theo giá:
  7.Hiển thị tổng số tiền của các điện thoại trong kho
  8.Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
  9.Thoát chương trình
  Nhập lựa chọn của bạn: 
  `;
  while (choice !== 9) {
    choice = +prompt(menu);
    switch (choice) {
      case 1:
        let inputCompany = prompt("Nhập thể loại bạn muốn in: ");
        let disPlay = smatsPhone.filter(
          (items) =>
            items.company.toLocaleLowerCase() === inputCompany.toLocaleLowerCase()
        );
        if (disPlay.length !== 0) {
          console.table(disPlay);
        } else {
          console.log("Thể loại không tồn tại");
        }
        break;
      case 2:
        let newName = prompt("Nhập tên điện thoại muốn thêm: ");
        let newPrice = +prompt("Nhập giá tiền của điện thoại: ");
        let newQuantity = +prompt("Nhập số lượng điện thoại muốn thêm: ");
        let newCompany = prompt("Nhập hãng điện thoại: ");
        let newsm = {
          id: Math.random(),
          name: newName,
          price: newPrice,
          quantity: newQuantity,
          company: newCompany,
        };
        smatsPhone.push(newsm);
        console.log("Thêm điện thoại thành công");
        break;
      default:
        console.log("Lựa chọn không hợp lệ");
        break;
    }
  }