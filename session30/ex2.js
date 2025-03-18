let library = [
    {
      id: 1,
      nameBook: "Chúng ta của sau này",
      price: 20000,
      quantity: 20,
      category: "tâm sự",
    },
    {
      id: 2,
      nameBook: "Harry Potter",
      price: 80000,
      quantity: 21,
      category: "Phép thuật",
    },
    {
      id: 3,
      nameBook: "Cuộc sống IT",
      price: 40000,
      quantity: 15,
      category: "tâm sự",
    },
  ];
  let card = [];
  let choice;
  let menu = `
  1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
  2.Thêm sách mới vào kho
  3.Tìm kiếm sách theo tên hoặc id.
  4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
  5.Sắp xếp sách theo giá
  6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
  7.Hiển thị tổng số lượng sách trong kho.
  8.Thoát chương trình.
  
  Nhập lựa chọn của bạn: 
  `;
  while (choice !== 8) {
    choice = +prompt(menu);
    switch (choice) {
      case 1:
        let inputCategory = prompt(
          "Nhập thể loại bạn muốn in(tâm sự/phép thuật): "
        );
        let disPlay = library.filter(
          (items) =>
            items.category.toLocaleLowerCase() ===
            inputCategory.toLocaleLowerCase()
        );
        if (disPlay.length !== 0) {
          console.table(disPlay);
        } else {
          console.log("Thể loại không tồn tại");
        }
        break;
      case 2:
        let newName = prompt("Nhập tên sách muốn thêm: ");
        let newPrice = +prompt("Nhập giá tiền của sách: ");
        let newQuantity = +prompt("Nhập số lượng sách muốn thêm: ");
        let newCategory = prompt("Nhập thể loại của sách (tâm sự/ phép thuật): ");
        let newBook = {
          id: Math.random(),
          nameBook: newName,
          price: newPrice,
          quantity: newQuantity,
          category: newCategory,
        };
        library.push(newBook);
        console.log("Thêm sách thành công");
        break;
      case 3:
        let search = prompt(`
      1. Tìm kiếm theo ID
      2. Tìm kiếm theo tên   
      Nhập lựa chọn cảu bạn: 
          `);
        let checkSearch = false;
        if (search === "1") {
          let searchId = +prompt("Nhập Id muốn tìm kiếm: ");
          for (let value in library) {
            if (library[value].id === searchId) {
              console.table(library[value]);
              checkSearch = true;
              break;
            }
          }
        } else if (search === "2") {
          let searchName = prompt("Nhập tên sách muốn tìm kiếm: ");
          for (let value in library) {
            if (
              library[value].nameBook.toLocaleLowerCase() ===
              searchName.toLocaleLowerCase()
            ) {
              checkSearch = true;
              console.table(library[value]);
              break;
            }
          }
        }
        if (!checkSearch) {
          console.log("không tìm thấy sách");
        }
        break;
      case 4:
        let buyOfId = +prompt("Nhập id bạn muốn mua: ");
        let check = -1;
        for (let value in library) {
          if (library[value].id === buyOfId) {
            check = value;
          }
        }
        if (check === -1) {
          console.log(`Sản phẩm có Id: ${buyOfId} không tồn tại`);
        } else {
          let soLuong = +prompt(
            `Nhập số lượng muốn mua món ${library[check].nameBook} `
          );
          if (soLuong <= library[check].quantity && soLuong !== 0) {
            library[check].quantity -= soLuong;
            let newCard = {
              nameBook: library[check].nameBook,
              price: library[check].price,
              quantity: soLuong,
              category: library[check].category,
            };
            card.push(newCard);
            console.log("Mua thành công");
            console.table(card);
          } else {
            console.log("Số lượng sản phẩm không đủ");
          }
        }
        break;
      case 5:
        let sort = prompt(`
              1. Sắp xếp tăng dần
              2. sắp xếp giảm dần
              Nhập lựa chọn của bạn: 
              `);
        if (sort === "1") {
          library.sort((a, b) => a.price - b.price);
          console.log("Sản phẩm sắp xếp theo giá tăng dần:");
          console.table(library);
        } else if (sort === "2") {
          library.sort((a, b) => b.price - a.price);
          console.log("Sản phẩm sắp xếp theo giá giảm dần:");
          console.table(library);
        } else {
          console.log("Lựa chọn không hợp lệ");
        }
        break;
      case 6:
        let sum = 0;
        for (let key in card) {
          sum = card[key].price * card[key].quantity;
        }
        console.log(`Tổng số tiền trong giỏ hàng: ${sum}`);
        break;
      case 7:
        let count = 0;
        for (let value in library) {
          count += library[value].quantity;
        }
        console.log("Kho còn: ", count, " quyển sách");
        break;
      case 8:
        console.log("Bạn đã thoát");
        break;
      default:
        console.log("Lựa chọn của bạn không hợp lệ");
        break;
    }
  }