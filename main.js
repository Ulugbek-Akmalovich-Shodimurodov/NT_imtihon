// birinchi algoritm

let suz = 'true';

function suz_topuvchi(a) {
    if (typeof a == 'string') {
        console.log('kiritilgan element turi:', typeof a);
        console.log('kiritilgan element uzunligi: ', a.length);
    } else {
        console.log();
    }
}
suz_topuvchi(suz);

function todo() {

}

// ikkinchi algoritm

let todos = [{ todo: "JS dan ko'proq algoritm yechish " }, "Dastur yaratish", "Ertaroq darsga borish", "Kechga yig;ilishga borish", "Vaqtida dam olish", "LMS ga vazifalarni joylash"];


console.log(todos[0].todo);



// uchinchi algoritm
let a = 3,
    fac = 1;

function number_topuvchi(b) {
    if (typeof b == 'number') {
        for (let i = 1; i <= b; i++) {
            fac = fac * i;

        }
        console.log("kiritilgan songacha bo'lgan sonlar ko'paytmasi: ", fac);
    }
}

number_topuvchi(a);

// to'rtinchi algoritm

function ret(num) {
    if (num > 5 && num < 10) {
        return 'Yes';
    }
    return 'no';
}
console.log(ret(9));

// 5-algoritm

let arr = [234, 2556, 364, 7545, 754, 47, 87, 69, 879, 34];

function arr_toq(a) {
    let urta;
    if (a.length % 2 == 1) {
        urta = Math.floor(a.length / 2);
        console.log(a[urta]);
    } else {
        console.log("massiv uzunligi: ", a.length);
    }
}

console.log(arr_toq(arr));


// 6-algoritm


let soz = 'salom';
let array = soz.split('');

console.log(array.reverse());

// 8-algoritm

let arr1 = [325, 3426, 7356, 576856, ]
let arr2 = [3426, 35, 337, 4, 7353, ]

function arr_qush() {
    let arr__qush
}
// 9-algoritm
let obj = {
    b: "saf",
    c: 25
};
console.log(obj.b);
console.log(obj['c']);
// 10-algoritm
let massiv = [12.3, 334.34, 34.34];

function massiv_yaxlitla(a) {
    let = null;
    for (let i = 0; i < a.length; i++) {
        let yig=a[i];
        let summ;
        sum
        
    }
}
console.log(massiv_yaxlitla(massiv));