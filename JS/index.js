// function tinhTong(a,b){
//     console.log(a+b);
// }
// function tinhTich(a,b){
//     console.log(a*b);
// }
// function tinhtoan(callback){
//     var a=5;
//     var b=6;
//     callback(a,b);
// }
// tinhtoan(tinhTich);
// tinhtoan(tinhTong);
// // asynchronous bất đồng bộ
// setTimeout(function(){
//     console.log('a');
// },3000)
// console.log('c');
// console.log('b');
var DSND = [];
function layDanhSachNguoiDung() {
    axios({
        method: "GET",
        url: './DanhSachNguoiDung.json'
    })
        .then(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                DSND.push({
                    TaiKhoan: res.data[i].TaiKhoan,
                    Email: res.data[i].Email,
                    HoTen: res.data[i].HoTen,
                })
            }
            TaoBang(DSND);
        })
        .catch(function (ex) {
            console.log(ex.message);
        })
}
function TaoBang(DSND) {
    var content = '';
    for (var i = 0; i < DSND.length; i++) {
        var NguoiDung = DSND[i];
        content += `
        <tr>
            <td>${NguoiDung.TaiKhoan}</td>
            <td>${NguoiDung.Email}</td>
            <td>${NguoiDung.HoTen}</td>
        </tr>
        `
    }
    document.getElementById('tableData').innerHTML = content;
}
document.getElementById('btnGetDSND').addEventListener('click', layDanhSachNguoiDung)
