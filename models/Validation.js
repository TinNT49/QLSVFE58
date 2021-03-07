// Xây dựng class để kiểm tra dữ liệu

var Validation = function () {
    this.kiemTraRong = function (selector, name, error_selector) {
        if (document.querySelector(selector).value.trim() === '') {
            document.querySelector(error_selector).innerHTML = name + 'Không được bỏ trống !';
            return false;
        }

        document.querySelector(error_selector).innerHTML = '';
        return true;
    }

    this.kiemTraEmail = function (selector, name, error_selector) {
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (regex.test(document.querySelector(selector).value)) {
            document.querySelector(error_selector).innerHTML = '';
            return true;
        }

        document.querySelector(error_selector).innerHTML = name + ' không đúng định dạng ';
    }

    this.kiemTraTatCaSo = function (selector, name, error_selector) {
        var regex = /^[0-9]+$/;

        // Kiểm tra đúng định dạng
        if (regex.test(document.querySelector(selector).value)) {
            document.querySelector(error_selector).innerHTML = '';
            return true;
        }

        document.querySelector(error_selector).innerHTML = name + ' phải là số';
        return false;
    }

    this.kiemTraDoDai = function (selector, name, error_selector, minLength, maxLength) {
        var value = document.querySelector(selector).value;
        if (value.length < minLength || value.length > maxLength) {
            document.querySelector(error_selector).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự`;
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }

    this.kiemTraGiaTri = function (selector, name, error_selector, minValue, maxValue) {
        var value = document.querySelector(selector).value;

        if (Number(value) < minValue || Number(value) > maxValue) {
            document.querySelector(error_selector).innerHTML = `${name} từ ${minValue} đến ${maxValue}`;
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }
}