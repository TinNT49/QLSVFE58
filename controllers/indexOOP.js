// // Lưu thông tin lớp học
// var ma = 'FE58';
// var ten = 'Front end 58';

// var lopHoc = {
//     ma: 'FE58',
//     ten: 'Front end 58',
//     hienThiThongTin: function () {
//         console.log('Mã lớp học', this.ma);
//         console.log('Tên lớp học', this.ten);
//     },
//     hienThiThem: function () {
//         console.log('Đây là hiển thị thêm');
//     }
// }

// var giangVien = {
//     ma: 'GV001',
//     ten: 'Khải',
//     hienThiThontTin: function () {
//         console.log('Mã giảng viên', this.ma);
//         console.log('Tên giảng viên', this.ten);
//     }
// }

// // Cách truy xuất biến trong đối tượng (thuộc tính)
// // Cách 1 [tendoituong].tenthuoctinh
// console.log(lopHoc.ma);
// console.log(giangVien.ma);
// // Cách 2 [tendoituong]['tenthuoctinh']
// console.log(lopHoc['ma']);
// console.log(giangVien['ma']);

// lopHoc.hienThiThongTin();
// lopHoc['hienThiThongTin']();
// lopHoc.hienThiThem();
// giangVien.hienThiThontTin();
// giangVien['hienThiThontTin']();

var sinhVien = {
    maSinhVien: '',
    tenSinhVien: '',
    loaiSinhVien: '',
    diemToan: 0,
    diemLy: 0,
    diemHoa: 0,
    diemRenLuyen: 0,
    tinhDiemTrungBinh: function () {
        var diemTrungBinh = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return diemTrungBinh;
    },
    xepLoaiSinhVien: function () {
        var xepLoaiSV = '';
        var diemTb = this.tinhDiemTrungBinh();

        if (this.diemRenLuyen < 5 || diemTb < 5) {
            xepLoaiSV = 'Yếu';
        } else if (diemTb >= 5 && diemTb < 6) {
            xepLoaiSV = 'Trung bình';
        } else if (diemTb >= 6 && diemTb < 7) {
            xepLoaiSV = 'Trung bình khá';
        } else if (diemTb >= 7 && diemTb < 8) {
            xepLoaiSV = 'Khá';
        } else if (diemTb >= 8 && diemTb < 9) {
            xepLoaiSV = 'Giỏi';
        } else if (diemTb >= 9 && diemTb <= 10) {
            xepLoaiSV = 'Xuất sắc';
        } else {
            xepLoaiSV = 'Không hợp lệ!';
        }
        return xepLoaiSV;
    }
};

// var sinhVien = new SinhVien();
// sinhVien.maSinhVien = 1;
// sinhVien.tenSinhVien = 'Nguyễn Văn A';
// console.log('sv1', sinhVien);
// var sinhVien2 = new SinhVien();
// sinhVien2.maSinhVien = 2;
// sinhVien2.tenSinhVien = 'Nguyễn Văn Tèo';
// console.log('sv2', sinhVien2);

var arrSinhVien = [];

var validate = new Validation();


document.querySelector('#btnXacNhan').onclick = function () {
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;




    // ============Kiểm tra dữ liệu trước khi thêm vào mảng============

    // 1. Kiểm tra rỗng
    // Cách viết check cho từng item
    // var valid = true;
    // if (sinhVien.maSinhVien === '') {
    //     document.querySelector('#kiemTraRong_MaSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống';
    //     valid = false;
    //     // return;
    // } else {
    //     document.querySelector('#kiemTraRong_MaSinhVien').innerHTML = '';
    // }
    // if (sinhVien.tenSinhVien === '') {
    //     document.querySelector('#kiemTraRong_TenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống';
    //     valid = false;
    //     // return;
    // } else {
    //     document.querySelector('#kiemTraRong_TenSinhVien').innerHTML = '';
    // }

    // if (!valid) {
    //     return
    // }
    // Cách viết sử dụng OOP, gọi method từ file validation để check rỗng
    var valid = true;
    // 1. Kiểm tra rỗng
    valid &= validate.kiemTraRong('#maSinhVien', 'Mã Sinh Viên', '#kiemTraRong_MaSinhVien') & validate.kiemTraRong('#tenSinhVien', 'Tên Sinh Viên', '#kiemTraRong_TenSinhVien');


    var regexCyberlearn = /cyberlearn/ig;
    var value = 'abcd';
    console.log(regexCyberlearn.test(value));

    valid &= validate.kiemTraEmail('#email', 'Email', '#kiemTraRong_Email');

    valid &= validate.kiemTraTatCaSo('#maSinhVien', 'Mã Sinh Viên', '#kiemTraSo_MaSinhVien') & validate.kiemTraTatCaSo('#soDienThoai', 'Số điện thoại', '#kiemTraSo_soDienThoai') & validate.kiemTraTatCaSo('#diemToan', 'Điểm toán', '#kiemTraSo_diemToan') & validate.kiemTraTatCaSo('#diemLy', 'Điểm lý', '#kiemTraSo_diemLy') & validate.kiemTraTatCaSo('#diemHoa', 'Điểm hoá', '#kiemTraSo_diemHoa') & validate.kiemTraTatCaSo('#diemRenLuyen', 'Điểm rèn luyện', '#kiemTraSo_diemRenLuyen');

    valid &= validate.kiemTraDoDai('#maSinhVien', 'Mã Sinh Viên', '#kiemTraDoDai_MaSinhVien', 4, 6) & validate.kiemTraDoDai('#soDienThoai', 'Số điện thoại', '#kiemTraDoDai_soDienThoai', 10, 11);

    valid &= validate.kiemTraGiaTri('#diemToan', 'Điểm toán', '#kiemTraGiaTri_diemToan', 0, 10) & validate.kiemTraGiaTri('#diemLy', 'Điểm lý', '#kiemTraGiaTri_diemLy', 0, 10) & validate.kiemTraGiaTri('#diemHoa', 'Điểm hoá', '#kiemTraGiaTri_diemHoa', 0, 10) & validate.kiemTraGiaTri('#diemRenLuyen', 'Điểm rèn luyện', '#kiemTraGiaTri_diemRenLuyen', 0, 10)

    if (!valid) {
        return;
    }

    // hiển thị dữ liệu trên giao diện
    document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
    document.querySelector('#txtDiemTrungBinh').innerHTML = sinhVien.tinhDiemTrungBinh();
    document.querySelector('#txtXepLoai').innerHTML = sinhVien.xepLoaiSinhVien();

    // Mỗi lần click thêm sinh viên => lấy đối tượng sinh viên lưu vào mảng
    arrSinhVien.push(sinhVien);
    console.log('mangSinhVien', arrSinhVien);
    // Sau khi thêm sinh viên vào mảng => Lấy mảng sinh viên tạo ra chuổi thẻ tr rồi in lên giao diện
    renderTableSinhVien(arrSinhVien);

    // Lưu data vào storage
    luuStorage();

    // // Tạo thẻ js
    // var trSinhVien = document.createElement('tr');
    // trSinhVien.className = 'text-center';

    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sinhVien.maSinhVien;
    // tdMaSinhVien.className = 'text-center';

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;

    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sinhVien.loaiSinhVien;

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTrungBinh();

    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sinhVien.xepLoaiSinhVien();

    // var tdChucNang = document.createElement('td');

    // var buttonXoa = document.createElement('button');
    // buttonXoa.innerHTML = 'Xoá';
    // buttonXoa.className = 'btn btn-danger';
    // // Định nghĩa sự kiện click khi tạo button
    // buttonXoa.onclick = function(event) {
    //     // Biến event là javascript trả ra cho từng sự kiện
    //     let btnXoa = event.target; //event.target chính là thẻ xảy ra sự kiện

    //     // // Từ thẻ con => dom đến thẻ cha
    //     // let tdChucNang = btnXoa.parentNode;
    //     // console.log('tdChucNang', tdChucNang);
    //     // // Vì thẻ tr chứa thẻ td nên cần dom đến thẻ tr để xoá line
    //     // let trSinhVien = tdChucNang.parentNode;
    //     // trSinhVien.remove();
    //     // // alert(sinhVien.tenSinhVien);

    //     // cách khác gọn hơn
    //     let trSV = btnXoa.closest('tr');
    //     trSV.remove();
    // }

    // tdChucNang.appendChild(buttonXoa);

    // // Đưa thẻ td vào thẻ tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdLoaiSinhVien);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(tdChucNang);

    // // Đưa thẻ tr vào tbody
    // document.querySelector('#tblSinhVien').appendChild(trSinhVien);

}

// document.querySelector('#btnXacNhan').onclick =

var suaSinhVien = function (maSinhVien) {

    for (var i = 0; i < arrSinhVien.length; i++) {
        var sv = arrSinhVien[i];

        if (sv.maSinhVien === maSinhVien) {
            // Loai lại lên control phía trên
            document.querySelector('#txtTenSinhVien').value = sv.tenSinhVien;
            document.querySelector('#txtMaSinhVien').value = sv.maSinhVien;
            document.querySelector('#txtLoaiSinhVien').value = sv.loaiSinhVien;
            document.querySelector('#txtDiemTrungBinh').value = sv.diemTrungBinh;
            document.querySelector('#txtXepLoai').value = sv.xepLoaiSV;
        }
    }
}

var renderTableSinhVien = function (arrSV) {
    var content = '';

    for (var i = 0; i < arrSV.length; i++) {
        // Mỗi lần duyện lấy ra 1 đối tượng sinh viên trong mảng
        var sv = arrSV[i];
        var sinhVien = new SinhVien(sv.maSinhVien, sv.tenSinhVien, sv.loaiSinhVien, sv.diemToan, sv.diemLy, sv.diemHoa, sv.email, sv.soDT);

        content += `
        <tr>
          <td>${sinhVien.maSinhVien}</td>
          <td>${sinhVien.tenSinhVien}</td>
          <td>${sinhVien.loaiSinhVien}</td>
          <td>${sinhVien.diemTrungBinh}</td>
          <td>${sinhVien.diemRenLuyen}</td>
          <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button></td>
          <td><button class="btn btn-danger" onclick="suaSinhVien('${sinhVien.maSinhVien}')">Sửa</button></td>
        </tr>
        `;
    }
    // console.log('content', content);
    document.querySelector('#tblSinhVien').innerHTML = content;
}

//Window là tính năng dùng để duyệt hết cửa sổ để xác định thẻ nào render trc khi chạy javascript hay sau khi chạy
window.xoaSinhVien = function (maSV) {

    // Dùng cách set i bằng array length để tránh trg hợp trùng mã sv xoá nhiều sv bị lỗi xoá ko hết data
    for (var i = arrSinhVien.length - 1; i >= 0; i--) {
        var sv = arrSinhVien[i];

        if (sv.maSinhVien === maSV) {
            arrSinhVien.splice(i, 1);
        }
    }

    // Gọi hàm tạo lại bảng
    renderTableSinhVien(arrSinhVien);
}


// var arr = [1, 2, 3];
// var arr = new arr {};
// console.log(typeof arr);
// array in javascript là kiểu object nên khi xoá 1 phần tử ở giữa 
// thì các phần tử dưới sẽ bị dồn lên phía trc nên sẽ bị tình trạng miss các phần tử ở phía trên

var luuStorage = function () {

    //Biến đổi mảng (arrSinhVien) thành chuỗi
    var chuoiArrSinhVien = JSON.stringify(arrSinhVien);

    localStorage.setItem('arrSinhVien', chuoiArrSinhVien);
}

var layDataStorage = function () {

    // Kiểm tra có storate đó hay không
    if (localStorage.getItem('arrSinhVien')) {
        // Dữ liệu lấy ra từ localStorage là dạng chuỗi
        var chuoiArrSinhVien = localStorage.getItem('arrSinhVien');
        // Chuyển chuỗi json về object json
        arrSinhVien = JSON.parse(chuoiArrSinhVien);

        // Gọi hàm render table từ dữ liệu trong storage
        renderTableSinhVien(arrSinhVien);
    }
}

layDataStorage();

document.querySelector('#btnCapNhatSinhVien').onclick = function () {
    // Lấy thông tin người dùng sau khi chỉnh sửa từ giao diện

    var svCapNhat = new SinhVien();
    // Lấy thông tin từ người dùng nhập vào gán vào đối tượng
    svCapNhat.maSinhVien = document.querySelector('#maSinhVien').value;
    svCapNhat.tenSinhVien = document.querySelector('#tenSinhVien').value;
    svCapNhat.diemToan = document.querySelector('#diemToan').value;
    svCapNhat.diemLy = document.querySelector('#diemLy').value;
    svCapNhat.diemHoa = document.querySelector('#diemHoa').value;
    svCapNhat.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    svCapNhat.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    svCapNhat.email = document.querySelector('#email').value;
    svCapNhat.soDienThoai = document.querySelector('#soDienThoai').value;

    // Lấy sinh viên sau khi cập nhật gán cho sv trong mảng
    for (var i = 0; i < arrSinhVien.length - 1; i++) {
        var sv = arrSinhVien[i];
        if (sv.maSinhVien === svCapNhat.maSinhVien) {
            sv.maSinhVien = svCapNhat.maSinhVien;
            sv.tenSinhVien = svCapNhat.tenSinhVien;
            sv.diemToan = svCapNhat.diemToan;
            sv.diemLy = svCapNhat.diemLy;
            sv.diemHoa = svCapNhat.diemHoa;
            sv.diemRenLuyen = svCapNhat.diemRenLuyen;
            sv.email = svCapNhat.email;
            sv.soDienThoai = svCapNhat.soDienThoai;
        }
    }

    // Gọi render lại table
    renderTableSinhVien(arrSinhVien);
    luuStorage();
}