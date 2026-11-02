function showForm(formName) {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.getElementById(formName).style.display = "block";
    document.getElementById("message").textContent = "";
}

// Khi mở trang, hiển thị form đăng ký
showForm("register");

// Chức năng đăng ký
function register() {
    let name = document.getElementById("name").value.trim();
    let pass = document.getElementById("regPass").value;

    if (name === "" || pass === "") {
        document.getElementById("message").textContent =
            "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    // Lưu tên người dùng và mật khẩu
    localStorage.setItem("name", name);
    localStorage.setItem("pass", pass);

    // Thông báo đăng ký thành công
    alert("Đăng ký thành công!");

    // Điền sẵn tên người dùng vào form đăng nhập
    document.getElementById("loginName").value = name;
    document.getElementById("loginPass").value = "";

    showForm("login");
}

function login() {
    let name = document.getElementById("loginName").value.trim();
    let pass = document.getElementById("loginPass").value;

    let savedName = localStorage.getItem("name");
    let savedPass = localStorage.getItem("pass");

    if (name === "" || pass === "") {
        document.getElementById("message").textContent =
            "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    if (name === savedName && pass === savedPass) {
        alert("Đăng nhập thành công!");

        window.location.href = "logo.html";
    } else {
        document.getElementById("message").textContent =
            "Tên người dùng hoặc mật khẩu không chính xác!";
    }
}