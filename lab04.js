// // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // for (i = 0; i < arr.length; i++) {
// //     console.log('phan tu thu %s: %s', i,arr[i])
// // }

// // let tong = 0
// // for (let i = 0; i < arr.length; i++){
// //     tong = tong + arr[i]
// // }
// // console.log('Tong cac phan tu trong mang la: ', tong)

// // cau c
// // let max = arr [0]
// // for (let i = 0; i < arr.length; i++){
// //     if (arr[i]> max)
// //     max = arr[i]
// // }

// // console.log('phan tu lon nhat: ', max)

// // let min = arr[0]
// // for (let i = 0; i > arr.length; i++){
// //     if(arr[i]<min)
// //     min = arr[i]
// // }
// // console.log('phan tu nho nhat: ', min)


// // let tong = 0
// // let trunBinhCong = 0
// // for (let i = 0; i < arr.length; i++){
// //     tong = tong + arr[i]
// //     trunBinhCong = tong /2
// // }
// // console.log('Trung binh cong mang: ', trunBinhCong)

// // // cau e
// // // let Arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // let newArr = []
// // // for (let i = Arr.length - 1; i >= 0; i--){
// // //     newArr = newArr.push(Arr[i]);
// // // }
// // // console.log('dao nguoc: ',newArr)
// //  let newArr = []

// // let i = 0
// // while(i <= arr.length - 1){
// //     console.log('phan tu trong mang: ', arr[i])
// //     i = i + 1
// // }
//  // cau b
//  let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// //  let i = 0
// //  let tong = 0 
 
// //  do {
// //     tong = tong + arr[i]
// //     i = i + 1
// //  }while(i < arr.length)
// //  console.log('tong: ', tong)

// let max = arr[0]
// do{
    
// }
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let tanSuatXuatHien = {}

for (let i = 0; i < arr.length; i++){
    let phanTuThuI = arr[i]

    if (tanSuatXuatHien[phanTuThuI] === undefined) {
        tanSuatXuatHien[phanTuThuI] = 1
    }
    else {
        tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
    }
}
console.log(tanSuatXuatHien)

// cau g

// for ( let i = arr.length; i > 0; i--){
//     arr[i] = arr[i - 1]
// }
// arr[0] = 117
// console.log(arr)
// thay vao vị trí thứ 3
// for ( let i = arr.length; i > 3; i--){
//     arr[i] = arr[i - 1]
// }
// arr[3] = 117
// console.log(arr)

//cau h
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > arr[i + 1]){
//         console.log('mang khong tang dan')
//         break
//     }
//        else {
//         console.log('mang tang dan')
//        } 
//     }

// cau i
// for (let i = 0; i < arr.length - 1 ; i++){
//     for ( let j = i + 1; j < arr.length; j++){
//         if (arr[i] < arr[j]){
//             let tam = arr [i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }
// console.log(arr)
 
//cau k
let soChan =[]
let soLe =[]
for ( let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
       soChan[soChan.length] = arr[i]
    }
    else{
        soLe[soLe.length] = arr[i]
    }
}

console.log(soChan)
console.log(soLe)
