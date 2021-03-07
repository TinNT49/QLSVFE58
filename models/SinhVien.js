// Lưu ý tên lớp đối tượng class (prototype) phải viết hoa chữ cái đầu tiên (nguyên tắc)
var SinhVien = function (maSV, tenSV, loaiSV, dToan, dLy, dHoa, dRenLuyen, email, soDT) {
  this.maSinhVien = maSV;
  this.tenSinhVien = tenSV;
  this.loaiSinhVien = loaiSV;
  this.diemToan = dToan;
  this.diemLy = dLy;
  this.diemHoa = dHoa;
  this.diemRenLuyen = dRenLuyen;
  this.email = email;
  this.soDienThoai = soDT;
  this.tinhDiemTrungBinh = function () {
    var diemTrungBinh = (Number(this.diemToan) + Number(this.diemHoa) + Number(this.diemLy)) / 3;
    return diemTrungBinh;
  }

  this.xepLoaiSinhVien = function () {
    var xepLoaiSV = '';
    var diemTb = this.tinhDiemTrungBinh();

    if (this.diemRenLuyen < 5 || diemTb < 5) {
      xepLoaiSV = 'Yếu';
    }
    else if (diemTb >= 5 && diemTb < 6) {
      xepLoaiSV = 'Trung bình';
    }
    else if (diemTb >= 6 && diemTb < 7) {
      xepLoaiSV = 'Trung bình khá';
    }
    else if (diemTb >= 7 && diemTb < 8) {
      xepLoaiSV = 'Khá';
    }
    else if (diemTb >= 8 && diemTb < 9) {
      xepLoaiSV = 'Giỏi';
    }
    else if (diemTb >= 9 && diemTb <= 10) {
      xepLoaiSV = 'Xuất sắc';
    }
    else {
      xepLoaiSV = 'Không hợp lệ!';
    }
    return xepLoaiSV;
  }
}