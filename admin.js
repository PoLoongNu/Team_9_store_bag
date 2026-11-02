function register() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let pass = document.getElementById("regPass").value;

    if (name === "" || email === "" || pass === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    alert("Đăng ký tài khoản thành công!");
    window.location.href = "account.html";
}

function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPass").value;
    if (
        email !== "" &&
        email === localStorage.getItem("email") &&
        pass === localStorage.getItem("pass")
    ) {
        alert("Đăng nhập thành công!");
        window.location.href = "logo.html";
    } else {
        alert("Email hoặc mật khẩu không chính xác!");
    }
}

function logout() {
    alert("Bạn đã đăng xuất thành công!");
    window.location.href = "account.html";
}