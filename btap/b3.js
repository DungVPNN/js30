let store = [];
let cart = [];

function main() {
    let running = true;
    while (running) {
        let choice = Number(prompt(`1. Quản lý điện thoại
2. Mua điện thoại
3. Thanh toán
4. Thoát`));
        switch (choice) {
            case 1:
                manageStore();
                break;
            case 2:
                buyPhone();
                break;
            case 3:
                checkout();
                break;
            case 4:
                running = false;
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

function manageStore() {
    let running = true;
    while (running) {
        let choice = Number(prompt(`1. Thêm điện thoại
2. Tìm kiếm điện thoại
3. Sắp xếp theo giá
4. Thống kê số lượng theo hãng
5. Hiển thị tổng giá trị kho
6. Thoát`));
        switch (choice) {
            case 1:
                addPhone();
                break;
            case 2:
                searchPhone();
                break;
            case 3:
                sortPhones();
                break;
            case 4:
                countByCompany();
                break;
            case 5:
                calculateTotalValue();
                break;
            case 6:
                running = false;
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

function addPhone() {
    let id = store.length + 1;
    let name = prompt("Nhập tên điện thoại:").trim();
    let price = Number(prompt("Nhập giá:").trim());
    let quantity = Number(prompt("Nhập số lượng:").trim());
    let company = prompt("Nhập hãng:").trim();
    store.push({ id, name, price, quantity, company });
    alert("Thêm điện thoại thành công!");
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại:").trim().toLowerCase();
    let results = store.filter(phone => phone.name.toLowerCase().includes(keyword) || phone.id == keyword);
    alert(results.length ? JSON.stringify(results) : "Không tìm thấy!");
}

function sortPhones() {
    let order = Number(prompt(`1. Tăng dần
2. Giảm dần`));
    store.sort((a, b) => order === 1 ? a.price - b.price : b.price - a.price);
    alert("Sắp xếp thành công!");
}

function countByCompany() {
    let count = {};
    store.forEach(phone => count[phone.company] = (count[phone.company] || 0) + phone.quantity);
    alert(JSON.stringify(count));
}

function calculateTotalValue() {
    let total = store.reduce((sum, phone) => sum + (phone.price * phone.quantity), 0);
    alert(`Tổng giá trị kho: ${total}`);
}

function buyPhone() {
    let id = Number(prompt("Nhập ID điện thoại cần mua:").trim());
    let phone = store.find(p => p.id === id);
    if (!phone) return alert("Không tìm thấy điện thoại!");
    let quantity = Number(prompt("Nhập số lượng cần mua:").trim());
    if (quantity > phone.quantity) return alert("Số lượng không đủ!");
    phone.quantity -= quantity;
    cart.push({ ...phone, quantity });
    alert("Thêm vào giỏ hàng thành công!");
}

function checkout() {
    if (!cart.length) return alert("Giỏ hàng trống!");
    let total = cart.reduce((sum, phone) => sum + (phone.price * phone.quantity), 0);
    alert(`Thanh toán thành công! Tổng tiền: ${total}`);
    cart = [];
}

main();