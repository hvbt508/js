// Viết hàm nhập vào số điểm theo thang điểm 100 và in ra xếp loại theo chữ cái với logic sau:
//     - 90 – 100: Hạng A
//     - 80 – 89: Hạng B
//     - 70 – 79: Hạng C
//     - 60 – 69: Hạng D
//     - Dưới 60: Hạng F

// 

// function tinhToan(a, b, phepToan) {
//     switch(phepToan){
//         case '+': {
//             console.log('%s %s %s = %s ', a, phepToan, b, a+b)
//             break;
//         }
//         case '-': {
//             console.log('%s %s %s = %s ', a, phepToan, b, a-b)
//             break;
//         }
//         case '*': {
//             console.log('%s %s %s = %s ', a, phepToan, b, a*b)
//             break;
//         }
//         case '/': {
//             console.log('%s %s %s = %s ', a, phepToan, b, a/b)
//             break;
//         }
//     }
// }
// tinhToan(18, 3, '*')


// function timMua(n){
//     switch(true){
//         case 3 <= n && 5 >= n : {
//             console.log('Mua Xuan')
//             break;
//         }
//         case 6 <= n && 8 >= n : {
//             console.log('Mua He')
//             break;
//         }
//         case 9 <= n && 11 >= n : {
//             console.log('Mua Thu')
//             break
//         }
//             default:{
//                 console.log('Mua Dong')
//                 break
//             } 
//     }
// }
// timMua(15)

// function xacDinhTuoi( theLoai, tuoi){
//     switch(theLoai){
//         case 'HD': {
//             if (16 <= tuoi){
//                 console.log('duoc xem')
//             }
//             else {
//                 console.log('khong duoc xem')
//             }
//             break;
//         }
//         case 'KD': {
//             if (18 <= tuoi){
//                 console.log('duoc xem')
//             }
//             else {
//                 console.log('khong duoc xem')
//             }
//             break;
//         }
//         case 'HK':
//         case 'HH': {
//             console.log('Duoc Xem')
//             break;
//         }

//     }
// }
// xacDinhTuoi('KD', 34)