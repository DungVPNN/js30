let product = [
    {
        id: 1,
        name: "Men Men",
        price: 20000,
        quantity: 20,
        category: "mon an dan toc mong",
    },
    {
        id: 2,
        name: "Mut",
        price: 80000,
        quantity: 21,
        category: "mon an dan toc kinh",
    },
    {
        id: 3,
        name: "Com lam",
        price: 20000,
        quantity: 20,
        category: "mon an dan toc mong",
    },
    {
        id: 4,
        name: "Xoai say deo",
        price: 20000,
        quantity: 20,
        category: "mon an dan toc kinh",
    },
];

let cart = [];

while (true) {
    let choice = +prompt(`
        1. Hiển thị các sản phẩm theo danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập ID sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
    `);

    switch (choice) {
        case 1:
            showCategory();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            sortProduct();
            break;
        case 4:
            totalPrice();
            break;
        case 5:
            alert("Thoát");
            break;
        default:
            alert("Lựa chọn không phù hợp");
    }
    if (choice === 5) {
        break;
    }
}

function showCategory() {
    alert(`
        1. mon an dan toc kinh
        2. mon an dan toc mong
    `);

    let categoryChoice = +prompt("Nhập số để chọn danh mục:");

    let selectedCategory = categoryChoice === 1 ? "mon an dan toc kinh" : categoryChoice === 2 ? "mon an dan toc mong" : null;

    if (selectedCategory) {
        let filteredProducts = product.filter(item => item.category === selectedCategory);

        if (filteredProducts.length > 0) {
            console.log(`Danh mục: ${selectedCategory}`);
            console.table(filteredProducts);
        } else {
            alert("Không có sản phẩm trong danh mục này.");
        }
    } else {
        alert("Lựa chọn không hợp lệ!");
    }
};

function addToCart() {
    let productId = +prompt("Nhập ID sản phẩm:");

    let productIndex = product.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        let quantity = +prompt("Nhập số lượng:");

        if (quantity > product[productIndex].quantity) {
            console.log(`Sản phẩm không đủ hàng, còn lại ${product[productIndex].quantity}`);
        } else {
            product[productIndex].quantity -= quantity;

            let index = cart.findIndex(item => item.id === productId);
            if (index === -1) {
                cart.push({
                    id: productId,
                    name: product[productIndex].name,
                    price: product[productIndex].price,
                    quantity: quantity,
                });
            } else {
                cart[index].quantity += quantity;
            }
            alert("Sản phẩm đã được thêm vào giỏ hàng.");
        }
    } else {
        alert("Sản phẩm không tồn tại!");
    }
};

function sortProduct(){
    let sortChoice = +prompt(`
        Chọn cách sắp xếp:
        1. Giá tăng dần
        2. Giá giảm dần
    `);
    let sortedProducts;
    if (sortChoice === 1) {
        sortedProducts = [...product].sort((a, b) => a.price - b.price);
    } else if (sortChoice === 2) {
        sortedProducts = [...product].sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }
    console.log("Danh sách sản phẩm sau khi sắp xếp:");
    console.table(sortedProducts);
};

function totalPrice (){
    let sum = 0;
    cart.forEach(item => {
        sum+= item.price * item.quantity;
    });
    alert(`Tổng tiền thanh toán: ${sum} VND`);
}