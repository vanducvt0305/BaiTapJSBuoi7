let getElement = (selector) => {
  return document.querySelector(selector);
};

let inputSo = getElement("#inputSo");
let addSo = getElement("#addSo");
let arrShow = getElement("#arrShow");
let deleteArr = getElement("#deleteArr");
let tinhTongSoDuong = getElement("#tinhTongSoDuong");
let showTong = getElement("#showTong");
let showNoiDungTong = getElement("#showNoiDungTong");

const regex = /^-?\d+(\.\d+)?$/;
let arrSo = [];

let getLocalStorage = () => {
  let data = localStorage.getItem("arrSo");
  if (data) {
    arrSo = JSON.parse(data);
  }
};
getLocalStorage();
let setLocalStorage = () => {
  let data = JSON.stringify(arrSo);
  localStorage.setItem("arrSo", data);
};
arrShow.innerHTML = arrSo;
addSo.onclick = () => {
  if (regex.test(parseFloat(inputSo.value))) {
    arrSo.push(parseFloat(inputSo.value));
    setLocalStorage();
    arrShow.innerHTML = arrSo;
  } else {
    alert("Hãy nhập 1 số tự nhiên hoặc số thực !");
  }
};
// Xoá mảng
deleteArr.onclick = () => {
  localStorage.removeItem("arrSo");
  arrSo = [];
  arrShow.innerHTML = arrSo;
};
// Tính tổng các số dương
tinhTongSoDuong.onclick = () => {
  let tong = 0;
  // console.log(arrSo);
  arrSo.forEach((so) => {
    if (so > 0) {
      tong += so;
      showNoiDungTong.classList.remove("hidden");
      showNoiDungTong.innerHTML = `Tổng các số dương là: ${tong}`;
    }
  });
};
// Đếm các số dương trong mảng

let demCacSoDuong = getElement("#demCacSoDuong");
let showCacSoDuong = getElement("#showCacSoDuong");
demCacSoDuong.onclick = () => {
  let bienDem = 0;
  arrSo.forEach((so) => {
    if (so > 0) {
      bienDem += 1;
    }
    showCacSoDuong.classList.remove("hidden");
    showCacSoDuong.innerHTML = `Trong mảng có tổng cộng ${bienDem} số dương`;
  });
};
// Tìm số nhỏ nhất

let timSoNhoNhat = getElement("#timSoNhoNhat");
let showSoNhoNhat = getElement("#showSoNhoNhat");
timSoNhoNhat.onclick = () => {
  let soNhoNhat;
  for (let i = 0; i < arrSo.length; i++) {
    if (i == 0) {
      soNhoNhat = arrSo[i];
    }
    if (arrSo[i] < soNhoNhat) {
      soNhoNhat = arrSo[i];
    }
    showSoNhoNhat.classList.remove("hidden");
    showSoNhoNhat.innerHTML = `Số nhỏ nhất trong mảng là : ${soNhoNhat}`;
  }
};
// Tìm số dương nhỏ nhất
let timSoDuongNhoNhat = getElement("#timSoDuongNhoNhat");
let showSoDuongNhoNhat = getElement("#showSoDuongNhoNhat");
timSoDuongNhoNhat.onclick = () => {
  let listSoDuong = [];
  let soDuongNhoNhat = 0;
  for (let i = 0; i < arrSo.length; i++) {
    if (arrSo[i] > 0) {
      listSoDuong.push(arrSo[i]);
    }
  }
  if (listSoDuong.length > 0) {
    for (let i = 0; i < listSoDuong.length; i++) {
      if (i == 0) {
        soDuongNhoNhat = listSoDuong[0];
      } else {
        if (listSoDuong[i] < soDuongNhoNhat) {
          soDuongNhoNhat = listSoDuong[i];
        }
      }
    }
  }
  showSoDuongNhoNhat.classList.remove("hidden");
  showSoDuongNhoNhat.innerHTML = soDuongNhoNhat;
};
// Tìm số chẵn cuối cùng trong mảng
let timSoChanCuoiCung = getElement("#timSoChanCuoiCung");
let showSoChanCuoiCung = getElement("#showSoChanCuoiCung");
let listSoChan = [];
let soChanCuoiCung;
timSoChanCuoiCung.onclick = () => {
  for (let i = 0; i < arrSo.length; i++) {
    if (arrSo[i] % 2 == 0 && arrSo[i] > 0) {
      listSoChan.push(arrSo[i]);
    }
  }
  showSoChanCuoiCung.classList.remove("hidden");
  if (listSoChan.length > 0) {
    showSoChanCuoiCung.innerHTML = listSoChan[listSoChan.length - 1];
  } else {
    showSoChanCuoiCung.innerHTML = -1;
  }
};
// Đổi chỗ 2 giá trị trong mảng theo vị trí
let InputViTri1 = getElement("#InputViTri1");
let InputViTri2 = getElement("#InputViTri2");
let doiCho2ViTri = getElement("#doiCho2ViTri");
let showdoiCho2ViTri = getElement("#showdoiCho2ViTri");

doiCho2ViTri.onclick = () => {
  if (parseFloat(InputViTri1.value) > arrSo.length) {
    alert(
      `Vị trí thứ ${parseFloat(InputViTri1.value)} không tồn tại trong mảng`
    );
  }
  if (parseFloat(InputViTri2.value) > arrSo.length) {
    alert(
      `Vị trí thứ ${parseFloat(InputViTri2.value)} không tồn tại trong mảng`
    );
  }
  // Lấy giá trị vị trí thứ nhất
  let giaTri1 = arrSo[parseFloat(InputViTri1.value)];

  // Lấy giá trị vị trí thứ 2
  let giaTri2 = arrSo[parseFloat(InputViTri2.value)];

  for (let i = 0; i < arrSo.length; i++) {
    if (i == parseFloat(InputViTri1.value)) {
      arrSo[parseFloat(InputViTri1.value)] = giaTri2;
    }
    if (i == parseFloat(InputViTri2.value)) {
      arrSo[parseFloat(InputViTri2.value)] = giaTri1;
    }
  }

  showdoiCho2ViTri.classList.remove("hidden");
  showdoiCho2ViTri.innerHTML = `Mảng mới là: [${arrSo}]`;
};

// Sắp xếp theo thứ tự tăng dần
let sapXepTangDan = getElement("#sapXepTangDan");
let showsapXepTangDan = getElement("#showsapXepTangDan");

sapXepTangDan.onclick = () => {
  arrSo.sort((a, b) => a - b);
  showsapXepTangDan.classList.remove("hidden");
  showsapXepTangDan.innerHTML = `Mảng mới sắp xếp tăng dần là [${arrSo}]`;
};
// Tìm số nguyên tố đầu tiên trong mảng
let timSoNguyenTo = getElement("#timSoNguyenTo");
let showSoNguyenTo = getElement("#showSoNguyenTo");
function isPrime(num) {
  if (num <= 1) return false; // Số nhỏ hơn hoặc bằng 1 không phải số nguyên tố
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Kiểm tra đến căn bậc 2 của số
    if (num % i === 0) return false; // Nếu chia hết cho bất kỳ số nào thì không phải số nguyên tố
  }
  return true; // Nếu không chia hết cho bất kỳ số nào, thì là số nguyên tố
}

// Hàm tìm số nguyên tố đầu tiên trong mảng
function findFirstPrime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return arr[i]; // Trả về số nguyên tố đầu tiên
    }
  }
  return null; // Nếu không có số nguyên tố nào trong mảng
}
let soNguyenTo = findFirstPrime(arrSo);
timSoNguyenTo.onclick = () => {
  showSoNguyenTo.classList.remove("hidden");
  if (soNguyenTo) {
    showSoNguyenTo.innerHTML = `Số nguyên tố đầu tiên của mảng là ${soNguyenTo}`;
  } else {
    showSoNguyenTo.innerHTML = -1;
  }
};

// Tìm số nguyên trong mảng có chứa số thực

let timSoNguyen = getElement("#timSoNguyen");
let showSoNguyen = getElement("#showSoNguyen");
let soLuongSoNguyen = 0;
timSoNguyen.onclick = () => {
  for (let i = 0; i < arrSo.length; i++) {
    if (Number.isInteger(arrSo[i])) {
      soLuongSoNguyen++;
    }
  }
  showSoNguyen.classList.remove("hidden");
  showSoNguyen.innerHTML = soLuongSoNguyen;
};
// So sánh số lượng số âm và số dương

let soSanhSo = getElement("#soSanhSo");
let showSoSanhSo = getElement("#showSoSanhSo");
let soAm = 0;
let soDuong = 0;
soSanhSo.onclick = () => {
  // Đếm số âm trong mảng
  arrSo.forEach((so) => {
    if (so < 0) {
      soAm++;
    }
    if (so > 0) {
      soDuong++;
    }
    let result =
      soAm > soDuong ? "Số âm nhiều hơn số dương" : "Số dương nhiều hơn số âm";

    showSoSanhSo.classList.remove("hidden");
    showSoSanhSo.innerHTML = `Có ${soAm} số âm và ${soDuong} số Dương. Vậy ${result}`;
  });
};
