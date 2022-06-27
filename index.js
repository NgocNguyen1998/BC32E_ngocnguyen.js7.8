var arrNumber = [];
document.getElementById('btnThemSo').onclick = function () {
    // input
    var themSo = +document.getElementById('themSo').value;
    // Xử lý
    arrNumber.push(themSo);
    //   output
    var ketQua = '[' + arrNumber + ']'
    var indexTong = []
    for (var i = 0; i < arrNumber.length; i++) {
        indexTong += i + ','
    }
    document.getElementById('ketQua').innerHTML = ketQua;
    document.getElementById('ketQua1').innerHTML = '[' + indexTong + ']'

    // ------Bài 1: Tính tổng số dương----------

    document.getElementById('btnTinhTong').onclick = function () {
        //    output:
        var ketQua_b1 = 0;
        // xử lý:
        for (var index = 0; index < arrNumber.length; index++) {
            if (arrNumber[index] >= 0) {
                ketQua_b1 += arrNumber[index];
            }
        }
        document.getElementById('ketQua_b1').innerHTML = ketQua_b1;
    }

    // ------Bài 2: Đếm số dương----------

    document.getElementById('btnDemSo').onclick = function () {
        // output: 
        var dem = 0;
        for (var index = 0; index < arrNumber.length; index++) {
            if (arrNumber[index] > 0) {
                dem += 1
            }
        }
        document.getElementById('ketQua_b2').innerHTML = dem;
    }

    // ------Bài 3: Tìm số nhỏ nhất----------
    document.getElementById('btnTimSoNhoNhat').onclick = function () {
        var min = arrNumber[0];
        for (var index = 1; index < arrNumber.length; index++) {
            if (min > arrNumber[index]) {
                min = arrNumber[index]
            }
            document.getElementById('ketQua_b3').innerHTML = min;
        }
    }
    // ------Bài 4: Tìm số dương nhỏ nhất----------
    document.getElementById('btnTimSoDuongNhoNhat').onclick = function () {
        var ketQua = 'Không tìm thấy số dương';
        var minIndex = 0;
        for (var index = 0; index < arrNumber.length; index++) {
            if (arrNumber[index] > 0) {
                ketQua = arrNumber[index]
                minIndex = index
                break;
            }
        }
        if (ketQua !== 'Không tìm thấy số dương') {
            var tmp = 0;
            for (var index = minIndex + 1; index < arrNumber.length; index++) {
                tmp = arrNumber[index]
                if (tmp > 0 && tmp < ketQua) {
                    ketQua = tmp
                }
            }
        }
        document.getElementById('ketQua_b4').innerHTML = ketQua;

    }

    // ------Bài 5: Tìm số số chẵn cuối cùng----------
    document.getElementById('btnSoChan').onclick = function () {
        var ketQua = 'Không có số chẵn';
        for (var index = arrNumber.length - 1; 0 <= index; index--) {
            if (arrNumber[index] % 2 === 0) {
                ketQua = arrNumber[index];
                break;
            }
        }
        document.getElementById('ketQua_b5').innerHTML = ketQua;
    }
    // ------Bài 6: Đổi chỗ----------
    document.getElementById('btnDoiCho').onclick = function () {
        var nhapViTri1 = +document.getElementById('nhapViTri1').value;
        var nhapViTri2 = +document.getElementById('nhapViTri2').value;
        var dieukien = (nhapViTri1 >= 0) && (nhapViTri2 >= 0) && (Number.isInteger(nhapViTri1)) && (Number.isInteger(nhapViTri2)) && (nhapViTri1 < arrNumber.length) && (nhapViTri2 < arrNumber.length)

        if (dieukien) {
            // var tmp =  arrNumber[nhapViTri1]
            // arrNumber[nhapViTri1] = arrNumber[nhapViTri2]
            // arrNumber[nhapViTri2] = tmp
            arrNumber[nhapViTri1] = arrNumber[nhapViTri1] + arrNumber[nhapViTri2]
            arrNumber[nhapViTri2] = arrNumber[nhapViTri1] - arrNumber[nhapViTri2]
            arrNumber[nhapViTri1] = arrNumber[nhapViTri1] - arrNumber[nhapViTri2]
            ketQua = arrNumber;
        } else {
            ketQua = 'Không tìm thấy vị trí'
        }
        document.getElementById('ketQua_b6').innerHTML = 'Mảng sau khi đổi: ' + ketQua;
    }
    // ------Bài 7: Xếp tăng dần----------
    document.getElementById('btnSapXep').onclick = function () {
        // arrNumber.sort(function timSo(a, b) {return a - b })
        ketQua = arrNumber;
        // document.getElementById('ketQua_b7').innerHTML = ketQua
        for (var index = 0; index < arrNumber.length - 1; index++) {
            for (var iSo = 0; iSo < arrNumber.length - 1 - index; iSo++) {
                if (arrNumber[iSo] > arrNumber[iSo + 1]) {
                    var tmp = arrNumber[iSo]
                    arrNumber[iSo] = arrNumber[iSo + 1]
                    arrNumber[iSo + 1] = tmp
                    ketQua = arrNumber;
                }
            }
        }
        document.getElementById('ketQua_b7').innerHTML = 'Mảng sau khi sắp xếp: ' + ketQua;
    }

    // ------Bài 8: Tìm số nguyên tố đầu tiên----------
    document.getElementById('btnTimSoNguyen').onclick = function () {
        var ketQua8 = 'Không có số nguyên tố';
        var i = 0;
        while (i < arrNumber.length) {
            var kiemTra = kiemTraSoNT(arrNumber[i])
            i++;
            ketQua8 = arrNumber[i]
            if (kiemTra == true) {
                ketQua8 = arrNumber[i - 1]
                break;
            } else if (kiemTra == false) {
                ketQua8 = 'Không có số nguyên tố'
            }
        }
        document.getElementById('ketQua_b8').innerHTML = ketQua8;
    }
}
// ------Bài 9: Đếm số nguyên----------
var arrNumber1 = [];
document.getElementById('btnThemSo_b9').onclick = function () {
    var nhapSo_9 = +document.getElementById('nhapSo_9').value;
    arrNumber1.push(nhapSo_9);
    var ketQua_b91 = arrNumber1;
    document.getElementById('ketQua_b91').innerHTML = ketQua_b91;
    document.getElementById('btnDemSoNguyen').onclick = function () {
        var demSo = 0;
        for (var index = 0; index < arrNumber1.length; index++) {
            if (Number.isInteger(arrNumber1[index])) {
                demSo += 1
            }
        }
        document.getElementById('ketQua_b92').innerHTML = demSo;
    }
}
// ------Bài 10: So sánh số lượng số dương và số âm----------
document.getElementById('btnSoSanh').onclick = function () {
    var demSoDuong = 0;
    var demSoAm = 0;
    var ketQuaSoSanh = '';
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            demSoDuong += 1

        } else if (arrNumber[index] < 0) {
            demSoAm += 1
        }

    }
    if (demSoDuong - demSoAm > 0) {
        ketQuaSoSanh = 'Số dương > Số âm'
    } else if (demSoDuong - demSoAm == 0) {
        ketQuaSoSanh = 'Số dương = Số âm'
    } else if (demSoDuong - demSoAm < 0) {
        ketQuaSoSanh = 'Số dương < Số âm'
    }
    document.getElementById('ketQua_b10').innerHTML = ketQuaSoSanh;
}

function kiemTraSoNT(number) {
    var check = true;
    if (number < 2) {
        check = false
    } else if (number >= 2) {
        for (var soHang1 = 2; soHang1 <= Math.sqrt(number); soHang1++) {
            if (number % soHang1 === 0) {
                check = false;
                break;
            }
        }
    }

    return check;
}
