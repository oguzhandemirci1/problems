let arr = [];

for (let a = 2; a<= 100; a++){
    for (let b = 2; b<= 100; b++){
        let sayi = a ** b;
        arr.push(sayi);
    }
}
let set = new Set(arr);
console.log(set);