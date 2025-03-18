
let book = [
    {
        id: 1,
        name: "sach1",
        price: 20000,
        quantity: 20,
        category: "truyen"
    },
    {
        id: 2,
        name: "sach2",
        price: 80000,
        quantity: 21,
        category: "tieu thuyet"
    },
    {
        id: 3,
        name: "sach3",
        price: 40000,
        quantity: 15,
        category: "truyen"
    },
    {
        id: 4,
        name: "sach4",
        price: 60000,
        quantity: 30,
        category: "tieu thuyet"
    }
];
let store = [];
while (1) {
    let choice = +prompt(
        `
            1. Hiển thị sach theo danh mục
            2. Them sach vao kho
            3. Sắp xếp sản phẩm theo giá
            4. Tim theo ten
            5. Thoát
        `)

    if (choice == 5) {
        break;
    }
    switch (choice) {
        case 1:
            // tạo hàm lọc những sản phẩm theo danh mục
            showBook();
            break;
        case 2:
            // Tạo hàm đi mua hàng
            addToStore();
            console.log(book);
            break;
        case 3:
            sortStore();
            break;
        case 4:
            findBook();
            break;

        default:
            break;
    }
}
// Tạo hàm lọc sản phẩm theo danh mục
function showBook() {
    let choice= +prompt(`
        1. truyen.
        2. tieu thuyet.
        `
    )
    if(choice==1){
        let resutl= book.filter(item=>item.category=="truyen");
        console.log(resutl); 
    }else if(choice==2){
        let resutl= book.filter(item=>item.category=="tieu thuyet");
        console.log(resutl); 
    }else{
        console.log("lựa chọn không hợp lệ!");
    }
}
// function đi mua hàng
function addToStore() {
    let bookId= +prompt("nhập id sản phẩm cần them");
    // kiểm tra xem sản phẩm có trong danh sách hay không?
    let bookIndex= book.findIndex(item=>item.id==bookId);
    if(bookIndex!=-1){
        // có sản phẩm
        // cho người dùng nhập số lượng sản phẩm cần thêm vào kho
        let quantity= +prompt("nhập số lượng");
        if(quantity>book[bookIndex].quantity){
            console.log(`sản phẩm không đủ, còn lại ${book[bookIndex].quantity} sản phẩm`);
        }else{
            // trong trường hợp người dùng nhập số lượng thêm thỏa mãn
            // giảm số lượng trong danh sách
            book[bookIndex].quantity-=quantity;
            // tiến hành thêm vào kho
            // kiểm tra xem sản phẩm đã có trong kho hay chưa
            // Nếu có tăng số lượng, nếu chưa có thì push vào kho
            let index= store.findIndex(item=>item.id==bookId);
            if(index==-1){
                // sản phẩm chưa có trong giỏ hàng
                // store.push({
                //     id:bookId,
                //     name: book[bookIndex].name,
                //     quantity:quantity,
                //     category: book[bookIndex].category
                // })
                store.push({...book[bookIndex],quantity:quantity});
                console.log("thêm sản phẩm thành công",store); 
            }else{
                // sản phẩm đã có trong giỏ hàng
                // cập nhật số lượng
                store[index].quantity+=quantity;
                console.log("thêm sản phẩm thành công",store);
            }
        }
    }else{
        console.log("sản phẩm không có trong cửa hàng!");  
    }
}
function findBook(){
    let searhName = +prompt("Nhap vao").toLowerCase();
    let listBook = book.filter(item => item.name.toLowerCase().includes(searhName));
    if(listBook.length > 0){
        console.log(listBook);
    }
} 
function sortStore(){
    //Tạo lựa chọn để sắp xếp 
    let sortChoice = +prompt(`
        1.Tăng dần
        2.Giảm dần
        `);
    //sort 
    let sortBook;
    if(sortChoice === 1){
        sortBook = [...book].sort((a,b) => a.price - b.price);
    }else{
        sortBook = [...book].sort((a,b) => b.price - a.price);
    }
    console.log("Danh sach sau khi sap xep",sortBook);
}

