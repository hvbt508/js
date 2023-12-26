function sumArray(mang){
    let sum = 0;
    for (let i = 0; i < mang.length; i++){
        sum += mang[i];
    }
     
    return sum;
}
 
let mang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
console.log(sumArray(mang));