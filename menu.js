document.addEventListener("DOMContentLoaded", function () {
  const nutBia = document.querySelector('.xemthem');
  if (nutBia) {
    nutBia.addEventListener('click', function (e) {
      e.preventDefault();
      const phanGioiThieu = document.querySelector('#gioithieu');
      
      if (phanGioiThieu) {
        phanGioiThieu.scrollIntoView({ behavior: 'smooth' });
        phanGioiThieu.style.transition = 'all 0.5s ease';
        phanGioiThieu.style.boxShadow = '0 0 30px rgba(197, 157, 95, 0.5)';
        setTimeout(() => {
          phanGioiThieu.style.boxShadow = 'none';
        }, 1500);
      }
    });
  }

  const danhSachNutKhamPha = document.querySelectorAll('.nut-kham-pha');
  
  danhSachNutKhamPha.forEach((nut, index) => {
    nut.addEventListener('click', function (e) {
      e.preventDefault();
      
      let noiDungModal = '';

      if (index === 0) {
        noiDungModal = `
          <div class="noi-dung-hop-thoai san-pham-popup">
  <span class="nut-dong-hop-thoai">&times;</span>
  <div class="luoi-popup">
    <div class="khung-anh-popup">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrGbqswQY3dsm0K3uRLuRhhW9sfDYeFxBhQusrZ9gfqHJoYgJgzLe4r8&s=10" alt="Túi đeo vai Prada Symbole" class="anh-popup-chinh">
    </div>
    <div class="thong-tin-popup">
      <span class="nhan-nho">BỘ SƯU TẬP SANG TRỌNG</span>
      <h3>Túi Đeo Vai Prada Symbole Da Bóng</h3>
      <div class="danh-gia">★★★★★ <span>(4.9/5 - 28 đánh giá)</span></div>
      <div class="the-gia"><span class="gia-cu">$2,800</span> $2,450</div>
      <p class="mo-ta-popup">Chiếc túi xách biểu tượng kết hợp chất liệu da bóng cao cấp cùng logo tam giác đặc trưng và dây xích kim loại màu bạc.</p>
      <ul class="thong-so-popup">
        <li><strong>Kích thước:</strong> 22 x 15 x 6 cm</li>
        <li><strong>Màu sắc:</strong> Đen bóng</li>
        <li><strong>Phụ kiện:</strong> Kim loại mạ bạc</li>
      </ul>
    </div>
  </div>
</div>
`;
} 

else {
noiDungModal = `
<div class="noi-dung-hop-thoai san-pham-popup">
  <span class="nut-dong-hop-thoai">&times;</span>
  <div class="luoi-popup">
    <div class="khung-anh-popup">
      <img src="https://tuixachsieucap.com.vn/wp-content/uploads/2025/09/tui-xach-prada-softlux-mini-mau-trang-sieu-cap-510x680.jpg" alt="Túi cầm tay Prada Buckle da mềm" class="anh-popup-chinh">
    </div>
    <div class="thong-tin-popup">
      <span class="nhan-nho">BỘ SƯU TẬP THANH LỊCH</span>
      <h3>Túi Cầm Tay Prada Buckle Da Mềm</h3>
      <div class="danh-gia">★★★★★ <span>(5.0/5 - 42 đánh giá)</span></div>
      <div class="the-gia"><span class="gia-cu">$3,200</span> $2,890</div>
      <p class="mo-ta-popup">Chế tác từ da bê mềm mại với chi tiết khóa thắt lưng tinh tế và hai ngăn chứa rộng rãi.</p>
      <ul class="thong-so-popup">
        <li><strong>Kích thước:</strong> 30 x 18 x 10 cm</li>
        <li><strong>Màu sắc:</strong> Trắng tinh khôi</li>
        <li><strong>Phụ kiện:</strong> Kim loại mạ vàng</li>
      </ul>
    </div>
  </div>
</div>
`;
      }

      const cuaSo = document.createElement('div');
      cuaSo.className = 'hop-thoai-tuy-chinh';
      cuaSo.innerHTML = noiDungModal;
      document.body.appendChild(cuaSo);

      cuaSo.querySelector('.nut-dong-hop-thoai').onclick = () => cuaSo.remove();
      cuaSo.onclick = (event) => { if (event.target === cuaSo) cuaSo.remove(); };
    });
  });

  const nutUuDai = document.querySelector('.nut-uu-dai');
  if (nutUuDai) {
    nutUuDai.addEventListener('click', function (e) {
      e.preventDefault();
      
      const cuaSoUuDai = document.createElement('div');
      cuaSoUuDai.className = 'hop-thoai-tuy-chinh';
      cuaSoUuDai.innerHTML = `
        <div class="noi-dung-hop-thoai hop-thoai-uu-dai">
          <span class="nut-dong-hop-thoai">&times;</span>
          <span class="nhan-nho-trang" style="background:#ee5943; border:none; color:#fff;">MÃ VIP ĐẶC BIỆT</span>
          <h3 style="margin-top:10px;">Nhận Mã Giảm Giá 30%</h3>
          <p>Ưu đãi hết hạn sau: <strong id="dong-ho-dem-nguoc" style="color:#ee5943;">05:00</strong></p>
          <input type="email" id="email-nguoi-dung" placeholder="Nhập địa chỉ email của bạn..." class="o-nhap-hop-thoai">
          <button id="nut-nhan-ma" class="nut-mua-ngay" style="background:#c59d5f; margin-top:10px;">NHẬN MÃ NGAY</button>
        </div>
      `;
      document.body.appendChild(cuaSoUuDai);
      let thoiGian = 300;
      const dongHo = cuaSoUuDai.querySelector('#dong-ho-dem-nguoc');
      
      const boDem = setInterval(() => {
        let phut = Math.floor(thoiGian / 60);
        let giay = thoiGian % 60;
        
        dongHo.textContent = `${phut < 10 ? '0' : ''}${phut}:${giay < 10 ? '0' : ''}${giay}`;
        
        if (--thoiGian < 0) {
          clearInterval(boDem);
          dongHo.textContent = "HẾT HẠN";
        }
      }, 1000);

      cuaSoUuDai.querySelector('#nut-nhan-ma').onclick = () => {
        const oNhapEmail = cuaSoUuDai.querySelector('#email-nguoi-dung').value;
        if (oNhapEmail.trim() !== "") {
          cuaSoUuDai.querySelector('.hop-thoai-uu-dai').innerHTML = `
            <span class="nut-dong-hop-thoai">&times;</span>
            <div style="font-size:40px;">🎉</div>
            <h3>XIN CHÚC MỪNG!</h3>
            <p>Mã giảm giá 30% <strong>[ LUXURY30 ]</strong> đã được gửi đến <u>${oNhapEmail}</u></p>
          `;
          cuaSoUuDai.querySelector('.nut-dong-hop-thoai').onclick = () => cuaSoUuDai.remove();
        } else {
          alert("Vui lòng nhập địa chỉ email hợp lệ!");
        }
      };

      cuaSoUuDai.querySelector('.nut-dong-hop-thoai').onclick = () => { clearInterval(boDem); cuaSoUuDai.remove(); };
    });
  }
});