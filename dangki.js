// Hàm điều khiển menu cho thiết bị di động
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show"); // Chú ý: Đảm bảo CSS của bạn có class 'show' để hiển thị menu
}

// Xử lý form Đăng ký Tour
const registrationForm = document.getElementById('registration-form');
if (registrationForm) { // Kiểm tra để đảm bảo form tồn tại trước khi thêm sự kiện
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn tải lại trang
        alert('Đăng ký thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.'); // Hiển thị thông báo
        registrationForm.reset(); // Xóa dữ liệu trong form
    });
}

// Xử lý form Đánh giá
const reviewForm = document.getElementById('review-form');
if (reviewForm) { // Kiểm tra để đảm bảo form tồn tại trước khi thêm sự kiện
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn tải lại trang
        alert('Cảm ơn bạn đã gửi đánh giá của mình!'); // Hiển thị thông báo
        reviewForm.reset(); // Xóa dữ liệu trong form
    });
}

// Xử lý form Liên hệ
const contactForm = document.getElementById('contact-form');
if (contactForm) { // Kiểm tra để đảm bảo form tồn tại trước khi thêm sự kiện
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn tải lại trang
        alert('Tin nhắn của bạn đã được gửi. Chúng tôi sẽ phản hồi sớm nhất có thể!'); // Hiển thị thông báo
        contactForm.reset(); // Xóa dữ liệu trong form
    });
}

// Xử lý form Tìm kiếm (mã bạn vừa cung cấp)
const searchForm = document.getElementById("search-form");
if (searchForm) { // Kiểm tra để đảm bảo form tồn tại trước khi thêm sự kiện
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Ngăn tải lại trang
        const keyword = document.getElementById("search-input").value;
        alert("Từ khóa bạn tìm là: " + keyword); // Hiển thị từ khóa đã tìm
        // Ở đây, bạn có thể thêm mã để thực hiện tìm kiếm thực tế,
        // ví dụ chuyển hướng đến trang kết quả tìm kiếm.
    });
}