let Purchased_Course = [];// lưu các khóa học đã mua
let member = [];// lưu người dùng



function main() {// hàm chính
    let t = true;
    while (t) {
        let options = Number(prompt(`1: Quản lí khóa học lí khóa học.
2: Quản lí người dùng.
3: Thoát.`));
        switch (options) {
            case 1://quản lí khóa học
                CourseManagement();
                break;
            case 2:// quản lí người dùng
                UserManagement();
                break;
            case 3:
                t = false;
                break;
            default:
                alert("Không hợp lệ");
        }
    }
}

main();

function CourseManagement() {//quản lí khóa học_______________________________________-xong
    let t = true;
    while (t) {
        let choice = Menucourse();
        switch (choice) {
            case 1:
                add(Purchased_Course, 1);
                break;
            case 2:
                search(Purchased_Course);
                break;
            case 3:
                deletecourt(Purchased_Course);
                break;
            case 4:
                t = false;
                break;
            case 5:
                viewMenu(Purchased_Course);
                break;
            default:
                break;
        }
    }
}

function Menucourse() {//menu quản lí khóa học
    return Number(prompt(`1.Thêm khóa học.
2.Tìm kiếm khóa học theo tên.
3.Xóa khóa học.
5.xem khóa học đang có.
4.Thoát.`));
}

function UserManagement() {// quản lí người dùng________________________________________chưa xong
    let t = true;
    while (t) {
        let choice = Menuuser();
        switch (choice) {
            case 1:
                add(member, 2);
                break;
            case 2:
                Registercourse();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                t = false;
                break;
            default:
                break;
        }
    }
}

function Menuuser() {// melu quản lí người dùng
    return Number(prompt(`1.Thêm người dùng mới.
2.Đăng ký khóa học.
3.Hủy đăng ký khóa học.
4.Hiển thị danh sách khóa học của một người dùng.
5.Thoát.`));
}

function MyCourse(A) {// thông tin một khóa học
    return {
        id: validate(1, A),
        name: validate(2, A),
        instructor: validate(3, A),
        students: []//danh sách người dùng đăng kí khóa học
    }
}

function Myuser(A) {//thông tin một người dùng
    return {
        id: validate(1, A),
        name: validate(2, A),
        registeredCourses: []
    }
}

function add(A, type) { // 1: thêm khóa học, 2: thêm người dùng
    let n = validate(4, A);
    for (let i = 0; i < n; i++) {
        type === 1 ? A.push(MyCourse(A)) : A.push(Myuser(A));
    }
    alert(`Đã thêm ${n} mục mới vào danh sách!`);
}

function validate(type, A) {
    while (true) {
        switch (type) {
            case 1: // ID tự động tăng
                return A.length === 0 ? 1 : A[A.length - 1].id + 1;

            case 2: // Tên khóa học hoặc tên người dùng
                let name = prompt("Nhập tên:").trim();
                if (!name || name.length === 0) {
                    alert("Tên không hợp lệ!");
                    continue;
                }
                return name;

            case 3: // Tên giảng viên
                let instructor = prompt("Nhập tên giảng viên:").trim();
                if (!instructor || instructor.length === 0) {
                    alert("Tên giảng viên không hợp lệ!");
                    continue;
                }
                return instructor;

            case 4: // Nhập số lượng hợp lệ
                let n = Number(prompt("Nhập số lượng:"));
                if (isNaN(n) || n <= 0) {
                    alert("Số lượng không hợp lệ!");
                    continue;
                }
                return n;

            case 5: // Tìm kiếm ID khóa học có tồn tại không
                let courseId = Number(prompt("Nhập ID khóa học:"));
                if (isNaN(courseId) || courseId <= 0) {
                    alert("ID không hợp lệ!");
                    continue;
                }
                let courseIndex = A.findIndex(course => course.id === courseId);
                if (courseIndex === -1) {
                    alert("Không tìm thấy khóa học!");
                    continue;
                }
                return courseId;

            case 6: // Tìm kiếm ID người dùng có tồn tại không
                let userId = Number(prompt("Nhập ID người dùng:"));
                if (isNaN(userId) || userId <= 0) {
                    alert("ID không hợp lệ!");
                    continue;
                }
                let userIndex = A.findIndex(user => user.id === userId);
                if (userIndex === -1) {
                    alert("Không tìm thấy người dùng!");
                    continue;
                }
                return userId;
            case 7:// kiểm tra tên có tồn tại trong mảng hay không
                let str = prompt("nhập tên").trim();
                if (!str || str.length <= 0) {
                    alert("không hợp lệ");
                    continue;
                }
                let strindex = A.findIndex(A => A.name == name);
                if (strindex == -1) {// không có trong danh sách
                    alert("người dùng đã toonf tại");
                }
                return str;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

function search(A) { // tìm kiếm khóa học
    let name = prompt("Nhập tên cần tìm:").trim().toLowerCase();
    let results = A.filter(a => a.name.toLowerCase().includes(name));

    if (results.length === 0) {
        alert("Không tìm thấy kết quả nào!");
        return;
    }

    let message = `Kết quả tìm kiếm:\n`;
    results.forEach(a => {
        message += `ID: ${a.id} - Tên: ${a.name}\n`;
    });
    alert(message);
}

function deletecourt(A) { // Xóa khóa học theo ID
    let id = Number(prompt("id muoosnt ìm kiếm"));
    let index = A.findIndex(a => a.id === id);

    if (index === -1) {
        alert("Không tìm thấy khóa học với ID này!");
        return;
    }

    A.splice(index, 1); // Xóa phần tử tại vị trí index
    alert(`Đã xóa khóa học có ID: ${id}`);
}

function viewMenu(A) {
    let result = "";
    A.forEach(A => {
        result += `${A.id} - Tên: ${A.name} - Giảng viên: ${A.instructor}\n`;
    });

   alert(result);
}
function Registercourse() {
    let userId = validate(6, member); 
    let courseId = validate(5, Purchased_Course);

    // Tìm người dùng
    let user = member.find(u => u.id === userId);
    // Tìm khóa học
    let course = Purchased_Course.find(c => c.id === courseId);

    // Kiểm tra xem người dùng đã đăng ký khóa học này chưa
    if (user.registeredCourses.includes(courseId)) {
        alert(`Bạn đã đăng ký khóa học này rồi!`);
        return;
    }
    // thêm khóa họ và ds
    user.registeredCourses.push(courseId);
    // thêm ng dùng vào ds
    course.students.push(userId);
    alert(`${user.name} đã đăng ký khóa học "${course.name}" thành công!`);
}

function delRegistercourse(){
    
    let userId = validate(6, member); //ng dùng
    let courseId = validate(5, Purchased_Course);//khóa học

    // Tìm người dùng
    let user = member.find(u => u.id === userId);
    // Tìm khóa học
    let course = Purchased_Course.find(c => c.id === courseId);
    
    // Kiểm tra xem người dùng đã đăng ký khóa học này chưa
    if (!user.registeredCourses.includes(courseId)) {
        alert(`chưa đăng kí khóa học`);
        return;
    }



}