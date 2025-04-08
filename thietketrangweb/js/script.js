// Ẩn tất cả form, chỉ hiển thị form được chọn với hiệu ứng trượt
function showForm(formId, direction = "right") {
    const forms = document.querySelectorAll(".form");
    const activeForm = document.querySelector(".form:not(.d-none)");
    const newForm = document.getElementById(formId);

    if (!newForm || newForm === activeForm) return;

    if (activeForm) {
        // Thêm hiệu ứng trượt ra
        activeForm.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");

        // Sau 300ms thì ẩn form cũ, hiện form mới
        setTimeout(() => {
            activeForm.classList.add("d-none");
            activeForm.classList.remove("slide-out-left", "slide-out-right");

            newForm.classList.remove("d-none");
            newForm.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");

            // Gỡ bỏ class animation sau khi hoàn thành để không bị xung đột animation sau này
            setTimeout(() => {
                newForm.classList.remove("slide-in-right", "slide-in-left");
            }, 300);
        }, 300);
    } else {
        // Nếu chưa có form nào hiển thị (lần đầu), hiển thị luôn form mới
        newForm.classList.remove("d-none");
        newForm.classList.add("slide-in-right");
        setTimeout(() => {
            newForm.classList.remove("slide-in-right");
        }, 300);
    }
}

// Hiển thị form Đăng ký
function showRegister() {
    showForm("register-form", "right");
}

// Hiển thị form Đăng nhập
function showLogin() {
    showForm("login-form", "left");
}

// Hiển thị form xác thực sau khi đăng nhập
function showVerification() {
    showForm("verify-form", "right");
}

// Hiển thị form thành công khi đăng ký, sau đó chuyển về đăng nhập
function registerSuccess() {
    showForm("success-form", "right");
    setTimeout(showLogin, 5000);
}

// Sau xác thực, chuyển hướng sang Landing Page
function goToLandingPage() {
    window.location.href = "landingpage.html";
}

// Khi trang load lần đầu
document.addEventListener("DOMContentLoaded", function () {
    showLogin(); // Mặc định mở form đăng nhập
});
