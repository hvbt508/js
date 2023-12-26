// /*function kiemTraSoAmDuong(n){
//     if(n > 0) {
//         console.log('so duong')
//     }
//     else if (n<0) {
//         console.log('so am')
//     }
//     else {
//         console.log('so khong am khong duong')
//     }
// }
// kiemTraSoAmDuong(10)*/


// // function kiemTraSoChanLe(n){
// //     if (n % 2 == 0)
// //     console.log('So chan')
// // else{
// //     console.log('so le')
// // }
// // }
// // kiemTraSoChanLe(13)

// // function timNamNhuan(n){
// //     if ((0 === n % 4 && 0 != n % 100) || 0 === n % 400 ) {
// //         console.log('nam nhuan')
// //     }
// //     else{
// //         console.log('nam khong nhuan')
// //     }
// // }
// // timNamNhuan(2023)

// /*let a = (3)
// let b = (3)
// let c = (3)
// function timSoLonNhat (a,b,c) {
//     let max = a
//     if ( b > max){
//         max = c
//     }
//     if ( c > max) {
//         max = c
//     }
//     return max 
// }
// let ketQua = timSoLonNhat(4,5,6)
// console.log('ket qua: ',ketQua)*/

// Viết hàm kiểu tra một kí tự là nguyên âm hay phụ âm
// function kiemTraNguyenAm (c) {
//     switch(c){
//         case 'A': {
//             break
//         }
//         case  {
//             break
//         }
//         case {
//             break
//         }
//         case {
//             break
//         }
//         case {
//             break
//         }
//         case {
//             break
//         }
//     }
// }

// let a = 4
// let b = 2
// let c = 6


// function timNghiem(a, b, c) {
//     if (0 === a && 0 === b ){
//         console.log('phuong trinh vo nghiem')
//         return;
//     }
//     if (0 === a && 0 != b){
//         console.log('phuong trinh 1 nghiem: ', -(c/b))
//         return;
//     }
//     if (0 > b*b-4*a*c ){
//         console.log('phuong trinh vo nghiem')
//         return;
//     }
//     else if (0 < b*b-4*a*c) {
//         console.log('phuong trinh co nghiem 1 ', ( - b - (Math.sqrt( b*b-4*a*c))/ (2/a)))
//         console.log('phuong trinh co nghiem 2', ( - b + (Math.sqrt( b*b-4*a*c))/ (2/a) ))
//         return;
//     }
// }
// timNghiem(0, 10, -6)

// if (0 < b*b-4*a*c)


// Viết hàm tính thuế thu nhập và lương NET của nhân viên:
// let a = 1
// function tinhLuong(a){
//     if (8 >= a){
//         console.log('thue 0% ', a)
//         return;
//     }
//     if (8.1 <= a && a <= 15){
//         console.log('thue 15%', a-(15*a/100))
//         return;
//     }
//     if (15.1 <= a && a <= 19.9){
//         console.log('thue 18%', a-(18*a/100))
//         return;
//     }
//     else if (20 < a) {
//         console.log('thue 20%', a-(20*a/100))
//         return;
//     }
// }
// tinhLuong(40)

// (20 < a)

// Viết hàm xếp hạng học lực của học sinh dựa trên điểm kiểm tra, điểm thi giữa kì và điểm thi
// cuối kì:


// let k = 1
// let g = 2
// let c = 3
// function xepHangHocLuc(k, g, c){
//     let tb = (k +(g*2) + (c*3) )/6
//  if (9 <= tb ){
//     console.log('hang A')
//  }
//  else if (9 > tb && 7 <= tb ){
//     console.log('hang B')
//  }
//  else if (7 > tb && 5 <= tb ){
//     console.log('hang C')
//  }
//  else if (5 > tb ){
//     console.log('hang F')
//  }
// }
// xepHangHocLuc(10, 10, 10)
// xepHangHocLuc(10, 5, 8)
// xepHangHocLuc(5, 4, 6)

// Viết hàm tính giá cước điện thoại của một hộ gia đình với các thông tin như sau:
// - Phí thuê bao bắt buộc là 25 ngìn đồng
let a = 25
function phiThueBao(a){
    let b = 25000
    if(0 < a && 50 > a){
        console.log('50 phut dau tien ', 600*a + b)

    }
    if(51 < a && 200 > a){
        console.log('100 phut  ', 50*600 + (a-50)*400 + b )
    }
    else{
        console.log('hon 200 phut ', 50*600 + 150*400 + (a-200)*200 + b)
    }
}
phiThueBao(90)