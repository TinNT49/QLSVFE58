// Test có kết nối ajax đc chưa
console.log(axios);

// var objectAjax = {
//     url: './data/arrSinhVien.json', //Đường dẫn đến file chứ dữ liệu hoặc api do backend cung cấp
//     method: 'GET', //Do backend cung cấp
//     responseType: 'json' // kiểu dữ liệu trả về do backend cung cấp
// }

// // Gọi ajax = axios => trả về promise
// var promise = axios(objectAjax);

// // Xử lý khi request thành công
// promise.then(function (result) {
//     console.log(result.data);
//     document.querySelector('#data').innerHTML = result.data[0].tenSV;
// });

// // Xử ký khi request thất bại
// promise.catch(function (err) {
//     console.log(err);
// })

// var onjectAjax = {
//     url: '.data/xmlSinhVien.xml',
//     method: 'GET',
//     response: 'documment'
// }

// var promise = axios(objectAjax);

// promise.then(function (result) {
//     console.log('result', result.data);

//     var sinhVien1 = result.data.querySelector('SINHVIEN').innerHTML;

//     var maSV = result.data.querySelectors('SinhVien').getAtrribute('msSV');
//     console.log('Tên sinh viên', sinhVien1);
//     console.log('mã sinh viên', nmaSV);
// });

// promise.catch(function (err) {
//     console.log(err);
// })

//================GET: Lấy thông tin sinh viên server qua api của backend cung cấp================

var renderTable = function (arrSinhVien) {

    var content = '';

    for (var i = 0; i < arrSinhVien.length; i++) {
        // Mỗi lần duyệt lấy ra 1 đối tượng sinh viên trong mảng
        var sv = arrSinhVien[i];
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

var renderSinhVien = function () {

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //Backend cung cấp đườn dãn api
        method: 'GET', //Backend cung cấp methd
        responseType: 'json' //Backend cung cấp dữ liệu trả về
    });

    //Xử lý thành công
    promise.then(function (result) {
        console.log('result', result.data);
        // hiển thị thông tin lên table
        renderTable(result.data);
    });

    // Xử lý thất bại
    promise.catch(function (error) {
        console.log('2')
    });

    console.log('3')

}

// Gọi hàm thực thi Ajax
renderSinhVien();


//================POST: Thêm sinh viên server qua api của backend cung cấp================

document.querySelector('#btnXacNhan').onclick = function () {

    // Lấy thông tin từ người dùng nhập vào
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log('sinhVien', sinhVien);

    //Gọi api để đưa dữ liệu về server lưu trữ

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien', //api backend cung cấp
        method: 'POST', //method backend cung cấp
        data: sinhVien, //Format data phải đúng với định dạng backend cần
        responseType: 'JSON'
    });

    promise.then(function (result) {
        console.log('xử lý thành công', result.data);
        //Gọi hàm ajax lấy dữ liệu mới nhất từ server về
        renderSinhVien();
    });

    promise.catch(function (error) {
        console.log('xử lý thất bại', error.response.data);
    });

}


//================DELETE: với api của backend cung cấp================

window.xoaSinhVien = function (maSinhVien) {

    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
        method: 'DELETE',
        responseType: 'JSON'
    });

    // Xử lý thành công
    promise.then(function (result) {
        console.log('xử lý thành công', result.data);
        //Gọi hàm ajax lấy dữ liệu mới nhất từ server về
        renderSinhVien();
    });

    // Xử lý thất bại
    promise.catch(function (error) {
        console.log('xử lý thất bại', error.response.data);
    });
}


//================Chỉnh sửa sinh viên================

window.suaSinhVien = function (maSinhVien) {

    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
        method: 'GET'
    }).then(function (result) {
        console.log('result', result.data);

        var sv = result.data;
        // Load lại control phía trên
        document.querySelector('#maSinhVien').value = sv.maSinhVien;
        document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
        document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien;
        document.querySelector('#email').value = sv.email;
        document.querySelector('#diemToan').value = sv.diemToan;
        document.querySelector('#diemLy').value = sv.diemLy;
        document.querySelector('#diemHoa').value = sv.diemHoa;
        document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;

    }).catch(function (error) {
        console.log('xử lý thất bại', error.response.data);
    });

}


//================PUT cập nhật thông tin================

document.querySelector('#btnCapNhatSinhVien').onclick = function () {

    // Lấy thông tin từ người dùng nhập vào
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`,
        method: 'PUT',
        data: sinhVien
    });

    promise.then(function (result) {
        console.log('result', result.data);
        renderSinhVien();
    });

    promise.catch(function (error) {
        console.log('error', error.response.data);
    });

}